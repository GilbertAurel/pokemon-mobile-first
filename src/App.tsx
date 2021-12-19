import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ROUTES } from 'routes';
import ThemeProvider from 'styles/theme';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <Routes>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
