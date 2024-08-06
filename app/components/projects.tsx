import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import hersection from "@/public/herosection.jpg";

export default function Projects() {
    return (
        <section className="py-16 px-6 bg-orange-50" id="Projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
                    Recent Projects
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
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
                            Developed a robust e-commerce platform for a leading
                            retail brand, driving a 25% increase in online
                            sales.
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
                            Designed and developed a user-friendly mobile app
                            for a leading healthcare provider, improving patient
                            engagement by 35%.
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
                            Designed and developed a user-friendly mobile app
                            for a leading healthcare provider, improving patient
                            engagement by 35%.
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
    );
}
