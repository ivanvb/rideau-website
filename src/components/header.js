import { Link } from "gatsby"
import React, { useState, useRef } from "react"
import RideauLogo from "../images/rideau-logo.svg"
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"

const NavbarLink = ({ to, label }) => {
    return (
        <li className="mx-0 lg:mx-3 py-2">
            <Link
                className="text-gray-500 text-lg hover:text-gray-600"
                activeClassName="text-primary-500 hover:text-primary-300"
                partiallyActive={true}
                to={to}
            >
                {label}
            </Link>
        </li>
    )
}

const SocialMediaLink = ({ icon, url }) => {
    return (
        <li className="mx-l-0 mr-4 lg:ml-2 my-2">
            <a href={url}>
                {React.cloneElement(icon, {
                    size: 20,
                    className: "text-primary-500 hover:text-primary-900",
                })}
            </a>
        </li>
    )
}

const Header = () => {
    const navLinks = [
        {
            to: "/about/",
            label: "About",
        },
        {
            to: "/products/",
            label: "Products",
        },
        {
            to: "/testimonials/",
            label: "Testimonials",
        },
        {
            to: "/news/",
            label: "News",
        },
        {
            to: "/contact/",
            label: "Contact",
        },
    ]

    const socialMediaLinks = [
        {
            icon: <FaInstagram />,
            url: "https://www.instagram.com",
        },
        {
            icon: <FaTwitter />,
            url: "https://www.twitter.com",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com",
        },
    ]

    const [isOpen, setOpen] = useState(false)
    const expandableSection = useRef(null)

    const togggleNavbar = () => {
        setOpen(prev => !prev)
    }

    return (
        <header className="bg-white shadow std-padding-x lg:px-12 py-2 fixed top-0 z-50 w-full">
            <div className="max-w-std mx-auto flex flex-wrap items-center justify-between">
                <Link to="/" className="block flex-grow-0">
                    <img
                        src={RideauLogo}
                        alt="Rideau Logo"
                        height="200"
                        width="90"
                        className="h-16 transform transition-transform duration-200 active:scale-90"
                    />
                </Link>
                <div className="absolute right-0 top-0 mr-3 mt-4 block lg:hidden">
                    <button onClick={togggleNavbar} className="p-1">
                        {isOpen ? (
                            <MdClose size={32} className="text-primary-500" />
                        ) : (
                            <GiHamburgerMenu
                                size={32}
                                className="text-primary-500"
                            />
                        )}
                    </button>
                </div>
                <div
                    className={`
          w-full lg:w-2/3 flex flex-col lg:flex-row lg:items-center justify-between overflow-y-hidden lg:overflow-y-visible transition-max-height duration-300 ${
              isOpen ? "" : "max-h-0"
          } lg:max-h-full
        `}
                    style={{
                        maxHeight: isOpen
                            ? `${expandableSection.current.scrollHeight + 80}px`
                            : "0",
                    }}
                    ref={expandableSection}
                >
                    <ul className="flex w-full lg:w-auto flex-col lg:flex-row static lg:absolute lg:center-horizontal z-50">
                        {navLinks.map((link, i) => (
                            <NavbarLink {...link} key={i} />
                        ))}
                    </ul>
                    <ul className="flex lg:ml-auto">
                        {socialMediaLinks.map((link, i) => (
                            <SocialMediaLink {...link} key={i} />
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
