import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from "@apollo/client";
import React from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { onError } from "@apollo/client/link/error";

import Header from "./components/Header/Header.component";
import HomePage from "./pages/HomePage/HomePage.component";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.component";

type Props = {};

const App = (props: Props) => {
  const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => alert(`Graphql zero ${message}`));
    }
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: "https://api.spacex.land/graphql/" }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
