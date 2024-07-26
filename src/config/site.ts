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
    dustcellLink: {
      label: 'CD & GOODS',
      href: 'https://findmestore.thinkr.jp/collections/dustcell',
      target: '_blank',
    },
  },
};