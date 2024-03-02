const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');


const serviceKeys = [
    "cleansing_care",
    "laser_gynecology",
    "ft_scar_removal",
    "botox_injection",
    "growths_removal",
    "acne_removal",
    "vessel_removal",
    "pigmentation_removal",
    "laser_epilation",
    "laser_rejuvination",
    "laser_piling",
    "laser_giarunoplastic",
    "ft_laser_frac_rejuvi",
    "countur_plastic",
    "smooth_rejuvination"
];


const paths = serviceKeys.map(key => ({ url: `/services/${key}` }));
paths.push({ url: '/about' }, { url: '/' });

function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://bonicenter.ru' });

    paths.forEach(path => sitemap.write(path));
    sitemap.end();

    streamToPromise(sitemap).then(sitemapOutput => {
        createWriteStream('sitemap.xml').write(sitemapOutput.toString());
    });
}

generateSitemap();
