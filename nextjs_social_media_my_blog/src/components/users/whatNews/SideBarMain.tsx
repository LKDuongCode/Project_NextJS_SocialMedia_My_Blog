export default function SideBarMain() {
  return (
    <div className=" w-1/6 flex flex-col fixed left-0 ">
      <div className="flex gap-3 p-4 hover:bg-[#9f9f9f67] rounded">
        <svg
          className="h-6 w-6 text-stone-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />{" "}
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <span className="font-mono font-bold text-xl text-stone-300">Home</span>
      </div>
      <hr className="border-1 h-0.5 border-stone-600" />
      <div className="flex gap-3 p-4 hover:bg-[#9f9f9f67] rounded">
        <svg
          className="h-6 w-6 text-stone-300"
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
          <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />{" "}
          <line x1={8} y1={9} x2={16} y2={9} />{" "}
          <line x1={8} y1={13} x2={14} y2={13} />
        </svg>

        <span className="font-mono font-bold text-xl text-stone-300">
          Messages
        </span>
      </div>
      <hr className="border-1 h-0.5 border-stone-600" />
      <div className="flex gap-3 p-4 hover:bg-[#9f9f9f67] rounded">
        <svg
          className="h-6 w-6 text-stone-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>

        <span className="font-mono font-bold text-xl text-stone-300">
          Bookmarks
        </span>
      </div>
      <hr className="border-1 h-0.5 border-stone-600" />
      <div className="flex gap-3 p-4 hover:bg-[#9f9f9f67] rounded">
        <svg
          className="h-6 w-6 text-stone-300"
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

        <span className="font-mono font-bold text-xl text-stone-300">
          Groups
        </span>
      </div>
      <hr className="border-1 h-0.5 border-stone-600" />
      <div className="flex gap-3 p-4 hover:bg-[#9f9f9f67] rounded">
        <svg
          className="h-6 w-6 text-stone-300"
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
          <circle cx={5} cy={19} r={1} /> <path d="M4 4a16 16 0 0 1 16 16" />{" "}
          <path d="M4 11a9 9 0 0 1 9 9" />
        </svg>

        <span className="font-mono font-bold text-xl text-stone-300">
          Followings
        </span>
      </div>
      <hr className="border-1 h-0.5 border-stone-600" />
      <div className="flex gap-3 p-4 hover:bg-[#9f9f9f67] rounded">
        <svg
          className="h-6 w-6 text-stone-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />{" "}
          <circle cx="8.5" cy={7} r={4} />{" "}
          <polyline points="17 11 19 13 23 9" />
        </svg>

        <span className="font-mono font-bold text-xl text-stone-300">
          Friends
        </span>
      </div>
      <hr className="border-1 h-0.5 border-stone-600" />
      <div className="flex gap-3 p-4 hover:bg-[#9f9f9f67] rounded">
        <svg
          className="h-6 w-6 text-stone-300"
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
          <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{" "}
          <line x1={13} y1={8} x2={15} y2={8} />{" "}
          <line x1={13} y1={12} x2={15} y2={12} />
        </svg>

        <span className="font-mono font-bold text-xl text-stone-300">
          My Profile
        </span>
      </div>
      <hr className="border-1 h-0.5 border-stone-600" />
      <div className="flex gap-3 p-4 hover:bg-[#9f9f9f67] rounded">
        <svg
          className="h-6 w-6 text-stone-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span className="font-mono font-bold text-xl text-stone-300">More</span>
      </div>
    </div>
  );
}
