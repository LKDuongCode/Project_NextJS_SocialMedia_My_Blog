"use client";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../page";
import { CombineType } from "@/interfaces/combineType";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPosts } from "@/services/posts/getPosts.service";
import { Post } from "@/interfaces/postType";
import { searchUserById } from "@/utils/searchDependOnId";
import { getUsers } from "@/services/users/getUsers.service";
import { User } from "@/interfaces/userType";
import { calculateTotalReactionsLength } from "@/utils/calculateSumReactions";
import { hideAPost, showAPost } from "@/services/posts/hideShow_posts.service";

export default function PostsManage() {
  const router = useRouter();
  const dispatch = useDispatch();
  // state quản lí mở đóng form-------------------------------------------
  const [checkSucccess, setCheckSuccess] = useState<boolean>(false);
  const [checkAddForm, setCheckAddForm] = useState<boolean>(false);
  const [checkDelete, setCheckDelete] = useState<boolean>(false);
  const [checkHide, setCheckHide] = useState<boolean>(false);
  const [checkShow, setCheckShow] = useState<boolean>(false);
  // state quản lí mở đóng form-------------------------------------------

  const posts = useSelector((state: CombineType) => state.posts.data);
  const users = useSelector((state: CombineType) => state.users.data);
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);

  // ẩn và hiện bài đăng -------------------------------------------------------------------

  //state lưu lại id đối tượng cần ẩn và id đối tượng được mở
  const [postIdToHide, setPostIdToHide] = useState<number>(0);
  const [postIdToShow, setPostIdToShow] = useState<number>(0);
  const handleHide = (id: number) => {
    setPostIdToHide(id);
    setCheckHide(true);
  };
  const confirmHide = () => {
    if (postIdToHide !== 0) {
      dispatch(hideAPost(postIdToHide));
    }
    setCheckHide(false);
  };
  //mở khóa
  const handleShow = (id: number) => {
    setPostIdToShow(id);
    setCheckShow(true);
  };
  const confirmShow = () => {
    if (postIdToShow !== 0) {
      dispatch(showAPost(postIdToShow));
    }
    setCheckShow(false);
  };
  // ẩn và hiện bài đăng -------------------------------------------------------------------
  return (
    <AdminLayout>
      <>
        <section className="rounded-md bg-white py-4 shadow-default mt-24 px-5 border-spacing-2 border-stone-300 border-solid mx-5 w-full ml-10">
          <div className=" font-semibold bg-indigo-500 px-5 pt-5 rounded-t-md text-white flex justify-between items-center py-5">
            <h2 className="text-2xl font-bold">Posts Management</h2>
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
              //   onClick={() => setCheckAddForm(true)}
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
                  Posts's Name
                </th>

                <th
                  scope="col"
                  className=" font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Posted By
                </th>
                <th
                  scope="col"
                  className=" font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Display
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
                  Interactions
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
              {posts?.map((post: Post, index: number) => {
                return (
                  <tr
                    className={`${
                      (index + 1) % 2 === 0 ? "bg-white" : "bg-gray-100"
                    } border-b`}
                    key={post.id}
                  >
                    <td className="px-6  whitespace-nowrap  font-medium text-gray-900 ">
                      {index + 1}
                    </td>
                    <td className=" text-gray-900  px-6  whitespace-nowrap truncate max-w-60 py-5">
                      {post.content.title}
                    </td>
                    <td className=" text-gray-900  px-6 whitespace-nowrap  ">
                      <div className="flex gap-2 items-center">
                        <p className="rounded-full size-12">
                          <img
                            src={searchUserById(post.user_id, users)?.avatar}
                            alt=""
                            className="size-full rounded-full"
                          />
                        </p>
                        <p className="max-w-28 truncate">
                          {searchUserById(post.user_id, users)?.name}
                        </p>
                      </div>
                    </td>
                    <td className=" text-gray-900  px-6  whitespace-nowrap">
                      {post.display ? (
                        <p className="text-blue-400 font-mono font-semibold bg-blue-200 w-max px-2">
                          Shown
                        </p>
                      ) : (
                        <p className="text-red-400 font-mono font-semibold bg-red-200 w-max px-2">
                          Hided
                        </p>
                      )}
                    </td>
                    <td className=" text-gray-900  px-6  whitespace-nowrap">
                      {post.create_at}
                    </td>
                    <td className=" text-gray-900  px-6 whitespace-nowrap  ">
                      <div className="flex flex-col">
                        <span className="text-sm text-amber-500 font-mono font-bold">
                          {" "}
                          {calculateTotalReactionsLength(
                            post.engagement.reactions
                          )}{" "}
                          reactions
                        </span>
                        <span className="text-sm text-blue-500 font-medium">
                          {" "}
                          {post.engagement.shares.length} shares
                        </span>
                      </div>
                    </td>
                    <td className=" text-gray-900  px-6 whitespace-nowrap">
                      {post.display && (
                        <button
                          onClick={() => handleHide(post.id)}
                          className="
                             border-2 border-blue-400
                font-semibold
                text-xs  px-4
                leading-4
                rounded
                text-blue-400
                py-0.5
                bg-transparent
                h-max
                mr-2
     
                hover:bg-blue-200
              "
                        >
                          <svg
                            className="size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                      )}
                      {!post.display && (
                        <button
                          onClick={() => handleShow(post.id)}
                          className="
                          border-2 border-red-400
                font-semibold
                text-xs  px-4
                leading-4
                rounded
                text-red-400
                py-0.5
                bg-transparent
                h-max
                mr-2
   
                hover:bg-red-200
              "
                        >
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                          </svg>
                        </button>
                      )}

                      <button
                        //   onClick={() => handleCheckAcc(user.id)}
                        className="
                           border-2 border-green-400
                font-semibold
                text-xs
                leading-4
                rounded
                bg-transparent
                h-max
                px-4
                py-0.5
                mr-2
                text-green-400
                hover:bg-green-200
        
              "
                      >
                        <svg
                          className="size-6 "
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
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
        {checkHide && (
          <div className="z-[0]">
            <div
              className={`relative ${checkHide ? "z-[1]" : "z-[-1]"}`}
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div
                className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                  checkHide
                    ? "ease-out duration-300 opacity-100 "
                    : "ease-in duration-200 opacity-0"
                } `}
              ></div>

              <div
                className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                  checkHide
                    ? "ease-out duration-300 opacity-100 "
                    : "ease-in duration-200 opacity-0 "
                }`}
              >
                <div
                  className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                    checkHide
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
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
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
                        onClick={confirmHide}
                      >
                        Lock
                      </button>
                      <button
                        type="button"
                        className=" border-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setCheckHide(false)}
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
        {checkShow && (
          <div className="z-[0]">
            <div
              className={`relative ${checkShow ? "z-[1]" : "z-[-1]"}`}
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div
                className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                  checkShow
                    ? "ease-out duration-300 opacity-100 "
                    : "ease-in duration-200 opacity-0"
                } `}
              ></div>

              <div
                className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                  checkShow
                    ? "ease-out duration-300 opacity-100 "
                    : "ease-in duration-200 opacity-0 "
                }`}
              >
                <div
                  className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                    checkShow
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
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
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
                        onClick={confirmShow}
                      >
                        Unlock
                      </button>
                      <button
                        type="button"
                        className=" border-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => {
                          setCheckShow(false);
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
