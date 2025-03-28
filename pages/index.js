import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { AiFillHtml5, AiFillLinkedin, AiFillSkype } from "react-icons/ai";
import { BiSun } from "react-icons/bi";
import { BsFillMoonStarsFill, BsWordpress } from "react-icons/bs";
import { DiCss3, DiNodejsSmall } from "react-icons/di";
import { RiWhatsappFill } from "react-icons/ri";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiUpwork,
} from "react-icons/si";
import avatar from "../public/avatar.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sora ッ</title>
        <meta
          name="description"
          content="Are you looking for someone to build a website for your business according to the latest design and functionalities or do you want to redesign your existing site to make it look more attractive, professional, and responsive design according to the latest trends? you're in the right place.
          "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-zinc-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-poppins text-3xl font-medium">Sora ッ</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
              <span className="dark:hidden cursor-pointer text-3xl">
                <BiSun />
              </span>
              <span className="hidden dark:inline cursor-pointer text-2xl">
                <BsFillMoonStarsFill />
              </span>
            </button>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-orange-400 font-medium dark:text-orange-300 md:text-6xl">
              Jethro Simbulan
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Front-End Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Hi! Im a freelancer from the Philippines focusing in Front-End
              Development. Contact me below and lets start coding!
            </p>
            <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400 items-center">
              <a
                href="https://www.linkedin.com/in/soraッ"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white "
              >
                <AiFillLinkedin className="h-15 w-15" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01aa0b8720512ad5ac?viewMode=1"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white "
              >
                <SiUpwork className="h-15 w-15" />
              </a>
              <a
                href="https://join.skype.com/invite/xHkDfpwIhf8B"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white "
              >
                <AiFillSkype className="h-15 w-15" />
              </a>
              <a
                href="https://wa.me/+639487637264"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white "
              >
                <RiWhatsappFill className="h-10 w-10" />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-orange-400 rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <Image src={avatar} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including website
              development, maintenance, settting up your website on a domain and
              hosting and consulatation for your project .
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Lets make it a
                reality.
              </p>
              <h4 className="py-4 text-orange-600 font-semibold">
                Tools I Use
              </h4>
              <div className="flex justify-center  items-center flex-wrap">
                <AiFillHtml5 className="h-10 w-10 fill-[#F16524] m-2" />
                <DiCss3 className="h-10 w-10 fill-[#2299F8] m-2" />
                <SiJavascript className="h-10 w-10 fill-[#F7E018]  m-2" />
                <BsWordpress className="h-10 w-10 fill-[#04769C]  m-2" />
                <SiTailwindcss className="h-10 w-10 fill-[#01B7D6]  m-2" />
                <DiNodejsSmall className="h-10 w-10 fill-[#3C873A] m-2" />
                <SiMongodb className="h-10 w-10 fill-[#409C39] m-2" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              When i started my journey as a freelance front-end developer, Ive
              done remote work for
              <span className="text-orange-500">
                {" "}
                small to medium businesses{" "}
              </span>
              , consulted for <span className="text-orange-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt=""
              />
            </div>
          </div>
        </section>
        <footer class="p-4 bg-white sm:p-6 dark:bg-zinc-900">
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between sm:flex-column sm:flex-row flex flex-col items-center">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2022 <a href="https://sora.cx/">Soraッ</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.linkedin.com/in/js-sora/"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white "
              >
                <AiFillLinkedin className="w-5 h-5" />
                <span class="sr-only">Linkedin</span>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01aa0b8720512ad5ac?viewMode=1"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white "
              >
                <SiUpwork className="w-5 h-5" />
                <span class="sr-only">Upwork</span>
              </a>
              <a
                href="https://join.skype.com/invite/xHkDfpwIhf8B"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white "
              >
                <AiFillSkype className="w-5 h-5" />
                <span class="sr-only">Skype</span>
              </a>
              <a
                href="https://wa.me/+639487637264"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <RiWhatsappFill className="w-5 h-5" />
                <span class="sr-only">Whatsapp</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
