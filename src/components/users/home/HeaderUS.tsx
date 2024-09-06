import React from "react";
import Image from "next/image";
export default function HeaderUS() {
  return (
    <section className="fixed w-full">
      <header>
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
              <span className="pl-14 text-xl font-semibold text-white absolute w-max">
                My Blog
              </span>
            </a>
            <div className="flex items-center lg:order-2 gap-5">
              <a
                href="#"
                className=" bg-[#FBC77B] focus:ring-4 focus:ring-[#fde6c2] font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-white border-solid border-2 border-[#FBC77B]  focus:ring-4 focus:ring-[#fde6c2] font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Sign up
              </a>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-[#fbc77b] rounded  lg:bg-transparent  lg:p-0 "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 hover:text-[#fbc77b] text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 "
                  >
                    Top Authors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 hover:text-[#fbc77b] text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 "
                  >
                    Latest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 hover:text-[#fbc77b] text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 "
                  >
                    Topic
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 hover:text-[#fbc77b] text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 "
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 hover:text-[#fbc77b] text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 "
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
}
