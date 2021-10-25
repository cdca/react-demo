import React, { useState } from "react";
import { Container, Column, Row } from "../../globalStyles";
import axios from "axios";
import {
  StyledFormWrapper,
  StyledForm,
  StyledFieldset,
  StyledButton,
  StyledError,
  TextArea,
  JokeHeader,
  ImgWrapper,
} from "./Joke.style";
import DisplayJoke from "./components/DisplayJoke";

const initalState = {
  language: "",
  type: "",
};

function Joke() {
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");

  const api = "https://v2.jokeapi.dev/joke/";

  const getJoke = async (url) => {
    const res = await axios(url);
    setResults(res.data);
  };

  const onSubmit = (e) => {
    setLoading(false);
    e.preventDefault();

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
    const query = `${api}${state.type}?lang=${state.language}`;
    getJoke(query);
  };
  const onChange = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <JokeHeader></JokeHeader>
      <Container>
        <Row>
          <Column>
            <StyledFormWrapper>
              <StyledForm onSubmit={onSubmit}>
                <h2>Joke selector</h2>
                <StyledFieldset>
                  <legend>Language</legend>
                  <label>
                    <input
                      type="radio"
                      value="en"
                      name="language"
                      checked={state.language === "en"}
                      onChange={onChange}
                    />
                    English
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="de"
                      name="language"
                      checked={state.language === "de"}
                      onChange={onChange}
                    />
                    German
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="fr"
                      name="language"
                      checked={state.language === "fr"}
                      onChange={onChange}
                    />
                    French
                  </label>
                </StyledFieldset>
                <StyledFieldset>
                  <legend>Type</legend>
                  <label>
                    <input
                      type="radio"
                      value="programming"
                      name="type"
                      checked={state.type === "programming"}
                      onChange={onChange}
                    />
                    Dev
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="dark"
                      name="type"
                      checked={state.type === "dark"}
                      onChange={onChange}
                    />
                    Dark
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="christmas"
                      name="type"
                      checked={state.type === "christmas"}
                      onChange={onChange}
                    />
                    Christmas
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="pun"
                      name="type"
                      checked={state.type === "pun"}
                      onChange={onChange}
                    />
                    Pun
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="misc"
                      name="type"
                      checked={state.type === "misc"}
                      onChange={onChange}
                    />
                    Misc
                  </label>
                </StyledFieldset>
                {error && <StyledError>{error}</StyledError>}
                <StyledButton value="Submit">Submit</StyledButton>
              </StyledForm>
            </StyledFormWrapper>
          </Column>

          <Column>
            <TextArea>
              <ImgWrapper>
                <DisplayJoke loading={loading} results={results} />
              </ImgWrapper>
            </TextArea>
          </Column>
        </Row>
      </Container>
    </>
  );
}

export default Joke;
