import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';

export const Input = ({
  error,
  className,
  ...props
}: InputProps): JSX.Element => {
  return (
    <label className={styles.label}>
      {error && <span className={styles.error}>Поле не может быть пустым</span>}
      <input
        className={classNames(styles.input, className, {
          [styles.input_error]: error,
        })}
        {...props}
      />
    </label>
  );
};
