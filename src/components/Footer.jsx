export const Footer = (props) => {
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
