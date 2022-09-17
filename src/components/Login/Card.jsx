export const Card = (props) => {
    return (
        <div className="flex flex-col bg-white p-10 pt-12 mt-3 pb-5 justify-center w-[350px] gap-5 border-[1px] border-gray-300">
            {props.children}
        </div>
    );
};
