import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import 'clsx';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" class="flex items-center no-underline"> <!-- Optional: replace with an icon or image if needed --> <!-- <img src="/your-logo.svg" alt="Logo" class="h-8 w-auto" /> --> <span class="self-center ml-2 text-2xl md:text-xl font-bold whitespace-nowrap"> <span class="text-blue-900">BI College</span> <span class="text-yellow-500 italic underline decoration-wavy decoration-2 mx-1">Aspire</span> <span class="text-blue-900">Gamber</span> </span> </a>`;
}, "/workspaces/astrowind/src/components/Logo.astro", undefined);

export { $$Logo as $ };
