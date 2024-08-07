// "use client";
// import type { PropsWithRef } from "react";

// import { Chrono } from "react-chrono";
// import type { Theme } from "react-chrono/dist/models/Theme";
// import type { TimelineProps } from "react-chrono/dist/models/TimelineModel";

// const timelineTheme: Theme = {
//   primary: "hsl(var(--primary))",
//   secondary: "hsl(var(--secondary))",
//   textColor: "hsl(var(--card-foreground))",
//   cardBgColor: "hsl(var(--card))",
//   cardTitleColor: "hsl(var(--foreground))",
//   cardDetailsBackGround: "hsl(var(--card))",
//   cardDetailsColor: "hsl(var(--card-foreground))",
//   cardSubtitleColor: "hsl(var(--muted-foreground))",
//   titleColor: "hsl(var(----secondary-foreground))",
//   titleColorActive: "hsl(var(--foreground))",
//   iconBackgroundColor: "hsl(var(--primary))",
//   toolbarBgColor: "hsl(var(--card))",
//   toolbarTextColor: "hsl(var(--card-foreground))",
//   toolbarBtnBgColor: "hsl(var(--background-muted))",
//   //  toolbarBgColor?: string;
//   // toolbarBtnBgColor?: string;
//   // toolbarTextColor?: string;
// };

// const timelineClassNames = {
//   card: "border shadow-sm",
//   cardMedia: "my-card-media",
//   cardSubTitle: "text-[#aaa6c3] text-[50px] font-semibold",
//   cardText: "text-sm text-foreground",
//   cardTitle: "text-2xl font-semibold leading-none tracking-tight",
//   controls: "my-controls",
//   title: "hidden md:block text-red-400",
// };

// const timeloneFontSizes = {
//   cardTitle: "1.5rem",
//   cardSubtitle: "0.875rem",
//   cardText: "1rem",
//   // cardTitle?: string;
//   // title?: string;
// };

// export default function Timeline(props: PropsWithRef<TimelineProps>) {
//   //   const { theme, systemTheme } = useTheme();
//   //   const isDarMode =
//   //     theme === "system" ? systemTheme === "dark" : theme === "dark";

//   //   TODO: Here dark mode will not programmetically change unless we change it by variable colors, fix this issue from react-chrono it self
//   //   TODO: Check why classes sometimes apply and sometimes not.
//   return (
//     <Chrono
//       mode="VERTICAL_ALTERNATING"
//       theme={timelineTheme}
//       classNames={timelineClassNames}
//       fonSizes={timeloneFontSizes}
//       parseDetailsAsHTML
//       {...props}
//     />
//   );
// }
