import ReactModal from "react-modal";
import { GiCancel } from "react-icons/gi";
import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";

const EditBlog = ({ editBlog, setEditBlog, blogID }) => {
  const editor = useRef(null);

  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubTitle, setBlogSubTitle] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [content, setContent] = useState("");




  const customStyles = {
    content: {
      width: "800px",
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };



  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  const handleUpdateBlog =  (e) => {
    e.preventDefault()
     axios
      .put(
        `http://localhost:3004/updateBlog/${blogID}`,
        {
          blogTitle,
          blogSubTitle,
          content,
          blogImage,
        },
        {
          "Content-Type": "multipart/form-data"
        }
      )
      .then(() => {
        console.log("Successfully posted new blog datas from AddNewBlog.jsx;");
      })
      .catch((error) => {
        console.log(
          "EditBlog.jsx -de maglumatlar post edilende bir nasazlyk yuze chykdy! Ine ol nasazlyk: ",
          error
        );
      });

      
  };

  // Get single blog
  useEffect(() => {
    axios
      .get(`http://localhost:3004/getSingleBlog/${blogID}`)
      .then((res) => {
        setBlogTitle(res.data.result[0].blog_title)
        setBlogSubTitle(res.data.result[0].blog_subtitle)
        setContent(res.data.result[0].blog_content)
      })
      .catch((error) => {
        console.log(error);
      });

    }, [editBlog]);

    console.log(blogTitle);
      console.log(blogSubTitle);
      console.log(content);
      console.log(blogImage);


  return (
    <div>
      <ReactModal
        isOpen={editBlog}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="max-h-[650px] py-10 overflow-y-auto">
          <div className="flex items-center justify-between px-3">
            <p className="text-gray-700 font-semibold text-lg">Edit blog</p>
            <button
              onClick={() => setEditBlog(false)}
              className=" text-gray-600"
            >
              <GiCancel className="inline-block" />
            </button>
          </div>

          <form
            action={`http://localhost:3004/updateBlog/${blogID}`}
            onSubmit={handleUpdateBlog}
            encType="multipart/form-data"
            method="POST"
          >
            <div className="my-3">
              <p className="text-sm text-gray-600 font-semibold">
                Blog title - Edit
              </p>
              <input
                type="text"
                name="blog_title"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                className="w-full border rounded outline-none px-3 text-gray-700 text-sm font-semibold py-1"
              />
            </div>
            <div className="my-3">
              <p className="text-sm text-gray-600 font-semibold">
                Blog subtitle - Edit
              </p>
              <input
                type="text"
                name="blog_subtitle"
                value={blogSubTitle}
                onChange={(e) => setBlogSubTitle(e.target.value)}
                className="w-full border rounded outline-none px-3 text-gray-700 text-sm font-semibold py-1"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">
                Blog main image - Edit
              </p>
              <input
                type="file"
                name="esasySurat"
                onChange={(e) => setBlogImage(e.target.files[0])}
                accept="image/jpeg, image/jpg, image/png"
              />
            </div>
            <div className="my-5">
              <p className="text-sm text-gray-600 font-semibold">
                Blog content - Edit
              </p>

              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                name="blog_content"
              />
            </div>

            <div className="flex items-center justify-end pt-10">
              <button
                className="px-3 py-1 rounded-md transition-colors  bg-primary-color text-white hover:bg-primary-color  hover:bg-opacity-70 font-semibold"
                type="submit"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </ReactModal>
    </div>
  );
};

export default EditBlog;
