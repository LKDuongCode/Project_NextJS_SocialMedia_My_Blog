import Banner1 from "@/components/users/home/Banner1";
import UserHome from "../page";

export default function Home() {
  return (
    <UserHome>
      <Banner1></Banner1>

      <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-14">
        <div className="lg:max-w-[570px] w-full">
          <img
            src="https://clarity-tailwind.preview.uideck.com/images/about.png"
            alt="about"
            className="w-full"
          />
        </div>
        <div className="lg:max-w-[490px] w-full">
          <span className="inline-flex text-blue-500 font-medium text-xl mb-3">
            Who we are
          </span>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-5">
            We provide high quality Articles &amp; blogs
          </h1>
          <p>
            Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos congue dui nec dui lobortis maximus.
          </p>
          <p className="mt-5">
            Curabitur pretium, libero vitae pharetra rhoncus, tellus urna auctor
            orci, eu dictum diam diam nec neque. Pellentesque.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="mt-12">
        <h3 className="font-semibold text-heading-6 text-dark mb-6">
          One of the best things
        </h3>
        <p className="mb-5 text-body">
          Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per cursus himenaeos.
        </p>
        <p className="mb-5 text-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam
          at justo ullamcorper vulputate. Donec mattis aliquam urna, sed
          placerat dolor volutpat vel. Maecenas posuere sem purus, quis feugiat.
        </p>
        <p className="text-body">
          As discussed in the introduction post, one of the best things about
          Ghost is just how much you can customize to turn your site into
          something unique. Everything about your layout and design can be
          changed, so you're not stuck with yet another clone of a social
          network profile.
        </p>
        <img src="images/blog-single-04.png" alt="blog" className="my-8" />
        <p className="mb-5 text-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam
          at justo ullamcorper vulputate. Donec mattis aliquam urna, sed
          placerat dolor volutpat vel. Maecenas posuere sem purus, quis feugiat.
        </p>
        <p className="text-body">
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
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
            Follow Us on Instagram
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
            Follow us on Instagram @
            <span className="underline cursor-pointer">followuspleaseee</span>{" "}
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

      {/*  */}
      <div className="max-w-[970px] mx-auto px-4 sm:px-8 xl:px-0">
        <h1 className="font-bold text-heading-4 sm:text-heading-3 lg:text-heading-2 text-dark text-center">
          Privacy &amp; Policy
        </h1>
        <div className="mt-10 sm:mt-15">
          <p className="text-body mb-5">
            As discussed in the introduction post, one of the best things about
            Ghost is just how much you can customize to turn your site into
            something unique. Everything about your layout and design can be
            changed, so you're not stuck with yet another clone of a social just
            how much you can
            <a href="#" className="text-primary underline">
              network profile.
            </a>
          </p>
          <p className="text-body mb-5">
            Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos congue dui nec dui lobortis maximus.
          </p>
          <p className="text-body mb-5">
            Curabitur pretium, libero vitae pharetra rhoncus, tellus urna auctor
            orci, eu dictum diam diam nec neque. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Fusce congue dui nec dui lobortis maximus. Morbi bibendum, nisi vel
            cursus.
          </p>
          <p className="text-body">
            Adipiscing elit. Nulla id quam at justo ullamcorper vulputate. Donec
            mattis aliquam urna, sed placerat dolor volutpat vel. Maecenas quis
            feugiat just how much you can customize consectetur adipiscing elit
            nulla id quam.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="font-bold text-custom-3 text-dark mb-6">
            Consectetur adipiscing elit
          </h2>
          <p className="text-body mb-5">
            Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per
            <a href="#" className="text-primary underline">
              inceptos{" "}
            </a>
            himenaeos.
          </p>
          <p className="text-body mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            quam at justo ullamcorper vulputate. Donec mattis aliquam urna, sed
            placerat dolor volutpat vel. Maecenas posuere sem purus, quis
            feugiat.
          </p>
          <p className="text-body">
            As discussed in the introduction post, one of the best things about
            Ghost is just how much you can customize to turn your site into
            something unique. Everything about your layout and design can be
            changed, so you're not stuck with yet another clone of a social
            network profile.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="font-bold text-custom-3 text-dark mb-6">
            Donec mattis aliquam urna
          </h2>
          <p className="text-body">
            Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per cursus himenaeos.
          </p>
          <ul className="flex flex-col gap-4 mt-5">
            <li className="flex gap-2 text-body">
              <span>1.</span>
              <p>
                <span className="text-dark font-semibold">
                  Sed ullamcorper dui at risus
                </span>
                viverra, nec cursus leo ullamcorper nec cursus leo ullamcorper.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per cursus himenaeos.
              </p>
            </li>
            <li className="flex gap-2 text-body">
              <span>2.</span>
              <p>
                <span className="text-dark font-semibold">
                  Everything about your
                </span>
                layout and design can be changed, so you're not stuck with yet
                another clone of a social network profile.
              </p>
            </li>
            <li className="flex gap-2 text-body">
              <span>3.</span>
              <p>
                <span className="text-dark font-semibold">Nulla id quam</span>
                at justo ullamcorper vulputate. Donec mattis aliquam urna, dolor
                volutpat vel.
              </p>
            </li>
            <li className="flex gap-2 text-body">
              <span>4.</span>
              <p>
                <span className="text-dark font-semibold">
                  Sed ullamcorper dui at risus
                </span>
                viverra, nec cursus leo ullamcorper nec cursus leo ullamcorper.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div>Top authors</div>
    </UserHome>
  );
}
