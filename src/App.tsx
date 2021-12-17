import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'routes';
import ThemeProvider from 'styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
