import React, { useState, useEffect } from "react"
import Img from "gatsby-image"

const AnimatedGallery = ({
    galleryImages,
    slideDuration = 5000,
    className = "",
}) => {
    const [galleryIndex, setGalleryIndex] = useState({ index: -1, next: -1 })

    useEffect(() => {
        const interval = setInterval(() => {
            setGalleryIndex(prev => {
                return {
                    index: (prev.index + 1) % galleryImages.length,
                    next: (prev.index + 2) % galleryImages.length,
                }
            })
        }, slideDuration)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className={`relative ${className}`}>
            {galleryImages.map((galleryImage, i) => {
                return (
                    <div
                        className={`absolute lg:h-full w-full h-64 
                            ${
                                // only show the current slide, the next slide, or if the interval has not
                                // iterated even once, show the first slide.
                                i === galleryIndex.index ||
                                i === galleryIndex.next ||
                                (i === 0 && galleryIndex.index === -1)
                                    ? "block"
                                    : "hidden"
                            }
                            ${
                                // the current slide fades away because of this animation.
                                i === galleryIndex.index ? "disappear" : ""
                            }
                            ${
                                // the next slide is also displayed as a block, but starts off being hidden
                                // thanks to its clip path. The 'appear' class makes it slowly appear while the
                                // current slide disappears.
                                i === galleryIndex.next
                                    ? "block-hidden appear"
                                    : ""
                            }
                            `}
                        key={i}
                    >
                        <Img
                            fluid={galleryImage.childImageSharp.fluid}
                            imgStyle={{
                                objectFit: "cover",
                                height: "100%",
                            }}
                            className="h-full"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default AnimatedGallery
