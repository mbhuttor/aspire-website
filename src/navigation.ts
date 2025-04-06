import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About Us', href: getPermalink('/about') },
    { text: 'Resources', href: getPermalink('/resources') },
    { text: 'Admissions', href: getPermalink('/admissions') },
    { text: 'Facilities', href: getPermalink('/facilities') },
    { text: 'Events', href: getPermalink('/events') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Admissions', href: getPermalink('/admissions') },
        { text: 'Student Resources', href: getPermalink('/resources') },
        { text: 'Events', href: getPermalink('/events') },
      ],
    },
    {
      title: 'School Info',
      links: [
        { text: 'Facilities', href: getPermalink('/facilities') },
        // ❌ Removed: { text: 'Student Life', href: getPermalink('/student-corner') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms & Conditions', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/aspirecollegegamber/',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/aspiregamber/',
    },
  ],
  footNote: `
    <span>© BI Colleges (Aspire Gamber). All rights reserved.</span>
  `,
};
