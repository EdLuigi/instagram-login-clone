import React, { useEffect, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";

const Container = (props) => {
    return (
        <div className="flex align-middle justify-center gap-5 bg-instagramBg pt-8">
            {props.children}
        </div>
    );
};

const Slide = (props) => {
    return (
        <div>
            <img src="../assets/0.png" width={"380px"} height={"580px"} />
        </div>
    );
};

const Card = (props) => {
    return (
        <div className="flex flex-col bg-white p-10 align-middle justify-center w-auto gap-3 border-2">
            {props.children}
        </div>
    );
};

const FormLogin = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [preenchido, setPreenchido] = useState(false);
    return (
        <div>
            <Card>
                <img
                    src="../assets/logo.png"
                    width={"175px"}
                    height={"51px"}
                    className="mx-auto"
                />
                <form className="flex flex-col gap-3" onSubmit={() => {}}>
                    <input
                        className="bg-instagramBg border-2"
                        type={"text"}
                        placeholder="Phone number, username or e-mail"
                        value={login}
                        onChange={(e) => {
                            setLogin(e.currentTarget.value);
                        }}
                    />
                    <input
                        className="bg-instagramBg border-2"
                        type={"password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.currentTarget.value);
                        }}
                    />

                    <input
                        type={"submit"}
                        onClick={() => {}}
                        className={
                            "text-white rounded-sm " +
                            (preenchido ? "bg-[#0095F6]" : "bg-[#B2DFFC]")
                        }
                        value="Log in"
                    />
                </form>

                <h5 className="flex justify-center">or</h5>

                <a href="#" className="flex justify-center">
                    <AiFillFacebook className="mt-0.5 " size="20px" />
                    Log in with Facebook
                </a>

                <a href="#" className="flex justify-center">
                    Forgot password?
                </a>
            </Card>
            <div className="flex align-middle justify-center mt-3 p-3 bg-white border-2 gap-1">
                Don't have an account?
                <a href="#" className="text-[#0496F6] hover:text-[#89caf5]">
                    <strong>Sign up</strong>
                </a>
            </div>

            <Links />
        </div>
    );
};

const Links = (props) => {
    return (
        <div className="flex flex-col align-middle mt-4 gap-5">
            <div className="flex justify-center">Get the app.</div>
            <div className="flex gap-4 justify-center">
                <a href="#">
                    <img
                        src="../assets/link1.png"
                        width={"136px"}
                        height={"40px"}
                    />
                </a>
                <a href="#">
                    <img
                        src="../assets/link2.png"
                        width={"136px"}
                        height={"40px"}
                    />
                </a>
            </div>
        </div>
    );
};

const Footer = (props) => {
    const linksFirstRow = [
        "Meta",
        "About",
        "Blog",
        "Help",
        "API",
        "Privacy",
        "Terms",
        "Top Accounts",
        "Hashtags",
        "Locations",
        "Instagram Lite",
        "Contact Uploading & Non-Users",
    ];

    const linksSecondRow = [
        "Dance",
        "Food & Drink",
        "Home & Garden",
        "Music",
        "Visual Arts",
    ];
    const thirdRow = ["english", "©2022 Instagram from @edluigi"];
    return (
        <div className="flex mt-10 gap-3 flex-col">
            <div className="flex justify-center align-middle gap-3">
                {linksFirstRow.map((i) => (
                    <a href="#" className="text-gray-400">
                        {i}
                    </a>
                ))}
            </div>
            <div className="flex justify-center align-middle gap-3">
                {linksSecondRow.map((i) => (
                    <a href="#" className="text-gray-400">
                        {i}
                    </a>
                ))}
            </div>
            <div className="flex justify-center align-middle gap-3">
                {thirdRow.map((i) => (
                    <a href="#" className="text-gray-400">
                        {i}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default function App() {
    return (
        <div>
            <Container>
                <Slide />
                <FormLogin />
            </Container>
            <Footer />
        </div>
    );
}
