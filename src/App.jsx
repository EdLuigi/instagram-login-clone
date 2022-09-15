import React, { useEffect, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";

const Container = (props) => {
    return (
        <div className="flex justify-center gap-0 bg-purple-100 pt-[7vh]">
            {props.children}
        </div>
    );
};

const Slide = (props) => {
    return (
        <div>
            <img src="../assets/0.png" />
        </div>
    );
};

const Card = (props) => {
    return (
        <div className="flex flex-col bg-white p-10 pt-12 pb-5 justify-center w-[350px] auto gap-5 border-[1px] border-gray-300">
            {props.children}
        </div>
    );
};

const FormLogin = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [preenchido, setPreenchido] = useState(false);

    // useEffect(() => {
    //     if (login.length > 6 && password.length > 6) {
    //         setPreenchido(true);
    //     }else{

    //     }
    // }, [login, password]);

    return (
        <div>
            <Card>
                <img
                    src="../assets/logo.png"
                    width={"175px"}
                    height={"51px"}
                    className="mx-auto mb-3"
                />
                <form className="flex flex-col gap-2" onSubmit={() => {}}>
                    <input
                        className="bg-instagramBg border-[0.5px] border-gray-300 rounded p-[10px] text-xs"
                        type={"text"}
                        placeholder="Phone number, username or e-mail"
                        value={login}
                        onChange={(e) => {
                            setLogin(e.currentTarget.value);
                        }}
                    />
                    <input
                        className="bg-instagramBg border-[0.5px] border-gray-300 rounded p-[10px] text-xs mb-2"
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
                            "text-white rounded text-[14px] py-1 font-bold " +
                            (preenchido
                                ? "bg-[#0095F6] cursor-pointer"
                                : "bg-[#B2DFFC]")
                        }
                        value="Log in"
                        disabled={!preenchido}
                    />
                </form>

                <div className="flex gap-3 items-center justify-center mt-2">
                    <div className="bg-gray-300 h-[1px] w-[100%] flex justify-center items-center relative">
                        <div className="bg-white px-4 relative">
                            <h5 className="text-gray-400 text-sm font-bold">
                                OR
                            </h5>
                        </div>
                    </div>
                </div>

                <a
                    href="#"
                    className="flex items-center justify-center text-[#385185] gap-1 text-sm mt-3"
                >
                    <AiFillFacebook className="mt-0.5 " size="20px" />
                    <h5 className="font-[550]">Log in with Facebook</h5>
                </a>

                <a
                    href="#"
                    className="flex justify-center text-[#385185] text-xs"
                >
                    Forgot password?
                </a>
            </Card>
            <div className="flex item-center justify-center mt-3 p-4 bg-white border-[1px] border-gray-300 gap-1 text-sm">
                <h5 className="text-gray-700">Don't have an account?</h5>
                <a href="#" className="text-[#1098f3] hover:text-[#89caf5]">
                    <strong>Sign up</strong>
                </a>
            </div>

            <Links />
        </div>
    );
};

const Links = (props) => {
    return (
        <div className="flex flex-col mt-4 gap-5">
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
        "Jobs",
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
    const thirdRow = ["English", "©2022 Instagram from @edluigi"];
    return (
        <div className="flex mt-10 gap-2 flex-col fixed w-[100%] justify-center bottom-0 pb-8 text-xs">
            <div className="flex justify-center gap-4">
                {linksFirstRow.map((i) => (
                    <a
                        href="#"
                        className="text-gray-500"
                        key={linksFirstRow.indexOf(i)}
                    >
                        {i}
                    </a>
                ))}
            </div>
            <div className="flex justify-center gap-3 mb-2">
                {linksSecondRow.map((i) => (
                    <a
                        href="#"
                        className="text-gray-500"
                        key={linksSecondRow.indexOf(i)}
                    >
                        {i}
                    </a>
                ))}
            </div>
            <div className="flex justify-center gap-3">
                {thirdRow.map((i) => (
                    <a
                        href="#"
                        className="text-gray-500"
                        key={thirdRow.indexOf(i)}
                    >
                        {i}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default function App() {
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
        <div>
            <Container>
                {!isMobile && <Slide />}
                <FormLogin />
            </Container>
            {/* <Footer /> */}
        </div>
    );
}
