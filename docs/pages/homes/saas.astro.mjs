import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { a as $$Button, b as $$Header, h as headerData, $ as $$PageLayout } from '../../chunks/PageLayout_CHozfleT.mjs';
import { $ as $$Hero2 } from '../../chunks/Hero2_C7ivTFZY.mjs';
import { $ as $$Features } from '../../chunks/Features_D8j57LR1.mjs';
import { $ as $$Icon } from '../../chunks/ToggleTheme_DPzibztS.mjs';
import { $ as $$WidgetWrapper } from '../../chunks/WidgetWrapper_B3rQsJx4.mjs';
import { $ as $$Headline } from '../../chunks/Headline_BHDVAwuR.mjs';
import { $ as $$Content } from '../../chunks/Content_D-DiQuts.mjs';
import { $ as $$Pricing } from '../../chunks/Pricing_B2_8BCIv.mjs';
import { $ as $$FAQs } from '../../chunks/FAQs_CbeV_waU.mjs';
import { $ as $$BlogLatestPosts } from '../../chunks/BlogLatestPosts_Dms4TA7_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://yourwebsite.com");
const $$Steps2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Steps2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    callToAction = await Astro2.slots.render("callToAction"),
    items = [],
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`flex flex-col gap-8 md:gap-12 md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`, "class")}> <div${addAttribute(`w-full lg:w-1/2 gap-8 md:gap-12 ${isReversed ? "lg:ml-16 md:ml-8 ml-0" : "lg:mr-16 md:mr-8 mr-0"}`, "class")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-center md:text-left rtl:md:text-right mb-4 md:mb-8",
    title: "mb-4 text-3xl lg:text-4xl font-bold font-heading",
    subtitle: "mb-8 text-xl text-muted dark:text-slate-400"
    // ...((classes?.headline as {}) ?? {}),
  } })} <div class="w-full text-center md:text-left rtl:md:text-right"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.text && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "primary", ...callToAction, "class": "mb-12 w-auto" })}`} </div> </div> <div class="w-full lg:w-1/2 px-0"> <ul class="space-y-10"> ${items && items.length ? items.map(({ title: title2, description, icon }, index) => renderTemplate`<li class="flex md:-mx-4"> <div class="pr-4 sm:pl-4 rtl:pr-0 rtl:pl-4 rtl:sm:pl-0 rtl:sm:pr-4"> <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-100 text-primary"> ${icon ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-6 h-6 icon-bold" })}` : index + 1} </span> </div> <div class="pl-4 rtl:pl-0 rtl:pr-4"> <h3 class="mb-4 text-xl font-semibold font-heading">${unescapeHTML(title2)}</h3> <p class="text-muted dark:text-gray-400">${unescapeHTML(description)}</p> </div> </li>`) : ""} </ul> </div> </div> ` })}`;
}, "/workspaces/astrowind/src/components/widgets/Steps2.astro", undefined);

const $$Saas = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "BI College Aspire Gamber"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Welcome to BI College Aspire Gamber", "actions": [
    { variant: "primary", text: "Get Started", href: "#" },
    { text: "Learn more", href: "#features" }
  ], "image": {
    src: "/assets/images/hero-image.png",
    // ✅ Replace with your actual image path
    alt: "BI College Aspire Gamber Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline">
We provide cutting-edge education and a thriving learning environment for students to excel in academics and beyond.</span>
Our programs are designed to foster innovation, critical thinking, and lifelong success.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Empowering Students for a Brighter Future at <br> <span class="text-accent dark:text-white highlight">BI College Aspire Gamber</span> ` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "title": "Why choose BI College Aspire Gamber?", "subtitle": "Our programs are tailored to equip students with the skills and knowledge they need for success.", "columns": 2, "items": [
    {
      title: "High-Quality Education",
      description: "Our institution ensures top-tier education with experienced faculty and modern learning methods.",
      icon: "tabler:school"
    },
    {
      title: "Career-Focused Programs",
      description: "Designed to prepare students for the real world, helping them gain in-demand skills.",
      icon: "tabler:briefcase"
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Our campus includes advanced labs, libraries, and student-friendly environments.",
      icon: "tabler:building"
    },
    {
      title: "Industry Connections",
      description: "We collaborate with top industries to offer internships and job placement opportunities.",
      icon: "tabler:network"
    },
    {
      title: "Research & Innovation",
      description: "Encouraging students to engage in research projects and innovation-driven learning.",
      icon: "tabler:bulb"
    },
    {
      title: "Diverse Student Community",
      description: "We embrace diversity and offer a welcoming environment for students from all backgrounds.",
      icon: "tabler:users"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Our Mission & Vision", "subtitle": "BI College Aspire Gamber is committed to excellence in education, research, and student success.", "isReversed": true, "items": [
    {
      title: "Mission",
      description: "Our mission is to provide high-quality education that empowers students to achieve their personal and professional goals."
    },
    {
      title: "Vision",
      description: "To be a leader in education, known for academic excellence, research, and innovation."
    }
  ], "image": {
    src: "/assets/images/mission-vision.png",
    // ✅ Replace with your actual image path
    alt: "Mission and Vision Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Building a Future of Excellence
</h3> ` })}` })}  ${renderComponent($$result2, "Pricing", $$Pricing, { "title": "Affordable Education Plans", "prices": [
    {
      title: "Undergraduate Programs",
      subtitle: "High-quality bachelor\u2019s programs with flexible learning options.",
      price: "Affordable",
      callToAction: {
        target: "_blank",
        text: "Explore Programs",
        href: "#"
      }
    },
    {
      title: "Graduate Programs",
      subtitle: "Master\u2019s and doctoral programs for advancing careers.",
      price: "Competitive",
      callToAction: {
        target: "_blank",
        text: "Apply Now",
        href: "#"
      },
      hasRibbon: true,
      ribbonTitle: "Most Popular"
    },
    {
      title: "Short Courses",
      subtitle: "Skill-based training and professional development courses.",
      price: "Varies",
      callToAction: {
        target: "_blank",
        text: "View Courses",
        href: "#"
      }
    }
  ] })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Frequently Asked Questions", "items": [
    {
      title: "How do I apply for admission?",
      description: "You can apply online by visiting our admissions page and submitting the required documents.",
      icon: "tabler:form"
    },
    {
      title: "Are scholarships available?",
      description: `Yes, we offer merit-based and need-based scholarships. Check our financial aid section for details.`,
      icon: "tabler:cash"
    },
    {
      title: "What programs do you offer?",
      description: "We offer a wide range of undergraduate, graduate, and short courses in various fields of study.",
      icon: "tabler:book"
    },
    {
      title: "Do you offer online learning?",
      description: `Yes, we provide flexible learning options, including online courses for certain programs.`,
      icon: "tabler:desktop"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Contact Us", "subtitle": "Have any questions? Reach out to us, and we\u2019d be happy to assist you.", "callToAction": {
    text: "Get in Touch",
    href: "/contact"
  }, "items": [
    {
      title: "Email",
      description: "principal.gamber@aspirecollege.edu.pk",
      icon: "tabler:mail"
    },
    {
      title: "Phone",
      description: "+92 347 6538634",
      icon: "tabler:phone"
    },
    {
      title: "Visit Us",
      description: "Gulberg Citi College Building, Adda Gamber, Pakistan",
      icon: "tabler:map"
    }
  ] })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Latest News & Updates", "information": `Stay up-to-date with our latest events, research highlights, and academic announcements.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { ...headerData, "actions": [
    {
      variant: "secondary",
      text: "Login",
      href: "#"
    },
    {
      variant: "primary",
      text: "Sign Up",
      href: "#"
    }
  ], "isSticky": true })} ` })}` })}`;
}, "/workspaces/astrowind/src/pages/homes/saas.astro", undefined);

const $$file = "/workspaces/astrowind/src/pages/homes/saas.astro";
const $$url = "/homes/saas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Saas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
