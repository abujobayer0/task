import { useEffect, useRef, useState } from "react";

const tabsData = [
  {
    label: "Plan to Succeed",
    content:
      "Congratulations, You are in the best place to learn the technologies for JOB. Please strictly follow the plan for the first 45 days to see the unbelievable results.You must UNLEARN to LEARN new things every day as technologies are changing faster than ever and Because the old rules will no longer apply...and so your old knowledge is. It's time for us to think beyond.It's not just learning technologies, Also You learn how to use your knowledge and experience to get a job in less than 100 days.",
  },
  {
    label: "UnLearning",
    content:
      "Unlearning is the process of realizing that something which we learned earlier is incorrect, ineffective, or obsolete, admitting it and deciding to erase such bad conditioning and misconceptions from our mind for good. It is the process of exploring what we have stored in our system and deleting all the unnecessary data. It is the process of saying bye to an old, obsolete, and outdated paradigm and embracing a new paradigm and willingly undergoing a paradigm shift.Unfortunately, we are controlled by myths which do not allow us to open our eyes to reality",
  },
  {
    label: "Ways of Unlearning",
    content:
      "The first step towards becoming an “unlearned” is not just to have a thirst for knowledge but to question our knowledge. Discussing our knowledge with those who are competent in a particular field, being challenged constantly, and being ready to be proved wrong will help us understand whether what we have learned is still relevant or obsolete. It is also important to question one’s belief system and check whether we are treating myths as scientific facts.The next important step is to take steps to develop creative and critical thinking.",
  },
];

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="w-full border shadow-lg bg-gray-50 text-black md:mx-10 my-10">
      <div className="relative ">
        <div className="flex space-x-6 px-2  border-b">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-2 pb-3"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-purple-500  transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4 px-2">
        <p>{tabsData[activeTabIndex].content}</p>
        <div className="flex items-center gap-4 mt-10 ">
          <input
            type="text"
            className="
px-2 py-2 w-1/3 bg-gray-50"
          />
          <input
            type="text"
            className="
px-2 py-2 w-1/3 bg-gray-50"
          />
        </div>
      </div>
    </div>
  );
}
