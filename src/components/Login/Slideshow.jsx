import { useEffect, useState } from "react";

export const Slideshow = (props) => {
    const slideshowData = [
        "../assets/1.png",
        "../assets/2.png",
        "../assets/3.png",
        "../assets/4.png",
    ];
    const [slideshow1, setSlideshow1] = useState(0);
    const [slideshow2, setSlideshow2] = useState(0);
    const [fadeEffect, setFadeEffect] = useState(true);
    const timer = 5000;
    const duration = "2000";

    const toggleFadeEffect = () => {
        setFadeEffect(!fadeEffect);
    };

    const handleSlideshows = () => {
        if (fadeEffect) {
            if (slideshow1 == slideshowData.length - 1) {
                setSlideshow2(0);
            } else {
                setSlideshow2(slideshow1 + 1);
            }
        } else {
            if (slideshow2 == slideshowData.length - 1) {
                setSlideshow1(0);
            } else {
                setSlideshow1(slideshow2 + 1);
            }
        }
    };

    useEffect(() => {
        const timerSlideshow = setTimeout(() => {
            handleSlideshows();
            toggleFadeEffect();
        }, timer);

        return () => {
            clearTimeout(timerSlideshow);
        };
    }, [slideshow1, slideshow2]);

    return (
        <div className="flex">
            <img src="../assets/0.png" className="" />

            <div className={"flex absolute pl-[110px] pt-[25px]"}>
                <img
                    src={slideshowData[slideshow1]}
                    className={
                        `duration-[${duration}ms] ` +
                        (fadeEffect ? "opacity-100" : "opacity-0")
                    }
                />
                <img
                    src={slideshowData[slideshow2]}
                    className={
                        `absolute duration-[${duration}ms] ` +
                        (!fadeEffect ? "opacity-100" : "opacity-0")
                    }
                />
            </div>
        </div>
    );
};
