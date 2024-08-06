import Navbar from "./components/navbar";
import Herosection from "@/app/components/herosection";
import Expertise from "@/app/components/expertise";
import Testimonail from "@/app/components/testimonial";
import Projects from "@/app/components/projects";
import Footer from "@/app/components/footer";
import Contactus from "./components/contactus";
import Careers from "./components/careers";
import Aboutus from "./components/abouts";

export default function Home() {
    return (
        <div className="bg-[#fffefa]">
            <Navbar />
            <Herosection />
            <Aboutus />
            <Expertise />
            {/* <Projects /> */}
            {/* <Testimonail /> */}
            <Careers />
            <Contactus />
            <Footer />
        </div>
    );
}
