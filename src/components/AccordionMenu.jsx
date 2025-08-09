import { useState } from "react";
import image2 from "../assets/work-study1.avif";

const accordionData = [
  {
    id: 1,
    title: "Accordion Item 1",
    content: "Content for the first accordion item.",
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content: "Content for the second accordion item.",
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content: "Content for the third accordion item.",
  },
  {
    id: 4,
    title: "Accordion Item 1",
    content: "Content for the first accordion item.",
  },
  {
    id: 5,
    title: "Accordion Item 2",
    content: "Content for the second accordion item.",
  },
  {
    id: 6,
    title: "Accordion Item 3",
    content: "Content for the third accordion item.",
  },
  {
    id: 7,
    title: "Accordion Item 1",
    content: "Content for the first accordion item.",
  },
  {
    id: 8,
    title: "Accordion Item 2",
    content: "Content for the second accordion item.",
  },
  {
    id: 9,
    title: "Accordion Item 3",
    content: "Content for the third accordion item.",
  },
  {
    id: 10,
    title: "Accordion Item 3",
    content: "Content for the third accordion item.",
  },
];

function AccordionItem({ id, title, content, isExpanded, onToggle }) {
  return (
    <div className="bg-white  shadow transition-all duration-300 overflow-hidden border-b-2 border-gray-200">
      <button
        onClick={() => onToggle(id)}
        className="flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer"
        aria-expanded={isExpanded}
        aria-controls={`accordion-content-${id}`}
        role="button"
      >
        <span className="text-xl font-semibold text-indigo-700">{title}</span>
        <i
          className={`fa-solid ${
            isExpanded ? "fa-minus" : "fa-plus"
          } text-indigo-600 text-xl transition-all duration-300`}
        ></i>
      </button>
      <div
        id={`accordion-content-${id}`}
        className={`px-6 pb-4 text-gray-600 transition-all duration-300 ${
          isExpanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {content}
      </div>
    </div>
  );
}

export function WorkAccordionMenu() {
  const [expandedIds, setExpandedIds] = useState([]);

  const handleToggle = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((itemId) => itemId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br flex items-center justify-end px-4"
      //   style={{ backgroundImage: `url(${image2})`, backgroundSize: "cover" }}
    >
      <div className="w-full max-w-xl overflow-y-scroll max-h-[80vh] scrollbar-hide-arrows">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            isExpanded={expandedIds.includes(item.id)}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkAccordionMenu;
