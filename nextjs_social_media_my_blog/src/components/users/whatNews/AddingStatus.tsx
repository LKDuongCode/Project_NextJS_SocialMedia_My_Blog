import { CombineType } from "@/interfaces/combineType";
import { User } from "@/interfaces/userType";
import { addToPosts } from "@/services/posts/addPosts";
import { getPosts } from "@/services/posts/getPosts.service";
import { getUsers } from "@/services/users/getUsers.service";
import { getCurrentDateFormatted } from "@/utils/generateDateFormat";
import { userTemplate } from "@/utils/templateUser";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddingStatus() {
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

  // todo : đăng status---------------------------
  const tempalateWritingStatus = {
    create_at: getCurrentDateFormatted(),
    user_id: curUserLogin.id,
    content: {
      title: "",
      media: {
        type: "none",
        url: "",
      },
    },
    status: "public",
    engagement: {
      shares: [],
      reactions: {
        like: [],
        love: [],
        wow: [],
        sad: [],
        angry: [],
      },
    },
  };
  const [writingStatus, setWritingStatus] = useState<any>(
    tempalateWritingStatus
  );
  // vì lần đầu id = 0 => cần lấy id sau khi đăng nhập
  useEffect(() => {
    setWritingStatus((prevStatus: any) => ({
      ...prevStatus,
      user_id: curUserLogin.id,
    }));
  }, [curUserLogin]);

  // Cập nhật dữ liệu người dùng nhập vào
  const handleStatus = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Sử dụng split để tách các key nếu name chứa dấu '.'
    const keys = name.split(".");

    // Tạo một bản sao của writingStatus
    setWritingStatus((prevStatus: any) => {
      let updatedStatus = { ...prevStatus };

      // Truy cập và cập nhật giá trị tương ứng
      keys.reduce((acc, key, idx) => {
        if (idx === keys.length - 1) {
          acc[key] = value;
        } else {
          if (!acc[key]) {
            acc[key] = {};
          }
          return acc[key];
        }
      }, updatedStatus);

      return updatedStatus;
    });
  };

  // hàm đăng status
  const handlePost = () => {
    dispatch(addToPosts(writingStatus));
    alert("post success !");
    handleDeleteText();
  };
  // todo : đăng status---------------------------

  // todo : xóa nội dung nhập--------------------------------------
  const handleDeleteText = () => {
    setWritingStatus(tempalateWritingStatus);
  };
  // todo : xóa nội dung nhập--------------------------------------
  return (
    <div className="bg-[#78797a6e] p-5 rounded flex flex-col gap-5">
      <div className="bg-[#eee3] rounded p-3">
        <textarea
          name="content.title"
          id=""
          value={writingStatus.content.title}
          onChange={handleStatus}
          className="w-full text-lg outline-none rounded h-14 bg-transparent text-[#eee] placeholder-[#eeeeeea2]"
          placeholder="What do you think..."
        ></textarea>
        <div className="flex justify-between">
          <div className="flex gap-5">
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
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />{" "}
              <circle cx="8.5" cy="8.5" r="1.5" />{" "}
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <svg
              className="h-6 w-6 text-stone-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              className="h-6 w-6 text-stone-400"
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
              <circle cx={6} cy={17} r={3} /> <circle cx={16} cy={17} r={3} />{" "}
              <polyline points="9 17 9 4 19 4 19 17" />{" "}
              <line x1={9} y1={8} x2={19} y2={8} />
            </svg>
            <svg
              className="h-6 w-6 text-stone-400"
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
              <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
            </svg>
            <svg
              className="h-6 w-6 text-stone-400"
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
              <circle cx={12} cy={12} r={9} />{" "}
              <line x1={9} y1={9} x2="9.01" y2={9} />{" "}
              <line x1={15} y1={9} x2="15.01" y2={9} />{" "}
              <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
            </svg>
          </div>
          {writingStatus.content.title !== "" && (
            <div onClick={handleDeleteText}>
              <svg
                className="h-6 w-6 text-red-300"
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
          )}
        </div>
      </div>
      {writingStatus.content.title !== "" && (
        <div className="flex justify-end gap-5">
          <select
            name="status"
            className="bg-[#eee] rounded border-2 border-[#72727271] text-[#333]"
            id=""
            defaultValue={writingStatus.status}
            onChange={handleStatus}
          >
            <option value="pub">Public</option>
            <option value="pri">Private</option>
            <option value="fri">Friend</option>
          </select>
          <button
            className="bg-[#FBC77B] rounded px-4 py-1 font-semibold text-[#333]"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      )}
    </div>
  );
}
