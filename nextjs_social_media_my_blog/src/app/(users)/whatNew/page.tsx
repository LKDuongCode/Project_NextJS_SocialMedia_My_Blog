"use client";
import { useDispatch, useSelector } from "react-redux";
import UserHome from "../page";
import { useEffect, useState } from "react";
import { getUsers } from "@/services/users/getUsers.service";
import { CombineType } from "@/interfaces/combineType";
import { User } from "@/interfaces/userType";
import { getPosts } from "@/services/posts/getPosts.service";
import { Post } from "@/interfaces/postType";

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
  let [curUserLogin, setCurUserLogin] = useState<User>({
    id: 0,
    role: "user",
    status: "active",
    userName: "",
    name: "",
    email: "",
    avatar: "",
    banner: "",
    bio: "",
    fav: [],
    following: [],
    followers: [],
    groups: [],
    lastLogin: "", // dd/mm/yyyy
    password: "",
    phoneNumber: "",
    curAddress: {
      city: "",
      country: "",
    },
    comeFrom: {
      country: "",
      city: "",
    },
    create_at: "",
    dob: "", // date of birth
    notifications: [],
    profileVisibility: "public",
  });

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

  console.log(posts);
  return (
    <UserHome>
      <div className="pt-20 bg-red-400 flex gap-4 justify-center">
        <div className="bg-blue-400 w-1/6">nav bar</div>
        {/* main------------------------------- */}
        <div className="w-3/6 bg-white flex flex-col gap-5">
          <div className="flex gap-5 h-52 bg-yellow-400"></div>
          <div className="bg-slate-400 p-5">
            <div>
              <textarea
                name=""
                id=""
                className="w-full"
                placeholder="What do you think..."
              ></textarea>
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <svg
                    className="h-6 w-6 text-slate-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <rect
                      x={3}
                      y={3}
                      width={18}
                      height={18}
                      rx={2}
                      ry={2}
                    />{" "}
                    <circle cx="8.5" cy="8.5" r="1.5" />{" "}
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div>
                  <svg
                    className="h-6 w-6 text-slate-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />{" "}
                    <line x1={18} y1={9} x2={12} y2={15} />{" "}
                    <line x1={12} y1={9} x2={18} y2={15} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-5">
              <select name="" id="" defaultValue={"pub"}>
                <option value="pub">Public</option>
                <option value="pri">Private</option>
                <option value="fri">Friend</option>
              </select>
              <button className="bg-yellow-400">post</button>
            </div>
          </div>
          {/* render */}
          {posts?.map((post: Post) => {
            return (
              <div className="bg-amber-400">
                <div className="flex justify-between">
                  <div>{post.user_id}</div>
                  <div>{post.create_at}</div>
                </div>
                <div className="bg-cyan-400">{post.content.title}</div>
                <div className="bg-blue-700 h-[400px]">
                  {post.content.media.url}
                </div>
                <div className="bg-stone-400 ">
                  <div>{post.engagement.shares.length} share</div>
                </div>
                <div className="bg-purple-400">features</div>
              </div>
            );
          })}
        </div>
        {/* main---------------------------- */}
        <div className="bg-blue-400 w-2/6">suggest</div>
      </div>
    </UserHome>
  );
}
