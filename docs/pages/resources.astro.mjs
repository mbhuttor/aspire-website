import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CHozfleT.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_B50PSraR.mjs';
import KhanAcademyLogo from '../chunks/khan-academy_j09f2SaC.mjs';
import SabaqFoundationLogo from '../chunks/sabaq-foundation_DIZHwhVS.mjs';
import StudentPortalLogo from '../chunks/student-portal_-uRg6Umj.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Resources = createComponent(($$result, $$props, $$slots) => {
  const resources = [
    {
      id: 1,
      title: "Khan Academy",
      description: "Aspire educators refer Khan Academy to their students for further academic assistance. It covers subjects like Mathematics, Physics, Chemistry, and more.",
      image: KhanAcademyLogo,
      link: "https://www.khanacademy.org/"
    },
    {
      id: 2,
      title: "Sabaq Foundation",
      description: "Free online learning resources for students of different educational boards, providing video lectures and study materials.",
      image: SabaqFoundationLogo,
      link: "https://www.sabaq.pk/"
    },
    {
      id: 3,
      title: "Aspire Student Portal",
      description: "Access your student dashboard, check results, attendance, and updates from Aspire Colleges.",
      image: StudentPortalLogo,
      link: "https://studentportal.aspirecolleges.edu.pk/login"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <!-- Iconify Script --> <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" client:load><\/script>'])), renderComponent($$result, "Layout", $$PageLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 bg-[#0c1a2a] min-h-screen relative overflow-hidden font-serif"> <!-- Background Floating Icons --> <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:school", "width": "60", "style": "position: absolute; top: 10%; left: 10%; color: #ff6b6b;" })} ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:lightbulb-on-outline", "width": "50", "style": "position: absolute; top: 30%; right: 15%; color: #facc15;" })} ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:book-education", "width": "50", "style": "position: absolute; bottom: 25%; left: 20%; color: #38bdf8;" })} ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:earth", "width": "70", "style": "position: absolute; bottom: 15%; right: 10%; color: #34d399;" })} ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:calculator", "width": "50", "style": "position: absolute; top: 55%; left: 50%; color: #c084fc;" })} </div> <div class="max-w-6xl mx-auto px-6 relative z-10"> <!-- Section Title --> <h2 class="text-4xl text-center mb-6" style="font-family: Georgia, serif; color:rgb(255, 255, 253);">
Explore Our Educational Resources
</h2> <!-- Resources Grid --> <div class="grid md:grid-cols-3 gap-10"> ${resources.map((resource, i) => renderTemplate`<div${addAttribute(resource.id, "key")} class="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 relative"> <!-- Color Pencil SVG Bottom Right Corner --> <svg class="absolute bottom-[-12px] right-[-12px] w-10 h-10" viewBox="0 0 24 24" fill="none"${addAttribute(i % 2 === 0 ? "#3b82f6" : "#10b981", "stroke")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M16 3l4 4L8 19H4v-4L16 3z"></path> <path d="M14 5l5 5"></path> </svg> <!-- Image --> <div class="w-28 h-28 flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": resource.image, "alt": resource.title, "width": 112, "height": 112, "class": "rounded-md shadow-md" })} </div> <!-- Title --> <h3 class="mt-5 text-lg font-semibold text-gray-900">${resource.title}</h3> <p class="mt-3 text-gray-700 text-sm leading-relaxed">${resource.description}</p> <!-- Fixed Button --> <div class="mt-auto pt-5"> <a${addAttribute(resource.link, "href")} target="_blank" class="inline-block w-full text-center bg-red-600 text-white py-2 px-6 rounded-full text-sm font-semibold hover:bg-red-700 transition duration-300">
Visit Link
</a> </div> </div>`)} </div> </div> </section> ` }));
}, "/workspaces/astrowind/src/pages/resources.astro", undefined);

const $$file = "/workspaces/astrowind/src/pages/resources.astro";
const $$url = "/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resources,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
