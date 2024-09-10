"use client";
import Image from "next/image";
export default function StoriesOthers() {
  return (
    <>
      <div className="flex gap-5 h-52 ">
        <div className="relative h-full w-40 border-[#656565] border-2 border-solid rounded text-white">
          <div className="h-2/3 bg-red-300 rounded-t-md relative">
            <Image
              src={
                "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={""}
              fill
              className="rounded-t-md"
            ></Image>
          </div>
          <div className="flex  flex-col items-center justify-center mt-2">
            <svg
              className="h-6 w-6 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx={12} cy={12} r={10} />{" "}
              <line x1={12} y1={8} x2={12} y2={16} />{" "}
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>

            <p className="text-xl font-mono font-semibold">Add story</p>
          </div>
        </div>
        <div className="relative h-full w-40 ">
          <Image
            src={
              "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={""}
            fill
            className="rounded"
          ></Image>
        </div>
        <div className="relative h-full w-40 ">
          <Image
            src={
              "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={""}
            fill
            className="rounded"
          ></Image>
        </div>
        <div className="relative h-full w-40 ">
          <Image
            src={
              "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={""}
            fill
            className="rounded"
          ></Image>
        </div>
      </div>
    </>
  );
}
