import React from "react"
import MagicTabs from "../general/magicTabs"

const ProductCategories = () => {
    const tabs = [
        {
            tabName: "Exterior",
            item: <p>Exterior</p>,
        },
        {
            tabName: "Interior",
            item: <p>Interior</p>,
        },
        {
            tabName: "Executive",
            item: <p>Executive</p>,
        },
    ]

    return (
        <section className="std-padding-x">
            <MagicTabs tabs={tabs} />
        </section>
    )
}

export default ProductCategories
