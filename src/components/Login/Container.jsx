export const Container = (props) => {
    return (
        <div className="flex w-full justify-center gap-8 md:mt-[10vh] sm:mt-[0vh]">
            {props.children}
        </div>
    );
};
