"use client";
import Image from "next/image";
import AddingStatus from "@/components/users/whatNews/AddingStatus";
import UserHome from "../page";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "@/services/users/getUsers.service";
import { useRouter } from "next/navigation";
import { CombineType } from "@/interfaces/combineType";
import { User } from "@/interfaces/userType";
import { userTemplate } from "@/utils/templateUser";
import { getPosts } from "@/services/posts/getPosts.service";
import { generatePostsByUserId } from "@/utils/filterPosts";
import { Post } from "@/interfaces/postType";
import { searchUserById } from "@/utils/searchDependOnId";

export default function ProfileUS() {
  const router = useRouter();
  const dispatch = useDispatch();
  //todo : lấy dữ liệu redux -----------------------------------------
  //users
  let users = useSelector((state: CombineType) => state.users.data);
  let posts = useSelector((state: CombineType) => state.posts.data);
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);
  //todo : lấy dữ liệu redux -----------------------------------------

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
        }
      }
    } else {
      // không đăng nhập
    }
  }, [users]);
  //todo :lấy user hiện tại-----------------------------------------------

  //todo : lấy các bài post bản thân đăng -------------------------------
  const [myPosts, setMyPosts] = useState<any>([]);
  useEffect(() => {
    if (posts.length > 0) {
      setMyPosts(generatePostsByUserId(posts, curUserLogin.id));
    }
  }, [posts]);
  //todo : lấy các bài post bản thân đăng -------------------------------

  //tìm kiếm hình ảnh dựa trên id để render
  const searchUserRender = (id: number, ask: "avatar" | "name") => {
    if (users.length !== 0) {
      if (ask === "avatar") return searchUserById(id, users)?.avatar;
      if (ask === "name") return searchUserById(id, users)?.name;
    }
  };
  return (
    <UserHome>
      <div>
        <div className="mx-auto  w-[700px] ml-72  ">
          {/* body------------------------------------------------ */}
          <div className="overflow-hidden rounded-sm  bg-[#333] shadow-default text-[#eee]">
            <div className=" z-20 h-72 md:h-65">
              <img
                src={curUserLogin.banner}
                alt="profile cover"
                className="h-full w-full rounded-tl-md rounded-tr-md object-cover object-center"
              />
            </div>
            <div className="px-4 pb-6 flex justify-between ">
              {/* thêm ảnh đại diện */}
              <div className="flex gap-5">
                <div className="relative z-10 -top-5 h-30 w-max rounded-full bg-white/20  backdrop-blur p-1 flex">
                  <div className="relative drop-shadow-2 ">
                    <img
                      src={curUserLogin.avatar}
                      alt="profile"
                      className="size-24 rounded-full"
                    />
                    <label
                      htmlFor="profile"
                      className="absolute bottom-0 right-0 flex  cursor-pointer items-center justify-center rounded-full bg-indigo-400 p-1  text-white hover:bg-opacity-90  "
                    >
                      <svg
                        className="fill-current size-4"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                          fill=""
                        />
                      </svg>
                      <input
                        type="file"
                        name="profile"
                        id="profile"
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-2xl font-semibold">{curUserLogin.name}</p>
                  <p>@{curUserLogin.userName}</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <button className="bg-[#91919144] size-max px-4 py-1 rounded flex items-center gap-1 text-sm font-medium justify-center">
                  <svg
                    className="size-5 "
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
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />{" "}
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                  </svg>
                  <p>Edit profile</p>
                </button>
                <button className="bg-[#91919144] size-max px-4 py-1 rounded flex items-center gap-1 text-sm font-medium justify-center">
                  <svg
                    className="h-5 w-5 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <circle cx={18} cy={5} r={3} />{" "}
                    <circle cx={6} cy={12} r={3} />{" "}
                    <circle cx={18} cy={19} r={3} />{" "}
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />{" "}
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>

                  <p>Share</p>
                </button>
              </div>
            </div>
          </div>
          <AddingStatus></AddingStatus>
          {/* nav */}
          <ul className="flex gap-5 pb-5">
            <li className=" py-4 px-4  font-bold text-[#eee] border-b-4 border-b-amber-300 cursor-pointer">
              Posts
            </li>
            <li className=" py-4 px-4  font-bold text-[#eee] cursor-pointer">
              Biography
            </li>
            <li className=" py-4 px-4  font-bold text-[#eee] cursor-pointer">
              Friends
            </li>
            <li className=" py-4 px-4  font-bold text-[#eee] cursor-pointer">
              Photos
            </li>
            <li className=" py-4 px-4  font-bold text-[#eee] cursor-pointer">
              Followers
            </li>
            <li className=" py-4 px-4  font-bold text-[#eee] cursor-pointer">
              Followings
            </li>
          </ul>
          <hr className="border-1 h-0.5 border-stone-400" />
          {/* render */}
          {myPosts?.map((post: Post) => {
            return (
              <div
                className="bg-[#4E4F50] text-[#eee] rounded-md mt-5"
                key={post.id}
              >
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
                  <div className="flex gap-5 items-center pb-5">
                    {!post.display && (
                      <p
                        className="text-xs text-red-400 font-medium hover:underline cursor-pointer"
                        onClick={() => router.push("/support")}
                      >
                        Post has been hidden by admin
                      </p>
                    )}
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
      </div>
    </UserHome>
  );
}
