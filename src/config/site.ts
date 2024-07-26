export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'EMA',
  description: "Most respected EMA's fan club with DUSTCELL",
  navItems: [
    {
      label: 'DUSTCELL',
      href: '/dustcell',
      target: undefined
    },
    {
      label: 'DISCOGRAPHY',
      href: '/discography',
      target: undefined,
    },
    {
      label: 'SOCIAL MEDIA',
      href: '/social',
      target: undefined,
    },
  ],
  links: {
    emaLinks: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/eumza1',
        target: '_blank',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/301ye/',
        target: '_blank',
      },
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/@30IYE',
        target: '_blank',
      },
    ],
    dustcellLink: [
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/c/DUSTCELL',
        target: '_blank',
      },
      {
        label: 'Fun Club App "DUSTROOM"',
        href: 'https://subscription.app.c-rayon.com/app/dustcell/home',
        target: '_blank',
      },
      {
        label: 'CD & GOODS',
        href: 'https://findmestore.thinkr.jp/collections/dustcell',
        target: '_blank',
      },
      {
        label: 'DUSTCELL TOURS',
        href: 'https://l-tike.com/concert/mevent/?mid=602764',
        target: '_blank',
      },
      {
        label: 'LINE',
        href: 'https://page.line.me/011yqnoi?openQrModal=true',
        target: '_blank',
      },
      {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@dust_cell',
        target: '_blank',
      },
      {
        label: 'HP',
        href: 'https://kamitsubaki.jp/',
        target: '_blank',
      },
    ],
    findmestore: {
      label: 'CD & GOODS',
      href: 'https://findmestore.thinkr.jp/collections/dustcell',
      target: '_blank',
    },
  },
};