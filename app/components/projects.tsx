import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import hersection from "@/public/herosection.jpg";
import cid from "@/cid-im.jpg"
import mad from "@/mad-im.jpg"
import dms from "@/dms-im.jpg"


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
                            src={dms}
                            alt="Project 1"
                            width={600}
                            height={400}
                            className="rounded-lg mb-4 object-cover"
                        />
                        <h3 className="text-xl font-bold mb-2">
                        Document Management System
                        </h3>
                        <p className="text-muted-foreground mb-4 text-justify line-clamp-4">
                        We created a tailored SharePoint solution for LegalEagle Associates to securely manage and share legal documents. This system improved their workflow, making it easier for their team to access and collaborate on important files.
                        </p>
                        {/* <Link
                            href="#"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            prefetch={false}
                        >
                            View Case Study
                        </Link> */}
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                        <Image
                            src={mad}
                            alt="Project 2"
                            width={600}
                            height={400}
                            className="rounded-lg mb-4 object-cover"
                        />
                        <h3 className="text-xl font-bold mb-2">
                            Mobile App Development
                        </h3>
                        <p className="text-muted-foreground mb-4 text-justify line-clamp-4">
                        We developed a mobile app for BistroBites that lets customers place orders, customize their meals, and pay directly from their smartphones. The app streamlines the ordering process and boosts customer satisfaction for the restaurant chain.
                        </p>
                        {/* <Link
                            href="#"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            prefetch={false}
                        >
                            View Case Study
                        </Link> */}
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                        <Image
                            src={cid}
                            alt="Project 2"
                            width={600}
                            height={400}
                            className="rounded-lg mb-4 object-cover"
                        />
                        <h3 className="text-xl font-bold mb-2">
                        Customer Insights Dashboard
                        </h3>
                        <p className="text-muted-foreground mb-4 text-justify line-clamp-4">
                        We developed a Big Data dashboard for TrendyMart Retailers that analyzes customer behavior and sales trends. The dashboard delivers valuable insights, helping the company make informed decisions on marketing and inventory.
                        </p>
                        {/* <Link
                            href="#"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            prefetch={false}
                        >
                            View Case Study
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
