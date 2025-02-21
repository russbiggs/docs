import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Protomaps Docs",
  description: "Technical Documentation for Protomaps",
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guides', link: '/' },
      { text: 'protomaps.com', link: 'https://protomaps.com' },
      { text: 'Sponsor on GitHub', link: 'https://github.com/sponsors/protomaps' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsed: true,
        items: [
          { text: 'What is Protomaps?', link: '/' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'PMTiles',
        collapsed: true,
        items: [
          { text: 'Concepts', link: '/pmtiles/' },
          { text: 'Creating PMTiles', link: '/pmtiles/create' },
          { text: 'Cloud Storage', link: '/pmtiles/cloud-storage' },
          { text: 'pmtiles CLI', link: '/pmtiles/cli' }
        ]
      },
      {
        text: 'PMTiles in the browser',
        collapsed: true,
        items: [
          { text: 'MapLibre GL', link: '/pmtiles/maplibre' },
          { text: 'Leaflet', link: '/pmtiles/leaflet' },
          { text: 'OpenLayers', link: '/pmtiles/openlayers' },
        ]
      },
      {
        text: 'Accelerating PMTiles',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/deploy/' },
          { text: 'AWS', link: '/deploy/aws' },
          { text: 'Cloudflare', link: '/deploy/cloudflare' },
          { text: 'Server (Caddy)', link: '/deploy/server' }
        ]
      },
      {
        text: 'OSM Basemaps',
        collapsed: true,
        items: [
          { text: 'Downloads', link: '/basemaps/downloads' },
          { text: 'Basemap Layers', link: '/basemaps/layers' },
          { text: 'Basemap Styles', link: '/basemaps/styles' },
          { text: 'MapLibre GL', link: '/basemaps/maplibre' },
          { text: 'Leaflet', link: '/basemaps/leaflet' },
          { text: 'OpenLayers', link: '/basemaps/openlayers' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/protomaps' },
      { icon: 'mastodon', link: 'https://mapstodon.space/@protomaps' },
      { icon: 'twitter', link: 'https://twitter.com/protomaps' },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'An open source mapping system released under the BSD and ODbL licenses.',
      copyright: '© 2019-present Protomaps LLC'
    }
  }
})
