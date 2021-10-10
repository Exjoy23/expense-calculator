import React, { FormEvent } from 'react';
import { useInput } from '../../hooks/useInput';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Form.module.scss';
import { FormProps } from './Form.props';

export const Form = ({ onSetList }: FormProps): JSX.Element => {
  const name = useInput('');
  const price = useInput('');

  const isNameFilled = !!name.value.trim().length;
  const isPriceFilled = !!price.value.trim().length;

  const isInputsFilled = isNameFilled && isPriceFilled;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (!isNameFilled) {
      name.setError(true);
    }

    if (!isPriceFilled) {
      price.setError(true);
    }

    if (isInputsFilled) {
      onSetList((prevState) => [
        ...prevState,
        { id: new Date().toString(), name: name.value, price: price.value },
      ]);

      name.setValue('');
      price.setValue('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Название товара"
        value={name.value}
        onChange={name.onChange}
        onFocus={name.onFocus}
        error={name.error}
      />
      <Input
        type="number"
        placeholder="Цена товара"
        value={price.value}
        onChange={price.onChange}
        onFocus={price.onFocus}
        error={price.error}
        min="0.01"
        step=".01"
        pattern="^\d*(\.\d{0,2})?$"
      />
      <Button appearance="primary" type="submit">
        Добавить
      </Button>
    </form>
  );
};
