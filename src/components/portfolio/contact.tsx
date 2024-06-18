import { siteConfig } from "@/config/site";
import { SocialLinks } from "./social-links";

export function Contact() {
  return (
    <div
      id="contact"
      className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
    >
      <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className="section-subtext">Lets's connect.</p>
        <h3 className="section-heading">Contact</h3>

        <SocialLinks links={siteConfig.links} />
      </div>
    </div>
  );
}
