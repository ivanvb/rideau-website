import React, { useState, useRef, useEffect } from "react"

const MagicTabs = ({ tabs }) => {
    const optionsRef = useRef([])

    tabs.forEach((item, i) => {
        if (!optionsRef.current[i]) {
            optionsRef.current[i] = React.createRef()
        }
    })

    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState(0)
    const [activeItem, setActiveItem] = useState(0)
    const [hasInitialWidth, setInitialWidth] = useState(null)

    useEffect(() => {
        // Used to avoid seeing the first transition of the bar below the label.
        const ARTIFICIAL_DELAY = 100

        setWidth(`${optionsRef.current[0].current.clientWidth}px`)
        setTimeout(() => {
            setInitialWidth(true)
        }, ARTIFICIAL_DELAY)
    }, [])

    function updateActiveTab(ref, i) {
        setLeft(`${ref.current.offsetLeft}px`)
        setWidth(`${ref.current.clientWidth}px`)

        setActiveItem(i)
    }

    return (
        <div>
            <div className="relative pb-1">
                <ul className="flex">
                    {tabs.map(({ tabName }, i) => {
                        return (
                            <li
                                className="pr-16 tracking-wider text-gray-900"
                                key={i}
                            >
                                <span
                                    className="cursor-pointer block text-2xl"
                                    ref={optionsRef.current[i]}
                                    onClick={() =>
                                        updateActiveTab(
                                            optionsRef.current[i],
                                            i
                                        )
                                    }
                                >
                                    {tabName}
                                </span>
                            </li>
                        )
                    })}
                </ul>
                <div
                    className={`h-1 bg-primary-900 absolute bottom-0 magic-line ${
                        hasInitialWidth ? "width-transition" : ""
                    }`}
                    style={{ left, width }}
                ></div>
            </div>
            <div className="relative">
                {tabs.map(({ item }, i) => {
                    return (
                        <div
                            key={i}
                            className={`${
                                i === activeItem
                                    ? "relative opacity-100 z-10"
                                    : "absolute opacity-0 z-0 top-0"
                            }`}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MagicTabs
