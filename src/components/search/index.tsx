/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const SearchWidget: React.FC = () => {
  const styles = {
    container: css``,
  };
  return (
    <div css={styles.container} data-testid="search">
      <form data-testid="search-bar">
        <input
          type="text"
          name="name"
          id="pokemon-name"
          placeholder="search by pokemon name.."
        />
        <button type="submit"></button>
      </form>
      <button data-testid="search-all-btn">show all</button>
    </div>
  );
};

export default SearchWidget;
