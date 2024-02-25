import BubbleText from "./BubbleText";
import MarqueeComponent from "./MarqueeComponent";

const HelloComponent = () => {
  const vertical = "hidden xl:block";
  const horizontal = "visible xl:hidden whiteDivide";

  return (
    <>
      <div className="helloMain">
        <div className="relative z-10">
          <div className="flex flex-col items-center mb-10 sm:mb-6">
            <h1 className="text-[20vw] lg:text-9xl font-gochi-hand pb-6 sm:pb-0">I&apos;m Mochi</h1>
            <div className="flex flex-col xl:flex-row gap-[12px] sm:gap-4 md:gap-3 xl:gap-2 align-middle *:font-alegreya-medium *:text-4xl *:sm:text-3xl *:md:text-3xl *:xl:text-2xl justify-center xl:justify-normal text-center xl:text-left">
              <h2>Full Stack Web & App Developer</h2>
              <div aria-hidden className={vertical}>|</div>
              <div aria-hidden className={horizontal} />
              <h2>Avid Intermediate Coder</h2>
              <div aria-hidden className={vertical}>|</div>
              <div aria-hidden className={horizontal} />
              <h2>Vinyl Connoisseur</h2>
              <div aria-hidden className={vertical}>|</div>
              <div aria-hidden className={horizontal} />
              <h2>Obsessed With Rabbits</h2>
            </div>
          </div>
          <div className="flex flex-col items-center mx-auto">
            <img
              src="./bnu.webp"
              className="rounded-xl w-[95%] sm:w-[90%] md:w-[75%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] select-none pointer-events-none"
              width="1733px"
              height="1155px"
              alt="A bunny rabbit."
            />
            <span
              aria-roledescription="caption"
              className="pb-4 ml-3 italic text-gray-400"
            >
              Yup, I&apos;m a rabbit!
            </span>
            <div className="w-11/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 mx-auto *:mb-5 mt-4">
              <div>
                <BubbleText noLigatures>
                  I felt shocked when I saw my brother change the Windows XP
                  background on our computer when I was just a kid.
                </BubbleText>
              </div> 
              <div>
                <BubbleText noLigatures>
                  Ever since
                  then, I&apos;ve been fascinated with computers, writing simple
                  Windows batch scripts and fake viruses, getting in trouble for
                  opening the PC side panel for a peek, spelunking down
                  C:\Windows, and nerding out in the tech section of classic
                  YouTube (rate 5 stars please)
                </BubbleText>
              </div> 
              <div>
                <BubbleText noLigatures>
                  One day sitting on the balcony I
                  got an ad in my email talking about a life-changing opportunity.
                  I took it and now I have ascended beyond a web user into the
                  domain of web developers. As a Junior MERN/PERN developer, I&apos;m
                  in love with the front end due to its immediate feedback but if
                  the backend needs some TLC, I have the know-how on what to do.
                </BubbleText>
              </div> 
              <div>
                <BubbleText noLigatures>
                  My dream is pretty simple, I would love to create a highly used
                  NPM package and become a big contributor to other web developers
                  and a big help to the lesser experienced ones.
                </BubbleText>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 top-64 overflow-x-clip">
          <MarqueeComponent />
        </div>
      </div>
    </>
  );
};

export default HelloComponent;
