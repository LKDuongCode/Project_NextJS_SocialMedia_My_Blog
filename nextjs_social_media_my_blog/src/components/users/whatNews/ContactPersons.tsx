import Image from "next/image";

export default function ContactPersons() {
  return (
    <div className="px-5">
      <h1 className="font-mono font-bold text-xl text-stone-300">
        Contact persons
      </h1>
      <div className="flex flex-col">
        <div className="flex gap-3 p-4 hover:bg-[#9f9f9f67] rounded items-center">
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

          <span className=" font-semibold text-lg text-stone-200">
            Toan Phan
          </span>
        </div>
      </div>
    </div>
  );
}
