/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

import searchIcon from 'assets/icons/search.svg';
import useForm from 'lib/useForm';

interface Props {
  searchHandler: (value: string) => void;
  showAllHandler: () => void;
}

const SearchWidget: React.FC<Props> = ({ searchHandler, showAllHandler }) => {
  const theme: any = useTheme();
  const [value, setValue] = useForm({ initialValue: { name: '' } });

  const submitBtnHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchHandler(value.name);
  };

  const styles = {
    container: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.625rem;
      z-index: 1;
    `,
    search: css`
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
    `,
    searchBar: css`
      height: 60%;
      width: 100%;
      position: relative;

      input {
        width: 100%;
        height: 100%;
        padding: 0 2rem 0 1.25rem;
        border: none;
        border-radius: 1rem;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
        font-size: ${theme.fonts.body};

        :focus {
          outline: none;
        }
      }

      img {
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
      }
    `,
    searchSubmitBtn: css`
      display: none;
    `,
    showAllBtn: css`
      height: 60%;
      width: 5rem;
      background-color: ${theme.colors.buttonBright};
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
      border-radius: 1rem;
      border: none;
      color: ${theme.colors.buttonBrightText};
      font-size: ${theme.fonts.body};

      :active {
        transform: scale(0.9);
      }
    `,
  };

  return (
    <div css={styles.container} data-testid="search">
      <form
        css={styles.search}
        onSubmit={(e) => submitBtnHandler(e)}
        data-testid="search-bar"
      >
        <section css={styles.searchBar}>
          <input
            type="text"
            name="name"
            id="pokemon-name"
            value={value.name}
            onChange={(e) => setValue(e)}
            placeholder="search by pokemon name.."
          />
          <img src={searchIcon} alt="search icon" />
        </section>
        <button css={styles.searchSubmitBtn} type="submit"></button>
      </form>
      <button
        css={styles.showAllBtn}
        onClick={showAllHandler}
        data-testid="search-all-btn"
      >
        show all
      </button>
    </div>
  );
};

export default SearchWidget;
