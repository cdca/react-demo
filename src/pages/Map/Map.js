import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ShowMap from "./components/ShowMap";
import { Container, Column, Row, PageContainer } from "../../globalStyles";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import {
  Select,
  SearchBox,
  ResultsItems,
  MapWrapper1,
  Heading,
  Text,
  Heading2,
  StyledForm,
} from "./Map.style";
import Search from "../../components/Search/Search";
import { SearchButtonMap } from "../../components/Search/Search.style";

function Map() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await axios(`https://json.geoiplookup.io/${query}`);
      setResult(res.data);
      setLoading(false);
    };

    fetchEvents();
  }, [query]);

  const onSubmit = (data) => {
    setQuery(data.website);
  };

  return (
    <PageContainer>
      <Container>
        <Row>
          <Column>
            <Heading>Search for a website info:</Heading>
            <SearchBox>
              Enter domain name:
              <Search query={(q) => setQuery(q)} />
            </SearchBox>
            <Heading2>or </Heading2>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <SearchBox>
                Select popular website:
                <Select type="dropdown" {...register("website")}>
                  <option value="">None</option>
                  <option value="facebook.com">Facebook</option>
                  <option value="google.com">Google</option>
                  <option value="youtube.com">Youtube</option>
                  <option value="github.com">Github</option>
                </Select>
                <SearchButtonMap value="Submit">Submit</SearchButtonMap>
              </SearchBox>
            </StyledForm>
          </Column>

          <Column>
            <Heading>Your info:</Heading>
            <ResultsItems>
              <Text>IP</Text>
              <Text>{result.ip}</Text>
            </ResultsItems>
            <ResultsItems>
              <Text>ISP</Text>
              <Text>{result.isp}</Text>
            </ResultsItems>
            <ResultsItems>
              <Text>City</Text>
              <Text>{result.city}</Text>
            </ResultsItems>
            <ResultsItems>
              <Text>Country</Text>
              <Text>{result.country_name}</Text>
            </ResultsItems>
            <MapWrapper1>
              {!loading ? <ShowMap result={result} /> : <Spinner />}
            </MapWrapper1>
          </Column>
        </Row>
      </Container>
    </PageContainer>
  );
}

export default Map;
