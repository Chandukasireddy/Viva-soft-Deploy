import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import logo from "@/public/Viva Soft.svg";

export default function Navbar() {
    return (
        <div className="flex flex-col shadow-lg">
            <header className="text-black py-6 px-6 md:px-16 lg:px-28 flex items-center justify-between ">
                <div className="flex flex-row gap-4">
                    <Image
                        src={logo}
                        alt="vivasoft logo"
                        className="w-12 h-12"
                    />
                    <Link
                        href="#"
                        className="flex items-center gap-2"
                        prefetch={false}
                    >
                        <span className="text-xl font-bold">
                            VIVA Soft Technologies
                        </span>
                    </Link>
                </div>
                <nav className="hidden lg:flex gap-6 font-bold items-center">
                    <Link
                        href="#Services"
                        className="hover:underline underline-offset-4 decoration-[#EB5E28]"
                        prefetch={false}
                    >
                        Services
                    </Link>
                    <Link
                        href="#Projects"
                        className="hover:underline underline-offset-4 decoration-[#EB5E28]"
                        prefetch={false}
                    >
                        Projects
                    </Link>
                    <Link
                        href="#Testimonials"
                        className="hover:underline underline-offset-4 decoration-[#EB5E28]"
                        prefetch={false}
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="#Careers"
                        className="hover:underline underline-offset-4 decoration-[#EB5E28]"
                        prefetch={false}
                    >
                        Careers
                    </Link>
                    <Link href="#Contactus">
                        <Button className="hover:underline underline-offset-4 decoration-[#EB5E28] ">
                            Contact Us
                        </Button>
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[80vw] lg:hidden">
                        <div className="flex flex-col gap-4 p-6">
                            <Link
                                href="#Services"
                                className="hover:underline underline-offset-4 decoration-[#EB5E28]"
                                prefetch={false}
                            >
                                Services
                            </Link>
                            <Link
                                href="#Projects"
                                className="hover:underline underline-offset-4 decoration-[#EB5E28]"
                                prefetch={false}
                            >
                                Projects
                            </Link>
                            <Link
                                href="#Testimonials"
                                className="hover:underline underline-offset-4 decoration-[#EB5E28]"
                                prefetch={false}
                            >
                                Testimonials
                            </Link>
                            <Link
                                href="#Careers"
                                className="hover:underline underline-offset-4 decoration-[#EB5E28]"
                                prefetch={false}
                            >
                                Careers
                            </Link>
                            <Link href="#Contactus">
                                <Button className="hover:underline underline-offset-4 decoration-[#EB5E28] ">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}
