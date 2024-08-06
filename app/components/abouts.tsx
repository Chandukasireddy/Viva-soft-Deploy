import * as React from "react";
import Image from "next/image";
import herosection from "@/public/herosection.jpg";

export default function Aboutus() {
    return (
        <div className="overflow-x-hidden" id="Aboutus">
            <div className="mt-[100px] w-full bg-orange-50 rounded-t-[10%] lg:rounded-t-[30%]">
                <section className="py-14 lg:py-24 relative ">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                            <div className="img-box">
                                <Image
                                    src={herosection}
                                    alt="About Us tailwind page"
                                    className="max-lg:mx-auto rounded-xl"
                                />
                            </div>
                            <div className="lg:pl-[100px] flex items-center">
                                <div className="data w-full">
                                    <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                                        About Us
                                    </h2>
                                    <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                        Driven by a passion for seamless user
                                        experiences, weve meticulously curated
                                        pagedone to empower creators, designers,
                                        and developers alike. Our mission is to
                                        provide a comprehensive toolkit,
                                        enabling you to build intuitive,
                                        beautiful interfaces that resonate with
                                        users on every interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-14 lg:py-24 relative">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
                            <div className="lg:pr-24 flex items-center">
                                <div className="data w-full">
                                    <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                                        We are Creative Since 2005
                                    </h2>
                                    <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                        Pagedone isn’t just a collection of
                                        components and guidelines; its a
                                        philosophy. We go beyond aesthetics,
                                        prioritizing accessibility, scalability,
                                        and usability. Every element, from the
                                        tiniest detail to the grandest layout,
                                        is meticulously crafted to enhance
                                        functionality and elevate user
                                        satisfaction.
                                    </p>
                                </div>
                            </div>
                            <div className="img-box">
                                <Image
                                    src={herosection}
                                    alt="About Us tailwind page"
                                    className="hidden lg:block rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
