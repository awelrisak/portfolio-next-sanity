import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Experience } from "@/components/portfolio/experience";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Testimonials } from "@/components/portfolio/testimonials";
import {
  experiences,
  projects,
  services,
  skills,
  testimonials,
} from "@/constants";
import { getSanityData } from "@/lib/utils/get-sanity";

export default async function Page() {
  const QUERY = `
   *[_type == "portfolio" ][0]{
    hero {
        greeting,
        firstName,
        lastName,
        description,
    },
    about {
        heading,
        subheading,
        content
    },

    "skills": *[_type=="skill"][0]
   }
   `;
  const data = await getSanityData(QUERY);

  return (
    <main className="relative z-0">
      <div className="dark:bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero {...data.hero} />
      </div>
      <About services={services} {...data.about} />
      <Experience experiences={experiences} />
      <Skills skills={data.skills} />
      <Projects projects={projects} />
      <Testimonials testimonials={testimonials} />
      <div className="relative z-0 section">
        <Contact />
      </div>
    </main>
  );
}
