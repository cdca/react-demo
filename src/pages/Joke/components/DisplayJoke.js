import React from "react";
import { Content, StyledJoke } from "../Joke.style";
import Joke1 from "../../../images/joke1.png";

const DisplayJoke = ({ results, loading }) => {
  return loading ? (
    <StyledJoke src={Joke1} />
  ) : results.error ? (
    <Content>
      There is no joke available for the particular term and language you've
      chosen.
    </Content>
  ) : (
    <Content>
      {results.joke}
      {results.setup} {"  "}
      {results.delivery}
    </Content>
  );
};

export default DisplayJoke;
