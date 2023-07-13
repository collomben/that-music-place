import Image from "next/image";
import placeholder from "@/public/images/tmp-storefront.jpg";

export default function Hero(props)
{
    const classString = props.fullHeight ? "split-2-even fullHeight" : "split-2-even";
    return (
        <div className={classString}>
            <div className="hero left">
                <h1>That Music Place is <span className="accent">your place</span> for instruments, accessories, & instruction.</h1>
                <div className="split-2-even">
                    <button>Private Lessons</button>
                    <button>Instrument Rental</button>
                </div>
            </div>
            <div className="hero right">
                <Image src={placeholder}
                    alt="Professional Photo of myself"
                    height={600}
                    />
            </div>
        </div>
    );
}





