import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux/features/postSlice";
import Spinner from "./Spinner";
const CreatePost = () => {
  const [values, setValues] = useState({ title: "", body: "" });
  const [show, setShow] = useState(false);
  const { title, body } = values;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => ({ ...state.app }));
  // handle post function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ values }));
    setValues({ title: "", body: "" });
    setShow(true);
  };

  // show creating Post

  const showCreatePost = () => {
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div class="card">
              <div className="card-body">
                <h5 className="card-title">{post[0].title}</h5>
                <p className="card-text">{post[0].body}</p>
              </div>
            </div>
          </>
        )}
      </>
    );
  };
  return (
    <>
      <form action="">
        <div class="mb-3 mt-4">
          <h2>Create a Post</h2>
          <input
            type="text"
            placeholder="enter Title"
            value={title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            value={body}
            onChange={(e) =>setValues({...values,body: e.target.value})}
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Write here what You Want!</label>
        </div>
        <div className="mt-4">
          <button
            href="#"
            className="btn btn-danger"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            type="submit"
            href="#"
            className="btn btn-success ms-4"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </form>
      <div className="mt-4">{show && <div>{showCreatePost()}</div>}</div>
    </>
  );
};

export default CreatePost;
