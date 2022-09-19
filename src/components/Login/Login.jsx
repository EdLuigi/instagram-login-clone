import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Slideshow } from "./Slideshow";
import { FormLogin } from "./FormLogin";
import { Footer } from "../Footer";

export const Login = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 768;

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return (
        <Container>
            {!isMobile && <Slideshow />}
            <FormLogin />
        </Container>
    );
};
