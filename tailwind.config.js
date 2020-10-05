module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            spacing: {
                80: "20rem",
                96: "24rem",
                128: "32rem",
                140: "35rem",
            },
            colors: {
                primary: {
                    100: "#DBE4F0",
                    300: "#4D78B2",
                    500: "#2A4264",
                    700: "#263C59",
                    900: "#0F223D",
                },
            },
            transitionProperty: {
                "max-height": "max-height",
            },
            maxHeight: {
                0: "0",
            },
        },
        minHeight: {
            64: "16rem",
        },
    },
    variants: {
        scale: ["responsive", "hover", "focus", "active"],
    },
    plugins: [],
}
