"use client";
import { CombineType } from "@/interfaces/combineType";
import { User } from "@/interfaces/userType";
import { getUsers } from "@/services/users/getUsers.service";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function StatisticsAd() {
  //   lấy dữ liệu từ redux-------------------------------------------------
  const router = useRouter();
  let dispatch = useDispatch();
  let users: User[] = useSelector((state: CombineType) => {
    return state.users.data;
  });
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  //   let products: Product[] = useSelector((state: CombineType) => {
  //     return state.products.data;
  //   });
  //   useEffect(() => {
  //     dispatch(fetchProducts());
  //   }, []);
  //   //lấy dữ liệu từ redux------------------------------------------------

  let [topUser, setTopUser] = useState<User[]>([]);
  useEffect(() => {
    let usersFound = users.filter((user: User) => user.role !== "admin");
    let arr = usersFound.slice(0, 5);
    setTopUser(arr);
  }, [users]);

  return (
    <>
      <div className="grid grid-cols-[1fr,1fr,1fr,2fr]  mt-4 gap-2 p-5 grid-rows-[1fr 1fr] grid-flow-row ">
        <div className="shadow-md p-2 flex flex-col gap-5">
          <p className="font-semibold text-center ">Total Groups</p>
          <div className="flex items-center justify-center gap-5">
            <p className="bg-indigo-100 rounded-full w-max flex justify-center items-center p-2">
              <svg
                className="h-8 w-8 text-indigo-500"
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
            </p>
            <h2 className="text-2xl font-bold">200</h2>
          </div>
        </div>
        <div className="shadow-md p-2 flex flex-col gap-5">
          <p className="font-semibold text-center ">Total Users</p>
          <div className="flex items-center justify-center gap-5">
            <p className="bg-indigo-100 rounded-full w-max flex justify-center items-center p-2">
              <svg
                className="h-8 w-8 text-indigo-500"
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
            </p>
            <h2 className="text-2xl font-bold">{users.length}</h2>
          </div>
        </div>
        <div className="shadow-md p-2 flex flex-col gap-5">
          <p className="font-semibold text-center ">Total Posts</p>
          <div className="flex items-center justify-center gap-5">
            <p className="bg-indigo-100 rounded-full w-max flex justify-center items-center p-2">
              <svg
                className="h-8 w-8 text-indigo-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </p>
            <h2 className="text-2xl font-bold">4163</h2>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg row-span-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  username
                </th>
                <th scope="col" className="px-6 py-3">
                  created
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
              </tr>
            </thead>
            <tbody>
              {topUser.map((user: User, index: number) => {
                return (
                  <tr
                    className="odd:bg-white even:bg-gray-50  border-b"
                    key={user.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{user.userName}</td>
                    <td className="px-6 py-4">{user.create_at}</td>
                    <td className="px-6 py-4 truncate">{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="shadow-md col-span-3 bg-[url('https://www.technocrazed.com/wp-content/uploads/2015/12/HD-purple-wallpaper-image-to-use-as-background-121.jpg')] p-5 rounded-b-lg flex flex-col gap-4 bg-cover">
          <h1 className="text-white">Attention Notices</h1>
          <p className="text-white">
            Includes the latest information about updated versions,
            corrections,...
          </p>
          <div>
            <p
              onClick={() => router.push("/Privacy_Policy")}
              className="
    
            font-semibold
            text-sm
            leading-5
            rounded-[0.375rem]
            px-[32px]
            py-[6px]
          bg-[#24006C]
          text-white
          border-[#484BFC]
          hover:bg-[#484BFC]
          border-solid
            h-max 
            w-max
            float-right
          "
            >
              Go to about us
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
