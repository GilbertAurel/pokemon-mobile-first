/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

import AlertIcon from 'assets/icons/warning.svg';
import { Link } from 'react-router-dom';

const RouterPathError: React.FC = () => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.grayed};

      img {
        height: 5rem;
        width: 5rem;
      }
    `,
    backBtn: css`
      background-color: ${theme.colors.buttonBright};
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 1rem;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
      color: ${theme.colors.primary};
    `,
  };

  return (
    <div css={styles.container}>
      <img src={AlertIcon} alt="alert" />
      <p>404 page not found!</p>
      <Link to={'/'}>
        <button css={styles.backBtn} type="button">
          back to home page
        </button>
      </Link>
    </div>
  );
};

export default RouterPathError;
