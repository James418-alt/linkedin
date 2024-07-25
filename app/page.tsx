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

const page = () => {
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
      <div className={postToggle ? "h-[100vh] overflow-x-hidden" : ""}>
        <Header />
        {postToggle ? <Post /> : ""}

        <div className="grid grid-cols-10 gap-5 px-20 pt-20">
          <div className="col-span-2 flex flex-col gap-1   ">
            <div className="border h-[370px] bg-white border-neutral-300 rounded-md">
              1
            </div>
            <div className="border h-[100px] bg-white border-neutral-300 rounded-md">
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
          <div className="col-span-3 flex flex-col gap-[-10px]    ">
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

export default page;
