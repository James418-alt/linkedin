"use client";
import { addPost } from "@/app/global/slice";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { MdCloseFullscreen, MdPerson } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Post = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [changed, setChanged] = useState(false);
  return (
    <div
      className="w-[98.5vw] absolute backdrop-blur-sm overflow-hidden h-[100vh] flex items-center flex-col"
      style={{
        background: "rgba(59, 59, 59, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0.3px)",
      }}
    >
      <div className="w-[600px] border bg-white rounded-md h-full border-neutral-300 p-4 ">
        <div className=" flex justify-between items-center ">
          <div className="flex gap-2 items-center justify-center  cursor-pointer">
            <MdPerson className="text-[40px] w-[50px] h-[50px] border rounded-full" />
            <div className="leading-tight mt-[-10px]">
              <h1 className="text-[18px] font-semibold">James Gomenti</h1>
              <p className="text-[13px] text-neutral-500">Post to everyone</p>
            </div>
          </div>
          <div
            className="cursor-pointer p-2 mb-4 bg-red-500 text-white rounded-full border"
            onClick={() => {
              setChanged(false);
              dispatch(addPost());
              // {
              //   postToggle ? setStaffToggle(false) : setToggle(false);
              // }
            }}
          >
            <MdCloseFullscreen />
          </div>
        </div>
        <div className="my-5">
          <hr />
        </div>

        <form className="w-full h-full">
          <div className="flex flex-col mb-3">
            <textarea
              placeholder="What's on your mind"
              className=" h-[350px] resize-none p-1 outline-none"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setChanged(true);
              }}
            ></textarea>
          </div>
          {changed ? (
            <button
              className="bg-blue-950 text-white border rounded-md flex w-full justify-center items-center h-[55px] mt-6 disabled:cursor-not-allowed disabled:bg-gray-200"
              type="submit"
            >
              Create Project
            </button>
          ) : (
            <button
              disabled
              className="bg-blue-950 text-white border rounded-md flex w-full justify-center items-center h-[55px] mt-6 disabled:cursor-not-allowed disabled:bg-gray-200"
              type="submit"
            >
              Create Project
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Post;
