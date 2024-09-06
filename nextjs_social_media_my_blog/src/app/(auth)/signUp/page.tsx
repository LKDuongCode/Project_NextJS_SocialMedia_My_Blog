"use client";

import Introduce from "@/components/users/auth/Introduce";
import { validateEmail } from "@/utils/validateEmail";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SignUp() {
  const router = useRouter();
  //state quản lí alert-------------------------------------------------------------
  let [checkSucccess, setCheckSuccess] = useState<boolean>(false);
  let [validateForm, setValidateForm] = useState<any>({
    empty: false,
    existEmail: false,
    emailFormat: false,
    passFormat: false,
    passMatch: false,
  });
  //state quản lí alert-------------------------------------------------------------

  //lấy dữ liệu từ người dùng-------------------------------------------------------
  let [curSignUp, setCurSignUp] = useState<any>({
    email: "",
    password: "",
    coPassword: "",
    role: false,
  });

  const handleGetInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCurSignUp((pre: any) => ({
      ...pre,
      [name]: value,
    }));
  };
  //lấy dữ liệu từ người dùng-------------------------------------------------------

  //hàm xử lí đăng kí--------------------------------------------------------------------------
  const handleSignUp = () => {
    //validate trường trống
    if (
      curSignUp.email === "" ||
      curSignUp.coPassword === "" ||
      curSignUp.password === ""
    ) {
      setValidateForm((pre: any) => ({
        ...pre,
        empty: true,
      }));
      return;
    }

    //validate format email
    if (!validateEmail(curSignUp.email)) {
      setValidateForm((prev: any) => ({
        ...prev,
        emailFormat: true,
      }));
      return;
    }

    //validate email đã tồn tại
    // let userFound = users.find(
    //   (user: User) => user.email === curSignUp.email && user.role === false
    // );
    // if (userFound) {
    //   setValidateForm((prev: any) => ({
    //     ...prev,
    //     existEmail: true,
    //   }));
    //   return;
    // }
    //validate trùng mật khảu
    if (curSignUp.password !== curSignUp.coPassword) {
      setValidateForm((prev: any) => ({
        ...prev,
        passMatch: true,
      }));
      return;
    }

    //thành công
    let newAcc: any = {
      user_name: "newAcc",
      email: curSignUp.email,
      password: curSignUp.password,
      role: false,
      carts: [],
      favorites: [],
      status: true,
      full_name: "newAcc fullname",
      avata: "https://vectorified.com/images/unknown-avatar-icon-6.jpg",
      phone: "unknow",
      address: "unknow",
      created_at: new Date().toDateString(),
      updated_at: "",
    };
    console.log(newAcc);
    // dispatch(addToUsers(newAcc));
    // navigate("/usersLogin", { state: curSignUp });
  };

  //hàm xử lí đăng kí--------------------------------------------------------------------------
  return (
    <>
      <div>
        <div className="relative flex z-10">
          {/* introduce */}
          <Introduce></Introduce>
          {/* introduce */}

          {/* form */}
          <div className="w-1/2 flex flex-col justify-center h-screen  px-16  ">
            <div className="w-full rounded-lg ">
              <div className="p-7 bg-[#33333345] rounded-lg flex flex-col gap-6 shadow-md border border-solid border-slate-500">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-[#FBC77B] md:text-2xl ">
                  Create your free Account
                </h1>

                <div className="flex gap-5 justify-center">
                  <div className="flex flex-1 gap-2 border-[1px] border-[#ebebed] border-solid bg-white justify-center p-2 rounded-lg items-center hover:bg-[#eff0f1]">
                    <img
                      src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK"
                      alt=""
                      className="size-6"
                    />
                    <a
                      href="https://accounts.google.com/v3/signin/identifier?ifkv=AdF4I76HAiGjHKkRlukE5zv5_oxb3XpFVf9jBE5zFEm9D9b_WyI8tjSZKH2Q3JI7uZ7WxELEwsOF&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S252026102%3A1720517430247276&ddm=0"
                      className="text-black"
                    >
                      Sign up with Google
                    </a>
                  </div>
                  <div className="flex flex-1 gap-2 bg-white hover:bg-[#eff0f1]  border-[1px] border-[#ebebed] border-solid justify-center p-2 rounded-lg items-center">
                    <svg
                      className="w-6 h-6 text-gray-800 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                    </svg>
                    <a href="https://www.icloud.com/" className="text-black">
                      Sign up with Apple
                    </a>
                  </div>
                </div>

                <div className="flex gap-1 items-center">
                  <div className="border-t-[#F1F2F4] border-b-transparent border-x-transparent border-[2px] border-solid  flex-1"></div>
                  <div className="w-max px-2 text-[#FBC77B]">or</div>
                  <div className="border-t-[#F1F2F4] border-b-transparent border-x-transparent border-solid border-[2px] flex-1"></div>
                </div>
                {/* main form */}
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Your email
                    </label>
                    <input
                      onChange={handleGetInfo}
                      onClick={() =>
                        setValidateForm({
                          empty: false,
                          existEmail: false,
                          emailFormat: false,
                          passFormat: false,
                          passMatch: false,
                        })
                      }
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border-transparent text-gray-900 rounded-lg  block w-full p-2.5 h-12 text-base"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Password
                    </label>
                    <input
                      onChange={handleGetInfo}
                      onClick={() =>
                        setValidateForm({
                          empty: false,
                          existEmail: false,
                          emailFormat: false,
                          passFormat: false,
                          passMatch: false,
                        })
                      }
                      type="text"
                      name="password"
                      id="password"
                      placeholder="• • • • • "
                      className="bg-gray-50 border-transparent focus:border-[#bc78ff81] focus:border-2 boder-solid text-gray-900 rounded-lg block w-full p-2.5 h-12  text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      onChange={handleGetInfo}
                      onClick={() =>
                        setValidateForm({
                          empty: false,
                          existEmail: false,
                          emailFormat: false,
                          passFormat: false,
                          passMatch: false,
                        })
                      }
                      type="text"
                      name="coPassword"
                      placeholder="• • • • • "
                      className="bg-gray-50 border-transparent focus:border-[#bc78ff81] focus:border-2 boder-solid text-gray-900 rounded-lg block w-full p-2.5 h-12  text-base"
                    />
                    {validateForm.empty && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2 mt-3">
                        Information fields cannot be empty !
                      </p>
                    )}
                    {validateForm.passMatch && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2 mt-3">
                        Passwords do not match !
                      </p>
                    )}
                    {validateForm.passFormat && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2 mt-3">
                        Password must be at least 8 characters, including
                        uppercase letters, lowercase letters, numbers, and
                        special characters.
                      </p>
                    )}
                    {validateForm.emailFormat && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2 mt-3">
                        email is in wrong format
                      </p>
                    )}
                    {validateForm.existEmail && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2 mt-3">
                        Email already exists
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          By signing up, you are creating a Duong's Shop
                          account, and you agree to{" "}
                          <a href="#" className="font-semibold">
                            our Terms of Use
                          </a>{" "}
                          and
                          <a href="" className="font-semibold">
                            {" "}
                            Privacy Policy
                          </a>
                          .
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full text-white bg-[#FFB649] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-[#ffb6498e] font-medium rounded-lg text-sm px-5 py-2.5 text-center border-transparent "
                    onClick={handleSignUp}
                  >
                    Register Now
                  </button>
                  <p className="text-sm font-light text-gray-200 bg-[#3333336d]">
                    Already have an account?{" "}
                    <span
                      onClick={() => router.push("/login")}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign in here
                    </span>
                  </p>
                </div>
                {/* main form */}
              </div>
            </div>
          </div>
          {/* form */}
        </div>
        <Image
          src={"/background-user-auth.webp"}
          alt={""}
          fill
          className="absolute"
        ></Image>
      </div>
      {/* success modal */}
      {checkSucccess && (
        <div
          className={`relative ${checkSucccess ? "z-50" : "z-0"}`}
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
                        Sign Up Success
                      </h3>
                      <div className="mt-2">
                        <p className=" text-gray-500 text-center">
                          Now you can log in and experience our best
                          services....
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
  );
}
