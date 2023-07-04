import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const SingleCollapse = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Know your goal and prioritize Wisely
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            What are your priorities for the day? Make a list of your priorities
            and plan your day. The tasks of the day must be outlined with the
            most important and urgent ones on top.
            <span>
              Likewise, determine your short-term and long-term goals and
              evaluate your progress frequently.
            </span>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Be Focused and Eliminate Distractions
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Are you really present physically and mentally. Try to block out all
            distractions so that you have
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Chose the right mentor to Succed in Career
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            There is a big difference between a mentor and a coach
            <span>
              Mentoring is a long-term process based on mutual trust and
              respect. Coaching, on the other hand, is for a short period of
              time.
            </span>
            <span>
              The topmost priority of a mentor is to help develop skills that
              are not just relevant for the mentees in their present job, but
              also for the future. A mentor has the first-hand experience in the
              industry
            </span>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SingleCollapse;
