import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}
interface TestimonialProps {
  testimonials: Testimonial[];
}

function TestimonyCard({
  testimonial: { testimonial, name, designation, company, image },
}: TestimonialCardProps) {
  return (
    <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] md:h-full w-full">
      <p className="font-black text-5xl">"</p>

      <div className="">
        <p className="tracking-wider text-lg line-clamp-6">{testimonial}</p>

        <div className="mt-7 flex gap-2.5">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 flex flex-col">
            <p className="font-medium">
              <span className="text-sm blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-muted-foreground text-[12px]">
              {designation} of {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Testimonials = ({ testimonials }: TestimonialProps) => {
  return (
    <div className="section" id="testimonials">
      <div className="mb-10">
        <p className="section-subtext">What others say</p>
        <h2 className="section-heading">Testimonials.</h2>
      </div>
      <div className="flex flex-wrap gap-7">
        {testimonials.map((testimonial) => (
          <TestimonyCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};
