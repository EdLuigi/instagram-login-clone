import React from "react";

const Container = (props) => {
    return (
        <div
            style={{
                display: "flex",
                marginBottom: "100px",
                width: "400px",
                justifyContent: "space-between",
            }}
        >
            <br /> "Container"
            {props.children}
        </div>
    );
};

const Slide = (props) => {
    return (
        <div>
            <br />
            "Slide"
        </div>
    );
};

const FormLogin = (props) => {
    return (
        <div>
            <br />
            "FormLogin"
            <Links />
        </div>
    );
};

const Links = (props) => {
    return (
        <div>
            <br />
            "Links"
        </div>
    );
};

const Footer = (props) => {
    return (
        <div>
            <br />
            "Footer"
        </div>
    );
};

export default function App() {
    return (
        <div>
            <Container>
                <Slide />
                <Links />
            </Container>
            <Footer />
        </div>
    );
}
