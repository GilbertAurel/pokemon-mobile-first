import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ROUTES } from 'routes';
import ThemeProvider from 'styles/theme';
import { PokemonProvider } from 'lib/pokemonContext';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <PokemonProvider>
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
      </PokemonProvider>
    </ThemeProvider>
  );
};

export default App;
