import BubbleText from "./BubbleText";
import MarqueeComponent from "./MarqueeComponent";
// import ParallaxText from "./Temp";

const HelloComponent = () => {
  return (
    <>
      <div className="helloMain">
        <div className="relative z-10">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-9xl font-gochi-hand">I&apos;m Mochi</h1>
            <div className="flex gap-2 align-middle *:font-alegreya-medium *:text-2xl">
              <h2 className="text-xl">Full Stack Web & App Developer</h2>
              <div aria-hidden>|</div>
              <h2>Avid Intermediate Coder</h2>
              <div aria-hidden>|</div>
              <h2>Vinyl Connoisseur</h2>
              <div aria-hidden>|</div>
              <h2>Obsessed With Rabbits</h2>
            </div>
          </div>
          <div className="flex flex-col items-center mx-auto">
            <img
              src="./bnu.webp"
              className="rounded-xl xl:w-[60%] 2xl:w-[30%] select-none pointer-events-none"
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
            <div className="xl:w-11/12 2xl:w-9/12 mx-auto *:mb-5 mt-4">
              <div>
                <BubbleText noLigatures>
                  I felt shocked when I saw my brother change the Windows XP
                  background on our computer when I was just a kid.
                </BubbleText>
              </div> 
              <div>
                <BubbleText noLigatures>
                  Ever since
                  then, I&nbsp;ve been fascinated with computers, writing simple
                  Windows batch scripts and fake viruses, getting in trouble for
                  opening the PC side panel for a peek, spelunking down
                  C:\Windows, and nerding out in the tech section of classic
                  YouTube (rate 5 starts please)
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
          {/* <ParallaxText /> */}
        </div>
      </div>
    </>
  );
};

export default HelloComponent;
