import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";

export default function Contactus() {
    return (
        <div className="overflow-x-hidden" id="Contactus">
            <div className="bg-orange-50 rounded-b-[10%] lg:rounded-b-[30%] px-4 py-12">
                <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl font-bold">
                                Get in Touch
                            </h1>
                            <p className="text-muted-foreground">
                                Have a question or want to work together? Fill
                                out the form and well get back to you as soon as
                                possible.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <PhoneIcon className="h-6 w-6 text-primary" />
                                    <span>+1 603-854-2999</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <MailIcon className="h-6 w-6 text-primary" />
                                    <span>hr@vivasofttechnologies.com</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <MapPinIcon className="h-6 w-6 text-primary" />
                                    <span>
                                        1501 Main street, Suit 16, City-
                                        Tewksbury, MA, 01876.
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <MapPinIcon className="h-6 w-6 text-primary" />
                                    <span>
                                        8-2-334, N/47, Rd Number 3, Green 
                                        Valley, Banjara Hills, <br></br>Hyderabad,
                                        Telangana 500034.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Card className="w-full">
                        <CardContent>
                            <form className="grid gap-4 pt-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us how we can help"
                                        className="min-h-[120px]"
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Submit
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function MapPinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}
