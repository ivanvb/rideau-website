import React from "react"

const FooterCol = ({ title, links }) => {
    return (
        <div className="col col-span-12 md:col-span-4 mb-8 md:mb-0">
            <h2 className="footer-title">{title}</h2>
            <ul className="list-none">
                {links.map((link, i) => (
                    <li key={i} className="my-1 text-sm">
                        <a
                            className="opacity-50 hover:opacity-75"
                            href={link.url}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
const Footer = () => {
    return (
        <footer className="bg-primary-500 text-white ">
            <div className="grid grid-cols-12 px-8 md:px-20 py-8 rideau-container">
                <FooterCol
                    title="Rideau"
                    links={[
                        {
                            url: "#",
                            text: "About Us",
                        },
                        {
                            url: "#",
                            text: "News",
                        },
                        {
                            url: "#",
                            text: "Previous Work",
                        },
                        {
                            url: "#",
                            text: "Privacy Policy",
                        },
                    ]}
                />
                <FooterCol
                    title="Products"
                    links={[
                        {
                            url: "#",
                            text: "Exterior Blinds",
                        },
                        {
                            url: "#",
                            text: "Interior Blinds",
                        },
                        {
                            url: "#",
                            text: "Executive Blinds",
                        },
                    ]}
                />
                <FooterCol
                    title="Help"
                    links={[
                        {
                            url: "#",
                            text: "FAQ",
                        },
                        {
                            url: "#",
                            text: "Contact",
                        },
                    ]}
                />
            </div>
            <div className="py-4 bg-primary-700">
                <span className="px-8 md:px-20 text-xs opacity-75 block rideau-container">
                    2020 © Rideau LLC
                </span>
            </div>
        </footer>
    )
}

export default Footer
