/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

interface Props {
  msg: string;
  icon?: string;
}

const AlertMessage: React.FC<Props> = ({ msg, icon }) => {
  const theme: any = useTheme();

  const styles = {
    container: css``,
    msg: css`
      color: ${theme.colors.grayed};
      font-size: ${theme.fonts.body};
    `,
  };

  return (
    <div css={styles.container}>
      {icon && <img src={icon} alt="alert" />}
      <p css={styles.msg}>{msg}</p>
    </div>
  );
};

export default AlertMessage;
