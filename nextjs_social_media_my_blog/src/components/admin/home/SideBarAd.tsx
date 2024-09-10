"use client";
import AdminLayout from "@/app/admin/page";
import { CombineType } from "@/interfaces/combineType";
import { User } from "@/interfaces/userType";
import { getUsers } from "@/services/users/getUsers.service";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SideBarAd() {
  const dispatch = useDispatch();
  const router = useRouter();
  //   lấy dữ liệu từ redux-------------------------------------------------
  let users: User[] = useSelector((state: CombineType) => {
    return state.users.data;
  });
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  // kiểm soát hiệu ứng---------------------------------------------------------------
  const [sideBar, setSideBar] = useState(false);
  //thanh cuộn ngang hiện ra mất thẩm mĩ => hàm này sẽ khắc phục
  const [timeShow, setTimeShow] = useState<boolean>(false);

  /*
    kiểm soát điều kiện
    nếu sideBar true thì sau 1s timeShow true,
    ngược lại.
  */
  // console.log("time", timeShow);
  // console.log("side", sideBar);
  //effect kiểm soát đóng mở.
  useEffect(() => {
    if (sideBar) {
      const timer = setTimeout(() => {
        setTimeShow(true);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setTimeShow(false);
    }
  }, [sideBar]);
  // kiểm soát hiệu ứng--------------------------------------------------------------------
  return (
    <>
      <div className={` ${sideBar ? "w-screen h-screen z-10 coverAll " : ""}`}>
        <div
          className={`fixed top-0 left-0 z-40 h-screen p-4 bg-[#242527] transition-all duration-300 ease-in-out ${
            sideBar ? "w-64" : "w-16"
          } `}
          onClick={() => setSideBar(true)}
        >
          <div
            className={`flex gap-2 items-center border-solid border-x-transparent border-t-transparent border-[1px] border-b-slate-500 py-4 ${
              timeShow ? "" : "justify-center"
            }`}
          >
            <img
              className={`${
                timeShow ? "size-12" : "size-10 "
              } rounded-full bg-violet-300 border-2 border-amber-300`}
              src="/logo.webp"
              alt=""
            />
            {timeShow && (
              <p className="text-white font-bold text-xl">Duong's Shop</p>
            )}
          </div>
          {timeShow && (
            <button
              onClick={(e) => {
                /*
            vì cpn này nằm trong cha (set = true) nên khi bấm sẽ truyền event đến cha và xung đột. Để giải quyết dùng stopPropagation để ngăn sự kiện truyền đến cha.
            */
                e.stopPropagation();
                setSideBar(false);
              }}
              type="button"
              className={`border-none text-white bg-transparent hover:text-gray-300 text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center `}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          )}
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium flex flex-col justify-center items-center border-solid border-x-transparent border-t-transparent border-[1px] border-b-slate-500 pb-4">
              <li className="w-full" onClick={() => router.push("dashboard")}>
                <div className="flex items-center  p-2 text-white rounded-lg hover:bg-gray-700">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  {timeShow && <span className="ml-3">Dashboard</span>}
                </div>
              </li>

              <li className="w-full" onClick={() => router.push("calendar")}>
                <div className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
                    <line x1="16" y1="3" x2="16" y2="7" />{" "}
                    <line x1="8" y1="3" x2="8" y2="7" />{" "}
                    <line x1="4" y1="11" x2="20" y2="11" />{" "}
                    <rect x="8" y="15" width="2" height="2" />
                  </svg>
                  {timeShow && (
                    <>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Calendar
                      </span>
                      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-gray-700 rounded-full">
                        3
                      </span>
                    </>
                  )}
                </div>
              </li>
              <li className="w-full" onClick={() => router.push("predium")}>
                <div className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />{" "}
                    <polyline points="4 12 12 16 20 12" />{" "}
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                  {timeShow && (
                    <>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Data Analysis
                      </span>
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-white bg-gray-700 rounded-full">
                        Pro
                      </span>
                    </>
                  )}
                </div>
              </li>
              <li className="w-full" onClick={() => router.push("predium")}>
                <div className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  {timeShow && (
                    <>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Charts
                      </span>
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-white bg-gray-700 rounded-full">
                        Pro
                      </span>
                    </>
                  )}
                </div>
              </li>
              <li className="w-full" onClick={() => router.push("predium")}>
                <div className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7" />
                  </svg>
                  {timeShow && (
                    <>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        AI Assistance
                      </span>
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-white bg-gray-700 rounded-full">
                        Pro
                      </span>
                    </>
                  )}
                </div>
              </li>
            </ul>

            <ul className="pt-4  space-y-2 font-medium border-solid border-x-transparent border-t-transparent border-[1px] border-b-slate-500 pb-4">
              <li
                className="w-full"
                onClick={() => router.push("users_manage")}
              >
                <div className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg
                    className="h-5 w-5 text-slate-100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
                    <circle cx={12} cy={7} r={4} />
                  </svg>

                  {timeShow && (
                    <>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Users
                      </span>
                      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-gray-700 rounded-full">
                        {users.length}
                      </span>
                    </>
                  )}
                </div>
              </li>
              <li
                className="w-full"
                onClick={() => router.push("posts_manage")}
              >
                <div className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg
                    className="h-5 w-5 text-white flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>

                  {timeShow && (
                    <>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Posts
                      </span>
                    </>
                  )}
                </div>
              </li>
              <li
                className="w-full"
                onClick={() => router.push("groups_manage")}
              >
                <div className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg
                    className="h-5 w-5 text-slate-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  {timeShow && (
                    <>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Groups
                      </span>
                      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-gray-700 rounded-full">
                        10
                      </span>
                    </>
                  )}
                </div>
              </li>
              <li
                className="w-full"
                onClick={() => router.push("reports_manage")}
              >
                <div className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg
                    className="h-5 w-5 text-slate-100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />{" "}
                    <line x1={12} y1={8} x2={12} y2={12} />{" "}
                    <line x1={12} y1={16} x2="12.01" y2={16} />
                  </svg>

                  {timeShow && (
                    <>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Reports
                      </span>
                      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-gray-700 rounded-full">
                        20
                      </span>
                    </>
                  )}
                </div>
              </li>
            </ul>

            <ul className="pt-4 mt-4 space-y-2 font-medium ">
              <li className="w-full">
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  {timeShow && (
                    <>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Mode
                      </span>
                      <svg
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="1"
                          y="5"
                          width="22"
                          height="14"
                          rx="7"
                          ry="7"
                        />
                        <circle cx="16" cy="12" r="3" />
                      </svg>
                    </>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
