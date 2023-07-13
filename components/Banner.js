import Image from "next/image";
import logo from "@/public/images/tmp-logo.png";
import Navbar from "./Navbar";

export default function Banner()
{
    return (
        <div className="banner sticky">
            <div className="columns-3 container">
                <Image src={logo} />
                <Navbar />
                <button>Schedule</button>
            </div>
        </div>
    );
}