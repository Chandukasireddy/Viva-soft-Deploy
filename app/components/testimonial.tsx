import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonail() {
    return (
        <section className="py-16 px-4 bg-orange-50 " id="Testimonials">
            <div className="max-w-xs md:max-w-2xl lg:max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">
                    What Our Clients Say
                </h2>
                <Carousel className="w-full">
                    <CarouselContent>
                        <CarouselItem className="">
                            <div className="bg-background p-6 rounded-lg shadow-lg ">
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
                        </CarouselItem>
                        <CarouselItem className="">
                            <div className="bg-background p-6 rounded-lg shadow-lg ">
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
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
