interface HeroProps {
  greeting?: string;
  firstName: string;
  lastName: string;
  description: string;
}

export function Hero({
  greeting,
  firstName,
  lastName,
  description,
}: HeroProps) {
  return (
    <section className="relative w-full h-[calc(100vh-5rem)] mx-auto flex flex-col justify-center ">
      <div className="max-w-3xl padding-x flex  items-start gap-5 mx=auto">
        <div className="hidden dark:flex h-full flex-col justify-center items-center">
          <div className="size-5 rounded-full bg-primary" />
          <div className="w-1 flex-1 violet-gradient" />
        </div>

        <div className="space-y-2">
          {greeting && (
            <span className="font-bold text-3xl lg:text-5xl  ">
              {greeting}
            </span>
          )}
          &nbsp;
          <br />
          <h2 className="leading-none font-bold text-5xl lg:text-7xl">
            <strong className="text-[#915EFF]">{firstName}</strong>
            <br />
            <strong className="text-[#915EFF]">{lastName}</strong>
          </h2>
          <p className="text-muted-foreground font-medium text-2xl md:text-3xl ">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
