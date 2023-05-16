
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
	fontFamily: {
		main: ["Roboto"],
		logo: ["Source Sans Pro"],
	},
	colors: {
		background: "#FEF4EE",
		primary: "#D3D9EF",
		secondary: "#DBDEE9",
		contast: "#403F3E",
		message: "#f50505",
	},
	extend: {},
  },
  plugins: [],
});