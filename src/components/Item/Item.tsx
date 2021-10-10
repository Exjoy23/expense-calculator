import classNames from 'classnames';
import React, { FormEvent, useRef, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { IExpense } from '../../interfaces/expense.interface';
import { divideNumberByPieces } from '../../utils';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Item.module.scss';
import { ItemProps } from './Item.props';

export const Item = ({
  id,
  name,
  price,
  onSetList,
}: ItemProps): JSX.Element => {
  const nameField = useInput(name);
  const priceField = useInput(price);
  const [isEdit, setIsEdit] = useState(false);

  const isNameFieldFilled = !!nameField.value.trim().length;
  const isPriceFieldFilled = !!priceField.value.trim().length;

  const isInputsFilled = isNameFieldFilled && isPriceFieldFilled;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (!isNameFieldFilled) {
      nameField.setError(true);
    }

    if (!isPriceFieldFilled) {
      priceField.setError(true);
    }

    if (isInputsFilled) {
      onSetList((prevState: IExpense[]) => {
        const expenseIndex = prevState.findIndex((item) => item.id === id);
        const editedExpenses = prevState.slice();
        editedExpenses.splice(expenseIndex, 1, {
          id,
          name: nameField.value,
          price: priceField.value,
        });

        return editedExpenses;
      });
      setIsEdit(false);
    }
  };

  const handleButtonRemoveClick = () => {
    onSetList((prevState: IExpense[]) =>
      prevState.filter((item) => item.id !== id),
    );
  };

  const ref = useRef(null);

  const resetChanges = () => {
    setIsEdit(false);
    nameField.setValue(name);
    priceField.setValue(price);
    nameField.setError(false);
    priceField.setError(false);
  };

  useOnClickOutside(ref, resetChanges);

  return (
    <li className={classNames(!isEdit && styles.item)} ref={ref}>
      {isEdit ? (
        <form
          className={classNames(styles.item, styles.form)}
          onSubmit={handleSubmit}
        >
          <Input
            className={styles.name}
            value={nameField.value}
            onChange={nameField.onChange}
            error={nameField.error}
            placeholder="Название товара"
          />
          <Input
            className={styles.price}
            value={priceField.value}
            onChange={priceField.onChange}
            error={priceField.error}
            placeholder="Цена"
            type="number"
            min="0.01"
            step=".01"
            pattern="^\d*(\.\d{0,2})?$"
          />
          <Button appearance="primary" type="submit">
            Применить
          </Button>
          <Button onClick={resetChanges} appearance="secondary">
            Отмена
          </Button>
        </form>
      ) : (
        <>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.text}>{divideNumberByPieces(+price)} р.</div>
          <Button onClick={() => setIsEdit(true)} appearance="primary">
            Редактировать
          </Button>
          <Button onClick={handleButtonRemoveClick} appearance="secondary">
            Удалить
          </Button>
        </>
      )}
    </li>
  );
};
