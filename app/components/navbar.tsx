import Link from "next/link";
import Image from "next/image";
import hersection from "@/public/herosection.jpg";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
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
            <main className="flex-1">
                <section className="bg-primary py-24 px-6 text-primary-foreground">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                        <div>
                            <h1 className="text-4xl font-bold mb-4">
                                Empowering Businesses with Innovative IT
                                Solutions
                            </h1>
                            <p className="text-lg mb-8">
                                VIVA Soft Technologies is a leading IT solutions
                                provider, delivering cutting-edge services to
                                help businesses thrive in the digital age.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-primary font-medium  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                prefetch={false}
                            >
                                Explore Our Services
                            </Link>
                        </div>
                        <div>
                            <Image
                                src={hersection}
                                alt="VIVA Soft Technologies"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </section>
                <section className="py-16 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">
                            Our Expertise
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-muted p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                                <CodeIcon className="h-8 w-8 mb-4 text-primary" />
                                <h3 className="text-xl font-bold mb-2">
                                    Web Development
                                </h3>
                                <p className="text-muted-foreground">
                                    Crafting visually stunning and highly
                                    functional websites that drive business
                                    growth.
                                </p>
                            </div>
                            <div className="bg-muted p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                                <CpuIcon className="h-8 w-8 mb-4 text-primary" />
                                <h3 className="text-xl font-bold mb-2">
                                    Software Engineering
                                </h3>
                                <p className="text-muted-foreground">
                                    Developing custom software solutions that
                                    streamline operations and boost
                                    productivity.
                                </p>
                            </div>
                            <div className="bg-muted p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                                <CloudIcon className="h-8 w-8 mb-4 text-primary" />
                                <h3 className="text-xl font-bold mb-2">
                                    Cloud Services
                                </h3>
                                <p className="text-muted-foreground">
                                    Leveraging cloud technologies to enhance
                                    scalability, reliability, and
                                    cost-efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-muted py-16 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">
                            Recent Projects
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-background p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                                <Image
                                    src={hersection}
                                    alt="Project 1"
                                    width={600}
                                    height={400}
                                    className="rounded-lg mb-4 object-cover"
                                />
                                <h3 className="text-xl font-bold mb-2">
                                    E-commerce Platform
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Developed a robust e-commerce platform for a
                                    leading retail brand, driving a 25% increase
                                    in online sales.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    prefetch={false}
                                >
                                    View Case Study
                                </Link>
                            </div>
                            <div className="bg-background p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                                <Image
                                    src={hersection}
                                    alt="Project 2"
                                    width={600}
                                    height={400}
                                    className="rounded-lg mb-4 object-cover"
                                />
                                <h3 className="text-xl font-bold mb-2">
                                    Mobile App Development
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Designed and developed a user-friendly
                                    mobile app for a leading healthcare
                                    provider, improving patient engagement by
                                    35%.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    prefetch={false}
                                >
                                    View Case Study
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">
                            What Our Clients Say
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-background p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold">
                                            John Doe
                                        </h4>
                                        <p className="text-muted-foreground">
                                            CEO, Acme Inc.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    VIVA Soft Technologies has been an
                                    invaluable partner in\n helping us transform
                                    our digital presence. Their teams\n
                                    expertise and dedication have been
                                    instrumental in driving\n our business
                                    forward.
                                </p>
                            </div>
                            <div className="bg-background p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>SM</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold">
                                            Sarah Miller
                                        </h4>
                                        <p className="text-muted-foreground">
                                            CTO, Globex Inc.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Ive been incredibly impressed with the level
                                    of\n professionalism and expertise
                                    demonstrated by the VIVA Soft\n Technologies
                                    team. They consistently deliver
                                    high-quality\n solutions that exceed our
                                    expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-muted text-muted-foreground py-8 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            VIVA Soft Technologies
                        </h3>
                        <p className="mb-4">
                            123 Main Street, Anytown USA 12345
                            <br />
                            Phone: (123) 456-7890
                            <br />
                            Email: info@vivasofttechnologies.com
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-primary"
                                prefetch={false}
                            >
                                <TwitterIcon className="h-6 w-6" />
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-primary"
                                prefetch={false}
                            >
                                <LinkedinIcon className="h-6 w-6" />
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-primary"
                                prefetch={false}
                            >
                                <GitlabIcon className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-bold mb-2">
                                Quick Links
                            </h4>
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
                                        href="#"
                                        className="hover:text-primary"
                                        prefetch={false}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                        prefetch={false}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                        prefetch={false}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                        prefetch={false}
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-2">
                                Our Services
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                        prefetch={false}
                                    >
                                        Web Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                        prefetch={false}
                                    >
                                        Software Engineering
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                        prefetch={false}
                                    >
                                        Cloud Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                        prefetch={false}
                                    >
                                        Cybersecurity
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
