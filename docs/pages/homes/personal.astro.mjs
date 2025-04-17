---
import Layout from '~/layouts/PageLayout.astro';

import Header from '~/components/widgets/Header.astro';
import Hero2 from '~/components/widgets/Hero2.astro';
import Features from '~/components/widgets/Features.astro';
import Steps2 from '~/components/widgets/Steps2.astro';
import Content from '~/components/widgets/Content.astro';
import Pricing from '~/components/widgets/Pricing.astro';
import FAQs from '~/components/widgets/FAQs.astro';

import { headerData } from '~/navigation';

const metadata = {
  title: 'BI College Aspire Gamber',
};
---

<Layout metadata={metadata}>
  <Fragment slot="header">
    <Header
      {...headerData}
      actions={[
        {
          variant: 'secondary',
          text: 'Login',
          href: '#',
        },
        {
          variant: 'primary',
          text: 'Sign Up',
          href: '#',
        },
      ]}
      isSticky
    />
  </Fragment>

  <!-- Hero Section -->
  <Hero2
    tagline="Welcome to BI College Aspire Gamber"
    actions={[
      { variant: 'primary', text: 'Get Started', href: '#' },
      { text: 'Learn more', href: '#features' },
    ]}
  >
    <Fragment slot="title">
      Empowering Students for a Brighter Future at <br />
      <span class="text-accent dark:text-white highlight">BI College Aspire Gamber</span>
    </Fragment>

    <Fragment slot="subtitle">
      <span class="hidden sm:inline">
        We provide cutting-edge education and a thriving learning environment for students to excel in academics and beyond.
      </span>
      Our programs are designed to foster innovation, critical thinking, and lifelong success.
    </Fragment>
  </Hero2>

  <!-- Features Section -->
  <Features
    id="features"
    title="Why choose BI College Aspire Gamber?"
    subtitle="Our programs are tailored to equip students with the skills and knowledge they need for success."
    columns={2}
    items={[
      {
        title: 'High-Quality Education',
        description: 'Our institution ensures top-tier education with experienced faculty and modern learning methods.',
        icon: 'tabler:school',
      },
      {
        title: 'Career-Focused Programs',
        description: 'Designed to prepare students for the real world, helping them gain in-demand skills.',
        icon: 'tabler:briefcase',
      },
      {
        title: 'State-of-the-Art Facilities',
        description: 'Our campus includes advanced labs, libraries, and student-friendly environments.',
        icon: 'tabler:building',
      },
      {
        title: 'Industry Connections',
        description: 'We collaborate with top industries to offer internships and job placement opportunities.',
        icon: 'tabler:network',
      },
      {
        title: 'Research & Innovation',
        description: 'Encouraging students to engage in research projects and innovation-driven learning.',
        icon: 'tabler:bulb',
      },
      {
        title: 'Diverse Student Community',
        description: 'We embrace diversity and offer a welcoming environment for students from all backgrounds.',
        icon: 'tabler:users',
      },
    ]}
  />

  <!-- Mission & Vision Section -->
  <Content
    title="Our Mission & Vision"
    subtitle="BI College Aspire Gamber is committed to excellence in education, research, and student success."
    isReversed
    items={[
      {
        title: 'Mission',
        description: 'Our mission is to provide high-quality education that empowers students to achieve their personal and professional goals.',
      },
      {
        title: 'Vision',
        description: 'To be a leader in education, known for academic excellence, research, and innovation.',
      },
    ]}
  >
    <Fragment slot="content">
      <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
        Building a Future of Excellence
      </h3>
    </Fragment>

    <Fragment slot="bg">
      <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>
    </Fragment>
  </Content>

  <!-- Pricing -->
  <Pricing
    title="Affordable Education Plans"
    prices={[
      {
        title: 'Undergraduate Programs',
        subtitle: 'High-quality bachelor’s programs with flexible learning options.',
        price: 'Affordable',
        callToAction: {
          target: '_blank',
          text: 'Explore Programs',
          href: '#',
        },
      },
      {
        title: 'Graduate Programs',
        subtitle: 'Master’s and doctoral programs for advancing careers.',
        price: 'Competitive',
        callToAction: {
          target: '_blank',
          text: 'Apply Now',
          href: '#',
        },
        hasRibbon: true,
        ribbonTitle: 'Most Popular',
      },
      {
        title: 'Short Courses',
        subtitle: 'Skill-based training and professional development courses.',
        price: 'Varies',
        callToAction: {
          target: '_blank',
          text: 'View Courses',
          href: '#',
        },
      },
    ]}
  />

  <!-- FAQ -->
  <FAQs
    title="Frequently Asked Questions"
    items={[
      {
        title: 'How do I apply for admission?',
        description: 'You can apply online by visiting our admissions page and submitting the required documents.',
        icon: 'tabler:form',
      },
      {
        title: 'Are scholarships available?',
        description: 'Yes, we offer merit-based and need-based scholarships. Check our financial aid section for details.',
        icon: 'tabler:cash',
      },
      {
        title: 'What programs do you offer?',
        description: 'We offer a wide range of undergraduate, graduate, and short courses in various fields of study.',
        icon: 'tabler:book',
      },
      {
        title: 'Do you offer online learning?',
        description: 'Yes, we provide flexible learning options, including online courses for certain programs.',
        icon: 'tabler:desktop',
      },
    ]}
  >
    <Fragment slot="bg">
      <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>
    </Fragment>
  </FAQs>

  <!-- Contact Info -->
  <Steps2
    title="Contact Us"
    subtitle="Have any questions? Reach out to us, and we’d be happy to assist you."
    callToAction={{ text: 'Get in Touch', href: '/contact' }}
    items={[
      {
        title: 'Email',
        description: 'principal.gamber@aspirecollege.edu.pk',
        icon: 'tabler:mail',
      },
      {
        title: 'Phone',
        description: '+92 347 6538634',
        icon: 'tabler:phone',
      },
      {
        title: 'Visit Us',
        description: 'Gulberg Citi College Building, Adda Gamber, Pakistan',
        icon: 'tabler:map',
      },
    ]}
  />
</Layout>
