import React from "react";

const Accordion = ({ faq, setFaq, faqId, setFaqId, FontAwesomeIcon, faCaretDown }) => {
  const accordionHandler = (itemId) => {
    setFaqId(faqId === itemId ? "" : itemId); // Use setFaqId to update the state
  };

  return (
    <div className="accordion">
      <div className="header">
        <img
          src="https://www.sourceman.com/sites/default/files/2018-03/FAQ.jpeg"
          alt=""
        />
      </div>
      {faq.map((item) => (
        <div className="accordion-main" key={item.id}>
          <div className="accordionItem">
            <h2>{item.title}</h2>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="icon"
              onClick={() => accordionHandler(item.id)}
            />
            {faqId === item.id && <p>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
