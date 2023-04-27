const express = require("express");
const app = express();
var mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
app.use(express.json());

dotenv.config();
const sendEmail = require("./sendEmail");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 3004;
app.use("/src/uploads/", express.static(path.join(__dirname, "/src/uploads/")));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "teronum_db",
});

con.connect(function (err) {
  if (err) console.log("Maglumat bazasyna baglanmady bir nasazlyk bar!", err);
  console.log("Connected to DB");
});

global.db = con;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/src/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true); // Accept the file;
  } else {
    cb(null, false); // Rejects the file
  }
};

// to store the image in the destination folder
const uploads = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: fileFilter,
});

// Add new banner
app.post("/addBanner", uploads.single("bannerImage"), async (req, res) => {
  try {
    const alt_name = req.body.alt_name;
    const fileImage =
      "http://localhost:" + 3004 + "/src/uploads/" + req.file.filename;

    var sql = "INSERT INTO  banners (alt_name, img_url) VALUES (?, ?)";
    db.query(sql, [alt_name, fileImage], (err, result) => {
      if (err) console.log(err);

      res.redirect("http://localhost:3000/admin");
    });
  } catch (error) {
    return console.log(error);
  }
});

// Get All banners
app.get("/getBanners", (req, res) => {
  var sql = "SELECT * FROM banners";
  db.query(sql, function (err, result) {
    if (err) console.log("/getBanners-de error: ", err);

    res.json({
      result,
    });
  });
});

// Delete banner
app.delete("/deleteBanner/:id", (req, res) => {
  const { id } = req.params;
  var sql = "DELETE FROM banners WHERE  id= ? ";
  db.query(sql, [id], function (err, result) {
    if (err) console.log("/deleteBanner/:id - de error:", err);
    console.log("banner ochurildi!");
  });
  res.redirect("http://localhost:3000/admin");
});

// Edit banner
app.put("/editBanner/:id", uploads.single("bannerImage"), async (req, res) => {
  try {
    const { id } = req.params;
    const { alt_name } = req.body;
    const fileImage =
      "http://localhost:" + 3004 + "/src/uploads/" + req.file.filename;
    var sql = "UPDATE banners SET alt_name= ?, img_url= ? WHERE id=?";
    db.query(sql, [alt_name, fileImage, id], (err, result) => {
      if (err) console.log(err);
      console.log("Banner successfully edited!", result);
    });

    res.redirect("http://localhost:3000/admin");
  } catch (error) {
    console.log("/editBanner- app.js 124-sahypada error yuze chykdy!", error);
  }
});

// Add new blog
app.post("/addBlog", uploads.single("blogMainImage"), async (req, res) => {
  try {
    const { blog_title, blog_subtitle, blog_content } = await req.body;
    const blogImage =
      "http://localhost:" + 3004 + "/src/uploads/" + req.file.filename;
    var sql =
      "INSERT INTO  blogs (blog_title, blog_subtitle, blog_content, blog_main_img) VALUES (?, ?, ?, ?)";
    db.query(
      sql,
      [blog_title, blog_subtitle, blog_content, blogImage],
      (err, result) => {
        if (err) console.log("Yalnyshlyk shu tayda chykyarmay ? : ", err);
        // return res.status(201).json({
        //   success: true
        // })
      }
    );
    res.redirect("http://localhost:3000/admin");
  } catch (error) {
    return console.log(error);
  }
});

// Get all blogs
app.get("/getAllBlogs", (req, res) => {
  db.query("SELECT * FROM blogs", (err, result) => {
    if (err) console.log(err);
    res.json({
      result,
    });
  });
});

// Get single blog
app.get("/getSingleBlog/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM blogs WHERE id=?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        result,
      });
    }
  });
});

// Delete blog
app.delete("/deleteBlog/:id", (req, res) => {
  const { id } = req.params;

  var sql = "DELETE FROM blogs WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err)
      console.log(
        `id - sy ${id}  shu bolan blogy ochurjek bolamda yalnyshlyk yuze chykdy! Shona bir seredip goybersene!`,
        err
      );
    console.log(result);
  });
});
  
// Update blog
app.put(
  "/updateBlog/:id",
  uploads.single("esasySurat"),
  async (req, res) => {
    try {
      const { id } = req.params;
      console.log(req.body);
      const blogTitle = await req.body.blogTitle;
      const blogSubTitle = await req.body.blogSubTitle;
      const blogContent = await req.body.content;
      // const blogImage =
      //   "http://localhost:" + 3004 + "/src/uploads/" + req.file.filename;
      // console.log('blogImage = ', blogImage)
      var sql =
        "UPDATE blogs SET blog_title= ?, blog_subtitle = ?, blog_content = ? WHERE id= ? ";
      db.query(
        sql,
        [blogTitle, blogSubTitle, blogContent, id],
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Successfully updated datas!");
          }
        }
      ); 
      // console.log(id, blog_title, blog_subtitle, blog_content);
      // , blog_main_img = ?
      res.redirect("http://localhost:3000/admin");
    } catch (error) {
      console.log(
        "Update blog server/app.js - de nasazlyk yuze chykdy! Ine ol nasazlyk:  ",
        error
      );
    }
  }
);

// Send mail
app.post("/sendMail", (req, res) => {
  const { clientName, phoneNumber, email, content } = req.body;
  sendEmail(clientName, phoneNumber, email, content);
});

app.listen(PORT, () => {
  console.log(`Serwer shu adresde ishlap dur: http://localhost:${PORT}`);
});

module.exports = app;
