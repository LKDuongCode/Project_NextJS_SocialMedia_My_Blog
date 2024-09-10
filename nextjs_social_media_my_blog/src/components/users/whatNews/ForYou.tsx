import Image from "next/image";
import ContactPersons from "./ContactPersons";
import SuggestForYou from "./SuggestForYou";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "@/services/users/getUsers.service";
import { CombineType } from "@/interfaces/combineType";
import { searchUsersByName } from "@/utils/searchDependOnId";
import { User } from "@/interfaces/userType";

export default function ForYou() {
  // todo :Lấy  từ Redux store------------------------------------
  const dispatch = useDispatch();
  let users = useSelector((state: CombineType) => state.users.data);
  useEffect(() => {
    // Chỉ gọi fetchUsers một lần khi component được mount
    dispatch(getUsers());
  }, []);

  const [usersFounded, setUsersFounded] = useState<User[]>([]);
  //không sử dụng giá trị của state này, giá trị của nó chỉ đóng vai trò re-render, giá trị truyền sang để lọc thì dùng e.value trực tiếp vì lúc đầu mới change thì giá trị của state này chậm một nhịp.
  const [searchChange, setSearchChange] = useState<string>("");
  const handleSearchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueGot = e.target.value;
    setSearchChange(valueGot);
    setUsersFounded(searchUsersByName(valueGot, users));
  };
  return (
    <div className=" w-2/6 fixed right-0 flex flex-col gap-5 rounded py-5 bg-[#333] h-max pb-28 ">
      {/* ///search----- */}
      <div>
        <div className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-stone-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={handleSearchUsers}
              className="block w-full p-4 ps-10 text-sm  border  rounded-lg    bg-[#515152] border-gray-600 placeholder-gray-400 text-white focus:ring-stone-300 focus:border-stone-500"
              placeholder="Search someone..."
            />
          </div>
        </div>
      </div>
      {/* dropdown */}
      {searchChange !== "" && (
        <div className="bg-[#494949] text-[#eeeeeeca]  w-[448px] mx-auto rounded flex flex-col gap-2 p-3 absolute top-20 left-8 z-10 min-h-11 max-h-52 overflow-y-scroll ">
          {usersFounded.length !== 0 ? (
            usersFounded?.map((user: User) => {
              return (
                <div className="flex gap-3 items-center border-b pb-2 border-b-stone-400">
                  <div className="relative size-12 rounded-full">
                    <Image
                      src={
                        "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt={""}
                      fill
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div>
                    <p className="font-bold">{user.name}</p>
                    <p>@{user.userName}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <span className="text-center">Not found '{searchChange}'</span>
          )}
        </div>
      )}
      {/* ///search----- */}

      <ContactPersons></ContactPersons>
      <SuggestForYou></SuggestForYou>
    </div>
  );
}
