import Image from "next/image";
import hersection from "@/public/herosection.jpg";

import { JSX, SVGProps } from "react";

export default function Expertise() {
    return (
        <div className="overflow-x-hidden">
            <section className="py-16 px-6 mt-[100px] ml-[-50%] w-[200%] rounded-t-[100%] bg-orange-50">
                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                    Our Expertise
                </h2>
                <div className="container grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3">
                    <div className=" flex flex-col items-center gap-4 rounded-lg bg-background p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="rounded-full bg-primary p-3">
                            <CpuIcon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">
                            Software Development
                        </h3>
                        <p className="text-muted-foreground">
                            Our team of expert developers can bring your
                            software ideas to life.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="rounded-full bg-primary p-3">
                            <DatabaseIcon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">
                            Database Management
                        </h3>
                        <p className="text-muted-foreground">
                            Reliable and scalable database solutions to power
                            your applications.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="rounded-full bg-primary p-3">
                            <CloudIcon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">
                            Cloud Infrastructure
                        </h3>
                        <p className="text-muted-foreground">
                            Leverage the power of the cloud to scale your
                            business effortlessly.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="rounded-full bg-primary p-3">
                            <MonitorIcon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">Web Design</h3>
                        <p className="text-muted-foreground">
                            Crafting visually stunning and user-friendly
                            websites.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="rounded-full bg-primary p-3">
                            <BriefcaseIcon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">Consulting</h3>
                        <p className="text-muted-foreground">
                            Providing expert guidance to help your business
                            succeed.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="rounded-full bg-primary p-3">
                            <HeadphonesIcon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">
                            Customer Support
                        </h3>
                        <p className="text-muted-foreground">
                            Dedicated support to ensure your satisfaction.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function BriefcaseIcon(
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
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
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

function DatabaseIcon(
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
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    );
}

function HeadphonesIcon(
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
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
        </svg>
    );
}

function MonitorIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
    );
}
