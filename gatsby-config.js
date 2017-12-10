module.exports = {
	siteMetadata: {
		title: "Evil's Landing"
	},
	plugins: [
		'gatsby-plugin-glamor',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography'
			}
		}
	]
};
