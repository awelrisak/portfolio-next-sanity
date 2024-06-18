import { Command, Menu, Moon, SunMedium, X } from "lucide-react";

import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoMail,
} from "react-icons/io5";

import {
  MdBadge,
  MdCategory,
  MdChevronLeft,
  MdChevronRight,
  MdFilterList,
  MdBallot,
  MdGroup,
  MdPerson,
  MdRssFeed,
  MdStars,
  MdViewCozy,
  MdWork,
  MdCode,
} from "react-icons/md";

export type Icon = (typeof Icons)[keyof typeof Icons];

export const Icons = {
  logo: Command,
  close: X,
  chevronLeft: MdChevronLeft,
  chevronRight: MdChevronRight,
  person: MdPerson,
  sun: SunMedium,
  moon: Moon,
  twitter: IoLogoTwitter,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram,
  whatsapp: IoLogoWhatsapp,
  mail: IoMail,
  github: IoLogoGithub,
  menu: Menu,
  blog: MdRssFeed,
  category: MdCategory,
  filterList: MdFilterList,
  group: MdGroup,
  work: MdWork,
  stars: MdStars,
  badge: MdBadge,
  viewCozy: MdViewCozy,
  ballot: MdBallot,
  code: MdCode
};
