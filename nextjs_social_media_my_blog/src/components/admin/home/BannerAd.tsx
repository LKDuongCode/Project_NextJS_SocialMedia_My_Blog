export default function BannerAD() {
  return (
    <>
      <div className="mt-20 flex flex-col p-5 gap-5 w-full">
        <h2 className="text-3xl font-extrabold font-mono">Admin's Dashboard</h2>
        <div className="bg-[url('https://wallpaperaccess.com/full/1575754.jpg')] bg-no-repeat bg-cover p-5 flex flex-col gap-5 rounded-lg shadow-xl">
          <h1 className="text-white text-4xl font-bold">Welcome Back!</h1>
          <p className="font-base text-xl text-white">
            <span className="font-bold">Bloom</span> -{" "}
            <span className="text-base">
              Bring Your Thoughts and Creativity to Life !
            </span>
          </p>
          <a
            href={"/Privacy_Policy"}
            className="
    
            font-semibold
            text-sm
            leading-5
            rounded-[0.375rem]
            px-[32px]
            py-[10px]
          bg-[#24006C]
          text-white
          border-[#484BFC]
          hover:bg-[#484BFC]
          border-solid
            h-max 
            w-max
          "
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}
