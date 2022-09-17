import { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Card } from "./Card";
import { Links } from "./Links";

export const FormLogin = (props) => {
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
            <div className="flex item-center justify-center mt-2 p-4 bg-white border-[1px] border-gray-300 gap-1 text-sm">
                <h5 className="text-gray-700">Don't have an account?</h5>
                <a href="#" className="text-[#1098f3] hover:text-[#89caf5]">
                    <strong>Sign up</strong>
                </a>
            </div>

            <Links />
        </div>
    );
};
