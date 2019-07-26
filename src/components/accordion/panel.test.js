import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Panel from "./panel";

describe("<Panel>", () => {
  afterEach(cleanup);

  describe("props", () => {
    test("renders the question prop", () => {
      const { getByTestId } = render(<Panel question="FoobarTitle" />);
      expect(getByTestId("question")).toHaveTextContent("FoobarTitle");
    });

    test("renders the answer prop", () => {
      const { getByTestId } = render(<Panel answer="BarBazAnswer" />);
      expect(getByTestId("answer")).toHaveTextContent("BarBazAnswer");
    });

    test("renders the panel closed by default", () => {
      const { getByTestId } = render(<Panel answer="BarBazAnswer" />);
      const isExpended = getByTestId("accordion-trigger").getAttribute(
        "aria-expanded"
      );
      const panelHidden = getByTestId("answer").getAttribute("aria-hidden");

      expect(isExpended).toEqual("false");
      expect(panelHidden).toEqual("true");
    });

    test("opens the panel when the accordion trigger is clicked", () => {
      const { getByTestId } = render(<Panel question="foo" answer="bar" />);
      const isExpended = getByTestId("accordion-trigger").getAttribute(
        "aria-expanded"
      );
      const panelHidden = getByTestId("answer").getAttribute("aria-hidden");

      expect(isExpended).toEqual("false");
      expect(panelHidden).toEqual("true");

      fireEvent.click(getByTestId("accordion-trigger"));

      const isExpendedAfterClick = getByTestId(
        "accordion-trigger"
      ).getAttribute("aria-expanded");
      const panelHiddenAfterClick = getByTestId("answer").getAttribute(
        "aria-hidden"
      );

      expect(isExpendedAfterClick).toEqual("true");
      expect(panelHiddenAfterClick).toEqual("false");
    });

    test("renders the panel open when the 'opened' props is passed", () => {
      const { getByTestId } = render(<Panel opened={true} />);
      const isExpended = getByTestId("accordion-trigger").getAttribute(
        "aria-expanded"
      );
      const panelHidden = getByTestId("answer").getAttribute("aria-hidden");

      expect(isExpended).toEqual("true");
      expect(panelHidden).toEqual("false");
    });

    test("closes the panel when the accordion open and accordian trigger is clicked", () => {
      const { getByTestId } = render(<Panel opened={true} />);
      const isExpended = getByTestId("accordion-trigger").getAttribute(
        "aria-expanded"
      );
      const panelHidden = getByTestId("answer").getAttribute("aria-hidden");

      expect(isExpended).toEqual("true");
      expect(panelHidden).toEqual("false");

      fireEvent.click(getByTestId("accordion-trigger"));

      const isExpendedAfterClick = getByTestId(
        "accordion-trigger"
      ).getAttribute("aria-expanded");
      const panelHiddenAfterClick = getByTestId("answer").getAttribute(
        "aria-hidden"
      );

      expect(isExpendedAfterClick).toEqual("false");
      expect(panelHiddenAfterClick).toEqual("true");
    });
  });
});
