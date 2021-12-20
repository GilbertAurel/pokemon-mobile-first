/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import useForm from 'lib/useForm';
import React from 'react';

interface Props {
  submitHandler: (name: string) => void;
  loading: boolean;
}

const InputNameModal: React.FC<Props> = ({ submitHandler, loading }) => {
  const theme: any = useTheme();
  const [value, setValue] = useForm({ initialValue: { name: '' } });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(value.name);
  };

  const styles = {
    container: css`
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
    `,
    shader: css`
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      background-color: ${theme.colors.background};
      opacity: 0.8;
      z-index: -1;
    `,
    card: css`
      width: 80%;
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background-color: ${theme.colors.background};
      border-radius: 0.5rem;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    `,
    title: css`
      padding: 0;
      margin: 0;
      font-size: ${theme.fonts.headline};
      color: ${theme.colors.primary};
    `,
    input: css`
      width: 80%;
      padding: 0.5rem 0.5rem;
      font-size: ${theme.fonts.body};
      color: ${theme.colors.text};
      border: none;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
      border-radius: 1rem;
      text-align: center;

      :focus {
        outline: none;
      }
    `,
    submit: css`
      padding: 0.5rem 1rem;
      background: ${loading ? theme.colors.grayed : theme.colors.buttonBright};
      border-radius: 0.5rem;
      border: none;
      color: ${loading ? theme.colors.white : theme.colors.buttonBrightText};
      font-size: ${theme.fonts.body};
    `,
  };

  return (
    <div css={styles.container}>
      <form css={styles.card} onSubmit={(e) => onSubmitHandler(e)}>
        <p css={styles.title}>Successfully catch the pokemon</p>
        <input
          css={styles.input}
          type="text"
          name="name"
          id="name"
          value={value.name}
          onChange={(e) => setValue(e)}
          placeholder="optional pokemon name.."
        />
        <button css={styles.submit} disabled={loading} type="submit">
          submit
        </button>
      </form>
      <div css={styles.shader} />
    </div>
  );
};

export default InputNameModal;
