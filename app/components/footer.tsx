import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { JSX, SVGProps } from "react";
import logo from "@/public/Viva Soft Logo.svg";

export default function Footer() {
    return (
        <footer className=" py-8 px-6 ">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="">
                    <Image
                        src={logo}
                        alt="vivasoft logo"
                        className="w-16 h-16 my-3"
                    />

                    <a className="text-xl font-bold mb-4" href="#">
                        VIVA Soft Technologies
                    </a>

                    <div className="flex gap-4">
                        <Link
                            href="#"
                            className="hover:text-primary"
                            prefetch={false}
                        >
                            <TwitterIcon className="h-6 w-6" />
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-primary"
                            prefetch={false}
                        >
                            <LinkedinIcon className="h-6 w-6" />
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-primary"
                            prefetch={false}
                        >
                            <GitlabIcon className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-lg font-bold mb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Aboutus"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Services"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Projects"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Testimonials"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Careers"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Contactus"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    Contactus
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Our Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#Services"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    App Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Services"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    DevOps
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Services"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    Cloud Technologiest
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Services"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    SharePoint
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Services"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    Big Data
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Services"
                                    className="hover:text-primary"
                                    prefetch={false}
                                >
                                    Customer Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm">
                &copy; 2024 VIVA Soft Technologies. All rights reserved.
            </div>
        </footer>
    );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}

function LinkedinIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function GitlabIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
        </svg>
    );
}
