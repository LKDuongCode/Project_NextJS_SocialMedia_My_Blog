import Image from "next/image";
export default function SuggestForYou() {
  return (
    <div className="flex flex-col gap-5 px-10">
      <h1 className="font-mono font-bold text-xl text-stone-300 ">
        Suggestions for you
      </h1>
      <div className=" h-40 rounded-md relative text-white">
        <div className="flex gap-3 items-center mt-24 ml-5">
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
            <p className="font-bold">Duong</p>
            <p>@duogn1234</p>
          </div>
        </div>
        <Image
          src={
            "https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={""}
          fill
          className="rounded-md -z-10"
        ></Image>
      </div>
    </div>
  );
}
