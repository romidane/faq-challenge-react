import React, { Component } from "react";
import Accordion from "./components/accordion";
import faqsRepository from "./repository/faq";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const data = await faqsRepository().faqs();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="o-container">
        <h1 className="c-heading-alpha">FAQ accordion</h1>
        {data.length ? <Accordion data={data} /> : <p>Loading...</p>}
      </div>
    );
  }
}

export default App;
