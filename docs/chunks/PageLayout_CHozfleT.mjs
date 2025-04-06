import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, s as spreadAttributes, a as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_Bxeu9YRe.mjs';
import { $ as $$Icon, a as $$ToggleTheme } from './ToggleTheme_DPzibztS.mjs';
import { $ as $$Logo } from './Logo_COqZeloQ.mjs';
import 'clsx';
import { twMerge } from 'tailwind-merge';
import { g as getHomePermalink, t as trimSlash, S as SITE, a as getPermalink } from './consts_D7Wgx-c_.mjs';

const $$Astro$4 = createAstro("https://yourwebsite.com");
const $$ToggleMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "/workspaces/astrowind/src/components/common/ToggleMenu.astro", undefined);

const $$Astro$3 = createAstro("https://yourwebsite.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    type,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${type === "button" || type === "submit" || type === "reset" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</button>` : renderTemplate`<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`}`;
}, "/workspaces/astrowind/src/components/ui/Button.astro", undefined);

const $$Astro$2 = createAstro("https://yourwebsite.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    { text: "Home", href: getHomePermalink(), icon: "tabler:home" },
    { text: "About Us", href: "/about", icon: "tabler:info-square" },
    { text: "Resources", href: "/resources", icon: "tabler:books" },
    { text: "Admissions", href: "/admissions", icon: "tabler:school" },
    { text: "Facilities", href: "/facilities", icon: "tabler:building" },
    { text: "Events", href: "/events", icon: "tabler:calendar" }
  ];
  const {
    id = "header",
    actions = [],
    isSticky = false,
    isFullWidth = false,
    showToggleTheme = false,
    showRssFeed = false,
    position = "center"
  } = Astro2.props;
  `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header class="top-0 z-40 flex-none mx-auto w-full border-b border-gray-200 bg-white text-black shadow-md"${spreadAttributes(isSticky ? { "data-aw-sticky-header": true } : {})}${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0"></div> <div${addAttribute([
    "relative py-3 px-4 md:px-6 mx-auto w-full flex items-center justify-between",
    { "max-w-7xl": !isFullWidth }
  ], "class:list")}> <!-- Logo --> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <!-- Mobile Menu --> <div class="flex items-center md:hidden"> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} </div> <!-- Navigation Menu --> <nav class="hidden md:flex items-center"> <ul class="flex space-x-6 text-base font-medium"> ${links.map(({ text, href, icon }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="flex items-center space-x-2 px-4 py-2 hover:text-blue-600 text-black"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })} <span class="whitespace-nowrap">${text}</span> </a> </li>`)} </ul> </nav> <!-- Right Side: Actions --> <div class="hidden md:flex items-center space-x-4"> ${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6" })}`} ${actions.length > 0 && renderTemplate`${renderComponent($$result, "Button", $$Button, { ...actions[0], "class": "px-6 py-2 text-sm font-semibold" })}`} </div> </div> </header>`;
}, "/workspaces/astrowind/src/components/widgets/Header.astro", undefined);

const $$Astro$1 = createAstro("https://yourwebsite.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const {
    socialLinks = [],
    secondaryLinks = [],
    links = [],
    footNote = "",
    theme = "light"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{ dark: theme === "dark" }, "relative border-t border-gray-200 dark:border-slate-800 not-prose"], "class:list")}> <div class="dark:bg-dark absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300"> <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12"> <div class="col-span-12 lg:col-span-4"> <div class="mb-2"> <a class="inline-block font-bold text-xl"${addAttribute(getHomePermalink(), "href")}> ${SITE?.name} </a> </div> <div class="text-sm text-muted flex gap-1"> ${secondaryLinks.map(({ text, href }, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index !== 0 ? " \xB7 " : ""}<a class="text-muted hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"${addAttribute(href, "href")}>${unescapeHTML(text)}</a> ` })}`)} </div> </div> ${links.filter(({ title }) => title?.toLowerCase() !== "student life").map(({ title, links: links2 }) => renderTemplate`<div class="col-span-6 md:col-span-3 lg:col-span-2"> <div class="dark:text-gray-300 font-medium mb-2">${title}</div> ${links2 && Array.isArray(links2) && links2.length > 0 && renderTemplate`<ul class="text-sm"> ${links2.map(({ text, href, ariaLabel }) => renderTemplate`<li class="mb-2"> <a class="text-muted hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>`} </div>`)} </div> <div class="md:flex md:items-center md:justify-between py-6 md:py-8"> <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0"> <li> <a class="text-muted hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 inline-flex items-center" aria-label="Instagram" href="https://www.instagram.com/aspirecollegegamber/" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-instagram", "class": "w-5 h-5 text-pink-500" })} </a> </li> <li> <a class="text-muted hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 inline-flex items-center" aria-label="Facebook" href="https://www.facebook.com/aspiregamber/" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-facebook", "class": "w-5 h-5 text-blue-600" })} </a> </li> </ul> <div class="text-sm mr-4 dark:text-muted"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footNote)}` })} </div> </div> </div> </footer>`;
}, "/workspaces/astrowind/src/components/widgets/Footer.astro", undefined);

const $$Announcement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/workspaces/astrowind/src/components/widgets/Announcement.astro", undefined);

const headerData = {
  links: [
    { text: "Home", href: getPermalink("/") },
    { text: "About Us", href: getPermalink("/about") },
    { text: "Resources", href: getPermalink("/resources") },
    { text: "Admissions", href: getPermalink("/admissions") },
    { text: "Facilities", href: getPermalink("/facilities") },
    { text: "Events", href: getPermalink("/events") }
  ]
};
const footerData = {
  links: [
    {
      title: "Quick Links",
      links: [
        { text: "About Us", href: getPermalink("/about") },
        { text: "Admissions", href: getPermalink("/admissions") },
        { text: "Student Resources", href: getPermalink("/resources") },
        { text: "Events", href: getPermalink("/events") }
      ]
    },
    {
      title: "School Info",
      links: [
        { text: "Facilities", href: getPermalink("/facilities") }
        // ❌ Removed: { text: 'Student Life', href: getPermalink('/student-corner') },
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Contact Us", href: getPermalink("/contact") }
      ]
    }
  ],
  secondaryLinks: [
    { text: "Terms & Conditions", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") }
  ],
  socialLinks: [
    {
      ariaLabel: "Instagram",
      icon: "tabler:brand-instagram",
      href: "https://www.instagram.com/aspirecollegegamber/"
    },
    {
      ariaLabel: "Facebook",
      icon: "tabler:brand-facebook",
      href: "https://www.facebook.com/aspiregamber/"
    }
  ],
  footNote: `
    <span>© BI Colleges (Aspire Gamber). All rights reserved.</span>
  `
};

const $$Astro = createAstro("https://yourwebsite.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["announcement"], renderTemplate` ${renderComponent($$result2, "Announcement", $$Announcement, {})} `)} ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showRssFeed": true, "showToggleTheme": false })} `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)} ` })}`;
}, "/workspaces/astrowind/src/layouts/PageLayout.astro", undefined);

export { $$PageLayout as $, $$Button as a, $$Header as b, headerData as h };
