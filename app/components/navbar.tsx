import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";


export default function Navbar() {
    return (
        <div className="flex flex-col ">
            <header className="bg-primary text-primary-foreground py-6 px-6 md:px-20 lg:px-40 flex items-center justify-between">
                <Link
                    href="#"
                    className="flex items-center gap-2"
                    prefetch={false}
                >
                    <span className="text-xl font-bold">
                        VIVA Soft Technologies
                    </span>
                </Link>
                <nav className="hidden md:flex gap-6">
                    <Link
                        href="#"
                        className="hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        Home
                    </Link>
                    <Link
                        href="#"
                        className="hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        Services
                    </Link>
                    <Link
                        href="#"
                        className="hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        Projects
                    </Link>
                    <Link
                        href="#"
                        className="hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        Contact Us
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="md:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[80vw] md:hidden">
                        <div className="flex flex-col gap-4 p-6">
                            <Link
                                href="#"
                                className="hover:underline underline-offset-4"
                                prefetch={false}
                            >
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="hover:underline underline-offset-4"
                                prefetch={false}
                            >
                                About
                            </Link>
                            <Link
                                href="#"
                                className="hover:underline underline-offset-4"
                                prefetch={false}
                            >
                                Services
                            </Link>
                            <Link
                                href="#"
                                className="hover:underline underline-offset-4"
                                prefetch={false}
                            >
                                Projects
                            </Link>
                            <Link
                                href="#"
                                className="hover:underline underline-offset-4"
                                prefetch={false}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    );
}

function CloudIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    );
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}

function CpuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <rect width="6" height="6" x="9" y="9" rx="1" />
            <path d="M15 2v2" />
            <path d="M15 20v2" />
            <path d="M2 15h2" />
            <path d="M2 9h2" />
            <path d="M20 15h2" />
            <path d="M20 9h2" />
            <path d="M9 2v2" />
            <path d="M9 20v2" />
        </svg>
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

function MountainIcon(
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}
