const skills = ['Python', 'Django', 'JavaScript', 'React', 'Flutter']

const keywords = [
  ...skills.map(skill => `${skill} Developer`),
  ...skills.map(skill => `${skill} Programmer`),
  ...skills.map(skill => `${skill} Articles`),
]

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/blog your pathPrefix should be "blog"
  siteTitle: 'Shakib Hossain | shakib609', // Navigation and Site Title
  siteTitleAlt: 'Personal website of Shakib Hossain', // Alternative Site title for SEO
  siteTitleShort: 'shakibhossain-shakib609', // short_name for manifest
  siteUrl: 'https://www.shakib609.gq', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Check out how Shakib Hossain learns and writes about Python, Django, JavaScript, React, Flutter.',
  author: 'Shakib Hossain', // Author for schemaORGJSONLD
  organization: '',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@shakib609', // Twitter Username
  ogSiteName: "Shakib Hossain's Personal Blog", // Facebook Site Name
  ogLanguage: 'en_US',
  googleAnalyticsID: 'UA-78902575-1',

  // Keywords for SEO
  keywords,

  // Manifest and Progress color
  themeColor: '#5348FF',
  backgroundColor: '#2b2e3c',

  // Social component
  twitter: 'https://twitter.com/shakib609/',
  twitterHandle: '@shakib609',
  github: 'https://github.com/shakib609/',
  linkedin: 'https://www.linkedin.com/in/shakib609/',
}
