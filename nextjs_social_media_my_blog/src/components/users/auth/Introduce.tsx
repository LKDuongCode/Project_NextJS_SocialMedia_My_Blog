"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Introduce() {
  const router = useRouter();
  return (
    <div className="w-1/2 h-screen flex flex-col gap-20 pt-14">
      <div className="p-5 flex flex-col gap-5">
        <div className="flex  items-center gap-5 mb-5">
          <p className="relative size-16">
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/nextjs-lekhanhduong.appspot.com/o/logo%20and%20banner%2Flogo.webp?alt=media&token=86da9e89-1d1c-418b-8c72-c0a03051f506"
              }
              alt={"logo"}
              fill
              className="rounded-full"
            ></Image>
          </p>
          <p className="text-3xl font-bold  text-violet-100">My Blog</p>
        </div>
        <div className="pl-8 flex flex-col gap-10">
          <div className="flex gap-2">
            <div className="p-1 rounded-full  bg-[#ffc267cd] w-max h-max flex justify-center items-center">
              <svg
                className="size-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-violet-100">
                Effortless Content Discovery
              </p>
              <div>
                <p className="text-violet-100">
                  Readers can easily navigate your blog and find articles that
                  interest them with a clean and intuitive interface.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="p-1 rounded-full  bg-[#ffc267cd] w-max h-max flex justify-center items-center">
              <svg
                className="size-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-violet-100">
                Tailored Reading Experience
              </p>
              <div>
                <p className="text-violet-100">
                  Personalized content suggestions based on the reader's
                  previous interactions and reading preferences.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="p-1 rounded-full  bg-[#ffc267cd] w-max h-max flex justify-center items-center">
              <svg
                className="size-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-violet-100">
                Secure and Trustworthy Platform
              </p>
              <div>
                <p className="text-violet-100">
                  Robust security features, including encryption and privacy
                  safeguards, ensure a safe and protected reading experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="flex items-center gap-2  absolute top-2 left-5 " href={"/"}>
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
      </a>
      <div className="flex gap-5  text-slate-200 bg-[#333333b1] w-max rounded p-5 ml-20 justify-center items-center">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Term & Conditions
        </a>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
      </div>
    </div>
  );
}
