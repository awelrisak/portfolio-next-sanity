import { urlForImage } from "@/sanity/lib/image";
import type { Skill } from "@/types";
import Image from "next/image";

interface SkillsProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  skills: any;
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section">
      <div className="mb-11">
        <p className="section-subtext">What I know.</p>
        <h2 className="section-heading">My Skills.</h2>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row gap-y-10 md:gap-y-14 gap-x-28">
        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
        {skills?.map((categories: any) => (
          <div key={categories?.title} className="mb-3 flex flex-col gap-4">
            <h3 className="w-full text-muted-foreground md:font-bold text-xl md:text-3xl text-left tracking-tight capitalize">
              {categories?.title || ""}
            </h3>
            <div className="flex flex-wrap items-center w-fit gap-4">
              {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
              {categories?.technologies?.map((tech: any) => (
                <div
                  id={tech?.title}
                  key={tech?.title}
                  className={"flex flex-col items-center gap-2"}
                >
                  <div className="relative w-14 h-14 md:h-24 md:w-24 rounded-full bg-white flex justify-center items-center">
                    <Image
                      src={urlForImage(tech.coverImage)}
                      alt={tech.title}
                      fill
                      className="w-3/4 h-3/4 object-contain rounded-full"
                    />
                  </div>
                  <span className="text-sm md:text-base font-semilight text-gray-200 tracking-tight">
                    {tech.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
