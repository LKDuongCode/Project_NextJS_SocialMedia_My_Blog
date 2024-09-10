"use client";

import { CombineType } from "@/interfaces/combineType";
import { User } from "@/interfaces/userType";
import { getUsers } from "@/services/users/getUsers.service";
import { userTemplate } from "@/utils/templateUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../page";
import {
  lockAnUser,
  unlockAnUser,
} from "@/services/users/lock_unlonk_User.service";

export default function UserManage() {
  const dispatch = useDispatch();
  const router = useRouter();
  // state quản lí mở đóng form-------------------------------------------
  let [checkSucccess, setCheckSuccess] = useState<boolean>(false);
  let [checkAddForm, setCheckAddForm] = useState<boolean>(false);
  let [checkDelete, setCheckDelete] = useState<boolean>(false);
  let [checkLock, setCheckLock] = useState<boolean>(false);
  let [checkUnlock, setCheckUnlock] = useState<boolean>(false);
  // state quản lí mở đóng form-------------------------------------------

  //lấy dữ liệu từ redux-------------------------------------------------
  let usersDb: User[] = useSelector((state: CombineType) => {
    return state.users.data;
  });
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  //lấy dữ liệu từ redux-------------------------------------------------

  //lấy user hiện tại-----------------------------------------------
  let [curAdminLogin, setCurAdminLogin] = useState<User>(userTemplate);
  useEffect(() => {
    if (usersDb.length > 0) {
      let curAdmin = localStorage.getItem("curAdmin");
      if (curAdmin) {
        let adminObj = JSON.parse(curAdmin);
        let adminFound = usersDb.find((admin: User) => {
          return admin.email === adminObj.email;
        });
        // Set lại sau khi tìm thấy
        if (adminFound) {
          setCurAdminLogin(adminFound);
        }
      } else {
        // Thông báo cần đăng nhập
      }
    }
  }, [usersDb]);
  //lấy user hiện tại-----------------------------------------------

  //tạo tạo mảng users trừ người đăng nhập ra
  let [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    if (curAdminLogin.email !== "") {
      let newArr: User[] = usersDb.filter(
        (user: User) => user.id !== curAdminLogin.id
      );
      setUsers(newArr);
    }
  }, [curAdminLogin, usersDb]);

  // khóa tài khoản và mở khóa -------------------------------------------------------------------
  //state lưu lại id đối tượng cần khóa và id đối tượng được mở
  let [userIdToLock, setUserIdToLock] = useState<number>(0);
  let [userIdToUnLock, setUserIdToUnLock] = useState<number>(0);
  const handleLock = (id: number) => {
    setUserIdToLock(id);
    setCheckLock(true);
  };
  const confirmLock = () => {
    if (userIdToLock !== 0) {
      dispatch(lockAnUser(userIdToLock));
    }
    setCheckLock(false);
  };
  //mở khóa
  const handleUnlock = (id: number) => {
    setUserIdToUnLock(id);
    setCheckUnlock(true);
  };
  const confirmUnlock = () => {
    if (userIdToUnLock !== 0) {
      dispatch(unlockAnUser(userIdToUnLock));
    }
    setCheckUnlock(false);
  };
  // khóa tài khoản và mở khóa -------------------------------------------------------------------

  return (
    <AdminLayout>
      <>
        <section className="rounded-md bg-white py-4 shadow-default mt-24 px-5 border-spacing-2 border-stone-300 border-solid mx-5 w-full ml-10">
          <div className=" font-semibold bg-indigo-500 px-5 pt-5 rounded-t-md text-white flex justify-between items-center py-5">
            <h2 className="text-2xl font-bold">Users Management</h2>
            <button
              className="
        border-none
        font-semibold
        text-sm
        leading-5
        rounded-[0.375rem]
        px-[10px]
        py-[6px]
      bg-indigo-800
        h-max 
        flex gap-1 items-center justify-center
        text-white
      "
              onClick={() => setCheckAddForm(true)}
            >
              <svg
                className="size-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>

              <p className="text-lg">New</p>
            </button>
          </div>
          {/* thanh tìm kiếm và số trang phân -----------------------------------*/}
          <div className="flex justify-between items-center border-b-2 border-stone-300 border-solid px-8 py-4 border-x-transparent border-t-transparent bg-indigo-600">
            <div className="w-3/5">
              <input
                type="text"
                className="w-full rounded-md border border-stone-300 border-solid px-5 py-3 outline-none focus:border-blue-500 dark:border-stone-300 text-base font-medium"
                placeholder="Search..."
                //   value={searchTerm}
                //   onChange={handleSearch}
              />
            </div>

            <div className="flex items-center font-medium">
              <p className=" mr-2 pl-2 text-white dark:text-white">Sort By</p>
              <select
                //   onChange={sortUsers}
                className="bg-indigo-400 pl-2 border-none outline-none font-medium text-base text-stone-100"
              >
                <option className="text-black bg-slate-100" value={"default"}>
                  Default
                </option>
                <option className="text-black bg-slate-100" value={"upToDown"}>
                  Name Up-Down
                </option>
                <option className="text-black bg-slate-100" value={"downToUp"}>
                  Name Down-Up
                </option>
              </select>
            </div>
            <div className="flex items-center font-medium">
              <select className="bg-transparent pl-2 border-none outline-none font-medium text-base text-stone-100">
                <option className="text-black" value={5}>
                  5
                </option>
                <option className="text-black" value={10}>
                  10
                </option>
                <option className="text-black" value={20}>
                  20
                </option>
                <option className="text-black" value={50}>
                  50
                </option>
              </select>
              <p className="pl-2 text-white dark:text-white">
                Entries Per Page
              </p>
            </div>
          </div>
          {/* thanh tìm kiếm và số trang phân -------------------------------------*/}

          {/* bảng */}
          <table className="min-w-full border-y-stone-300 border-2 border-solid border-x-transparent">
            <thead className="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  className="text-xl font-medium text-gray-900 px-6 py-4 text-left w-5"
                >
                  #
                </th>
                <th
                  scope="col"
                  className=" font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Username
                </th>

                <th
                  scope="col"
                  className=" font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className=" font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className=" font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Date Created
                </th>
                <th
                  scope="col"
                  className=" font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className=" font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User, index: number) => {
                return (
                  <tr
                    className={`${
                      (index + 1) % 2 === 0 ? "bg-white" : "bg-gray-100"
                    } border-b`}
                    key={user.id}
                  >
                    <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                      {user.name}
                    </td>
                    <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                      {user.curAddress.country}
                    </td>
                    <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                      {user.create_at}
                    </td>
                    <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                      {user.role}
                    </td>
                    <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                      {user.status === "banned" && (
                        <button
                          onClick={() => handleUnlock(user.id)}
                          className="
                border-2
                border-amber-400
                border-solid
                font-semibold
                text-xs  px-4
                leading-4
                rounded
          
                py-0.5
                bg-transparent
                h-max
                mr-2
                hover:text-white
                hover:bg-amber-300
              "
                        >
                          <svg
                            className="size-6 text-amber-500 "
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {" "}
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            />{" "}
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        </button>
                      )}
                      {user.status === "active" && (
                        <button
                          onClick={() => handleLock(user.id)}
                          className="
                border-2
                border-amber-400
                border-solid
                font-semibold
                  px-4
                text-xs
                leading-4
                rounded
   
                py-0.5
                bg-transparent
                h-max
                mr-2
                hover:text-white
                hover:bg-amber-300
              "
                        >
                          <svg
                            className="h-6 w-6 text-amber-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {" "}
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            />{" "}
                            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                          </svg>
                        </button>
                      )}

                      <button
                        //   onClick={() => handleCheckAcc(user.id)}
                        className="
                border-2
                border-lime-500
                border-solid
                font-semibold
                text-xs
                leading-4
                rounded
                bg-transparent
                h-max
                px-4
                py-0.5
                mr-2
                
                hover:bg-lime-400
                hover:text-white
              "
                      >
                        <svg
                          className="size-6 text-lime-500  "
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* footer --------------------------------------------------------------*/}
          <div className="flex justify-between   px-8 pt-5">
            <p className="font-medium text-gray-600">Showing 1 0f 3 pages</p>
            <div className="flex">
              <button className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-indigo-500 hover:text-white border-transparent font-medium text-base">
                <svg
                  className="fill-current"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                    fill=""
                  />
                </svg>
              </button>
              <button className="bg-indigo-500 text-white mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-indigo-500 hover:text-white border-transparent text-base font-medium ">
                1
              </button>
              <button className="false mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-indigo-500 hover:text-white border-transparent text-base font-medium ">
                2
              </button>
              <button className="false mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-indigo-500 hover:text-white border-transparent text-base font-medium ">
                3
              </button>
              <button className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-indigo-500 hover:text-white border-transparent text-base font-medium ">
                <svg
                  className="fill-current"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        {/* add form */}
        {checkAddForm && (
          <div className="addModal">
            <div className=" bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 w-1/2 dark:bg-gray-800 dark:border-gray-700">
              {/* close */}
              <p
                className="float-right p-4"
                onClick={() => {
                  setCheckAddForm(false);
                }}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </p>
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white uppercase text-center">
                  add a new user
                </h1>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex gap-4">
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2  font-medium text-gray-900 dark:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        name="full_name"
                        //   onChange={handleChange}
                        //   onClick={() =>
                        //     setValidate({
                        //       empty: false,
                        //       wrongEmail: false,
                        //       wrongPhone: false,
                        //       existEmail: false,
                        //       matchPass: false,
                        //       wrongPass: false,
                        //     })
                        //   }
                        type="text"
                        className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                        placeholder="your full name..."
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label
                        htmlFor="email"
                        className="block mb-2  font-medium text-gray-900 dark:text-white"
                      >
                        Username
                      </label>
                      <input
                        //   onClick={() =>
                        //     setValidate({
                        //       empty: false,
                        //       wrongEmail: false,
                        //       wrongPhone: false,
                        //       existEmail: false,
                        //       matchPass: false,
                        //       wrongPass: false,
                        //     })
                        //   }
                        name="user_name"
                        //   onChange={handleChange}
                        type="text"
                        className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                        placeholder="Username..."
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                        Email
                      </label>
                      <input
                        //   onClick={() =>
                        //     setValidate({
                        //       empty: false,
                        //       wrongEmail: false,
                        //       wrongPhone: false,
                        //       existEmail: false,
                        //       matchPass: false,
                        //       wrongPass: false,
                        //     })
                        //   }
                        name="email"
                        //   onChange={handleChange}
                        type="email"
                        className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                        Phone numbers
                      </label>
                      <input
                        //   onClick={() =>
                        //     setValidate({
                        //       empty: false,
                        //       wrongEmail: false,
                        //       wrongPhone: false,
                        //       existEmail: false,
                        //       matchPass: false,
                        //       wrongPass: false,
                        //     })
                        //   }
                        name="phone"
                        //   onChange={handleChange}
                        type="text"
                        className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                        Country
                      </label>
                      <select
                        //   onClick={() =>
                        //     setValidate({
                        //       empty: false,
                        //       wrongEmail: false,
                        //       wrongPhone: false,
                        //       existEmail: false,
                        //       matchPass: false,
                        //       wrongPass: false,
                        //     })
                        //   }
                        name="address"
                        id=""
                        //   value={newUser.address}
                        className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                        //   onChange={handleChange}
                      >
                        <option value="">Choose your Country</option>
                        {/* {countries.map((country, index: number) => (
                        <option key={index} value={country.name}>
                          {country.name}
                        </option>
                      ))} */}
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                        Password
                      </label>
                      <input
                        //   onClick={() =>
                        //     setValidate({
                        //       empty: false,
                        //       wrongEmail: false,
                        //       wrongPhone: false,
                        //       existEmail: false,
                        //       matchPass: false,
                        //       wrongPass: false,
                        //     })
                        //   }
                        name="password"
                        //   onChange={handleChange}
                        type="text"
                        className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                        Confirm Password
                      </label>
                      <input
                        //   onClick={() =>
                        //     setValidate({
                        //       empty: false,
                        //       wrongEmail: false,
                        //       wrongPhone: false,
                        //       existEmail: false,
                        //       matchPass: false,
                        //       wrongPass: false,
                        //     })
                        //   }
                        type="text"
                        //   onChange={(e) => setConfirmPass(e.target.value)}
                        className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                      />
                    </div>
                  </div>
                  {/* <div>
                  {validate.wrongEmail && (
                    <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                      Email is in wrong format
                    </p>
                  )}
                  {validate.existEmail && (
                    <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                      Email is exits
                    </p>
                  )}
                  {validate.empty && (
                    <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                      Fields cannot be left blank
                    </p>
                  )}
                  {validate.wrongPhone && (
                    <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                      Phone number is in wrong format
                    </p>
                  )}
                  {validate.wrongPass && (
                    <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                      Minimum 6-character password includes at least one number,
                      at least one letter and at least one special character
                    </p>
                  )}
                  {validate.matchPass && (
                    <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                      Password are not match
                    </p>
                  )}
                </div> */}

                  <button
                    //   onClick={clickAdd}
                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:bg-indigo-500 font-medium rounded-lg  px-5 py-2.5 text-center border-transparent"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
                              Are you sure you want to delete? All of your data
                              will be permanently removed. This action cannot be
                              undone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className=" border-none inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => {
                          setCheckDelete(false);
                        }}
                      >
                        Delete
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
        {/* lock modal */}
        {checkLock && (
          <div className="z-[0]">
            <div
              className={`relative ${checkLock ? "z-[1]" : "z-[-1]"}`}
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div
                className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                  checkLock
                    ? "ease-out duration-300 opacity-100 "
                    : "ease-in duration-200 opacity-0"
                } `}
              ></div>

              <div
                className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                  checkLock
                    ? "ease-out duration-300 opacity-100 "
                    : "ease-in duration-200 opacity-0 "
                }`}
              >
                <div
                  className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                    checkLock
                      ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                      : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
                  }`}
                >
                  <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg
                            className="h-6 w-6 text-amber-500"
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
                              y={11}
                              width={18}
                              height={11}
                              rx={2}
                              ry={2}
                            />{" "}
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
                              Are you sure you want to lock? This user will be
                              block. You can unlock if click lock button.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className=" border-none inline-flex w-full justify-center rounded-md bg-amber-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-amber-500 sm:ml-3 sm:w-auto"
                        onClick={confirmLock}
                      >
                        Lock
                      </button>
                      <button
                        type="button"
                        className=" border-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setCheckLock(false)}
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
        {/* unlock modal */}
        {checkUnlock && (
          <div className="z-[0]">
            <div
              className={`relative ${checkUnlock ? "z-[1]" : "z-[-1]"}`}
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div
                className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                  checkUnlock
                    ? "ease-out duration-300 opacity-100 "
                    : "ease-in duration-200 opacity-0"
                } `}
              ></div>

              <div
                className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                  checkUnlock
                    ? "ease-out duration-300 opacity-100 "
                    : "ease-in duration-200 opacity-0 "
                }`}
              >
                <div
                  className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                    checkUnlock
                      ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                      : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
                  }`}
                >
                  <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg
                            className="h-6 w-6 text-amber-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {" "}
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            />{" "}
                            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
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
                              Are you sure you want to unlock this account? This
                              user will be unlock. You can lock if click lock
                              button.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className=" border-none inline-flex w-full justify-center rounded-md bg-amber-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-amber-500 sm:ml-3 sm:w-auto"
                        onClick={confirmUnlock}
                      >
                        Unlock
                      </button>
                      <button
                        type="button"
                        className=" border-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => {
                          setCheckUnlock(false);
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
        {/* success modal */}
        {checkSucccess && (
          <div
            className={`relative ${checkSucccess ? "z-10" : "z-[-1]"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            onClick={() => setCheckSuccess(false)}
          >
            <div
              className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                checkSucccess
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0"
              } `}
            ></div>

            <div
              className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                checkSucccess
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0 "
              }`}
            >
              <div
                className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0  ${
                  checkSucccess
                    ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                    : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
                }`}
              >
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-96">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                    <div className="sm:flex flex-col gap-4 sm:items-center">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-green-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 ">
                        <h3
                          className="text-base text-center font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Successful
                        </h3>
                        <div className="mt-2">
                          <p className=" text-gray-500 text-center">
                            Are you sure you want to delete? All of your data
                            will be permanently removed. This action cannot be
                            undone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </AdminLayout>
  );
}
