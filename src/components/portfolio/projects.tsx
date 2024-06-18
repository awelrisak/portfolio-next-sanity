import type { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  source_code,
  demo,
}: Project) => {
  return (
    <div className="relative bg-tertiary p-5 rounded-2xl sm:w-[300px] md:w-[400px] w-full">
      <div className="relative w-full h-[300px]">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-5 sm:mt-7">
        <h3 className="flex justify-between items-center font-bold text-2xl sm:text-3xl">
          <span>{title}</span>
        </h3>
        <p className="mt-2 sm:mb-5 text-muted-foreground text-base md:text-xl line-clamp-5 ">
          {description}
        </p>
      </div>
      <div className="mt-5 md:my-auto flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <p key={tech.name} className="text-sm md:text-lg">
            #{tech.name}
          </p>
        ))}
      </div>
      <div className="mt-7 text-sm font-mono font-medium flex flex-col gap-2">
        <span>
          &gt;&nbsp;
          <Link className="underline underline-offset-4" href={demo}>
            Demo
          </Link>
        </span>
        <span>
          &gt;&nbsp;
          <Link className="underline underline-offset-4" href={source_code}>
            Source code
          </Link>{" "}
          {/*TODO: fix this, check*/}
        </span>
        <span>
          &gt;&nbsp;
          <Link className="underline underline-offset-4" href="#">
            See more details
          </Link>{" "}
          {/*TODO: fix this*/}
        </span>
      </div>
    </div>
  );
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="section" id="projects">
      <div>
        <p className="section-subtext">My work</p>
        <h2 className="section-heading">Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-muted-foreground text-lg md:text-xl max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.source_code} {...project} />
        ))}
      </div>
    </div>
  );
}
