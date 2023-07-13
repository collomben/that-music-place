import Image from "next/image";
import placeholder from "@/public/images/tmp-storefront.jpg";

export default function Hero(props)
{
    const classString = props.fullHeight ? "split-2-even fullHeight" : "split-2-even";
    return (
        <div className={classString + " container"}>
            <div className="hero left backdrop blurred">
                <h1>That Music Place is <span className="accent">your place</span> for instruments, accessories, & instruction.</h1>
                <div className="split-2-even">
                    <button>Private Lessons</button>
                    <button>Instrument Rental</button>
                </div>
            </div>
            <div className="hero right">
                
            </div>
        </div>
    );
}





