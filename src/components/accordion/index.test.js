import React from "react";
import { render, cleanup } from "@testing-library/react";

import Accordion from "./index";

describe("<Accordion>", () => {
  afterEach(cleanup);

  test("when data is empty it renders no panels", () => {
    const { queryAllByTestId } = render(<Accordion data={[]} />);
    const all = queryAllByTestId("data-testid");
    expect(all.length).toEqual(0);
  });

  test("when data is has entries it renders", () => {
    const { container } = render(
      <Accordion
        data={[
          { id: 1, question: "foo", answer: "bar" },
          { id: 2, question: "bar", answer: "baz" }
        ]}
      />
    );

    const all = container.querySelectorAll("[data-accordion-item]");
    expect(all.length).toEqual(2);
  });
});
