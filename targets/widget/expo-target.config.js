/** @type {import('@bacons/apple-targets').Config} */
module.exports = {
  type: "widget",
  icon: "../../assets/images/icon.png",
  colors: {
    slate: {
      light: "#F0F0F0",
      dark: "#3E72A0",
    },
    $accent: "#F09458",
    $widgetBackground: "#DB739C",
  },
  entitlements: {
    "com.apple.security.application-groups": ["group.bacon.data"],
  },
  images: {
    myImage: "../../assets/images/react-logo.png",
  },
};
