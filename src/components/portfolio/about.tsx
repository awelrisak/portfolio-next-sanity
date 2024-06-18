import type { Service } from "@/types";
import React from "react";

interface AboutProps {
  services: Service[];
}
              
function ServiceCard({ title, description }: Service) {
  return (
    <div className="w-[250px]">
      <div className="w-full green-pink-gradient p-[1px] rounded-xl shadow-card">
        <div className="bg-tertiary rounded-xl text-center py-5 px-12 min-h-[161px] flex flex-col items-center  justify-evenly ">
          <h3 className="text-xl font-bold ">
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export function About({ services }: AboutProps) {
  return (
    <section id="about-me" className="section">
      <div>
        <p className="section-subtext">Introduction</p>
        <h2 className="section-heading">Overview.</h2>
      </div>

      <p className="mt-4 text-muted-foreground text-lg md:text-xl max-w-3xl leading-[30px]">
        I'm an expert full-stack software developer fluent in TypeScript and
        JavaScript, specializing in powerful frameworks like React, Node.js, and
        Next.js. With my extensive experience and knack for learning fast, I'm
        your ideal partner to craft efficient, scalable, and user-friendly
        solutions that tackle real-world challenges. Let's join forces and
        transform your ideas into reality with precision and perfection!
      </p>

      {/* <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div> */}
    </section>
  );
}
