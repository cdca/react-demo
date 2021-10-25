import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import FlickrImages from "./pages/FlickrImages/FlickrImages";
import Joke from "./pages/Joke/Joke";
import Footer from "./components/Footer/Footer";
import Map from "./pages/Map/Map";
import ScrollToTop from "./ScrollToTop";
import { IMAGE_PAGE, MAP_PAGE, JOKE_PAGE } from "./constants";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />

      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={IMAGE_PAGE} exact component={FlickrImages} />
        <Route path={MAP_PAGE} exact component={Map} />
        <Route path={JOKE_PAGE} exact component={Joke} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
