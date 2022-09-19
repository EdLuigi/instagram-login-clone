const Container = (props) => {
    return (
        <div className="flex justify-center gap-4 flex-wrap text-xs">
            {props.children}
        </div>
    );
};

const Links = (props) => {
    return (
        <a href="#" className="text-gray-500">
            {props.children}
        </a>
    );
};

const FirstRow = () => {
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

    return (
        <Container>
            {linksFirstRow.map((i) => (
                <Links key={linksFirstRow.indexOf(i)}>{i}</Links>
            ))}
        </Container>
    );
};

const SecondRow = () => {
    const linksSecondRow = [
        "Dance",
        "Food & Drink",
        "Home & Garden",
        "Music",
        "Visual Arts",
    ];

    return (
        <Container>
            {linksSecondRow.map((i) => (
                <Links key={linksSecondRow.indexOf(i)}>{i}</Links>
            ))}
        </Container>
    );
};

const ThirdRow = () => {
    const thirdRow = ["English", "©2022 Instagram from @edluigi"];

    return (
        <Container>
            {thirdRow.map((i) => (
                <Links key={thirdRow.indexOf(i)}>{i}</Links>
            ))}
        </Container>
    );
};

export const Footer = (props) => {
    return (
        <footer className="bg-cyan-200 py-14">
            {/* <footer className="flex mt-10 gap-2 flex-col fixed w-[100%] justify-center bottom-0 pb-8 text-xs"> */}
            <FirstRow />
            <SecondRow />
            <ThirdRow />
        </footer>
    );
};
