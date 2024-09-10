"use client";

import { useEffect, useState } from "react";
import DropDownAD from "./DropDownAD";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CombineType } from "@/interfaces/combineType";
import { getUsers } from "@/services/users/getUsers.service";
import { User } from "@/interfaces/userType";
import { userTemplate } from "@/utils/templateUser";

export default function HeaderAd() {
  const dispatch = useDispatch();
  const router = useRouter();
  let [checkLogin, setCheckLogin] = useState<boolean>(false);
  let [checkDelete, setCheckDelete] = useState<boolean>(false);

  // Lấy danh sách users về từ Redux store------------------------------------
  let users = useSelector((state: CombineType) => state.users.data);

  useEffect(() => {
    // Chỉ gọi fetchUsers một lần khi component được mount
    dispatch(getUsers());
  }, []);
  // Lấy danh sách users về từ Redux store------------------------------------

  //lấy user hiện tại-----------------------------------------------
  let [curAdminLogin, setCurAdminLogin] = useState<User>(userTemplate);
  useEffect(() => {
    let curAdmin = localStorage.getItem("curAdmin");
    if (curAdmin) {
      let userObj = JSON.parse(curAdmin);
      // Kiểm tra nếu userObj là một đối tượng rỗng
      if (Object.keys(userObj).length === 0 && userObj.constructor === Object) {
        //chưa đăng nhập
        setCheckLogin(true);
      } else {
        // đã đăng nhập
        let adminFound = users.find((user: User) => {
          return user.email === userObj.email;
        });
        // Set lại sau khi tìm thấy
        if (adminFound) {
          setCurAdminLogin(adminFound);
          setCheckLogin(false);
        }
      }
    } else {
      setCheckLogin(true);
    }
  }, [users]);

  //lấy user hiện tại-----------------------------------------------
  //xử lí nút đăng xuất
  const handleLogout = () => {
    setCheckDelete(true);
  };

  const confirmLogout = () => {
    //xóa hết trạng thái đăng nhập trên local.
    localStorage.setItem("curAdmin", JSON.stringify({}));
    router.push("/adLogin");
    setCheckDelete(false);
  };
  return (
    <>
      <div className="h-20  fixed  flex pr-20 shadow-md  w-full bg-white ">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex items-center gap-3">
            <svg
              className="h-6 w-6 text-[#969AA1]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              placeholder="Type to search..."
              type="text"
              className="border-transparent w-[500px] h-8 text-base py- bg-transparent "
              // value={searchTerm}
              // onChange={handleSearch}
            />
          </div>
          {/* 
          {searchTerm !== "" && (
            <ul className="absolute w-[50%] bg-white border-solid border-stone-200 border-t-0 max-h-80 top-16 left-16 rounded-b-md p-2 overflow-y-auto">
              {filteredFuncs.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-stone-200 p-3"
                  onClick={() => toPage(item.ref)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-bold truncate">{item.name}</p>
                    <p className="font-semibold">{item.info}</p>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          )} */}
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="flex-1 flex gap-8 items-center justify-end">
          <div className="relative bg-[#EFF4FB] rounded-full p-2 flex justify-center items-center">
            <span className="flex h-3 w-3 absolute top-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <svg
              className="h-6 w-6 text-slate-500"
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
          <div className="relative bg-[#EFF4FB] rounded-full p-2 flex justify-center items-center">
            <span className="flex h-3 w-3 absolute top-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <svg
              className="h-6 w-6 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div className="relative  items-center ">
            <DropDownAD></DropDownAD>
          </div>

          {/* admin info */}
          <div className="flex gap-5 items-center">
            <div className="w-[150px]">
              <p className="font-semibold">{curAdminLogin.name}</p>
              <p className="text-sm  text-slate-500">
                {curAdminLogin.curAddress.country}
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={curAdminLogin.avatar}
                className="size-14 rounded-full"
              />
              <div className="relative items-cente h-max">
                {/* điều chỉnh độ dài chiều cao của phần hiện ra thông qua div gần button nhất */}
                <div className="relative group/bouton  ">
                  <button className="relative font-semibold py-4 px-3 border-none bg-transparent">
                    <span className=" flex items-center justify-center w-max top-0  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 rotate-90 transition-transform text-slate-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* show */}
                  <div className="absolute w-full top-full bg-stone-50 origin-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all  min-w-60 right-0">
                    {/* child */}

                    <a
                      href={"detailAcc"}
                      className="relative w-full py-3 px-10 hover:bg-stone-300  flex items-center gap-2"
                    >
                      <svg
                        className="size-6 text-slate-500"
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
                        <circle cx="12" cy="7" r="4" />{" "}
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      </svg>
                      <p className="text-base text-black">My Profile</p>
                    </a>
                    <div className="relative w-full py-3 px-10 hover:bg-stone-300  flex items-center gap-2 border-solid border-b-stone-200 border-x-transparent border-t-transparent border-b-[1px]">
                      <svg
                        className="h-6 w-6 text-slate-500"
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
                      <p className="text-base">My Contact</p>
                    </div>
                    <div
                      className="relative w-full py-3 px-10 hover:bg-stone-300  flex items-center gap-2"
                      onClick={handleLogout}
                    >
                      <svg
                        className="size-6 text-slate-500"
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
                      <p className="text-base">Log-out</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {checkDelete && (
        <div className="addModal">
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
                            Are you sure you want to log-out this account?
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
      {/* login modal */}
      {checkLogin && (
        <div className="addModal">
          <div
            className={`relative ${checkLogin ? "z-[1]" : "z-[-1]"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                checkLogin
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0"
              } `}
            ></div>

            <div
              className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                checkLogin
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0 "
              }`}
            >
              <div
                className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                  checkLogin
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
                            You are not logged in, you need to log in to
                            continue using this website
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className=" border-none inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2  font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                      onClick={() => {
                        setCheckLogin(false);
                        router.push("/adLogin");
                      }}
                    >
                      Login Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
