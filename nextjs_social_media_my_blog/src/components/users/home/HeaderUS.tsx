"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "@/services/users/getUsers.service";
import { CombineType } from "@/interfaces/combineType";
import { User } from "@/interfaces/userType";
import { userTemplate } from "@/utils/templateUser";
export default function HeaderUS() {
  // điều hướng
  const router = useRouter();
  const dispatch = useDispatch();
  //state kiểm tra trnagj thái đăng nhập
  let [checkLogin, setCheckLogin] = useState<boolean>(false);

  //todo : lấy dữ liệu redux -----------------------------------------

  //users
  let users = useSelector((state: CombineType) => state.users.data);
  useEffect(() => {
    dispatch(getUsers());
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
          setCheckLogin(true);
        }
      }
    } else {
      setCheckLogin(false);
    }
  }, [users]);
  //todo :lấy user hiện tại-----------------------------------------------

  //hàm logout
  let [checkDelete, setCheckDelete] = useState<boolean>(false);
  const handleLogout = () => {
    setCheckDelete(true);
  };

  const confirmLogout = () => {
    //xóa hết trạng thái đăng nhập trên local.
    localStorage.setItem("curUserLogin", JSON.stringify({}));
    router.push("/login");
  };

  return (
    <section className="fixed w-full z-40">
      <header className="border-b-4 border-solid border-[#535353]">
        <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-[#333]">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a
              href="https://flowbite.com"
              className="size-12 relative flex items-center"
            >
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/nextjs-lekhanhduong.appspot.com/o/logo%20and%20banner%2Flogo.webp?alt=media&token=86da9e89-1d1c-418b-8c72-c0a03051f506"
                }
                alt={"logo"}
                fill
                className="rounded-full border-solid border-[#FBC77B] border-2"
              ></Image>
              <span className="pl-14 text-2xl font-semibold text-white absolute w-max">
                Bloom
              </span>
            </a>
            {/* chưa đăng nhập */}
            {!checkLogin && (
              <div className="flex items-center lg:order-2 gap-5">
                <div
                  className=" bg-[#FBC77B] focus:ring-4 focus:ring-[#fde6c2] font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 cursor-pointer"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Log in
                </div>
                <div
                  className="text-white border-solid border-2 border-[#FBC77B]  focus:ring-4 focus:ring-[#fde6c2] font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 cursor-pointer"
                  onClick={() => {
                    router.push("/signUp");
                  }}
                >
                  Sign up
                </div>
              </div>
            )}
            {/* đã đăng nhập */}
            {checkLogin && (
              <div className="flex items-center lg:order-2 gap-5">
                <div className="text-center text-white hover:text-indigo-400 transition relative">
                  <div className="text-2xl">
                    <svg
                      className="size-6 text-slate-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </div>
                  <div className="absolute left-3 -top-3  w-5 h-5 rounded-full flex items-center justify-center bg-indigo-500 text-white text-xs">
                    {curUserLogin.notifications.length}{" "}
                  </div>
                </div>

                <div className="  bg-primary md:flex items-center cursor-pointer relative group hidden ">
                  <div className=" items-center justify-center bg-[#eeeeee5d] p-0.5 rounded-full ">
                    <div className="size-8 relative flex justify-center items-center">
                      <Image
                        src={curUserLogin.avatar}
                        alt={"user"}
                        fill
                        className="absolute rounded-full"
                      ></Image>
                    </div>
                  </div>
                  {/* dropdown */}
                  <div className="absolute w-52 -left-10 top-full  shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible pt-5">
                    <a
                      className="flex items-center px-5 py-2 hover:bg-gray-100 bg-white transition gap-5"
                      href={"profile"}
                    >
                      <svg
                        className="size-8 text-indigo-500"
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
                        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{" "}
                        <line x1="13" y1="8" x2="15" y2="8" />{" "}
                        <line x1="13" y1="12" x2="15" y2="12" />
                      </svg>
                      <span className=" text-gray-600 text-md font-medium">
                        Profile
                      </span>
                    </a>
                    <a className="flex items-center px-6 py-2 hover:bg-gray-100 bg-white transition gap-5">
                      <svg
                        className="h-6 w-6 text-indigo-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className=" text-gray-600 text-md font-medium">
                        Inbox
                      </span>
                    </a>
                    <div
                      onClick={handleLogout}
                      className="flex items-center px-6 py-2 hover:bg-gray-100 bg-white transition gap-5 cursor-pointer"
                    >
                      <svg
                        className="h-6 w-6 text-indigo-500"
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
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                      </svg>
                      <span className=" text-gray-600 text-md font-medium">
                        Log-out
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div
              className=" justify-between items-center flex :w-auto lg:order-1 pl-32"
              id="mobile-menu-2"
            >
              {checkLogin ? (
                <div></div>
              ) : (
                <a
                  href="#"
                  className="block py-2 text-[#fbc77b] rounded  lg:bg-transparent  lg:p-0 text-3xl font-extrabold font-mono text-center  "
                  aria-current="page"
                >
                  Welcome to the Bloom community
                </a>
              )}
            </div>
          </div>
        </nav>
      </header>
      {/* delete modal */}
      {checkDelete && (
        <div className="z-[0]">
          {/* modal delete */}

          <div
            className={`relative ${checkDelete ? "z-[1]" : "z-[-1]"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                checkDelete
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0"
              } `}
            ></div>

            <div
              className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                checkDelete
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0 "
              }`}
            >
              <div
                className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                  checkDelete
                    ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                    : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
                }`}
              >
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Warning
                        </h3>
                        <div className="mt-2">
                          <p className=" text-gray-500">
                            Are you sure you want to logout this account?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className=" border-none inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={confirmLogout}
                    >
                      Log-out
                    </button>
                    <button
                      type="button"
                      className=" border-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => {
                        setCheckDelete(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
