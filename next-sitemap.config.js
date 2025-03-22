/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://sociolite.co', // Replace with your actual website URL
    generateRobotsTxt: true, // Generates a robots.txt file
    sitemapSize: 5000, // Default is 5000 URLs per sitemap
    exclude: ['/admin', '/private'], // Pages you want to exclude
    robotsTxtOptions: {
        policies: [
        { userAgent: '*', allow: '/' }, // Allow all search engines
        { userAgent: 'Googlebot', allow: '/' }, // Explicitly allow Googlebot
        { userAgent: '*', disallow: ['/admin', '/private'] }, // Block certain pages
        ],
    },
};  