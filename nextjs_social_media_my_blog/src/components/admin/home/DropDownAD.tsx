import React, { useState } from "react";

export default function DropDownAD() {
  let [checkChoose, setCheckChoose] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  //hàm xóa tick khi chọn phần tử khác
  let resetOther = (index: number) => {
    let newArray = checkChoose.map((item, idx) => {
      return idx === index;
    });
    setCheckChoose(newArray);
  };
  return (
    <>
      {/* điều chỉnh độ dài chiều cao của phần hiện ra thông qua div gần button nhất */}
      <div className="relative group/bouton  ">
        <button className="bg-stone-100 py-3 px-5 relative font-semibold bg-transparent border-transparent">
          <span className=" flex items-center justify-center   ">
            <svg
              className="h-8 w-8 text-slate-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="12" cy="12" r="10" />{" "}
              <line x1="2" y1="12" x2="22" y2="12" />{" "}
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </span>
        </button>

        {/* show */}
        <div className="absolute w-96 top-full right-auto bg-stone-50 origin-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
          {/* child */}
          <div
            className="relative w-full py-2 border-b border-t-transparent border-stone-200 hover:bg-stone-300 border-solid px-10 flex items-center justify-between"
            onClick={() => resetOther(0)}
          >
            <p className="text-xl">Vietnamese</p>
            {checkChoose[0] && (
              <svg
                className="h-8 w-8 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
          <div
            className="relative w-full py-2 border-b border-t-transparent border-stone-200 hover:bg-stone-300 border-solid px-10 flex items-center justify-between"
            onClick={() => resetOther(1)}
          >
            <p className="text-xl">EngLish</p>
            {checkChoose[1] && (
              <svg
                className="h-8 w-8 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
          <div
            className="relative w-full py-2 border-b border-t-transparent border-stone-200 hover:bg-stone-300 border-solid px-10 flex items-center justify-between"
            onClick={() => resetOther(2)}
          >
            <p className="text-xl">Russia</p>
            {checkChoose[2] && (
              <svg
                className="h-8 w-8 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
