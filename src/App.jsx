import OSXbuttons from "./assets/img/OSXbuttons.jsx";
import CodeEdit from "./components/CodeEdit";

function App() {
  return (
    <>
      <div className="min-w-full bg-[#181a1b]">
        <div
          className="min-h-[35px] bg-[#343742] flex flex-col justify-end"
          aria-hidden
        >
          <div className="ml-1 flex items-center justify-start gap-4 relative flex-shrink-0">
            <OSXbuttons />
            <div className="flex flex-grow">
              <div className="flex bg-[#282a36] rounded-tl-lg rounded-tr-lg mt-1 h-[30px] pt-1 pl-[17px] pr-[25px] z-1 relative">
                <div className="absolute b-0 -left-3 w-3 h-[26px]" id="cube0"></div>
                <div className="absolute b-0 -left-3 w-3 h-[26px] rounded-br-lg" id="cube1"></div>
                <div className="absolute b-0 -right-3 w-3 h-[26px]" id="cube2"></div>
                <div className="absolute b-0 -right-3 w-3 h-[26px] rounded-bl-lg" id="cube3"></div>
                <div className="relative ml-2">
                  <div contentEditable suppressContentEditableWarning className="tabClass text-sm">
                    Mochibun.me
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of top tab part */}
        <div className="z-10 min-h-full relative">
          <CodeEdit />
        <div className="codeGradient absolute top-0 z-20 min-w-full min-h-full pointer-events-none"></div>
        </div>
      </div>
      {/* End of code editor part */}
      <div className="min-h-[400px] mx-4 pb-4">
        <div className="flex justify-center">
          <h1 className="text-[8rem] py-6 font-mynerve" id="hello">
            Hello!
          </h1>
        </div>
        <p className="text-xl mb-2"></p>
        <img src="../src/assets/img/1.jpg" className="rounded-xl" />
        <p className="text-xl mt-2">
          This is just some more texty text to fill in this empty space in the
          div, you know!
        </p>
      </div>
    </>
  );
}

export default App;
