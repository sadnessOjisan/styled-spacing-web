import React from "react";
import styled from "styled-components";
import Stylis from "@emotion/stylis";

const stylis = new Stylis();

const b = stylis("div :hover", "color:blue;");
console.log(b);

const AAA = styled.div`
  color: red;
  :hover {
    color: blue;
  }
`;

const BBB = styled.div`
  color: red;
  &:hover {
    color: blue;
  }
`;

console.log(AAA);
console.log(JSON.stringify(BBB));

export default function App() {
  return (
    <div className="App">
      <AAA>afewfwefwe</AAA>
      <BBB>fiojfwjfi</BBB>
    </div>
  );
}
