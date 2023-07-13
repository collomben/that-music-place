import CTABanner from "./CTABanner";
import Hero from "./Hero";
import Spacer from "./Spacer";

export default function HeroWithBGImage()
{
    return (
        <>
            <div className="landingImage">
                <div className="container">
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Hero />
                    <Spacer />
                    <Spacer />
                    <CTABanner />
                </div>                
            </div>
        </>
    );
}