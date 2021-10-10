import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.button_primary]: appearance === 'primary',
        [styles.button_secondary]: appearance === 'secondary',
      })}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
