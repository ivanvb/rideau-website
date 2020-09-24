import { Link } from "gatsby"
import React from "react"
import RideauLogo from "../images/rideau-logo.svg"
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

const NavbarLink = ({ to, label }) => {
  return (
    <li className="mx-3">
      <Link
        className="text-gray-500 text-lg hover:text-gray-600"
        activeClassName="text-blue-700 hover:text-blue-800"
        to={to}
      >
        {label}
      </Link>
    </li>
  )
}

const SocialMediaLink = ({ icon, url }) => {
  return (
    <li className="mx-2">
      <a href={url}>
        {React.cloneElement(icon, {
          size: 20,
          className: "text-blue-700 hover:text-blue-800",
        })}
      </a>
    </li>
  )
}

const Header = () => {
  const navLinks = [
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/catalog",
      label: "Catalog",
    },
    {
      to: "/portfolio",
      label: "Portfolio",
    },
    {
      to: "/news",
      label: "News",
    },
    {
      to: "/contact",
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
  return (
    <header className="bg-white shadow px-12 py-2 flex items-center justify-between">
      <Link to="/" className="inline flex">
        <img src={RideauLogo} alt="Rideau Logo" className="h-16" />
      </Link>
      <ul className="flex">
        {navLinks.map((link, i) => (
          <NavbarLink {...link} key={i} />
        ))}
      </ul>
      <ul className="flex">
        {socialMediaLinks.map((link, i) => (
          <SocialMediaLink {...link} key={i} />
        ))}
      </ul>
    </header>
  )
}

export default Header
