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
    <section className="relative w-full h-[calc(100vh-5rem)] mx-auto flex flex-col justify-center">
      <div className="absolute max-w-3xl padding-x flex flex-row items-start gap-5 mx=auto">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          {greeting && (
            <span className="font-black lg:text-6xl sm:text-5xl xs:text-4xl text-3xl">
              {greeting}
            </span>
          )}
          &nbsp;
          <br />
          <h2 className="leading-normal font-black lg:text-8xl sm:text-[60px] xs:text-[50px] text-[40px]">
            <strong className="text-primary">{firstName}</strong>
            <br />
            <strong className="text-primary">{lastName}</strong>
          </h2>
          <p className="hero-subtext mt-2 ">{description}</p>
        </div>
      </div>
    </section>
  );
}
