module.exports = {
  theme: {},
  variants: {},
  plugins: [require('@tailwindcss/ui')()],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
}
