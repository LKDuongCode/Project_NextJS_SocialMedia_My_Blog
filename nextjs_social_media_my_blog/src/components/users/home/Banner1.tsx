import Image from "next/image";
import { relative } from "path";
import { useEffect, useState } from "react";
export default function Banner1() {
  return (
    <div className={`h-[700px] flex justify-center items-center relative`}>
      <div className="w-1/2 text-white flex flex-col gap-5 z-10">
        <h1 className="font-bold text-6xl text-center">
          Bring Your Thoughts and Creativity to Life !
        </h1>
        <p className="text-xl text-center bg-[#33333357] p-5 rounded-md">
          Share your voice with the world. Harness the power of intuitive design
          and smart features to publish, manage, and grow your blog
          effortlessly.
        </p>
        <div className="flex items-center lg:order-2 gap-5 justify-center">
          <a
            href="#"
            className=" bg-[#FBC77B] focus:ring-4 focus:ring-[#fde6c2] font-medium rounded text-base  px-8 py-4 mr-2 border-solid border-2 border-[#ffffff72] text-[#333] hover:mb-5"
          >
            What's new ?
          </a>
          <a
            href="#"
            className="text-white border-solid border-2 border-[#ffffff75] bg-[#333]  focus:ring-4 focus:ring-[#fde6c2] font-medium rounded text-base px-8 py-4 mr-2 hover:mb-5"
          >
            Learn More
          </a>
        </div>
      </div>
      <Image
        src={"/bannerHome1.webp"}
        alt={"banner1"}
        fill
        className="absolute"
      ></Image>
    </div>
  );
}
