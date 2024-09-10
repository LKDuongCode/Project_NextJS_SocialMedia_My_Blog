import React from "react";
import Image from "next/image";
import imgStyles from "@/styles/users/home.module.scss";
export default function IntroduceWebAndUs() {
  return (
    <div className="px-20">
      <div className="flex flex-col lg:flex-row items-center gap-8  mt-20">
        <div className="w-1/2">
          <Image
            src={
              "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={""}
            width={570}
            height={384}
            className={`${imgStyles.img} rounded-md`}
          ></Image>
        </div>
        <div className=" w-1/2">
          <span className="inline-flex text-[#FBC77B] font-semibold text-2xl mb-3">
            Who we are
          </span>
          <div className="font-bold text-5xl mb-5 flex gap-2 flex-col">
            <p>We provide premium & </p>
            <p>friendly experiences</p>
          </div>
          <p className="text-lg">
            Experience seamless connections and vibrant communities. Our
            platform empowers you to share your thoughts, photos, and
            experiences effortlessly. Join a dynamic social network where you
            can interact with friends, discover new interests, and stay updated
            with what matters to you
          </p>
          <p className="mt-5 text-lg">
            Whether you're looking to make new friends or stay connected with
            old ones, our app offers a premium and friendly environment for all
            your social needs. Start your journey with us and make every moment
            memorable.
          </p>
        </div>
      </div>
      <hr className="mt-20 border-1 h-0.5" />

      {/*  */}
      <div className="mt-12">
        <h3 className="font-bold text-4xl mb-6 text-[#FBC77B]">
          Express Yourself, Your Way
        </h3>
        <p className="mb-5 text-lg">
          In our social networking app, your profile is a canvas, not a
          template. You have complete freedom to personalize your space, from
          the colors and fonts to the layout and design.
        </p>
        <p className="mb-5 text-lg">
          Whether you're sharing your latest thoughts, connecting with friends,
          or showcasing your interests, our platform lets you do it in a style
          that's uniquely yours. Say goodbye to generic profiles and hello to a
          digital space that truly represents who you are.
        </p>
        <p className="text-lg">
          Discover new content, engage with like-minded individuals, and make
          your voice heard in a community where creativity and individuality are
          celebrated. Our app isn't just a social network—it's a place where you
          can be yourself, connect with others, and create something amazing.
        </p>
        <div className="relative h-[570px] my-5">
          <Image
            src="https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="100vw"
            className="absolute rounded-md"
          />
        </div>

        <p className="text-lg">
          As discussed in the introduction post, one of the best things about
          Ghost is just how much you can customize to turn your site into
          something unique. Everything about your layout and design can be
          changed, so you're not stuck with yet another clone of a social
          network profile.
        </p>
      </div>
      {/*  */}
      <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div className="text-center">
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-[#FBC77B] md:w-full w-9/12 mx-auto">
            Follow Us on Bloom
          </h2>
          <p className="font-normal text-base leading-6 text-gray-300 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
            Follow us on Bloom@
            <span className="underline cursor-pointer text-[#FBC77B] ml-1">
              followuspleaseee
            </span>{" "}
            and tag us to get featured on our timeline
          </p>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4 mt-10">
          <div className="relative group">
            <img
              src="https://i.ibb.co/QHS8Ngp/pexels-alana-sousa-3294250-1.png"
              alt="A picture of a sitting dog"
              className="lg:block hidden w-full"
            />
            <img
              src="https://i.ibb.co/mNPBgQN/pexels-alana-sousa-3294250-1-1.png"
              alt="A picture of a sitting dog"
              className="lg:hidden block w-full"
            />
            <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg"
                alt="Instagram"
              />
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://i.ibb.co/T8jgRy3/pexels-leah-kelley-1449667-1.png"
              alt="Smiling Girl"
              className="lg:block hidden w-full"
            />
            <img
              src="https://i.ibb.co/YD8nNMR/pexels-leah-kelley-1449667-1-1.png"
              alt="Smiling Girl"
              className="lg:hidden block w-full"
            />
            <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg"
                alt="Instagram"
              />
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://i.ibb.co/F3dzNWD/pexels-spencer-selover-775358-1.png"
              alt="Men Posing"
              className="lg:block hidden w-full"
            />
            <img
              src="https://i.ibb.co/myWxfSm/pexels-spencer-selover-775358-1-1.png"
              alt="Men Posing"
              className="lg:hidden block w-full"
            />
            <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg"
                alt="Instagram"
              />
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png"
              alt="2 puppies"
              className="lg:block hidden w-full"
            />
            <img
              src="https://i.ibb.co/5cDQZ2r/pexels-chevanon-photography-1108099-1-1.png"
              alt="2 puppies"
              className="lg:hidden block w-full"
            />
            <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg"
                alt="Instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
