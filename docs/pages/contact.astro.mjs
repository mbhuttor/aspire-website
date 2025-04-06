import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CHozfleT.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_2Ngnf2Xh.mjs';
import { $ as $$Features2 } from '../chunks/Features2_Bb-ZWdpi.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Contact"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Contact Us", "title": "We'd love to hear from you!" })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Contact Information", "items": [
    {
      title: "General Inquiries",
      description: "Reach out to us for details about admissions, programs, or college life."
    },
    {
      title: "Phone",
      description: "+92 347 6538634",
      icon: "tabler:phone"
    },
    {
      title: "Email",
      description: "principal.gamber@aspirecollege.edu.pk",
      icon: "tabler:mail"
    },
    {
      title: "Campus Address",
      description: "Gulberg Citi College Building, Q82G+P45, Adda Gamber, Pakistan",
      icon: "tabler:map-pin"
    }
  ] })} ` })}`;
}, "/workspaces/astrowind/src/pages/contact.astro", undefined);

const $$file = "/workspaces/astrowind/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
