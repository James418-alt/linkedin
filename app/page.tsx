"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "./global/slice";
import Header from "./Header";
import Content from "./content";
import PostCompnent from "./PostCompnent";
import Link from "next/link";
import Post from "./Post";
import { MdCamera } from "react-icons/md";
import { CameraIcon } from "lucide-react";

const Page = () => {
  const navs = [
    { id: 0, name: "About", url: "#" },
    { id: 1, name: "Acessibility", url: "#" },
    { id: 2, name: "Help Center", url: "#" },
    { id: 3, name: "Privacy & Terms", url: "#" },
    { id: 4, name: "Ad Choices", url: "#" },
    { id: 5, name: "Advertising", url: "#" },
    { id: 6, name: "Business Services", url: "#" },
    { id: 7, name: "Get the Linkedin App", url: "#" },
    { id: 8, name: "More", url: "#" },
  ];
  const data = useSelector((state: any) => {
    return state.userState;
  });
  const postToggle = useSelector((state: any) => {
    return state.postToggle;
  });

  if (data.status !== 200) {
    redirect("/login");
  } else {
    return (
      <div
        className={postToggle ? "h-[100vh] overflow-x-hidden w-full" : "w-full"}
      >
        {postToggle ? <Post /> : ""}
        <Header />

        <div className="grid w-full grid-cols-1 md:grid-cols-10 gap-5 md:px-20 px-5 pt-20">
          <div className="md:col-span-2 w-full flex flex-col gap-1   ">
            <div className="border pb-4  w-[500px] md:w-full md:h-[370px] bg-white  border-neutral-300 rounded-md">
              <div className="relative">
                <div className="bg-gray-300 h-[80px] "></div>
                <div className="border-2 flex items-center justify-center border-white rounded-full w-[60px] h-[60px] bg-gray-300 top-[50px] md:right-[80px] right-[220px] absolute">
                  <CameraIcon className="text-[20px] text-blue-600" />
                </div>
              </div>
              <div className="flex justify-center items-center mt-10 md:border-b md:pb-4">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[14px] text-neutral-500 font-semibold pb-1">
                    Welcome, Gomenti
                  </h1>
                  <p className="text-[11px]  text-blue-600 font-light">
                    Add a Photo
                  </p>
                </div>
              </div>

              <div className="px-3 py-2 leading-5 border-b pb-2 hidden md:block">
                <h1 className="font-medium text-[10px] text-neutral-500">
                  Profile Viewers
                </h1>
                <h1 className="font-medium text-[10px] text-neutral-500">
                  View all Analytics
                </h1>
              </div>
            </div>

            <div className="border h-[100px] bg-white border-neutral-300 hidden md:block rounded-md">
              2
            </div>
          </div>
          <div className="col-span-5">
            <Content />
            <PostCompnent />
            <PostCompnent />
            <PostCompnent />
            <PostCompnent />
          </div>
          <div className="col-span-3 hidden md:flex flex-col gap-[-10px]    ">
            <div className="border h-[450px] bg-white border-neutral-300 rounded-md">
              1
            </div>
            <div className="sticky top-16 h-[100px] py-6 w-full ">
              <div className="flex flex-wrap gap-3 pl-10 items-center justify-center">
                {navs.map((el: any) => (
                  <Link
                    className="text-[12px] text-neutral-500 hover:underline hover:text-blue-500"
                    key={el.id}
                    href={el.url}
                  >
                    {el.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Page;
