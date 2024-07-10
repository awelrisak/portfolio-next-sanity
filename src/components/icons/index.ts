import {
  BadgeAlert,
  Briefcase,
  Check,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Code,
  Command,
  Filter,
  Menu,
  Moon,
  Rss,
  SunMedium,
  Tags,
  User,
  Users,
  X
} from "lucide-react";

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
  MdBallot,
  MdCategory,
  MdStars,
  MdViewCozy
} from "react-icons/md";

export type Icon = (typeof Icons)[keyof typeof Icons];

export const Icons = {
  logo: Command,
  close: X,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  user: User,
  sun: SunMedium,
  moon: Moon,
  twitter: IoLogoTwitter,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram,
  whatsapp: IoLogoWhatsapp,
  mail: IoMail,
  github: IoLogoGithub,
  menu: Menu,
  blog: Rss,
  category: MdCategory,
  filterList: Filter,
  users: Users,
  stars: MdStars,
  badge: MdBadge,
  viewCozy: MdViewCozy,
  ballot: MdBallot,
  code: Code,
  clipbord: Clipboard,
  check: Check,
  tags: Tags,
  briefcase: Briefcase,
  badgeAlert: BadgeAlert
};
