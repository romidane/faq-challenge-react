import React, { useState } from "react";
import PropTypes from "prop-types";

function AccordionPanel({ id, question, answer, opened }) {
  const [isOpen, setOpen] = useState(opened);

  return (
    <div className="c-accordion__item" data-accordion-item={id}>
      <h2 className="c-accordion__title">
        <button
          data-testid="accordion-trigger"
          aria-expanded={isOpen}
          className="c-accordion__trigger u-clearfix"
          aria-controls={`section-${id}`}
          id={`accordion-${id}`}
          onClick={() => setOpen(!isOpen)}
        >
          <span data-testid="question" className="c-accordion__text">
            {question}
          </span>
          <span className="c-accordion__icon">[+]</span>
        </button>
      </h2>
      <div
        data-testid="answer"
        id={`section-${id}`}
        role="region"
        aria-labelledby={`accordion-${id}`}
        className="c-accordion__panel"
        aria-hidden={!isOpen}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

AccordionPanel.defaultProps = {
  opened: false
};

AccordionPanel.propType = {
  id: PropTypes.number,
  question: PropTypes.string,
  answer: PropTypes.string,
  opened: PropTypes.bool
};

export default AccordionPanel;
