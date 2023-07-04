import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const MultipleCollapse = () => {
  return (
    <Accordion allowMultipleExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Collaborate with colleagues</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="flex flex-col gap-4 ">
            <span>Teach and learn from each other</span>

            <span>
              Collaborate on lesson plans-Two minds are better than one.
            </span>
            <span>Build your own social network</span>
            <span>Get feedback regularly</span>
            <span>Work together to solve problems</span>
            <span>Become a teacher-leader</span>
            <span>Adopt a team mentality</span>
            <span>Ask for help</span>
            <span>Find a mentor</span>
            <span>Be open to new ideas</span>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Learn Anything Quickly</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="flex flex-col gap4">
            <span>
              Learn by doing. Always play with the code while learning1.
            </span>
            <span>Ask for help. You’ll need it</span>
            <span>TEACH SOMEONE ELSE</span>
            <span>FOCUS ON THE 20%</span>
            <span>Identifying the problem that needs solving</span>
            <span>
              Seek out more online resources. There’s a wealth of content
            </span>
            <span>Don’t just read the sample code. Tinker with it!</span>
            <span>Take breaks when debugging</span>
            <span>Keep Calm and Keep On Coding</span>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Response People Give Up on Their Goals Too Early
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="flex flex-col gap-4">
            <span>
              They want the outcome more than they want to obtain a skill
            </span>
            <span>
              They do not have the discipline to stick with their idea long
              enough to see it live
            </span>
            <span>They get distracted by what someone else is doing</span>
            <span>They don't believe in themselves enough.</span>
            <span>They fail once--and never try again</span>
            <span>They don't learn how to discipline themselves</span>
            <span>They care more about the end result, not the process</span>
            <span>
              They surround themselves with people who are a negative influence.
            </span>
            <span>They would rather settle for short-term rewards</span>
            <span>They don't have a guaranteed path to achieve success</span>
            <span>They don’t have the discipline to work hard enough</span>
            <span>They become distracted by other aspects of their life</span>
            <span>They don't know that failure is normal</span>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MultipleCollapse;
