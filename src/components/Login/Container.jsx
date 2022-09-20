export const Container = (props) => {
    return (
        <div className="flex w-full justify-center gap-8 mt-[10vh]">
            {props.children}
        </div>
    );
};
