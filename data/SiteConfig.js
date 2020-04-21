const config = {
  siteTitle: 'Burhan Syam',
  siteTitleShort: 'Burhan',
  siteTitleAlt: 'Burhan Syam',
  siteLogo: '/logos/logo.png',
  siteUrl: 'https://burhansyam.com',
  repo: 'https://github.com/burhansyam/blog-2020/',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription: 'Burhan Syam Personal Blog - Catatan Pengganti Pena dan kertas',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-125079658-2',
  disqusShortname: 'burhansyam',
  postDefaultCategoryID: 'Tech',
  userName: 'burhansyam',
  userEmail: 'me@burhansyam.com',
  userTwitter: 'burhansyam_',
  userLocation: 'Wonosari, ID',
  userDescription: 'Burhan Syam Personal Blog - Catatan Pengganti Pena dan kertas.',
  menuLinks: [
    {
      name: 'Blog',
      link: '/blog/',
    },
    {
      name: 'Kontak',
      link: '/me/',
    }
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
