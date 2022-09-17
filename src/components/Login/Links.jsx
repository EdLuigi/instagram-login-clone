export const Links = (props) => {
    return (
        <div className="flex flex-col mt-5 gap-5">
            <h5 className="flex justify-center text-sm text-gray-700">
                Get the app.
            </h5>
            <div className="flex gap-2 justify-center">
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
