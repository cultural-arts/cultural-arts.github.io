import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'The Project',
      href: getPermalink('/project'),
    },
    {
      text: 'News',
      href: getPermalink('/news'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Organization',
      links: [
        { text: 'About', href: '#' },
        { text: 'Funding & Sponsors', href: '/founding-sponsors' },
        { text: 'News', href: getPermalink('/news') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    }
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/cultural-arts' },
  ],
  footNote: `
    cultural-arts.com
  `,
};
