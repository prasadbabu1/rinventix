import { CautionIcon, LightningChargeIcon, SunIcon } from "../../constants";
import Footer from "../Footer";

const RightSection = () => {
  
  return (
    <div className= "flex h-full flex-1 flex-col md:pl-[260px]">
      <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col items-center text-sm h-full md:h-screen bg-lightBlack">
            <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6">
              <h1 className="text-4xl text-gray-100 font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16">
              Smart Character Content Creator
              </h1>
              <p className=" text-gray-100 font-semibold  ">The Smart Smart Multi-Robot Storyboard Creator knows four characters so far: Jack (Production Assistant), Andy (Artist), Lora (Admin Manager), Donna (Stack Representative), Rosy (Director), Tyring (Head of CDFI), Derya (Head of Action), and Louis Litt (Legal Employee).</p>
              <div className="md:flex items-start text-center gap-3.5">
                {[
                  {
                    icon: <SunIcon />,
                    title: "Examples",
                    subTitle: [
                      `"Explain quantum computing in simple terms" →`,
                      `"Got any creative ideas for a 10 year old’s birthday?" →`,
                      `"How do I make an HTTP request in Javascript?" →`,
                      `"Explain quantum computing in simple terms"→`
                    ],
                    hover: true,
                  },
                  
                ].map((item, index) => (
                  <div
                    className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"
                    key={index}
                  >
                    
                    <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                      {item.subTitle.map((subTitle, subTitleIndex) => (
                        <button
                          className={`w-full bg-gray-50 text-gray-100 bg-white/5 p-3 rounded-md ${
                            item.hover
                              ? "hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer"
                              : "cursor-text"
                          }`}
                          key={subTitleIndex}
                        >
                          {subTitle}
                        </button>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-48 flex-shrink-0"></div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default RightSection;
