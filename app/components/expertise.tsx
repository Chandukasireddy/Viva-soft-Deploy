import Image from "next/image";
import hersection from "@/public/herosection.jpg";

import { JSX, FC, SVGProps } from "react";
interface ExpertiseItemProps {
    title: string;
    description: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
}

export default function Expertise() {
    return (
        <div className="overflow-x-hidden" id="Services">
            <section className="py-16 px-6 mt-[100px] w-full bg-orange-50 rounded-t-[10%] lg:rounded-t-[30%]">
                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                    Our Services
                </h2>
                <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
                    {expertiseItems.map((item, index) => (
                        <ExpertiseItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            Icon={item.Icon}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

const ExpertiseItem: FC<ExpertiseItemProps> = ({
    title,
    description,
    Icon,
}) => {
    return (
        <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div className="rounded-full bg-primary p-3">
                <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
};

const expertiseItems = [
    {
        title: "Software Development",
        description:
            "Our team of expert developers can bring your software ideas to life.",
        Icon: CpuIcon,
    },
    {
        title: "Database Management",
        description:
            "Reliable and scalable database solutions to power your applications.",
        Icon: DatabaseIcon,
    },
    {
        title: "Cloud Infrastructure",
        description:
            "Leverage the power of the cloud to scale your business effortlessly.",
        Icon: CloudIcon,
    },
    {
        title: "Web Design",
        description: "Crafting visually stunning and user-friendly websites.",
        Icon: MonitorIcon,
    },
    {
        title: "Consulting",
        description: "Providing expert guidance to help your business succeed.",
        Icon: BriefcaseIcon,
    },
    {
        title: "Customer Support",
        description: "Dedicated support to ensure your satisfaction.",
        Icon: HeadphonesIcon,
    },
];

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
