"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import UserHome from "../page";
import React, { useEffect, useState } from "react";
import { getUsers } from "@/services/users/getUsers.service";
import { CombineType } from "@/interfaces/combineType";
import { User } from "@/interfaces/userType";
import { getPosts } from "@/services/posts/getPosts.service";
import { Post } from "@/interfaces/postType";
import { addToPosts } from "@/services/posts/addPosts";
import { userTemplate } from "@/utils/templateUser";
import StoriesOthers from "@/components/users/whatNews/StoriesOthers";
import AddingStatus from "@/components/users/whatNews/AddingStatus";
import { searchUserById } from "@/utils/searchDependOnId";
import SideBarMain from "@/components/users/whatNews/SideBarMain";
import ForYou from "@/components/users/whatNews/ForYou";

export default function WhatNew() {
  const dispatch = useDispatch();
  //state kiểm tra trnagj thái đăng nhập
  let [checkLogin, setCheckLogin] = useState<boolean>(false);
  // todo :Lấy  từ Redux store------------------------------------
  let users = useSelector((state: CombineType) => state.users.data);
  useEffect(() => {
    // Chỉ gọi fetchUsers một lần khi component được mount
    dispatch(getUsers());
  }, []);
  let posts = useSelector((state: CombineType) => state.posts.data);
  useEffect(() => {
    // Chỉ gọi fetchUsers một lần khi component được mount
    dispatch(getPosts());
  }, []);
  // todo :Lấy  từ Redux store------------------------------------

  //todo :lấy user hiện tại-----------------------------------------------
  let [curUserLogin, setCurUserLogin] = useState<User>(userTemplate);

  useEffect(() => {
    let curUser = localStorage.getItem("curUserLogin");

    if (curUser) {
      let userObj = JSON.parse(curUser);
      // Kiểm tra nếu userObj là một đối tượng rỗng
      if (Object.keys(userObj).length === 0 && userObj.constructor === Object) {
        //chưa đăng nhập
      } else {
        let userFound = users.find((user: User) => {
          return user.email === userObj.email;
        });

        // Set lại sau khi tìm thấy
        if (userFound) {
          setCurUserLogin(userFound);
          setCheckLogin(true);
        }
      }
    } else {
      setCheckLogin(false);
    }
  }, [users]);
  //todo :lấy user hiện tại-----------------------------------------------

  // todo : ẩn hiện thông tin dài-----------------
  // const [isExpanded, setIsExpanded] = useState(false);

  // const handleToggle = () => {
  //   setIsExpanded(!isExpanded);
  // };
  // todo : ẩn hiện thông tin dài-----------------

  //tìm kiếm hình ảnh dựa trên id
  const searchUserRender = (id: number, ask: "avatar" | "name") => {
    if (users.length !== 0) {
      if (ask === "avatar") return searchUserById(id, users)?.avatar;
      if (ask === "name") return searchUserById(id, users)?.name;
    }
  };

  return (
    <UserHome>
      <div className="pt-20 bg-[#333] flex gap-4 ">
        <SideBarMain></SideBarMain>
        {/* main------------------------------- */}
        <div className="w-3/ flex flex-col gap-5 ml-72 ">
          <StoriesOthers></StoriesOthers>
          <AddingStatus></AddingStatus>
          {/* render */}
          <div className="flex justify-between">
            <p className="font-mono text-stone-400 text-lg">All</p>
            <p>
              <svg
                className="h-6 w-6 text-stone-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <line x1={4} y1={21} x2={4} y2={14} />{" "}
                <line x1={4} y1={10} x2={4} y2={3} />{" "}
                <line x1={12} y1={21} x2={12} y2={12} />{" "}
                <line x1={12} y1={8} x2={12} y2={3} />{" "}
                <line x1={20} y1={21} x2={20} y2={16} />{" "}
                <line x1={20} y1={12} x2={20} y2={3} />{" "}
                <line x1={1} y1={14} x2={7} y2={14} />{" "}
                <line x1={9} y1={8} x2={15} y2={8} />{" "}
                <line x1={17} y1={16} x2={23} y2={16} />
              </svg>
            </p>
          </div>
          <hr className="border-1 h-0.5 border-stone-400" />

          {posts?.map((post: Post) => {
            return (
              <div className="bg-[#4E4F50] text-[#eee] rounded-md">
                <div className="flex justify-between px-3 py-2">
                  <div className="flex gap-5">
                    <div className="relative size-12 rounded-full">
                      <Image
                        src={
                          searchUserRender(post.user_id, "avatar") ||
                          "https://media.istockphoto.com/id/1128826884/vi/vec-to/kh%C3%B4ng-c%C3%B3-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-vector-h%C3%ACnh-%E1%BA%A3nh-thi%E1%BA%BFu-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-c%C3%B3-s%E1%BA%B5n-kh%C3%B4ng-c%C3%B3-th%C6%B0-vi%E1%BB%87n-cho-th%E1%BB%9Di-%C4%91i%E1%BB%83m.jpg?s=2048x2048&w=is&k=20&c=g_gjic6FyRyPpoO2EWQbS-ihIss-Ek1pmc_pT1nJBHA="
                        }
                        alt={""}
                        fill
                        className="rounded-full"
                      ></Image>
                    </div>
                    <div>
                      <p className="font-bold">
                        {searchUserRender(post.user_id, "name")}
                      </p>
                      <p className="text-sm font-mono"> {post.create_at}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <svg
                      className="h-6 w-6 text-stone-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                    <svg
                      className="h-6 w-6 text-stone-300"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1={18} y1={6} x2={6} y2={18} />{" "}
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
                {/* chức năng xem thêm ẩn bớt */}
                {/* <div className="flex flex-col">
                  <div
                    className={`bg-cyan-400 overflow-hidden transition-all duration-300 max-w-[700px] ${
                      isExpanded ? "h-auto" : "h-24"
                    }`} // 100px khoảng 24px
                  >
                    {post.content.title}
                  </div>

                  <button onClick={handleToggle} className="mt-2">
                    {isExpanded ? "Ẩn bớt " : "Xem thêm"}
                  </button>
                </div> */}
                <div className=" max-w-[700px] px-3 pb-3">
                  {post.content.title}
                </div>
                {post.content.media.type !== "none" ? (
                  <div className="bg-blue-700 h-[400px] relative ">
                    <Image src={post.content.media.url} alt={""} fill></Image>
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-2xl font-bold h-96 flex justify-center items-center text-[#eee]">
                    <span className="max-w-[700px] px-5 text-center">
                      {post.content.title}
                    </span>
                  </div>
                )}
                <hr className="border-1 h-0.5 border-stone-400 " />
                <div className=" flex justify-between px-5 py-2 ">
                  <div>10 reactions</div>
                  <div className="flex gap-5">
                    <div>10 comments</div>
                    <div>{post.engagement.shares.length} share</div>
                  </div>
                </div>
                <hr className="border-1 h-0.5 border-stone-400 mx-3" />
                <div className="flex justify-between px-5 py-1">
                  <div className="flex gap-5">
                    <p className="flex gap-2 items-center justify-center hover:bg-[#9f9f9f67] px-5 my-1 rounded cursor-pointer">
                      <svg
                        className="h-5 w-5 text-stone-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                      </svg>
                      <span className="font-mono font-base text-base pt-1">
                        Like
                      </span>
                    </p>
                    <p className="flex gap-2 items-center justify-center hover:bg-[#9f9f9f67] px-5 my-1 rounded cursor-pointer">
                      <svg
                        className="h-5 w-5 text-stone-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      <span className="font-mono font-base text-base pt-1">
                        Comments
                      </span>
                    </p>
                    <p className="flex gap-2 items-center justify-center hover:bg-[#9f9f9f67] px-5 my-1 rounded cursor-pointer">
                      <svg
                        className="h-5 w-5 text-stone-300"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M6 18v-6a3 3 0 0 1 3 -3h10l-5 -5m0 10l5 -5" />
                      </svg>

                      <span className="font-mono font-base text-base pt-1">
                        Share
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="flex gap-2 items-center justify-center hover:bg-[#9f9f9f67] px-5 my-1 rounded cursor-pointer">
                      <svg
                        className="h-5 w-5 text-stone-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                      <span className="font-mono font-base text-base pt-1">
                        Save
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* main---------------------------- */}
        <ForYou></ForYou>
      </div>
    </UserHome>
  );
}
