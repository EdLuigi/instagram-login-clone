export const Container = (props) => {
    return (
        <div className="flex w-full justify-center gap-8 bg-purple-100 pt-[10vh]">
            {props.children}
        </div>
    );
};
