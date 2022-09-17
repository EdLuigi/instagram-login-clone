export const Container = (props) => {
    return (
        <div className="flex justify-center gap-8 bg-purple-100 pt-[7vh]">
            {props.children}
        </div>
    );
};
