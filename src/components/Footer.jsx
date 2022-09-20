const Container = (props) => {
    return (
        <div className="flex justify-center gap-4 flex-wrap text-xs">
            {props.children}
        </div>
    );
};

const Links = (props) => {
    return (
        <a href="#" className="text-gray-500 text-opacity-80">
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
            <div className="flex mt-3 gap-3">
                {thirdRow.map((i) => (
                    <Links key={thirdRow.indexOf(i)}>{i}</Links>
                ))}
            </div>
        </Container>
    );
};

export const Footer = (props) => {
    return (
        <footer className="flex flex-col py-14 gap-2 ">
            <FirstRow />
            <SecondRow />
            <ThirdRow />
        </footer>
    );
};
