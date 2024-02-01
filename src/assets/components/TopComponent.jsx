import OSXbuttons from "../img/OSXbuttons.jsx";
import CodeEdit from "../components/CodeEdit.jsx";

const TopComponent = () => {
  return (
    <div className="min-w-full bg-[#181a1b]">
      <div
        className="min-h-[35px] bg-[#343742] flex flex-col justify-end"
        aria-hidden
      >
        <div className="flex items-center justify-start flex-shrink-0 gap-4 ml-1">
          <OSXbuttons />
          <div className="flex flex-grow">
            <div className="flex bg-[#282a36] rounded-t-lg mt-1 h-[30px] pt-1 pl-[17px] pr-[25px] z-1 relative">
              <div
                className="absolute b-0 -left-3 w-3 h-[26px]"
                id="rect0"
              ></div>
              <div
                className="absolute b-0 -left-3 w-3 h-[26px] rounded-br-lg"
                id="rect1"
              ></div>
              <div
                className="absolute b-0 -right-3 w-3 h-[26px]"
                id="rect2"
              ></div>
              <div
                className="absolute b-0 -right-3 w-3 h-[26px] rounded-bl-lg"
                id="rect3"
              ></div>
              <div className="relative ml-2">
                <div
                  contentEditable
                  suppressContentEditableWarning
                  spellCheck="false"
                  className="text-sm tabClass"
                >
                  Mochibun.me
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of top tab part */}
      <div className="relative z-10 min-h-full">
        <CodeEdit />
        <div
          className="absolute top-0 z-20 min-w-full min-h-full pointer-events-none codeGradient"
          id="codeGradient"
        ></div>
      </div>
    </div>
  );
};

export default TopComponent;
