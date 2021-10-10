import React from 'react';
import { divideNumberByPieces } from '../../utils';
import { Button } from '../Button/Button';
import styles from './Total.module.scss';
import { TotalProps } from './Total.props';

export const Total = ({ list, onSetList }: TotalProps): JSX.Element => {
  const handleButtonClick = () => {
    onSetList([]);
  };

  const getSum = () => {
    if (list.length) {
      const initialValue = 0;

      return divideNumberByPieces(
        list
          .slice()
          .reduce(
            (accumulator, currentValue) => accumulator + +currentValue.price,
            initialValue,
          ),
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sum}>Общая сумма: {getSum() || 0} р.</div>
      <Button
        onClick={handleButtonClick}
        appearance="secondary"
        disabled={!list.length}
      >
        Очистить список
      </Button>
    </div>
  );
};
