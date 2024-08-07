import * as React from "react";
import Image from "next/image";
import herosection from "@/public/herosection.jpg";
import expert from "@/expert-image.jpg"
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
                                    <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto text-justify">
                                    At Viva Soft Technologies, we specialize in delivering cutting-edge IT solutions tailored to your business needs. Our dedicated team has been committed to innovation and excellence. Partner with us to elevate your digital presence and drive success.
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
                                    <Image
                                        src={herosection}
                                        alt="About Us tailwind page"
                                        className="block lg:hidden mb-9 mx-auto rounded-xl"
                                    />
                                    <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                                    Expert IT Solutions
                                    </h2>
                                    <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto text-justify">
                                    Our team of experts is dedicated to providing top-notch IT solutions that are both innovative and reliable. We work closely with our clients to understand their unique challenges and deliver customized solutions that drive growth and efficiency.
                                    </p>
                                </div>
                            </div>
                            <div className="img-box">
                                <Image
                                    src={expert}
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
