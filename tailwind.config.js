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
        128: "32rem",
        140: "35rem",
      },
    },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
