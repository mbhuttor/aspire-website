import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, e as renderSlot } from './astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { b as $$Header, h as headerData, $ as $$PageLayout } from './PageLayout_CHozfleT.mjs';

const $$Astro = createAstro("https://yourwebsite.com");
const $$LandingLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["announcement"])} ` })}`, "default": ($$result2) => renderTemplate`   ${renderSlot($$result2, $$slots["default"])} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["header"], renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "links": headerData?.links[2] ? [headerData.links[2]] : undefined, "actions": [
    {
      text: "Download",
      href: "https://github.com/onwidget/astrowind"
    }
  ], "showToggleTheme": true, "position": "right" })} `)} ` })}` })}`;
}, "/workspaces/astrowind/src/layouts/LandingLayout.astro", undefined);

export { $$LandingLayout as $ };
