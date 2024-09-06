"use client";
import { CombineType } from "@/interfaces/combineType";
import { User } from "@/interfaces/userType";
import { getUsers } from "@/services/users/getUsers.service";
import { validateEmail } from "@/utils/validateEmail";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function AdminLogin() {
  const router = useRouter();

  //state alert validate----------------------------------------
  let [validateForm, setValidateForm] = useState<any>({
    empty: false,
    wrongEmailOrPass: false,
    existAcc: false,
  });
  let [checkSucccess, setCheckSuccess] = useState<boolean>(false);
  //state alert validate----------------------------------------

  // Lấy danh sách users về từ Redux store------------------------------------
  let users = useSelector((state: CombineType) => state.users.data);
  const dispatch = useDispatch();
  useEffect(() => {
    // Chỉ gọi fetchUsers một lần khi component được mount
    dispatch(getUsers());
  }, []);
  // Lấy danh sách users về từ Redux store------------------------------------

  // Tạo state kiểm soát trạng thái đăng nhập người dùng
  let [currentAdmin, setCurrentAdmin] = useState<any>({
    email: "",
    password: "",
    role: true,
  });

  // Hàm xử lý đăng nhập------------------------------------------------------------
  const handleLoginAdmin = () => {
    //validate trống
    if (currentAdmin.email === "" || currentAdmin.password === "") {
      setValidateForm((pre: any) => ({
        ...pre,
        empty: true,
      }));
      return;
    }

    //validate format email
    if (!validateEmail(currentAdmin.email)) {
      setValidateForm((pre: any) => ({
        ...pre,
        wrongEmailOrPass: true,
      }));
      return;
    }
    // validate tồn tại
    let userFound = users.find((user: User) => {
      return user.email === currentAdmin.email && user.role === "admin";
    });
    if (!userFound) {
      setValidateForm((pre: any) => ({
        ...pre,
        existAcc: true,
      }));
      return;
    }

    //validate password
    if (userFound.password !== currentAdmin.password) {
      setValidateForm((pre: any) => ({
        ...pre,
        wrongEmailOrPass: true,
      }));
      return;
    }

    //lưu vào local
    // localStorage.setItem(
    //   "curAdmin",
    //   JSON.stringify({ email: currentAdmin.email, role: currentAdmin.role })
    // );
    // setCheckSuccess(true);
    // setTimeout(() => {
    //   setCheckSuccess(false);
    //   navigate("/adminHome");
    // }, 1500);
    console.log("thành công");
  };
  // Hàm xử lý đăng nhập------------------------------------------------------------

  return (
    <section className="relative">
      <p className="flex items-center gap-2  absolute top-14 left-8 z-20">
        <svg
          onClick={() => {
            router.push("/");
          }}
          className="h-10 w-10 text-[#ffb649] p-1 border-solid border-2 border-[#ffb649] bg-[#333333d5] rounded-full hover:text-white hover:border-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />{" "}
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span className="font-semibold text-lg text-white">Go Home</span>
      </p>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 gap-5 relative z-10">
        <div className="flex items-center">
          <a href="https://flowbite.com" className="size-20 relative mr-52">
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/nextjs-lekhanhduong.appspot.com/o/logo%20and%20banner%2Flogo.webp?alt=media&token=86da9e89-1d1c-418b-8c72-c0a03051f506"
              }
              alt={"logo"}
              fill
              className="rounded-full "
            ></Image>
          </a>
          <span className=" text-5xl font-semibold text-white absolute w-max ml-24">
            My Blog
          </span>
        </div>

        <div className="w-full  rounded-lg shadow max-w-xl bg-[#33333374] border-gray-500 border  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              ADMIN LOGIN
            </h1>
            {/* main form */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  onClick={() =>
                    setValidateForm((pre: any) => ({
                      ...pre,
                      wrongEmailOrPass: false,
                      empty: false,
                      existAcc: false,
                    }))
                  }
                  onChange={(e) =>
                    setCurrentAdmin((prevUser: any) => ({
                      ...prevUser,
                      email: e.target.value,
                    }))
                  }
                  value={currentAdmin.email}
                  type="text"
                  name="adminID"
                  className="bg-gray-50 border-transparent focus:border-[#bc78ff81] focus:border-2 boder-solid text-gray-900 rounded-lg  block w-full p-2.5 h-12 text-base"
                  placeholder="admin@code.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  value={currentAdmin.password}
                  onClick={() =>
                    setValidateForm((pre: any) => ({
                      ...pre,
                      wrongEmailOrPass: false,
                      empty: false,
                      existAcc: false,
                    }))
                  }
                  onChange={(e) =>
                    setCurrentAdmin((prePass: any) => ({
                      ...prePass,
                      password: e.target.value,
                    }))
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="• • • • • •"
                  className="bg-gray-50 border-transparent focus:border-[#bc78ff81] focus:border-2 boder-solid text-gray-900 rounded-lg block w-full p-2.5 h-12  font-extrabold text-2xl"
                />
                {validateForm.empty && (
                  <p className="text-red-500 font-medium text-sm bg-red-100 px-2 mt-3">
                    Fields cannot be empty !
                  </p>
                )}
                {validateForm.wrongEmailOrPass && (
                  <p className="text-red-500 font-medium text-sm bg-red-100 px-2 mt-3">
                    Email or password is wrong !
                  </p>
                )}
                {validateForm.existAcc && (
                  <p className="text-red-500 font-medium text-sm bg-red-100 px-2 mt-3">
                    Account is not exist !
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300 "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                className="w-full text-[#fff] bg-[#ffbc58] focus:ring-4 focus:outline-none focus:ring-[#fbc87b76] font-medium rounded-lg text-sm px-5 py-2.5 text-center border-transparent "
                onClick={handleLoginAdmin}
              >
                Go to Dashboard
              </button>
              <p className="text-sm font-light text-[#fff]">
                Haven't admin account?{" "}
                <a
                  href={"/terms"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Our terms and conditions
                </a>
              </p>
            </div>
            {/* main form */}
          </div>
        </div>
      </div>
      {/* success modal */}
      {/* {checkSucccess && (
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
                    Logged in successfully
                  </h3>
                  <div className="mt-2">
                    <p className=" text-gray-500 text-center">
                      Going to the home page....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )} */}
      <Image
        src={"/background-admin-login.webp"}
        alt={""}
        fill
        className="absolute"
      ></Image>
    </section>
  );
}
