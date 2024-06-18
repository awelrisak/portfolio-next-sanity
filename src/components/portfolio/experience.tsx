"use client";
//TODO: move from react-vertical-timeline-component

import type { Experience as IExperientce } from "@/types";

import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icons } from "@/components/icons";

interface ExperienceCardProps {
  experience: IExperientce;
}

interface ExperienceProps {
  experiences: IExperientce[];
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.icon_bg ?? "white" }}
      icon={
        experience.icon ? (
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        ) : (
          <Icons.work className="text-black" />
        )
      }
    >
      <div>
        <h3 className="text-2xl font-bold">{experience.title}</h3>
        <p className="m-0 text-muted-foreground text-lg font-semibold">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${point}`}
            className=" text-base md:text-lg lg:text-xl pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="section" id="experience">
      <div>
        <p className="section-subtext">What I have done so far</p>
        <h2 className="section-heading">Work Experience.</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${index} ${experience.company_name}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
