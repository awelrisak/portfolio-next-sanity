import { urlForImage } from "@/sanity/lib/image";
import type { Skill } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface SkillsProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  skills: any;
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section">
      <div className="mb-11">
        <p className="section-subtext">{skills.text}</p>
        <h2 className="section-heading">{skills.title}</h2>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row gap-y-10 md:gap-y-14 gap-x-28">
        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
        {skills?.skills?.map((categories: any) => (
          <div key={categories?.title} className="mb-3 flex flex-col gap-4">
            <h3 className="w-full text-muted-foreground md:font-bold text-xl md:text-3xl text-left tracking-tight capitalize">
              {categories?.title || ""}
            </h3>
            <div className="flex flex-wrap items-center w-fit gap-4">
              {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
              {categories?.technologies?.map((tech: any) => (
                <Link
                  key={tech?.title}
                  href={`/projects?skill=${tech?.slug?.current || ""}`}
                >
                  <div
                    id={tech?.title}
                    className={"flex flex-col items-center gap-2"}
                  >
                    <div className="relative size-14 md:size-24 rounded-full bg-foreground flex justify-center items-center">
                      <div className="relative size-3/4">
                        <Image
                          src={urlForImage(tech.coverImage)}
                          alt={tech.title}
                          fill
                          className="object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <span className="text-sm md:text-base font-semilight text-muted-foreground tracking-tight">
                      {tech.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
