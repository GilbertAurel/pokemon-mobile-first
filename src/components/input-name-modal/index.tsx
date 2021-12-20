/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import useForm from 'lib/useForm';
import React from 'react';

interface Props {
  submitHandler: (name: string) => void;
}

const InputNameModal: React.FC<Props> = ({ submitHandler }) => {
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
      background-color: red;
      z-index: 10;
    `,
  };

  return (
    <div css={styles.container}>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          name="name"
          id="name"
          value={value.name}
          onChange={(e) => setValue(e)}
          placeholder="optional pokemon name"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default InputNameModal;
