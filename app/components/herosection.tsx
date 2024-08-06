import Link from "next/link";
import Image from "next/image";
import hersection from "@/public/herosection.jpg";

import { JSX, SVGProps } from "react";

export default function Herosection() {
    return (
        <div className="">
            <div className="relative pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px] ">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-10 lg:w-5/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    Innovate.{" "}<br/>
                                    <span className="text-[#EB5E28]">
                                        Transform.
                                    </span><br/>
                                    Succeed.
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6 text-justify">
                                    Viva Soft Technologies provides tailored IT
                                    solutions to enhance business efficiency and
                                    growth. Our services include software
                                    development, IT consulting, and technology
                                    integration.
                                </p>
                                <ul className="flex flex-wrap items-center">
                                    <li>
                                        <a
                                            href="#Contactus"
                                            className="inline-flex items-center justify-center rounded-md bg-[#EB5E28] px-6 py-3 text-center text-base font-medium text-white hover:bg-[#EB5E28]/90 lg:px-7"
                                        >
                                            Work With Us
                                        </a>
                                    </li>
                                </ul>
                                <div className="clients pt-10">
                                    {/* <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                                        Some Of Our Clients
                                        <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                                    </h6> */}

                                    {/* <div className="flex items-center space-x-4">
                                        <Image
                                            src={hersection}
                                            alt="hero"
                                            className="w-16 rounded-xl"
                                        />
                                        <Image
                                            src={hersection}
                                            alt="hero"
                                            className="w-16 rounded-xl"
                                        />
                                        <Image
                                            src={hersection}
                                            alt="hero"
                                            className="w-16 rounded-xl"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <Image
                                        src={hersection}
                                        alt="hero"
                                        className="max-w-full lg:ml-auto rounded-xl"
                                    />
                                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                                        <svg
                                            width="93"
                                            height="93"
                                            viewBox="0 0 93 93"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="2.5"
                                                cy="2.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="2.5"
                                                cy="24.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="2.5"
                                                cy="46.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="2.5"
                                                cy="68.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="2.5"
                                                cy="90.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="24.5"
                                                cy="2.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="24.5"
                                                cy="24.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="24.5"
                                                cy="46.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="24.5"
                                                cy="68.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="24.5"
                                                cy="90.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="46.5"
                                                cy="2.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="46.5"
                                                cy="24.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="46.5"
                                                cy="46.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="46.5"
                                                cy="68.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="46.5"
                                                cy="90.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="68.5"
                                                cy="2.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="68.5"
                                                cy="24.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="68.5"
                                                cy="46.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="68.5"
                                                cy="68.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="68.5"
                                                cy="90.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="90.5"
                                                cy="2.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="90.5"
                                                cy="24.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="90.5"
                                                cy="46.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="90.5"
                                                cy="68.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                            <circle
                                                cx="90.5"
                                                cy="90.5"
                                                r="2.5"
                                                fill="#EB5E28"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
