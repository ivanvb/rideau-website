import React from "react"
import AboutCard from "../general/aboutCard"
import { useStaticQuery, graphql } from "gatsby"
import { HiUserGroup } from "react-icons/hi"
import { GiCrystalShine } from "react-icons/gi"
import { RiRefund2Line } from "react-icons/ri"
import { FaMagic } from "react-icons/fa"

const CompanyCard = () => {
    const cardsInfo = useStaticQuery(graphql`
        {
            aboutJson {
                whyTheyPickUs {
                    title
                    text
                }
            }
        }
    `)

    const icons = [
        <HiUserGroup size={36} className="text-primary-100 mb-1" />,
        <GiCrystalShine size={36} className="text-primary-100" />,
        <RiRefund2Line size={36} className="text-primary-100" />,
        <FaMagic size={28} className="text-primary-100" />,
    ]

    return (
        <section className="std-padding-x mb-12">
            <h2 className="section-title mb-3">Why They Pick Us</h2>
            <div className="grid grid-cols-2 gap-6">
                {cardsInfo.aboutJson.whyTheyPickUs.map((card, i) => (
                    <AboutCard
                        className="col-span-2 lg:col-span-1"
                        {...card}
                        key={i}
                        icon={icons[i]}
                    />
                ))}
            </div>
        </section>
    )
}

export default CompanyCard
