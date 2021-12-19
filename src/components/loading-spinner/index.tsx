/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';
import loadingIcon from 'assets/icons/loading.svg';

const LoadingSpinner: React.FC = () => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      justify-self: center;
      align-self: center;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    `,
    icon: css`
      animation: rotation 2s infinite linear;
      height: 1.5rem;
      width: 1.5rem;

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    `,
    msg: css`
      color: ${theme.colors.grayed};
      font-size: ${theme.fonts.body};
    `,
  };

  return (
    <div css={styles.container}>
      <img css={styles.icon} src={loadingIcon} alt="" />
      <p css={styles.msg}>searching for pokemons..</p>
    </div>
  );
};

export default LoadingSpinner;
