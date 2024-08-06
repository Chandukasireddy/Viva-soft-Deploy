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
                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                    What Our Clients Say
                </h2>
                <Carousel className="w-full">
                    <CarouselContent>
                        <CarouselItem className="">
                            <div className="bg-background p-6 rounded-lg shadow-lg ">
                                <div className="flex items-center mb-4">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>SJ</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold">
                                            Srihitha
                                        </h4>
                                        <p className="text-muted-foreground">
                                            CEO, Trechon Inc.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    VIVA Soft Technologies exceeded our
                                    expectations with their app development
                                    services. Their innovative solutions and
                                    seamless user interface design have
                                    transformed our business.
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div className="bg-background p-6 rounded-lg shadow-lg ">
                                <div className="flex items-center mb-4">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>AG</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold">
                                            Akash Gundapuneni
                                        </h4>
                                        <p className="text-muted-foreground">
                                            CTO, Graspins Innovations Inc.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Partnering with VIVA Soft Technologies for
                                    our DevOps needs was a game-changer. Their
                                    expertise in continuous integration and
                                    delivery has significantly improved our
                                    workflow efficiency.
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
