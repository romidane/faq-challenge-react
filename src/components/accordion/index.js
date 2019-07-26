import React from "react";
import PropTypes from "prop-types";
import AccordionPanel from "./panel";

function Accordion({ data }) {
  return (
    <div id="accordion-group" className="c-accordion">
      {data.map(data => {
        return <AccordionPanel key={data.id} {...data} />;
      })}
    </div>
  );
}

Accordion.defaultProps = {
  data: []
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      question: PropTypes.string,
      answer: PropTypes.string
    })
  )
};

export default Accordion;
