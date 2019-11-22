import React from "react";
import ExampleUseRef from "./example_useRef";
import ExampleUseEffect from "./example_useEffect";

import { StyledSection } from "../assets/styles/styledSection";

export default () => {
  return (
    <>
      <h1>This is the examples of different hooks</h1>
      <a
        href="https://github.com/minhkuheo/learn-react-hooks-example"
        target="_blank"
        rel="noopener noreferrer"
      >
        Git Repo
      </a>
      <hr />

      <MySection>
        <ExampleUseEffect />
      </MySection>

      <MySection>
        <ExampleUseRef />
      </MySection>
    </>
  );
};

const MySection = ({ children }) => {
  return (
    <>
      <StyledSection>
        {children}
        <hr />
      </StyledSection>
    </>
  );
};
