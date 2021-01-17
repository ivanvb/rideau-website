import React from "react"
import { Link } from "gatsby"

const FooterCol = ({ title, links }) => {
    return (
        <div className="col col-span-12 md:col-span-4 mb-8 md:mb-0">
            <h2 className="footer-title">{title}</h2>
            <ul className="list-none">
                {links.map((link, i) => (
                    <li key={i} className="my-1 text-sm">
                        <Link
                            className="opacity-50 hover:opacity-75"
                            to={link.url}
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
const Footer = () => {
    const [copyrightLoaded, setCopyrightLoaded] = React.useState(false)
    React.useEffect(() => {
        setCopyrightLoaded(true)
    }, [])
    return (
        <footer className="bg-primary-500 text-white ">
            <div className="grid grid-cols-12 std-padding-x py-8 rideau-container">
                <FooterCol
                    title="Rideau"
                    links={[
                        {
                            url: "/about",
                            text: "About Us",
                        },
                        {
                            url: "/news",
                            text: "News",
                        },
                        {
                            url: "/portfolio",
                            text: "Previous Work",
                        },
                    ]}
                />
                <FooterCol
                    title="Products"
                    links={[
                        {
                            url: "/products/exterior",
                            text: "Exterior Blinds",
                        },
                        {
                            url: "/products/interior",
                            text: "Interior Blinds",
                        },
                        {
                            url: "/products/executive",
                            text: "Executive Blinds",
                        },
                    ]}
                />
                <FooterCol
                    title="Help"
                    links={[
                        {
                            url: "/contact",
                            text: "Contact",
                        },
                    ]}
                />
            </div>
            <div className="py-4 bg-primary-700">
                <span className="std-padding-x text-xs opacity-75 block rideau-container">
                    {copyrightLoaded
                        ? `${new Date().getFullYear()} © Rideau LLC`
                        : "Rideau LLC © 2020 - present"}
                </span>
            </div>
        </footer>
    )
}

export default Footer
