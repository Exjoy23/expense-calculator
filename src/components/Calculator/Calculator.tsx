import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IExpense } from '../../interfaces/expense.interface';
import { Form } from '../Form/Form';
import { List } from '../List/List';
import { Total } from '../Total/Total';
import styles from './Calculator.module.scss';

export const Calculator = (): JSX.Element => {
  const [expenses, setExpenses] = useLocalStorage<IExpense[]>('expenses', []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Калькулятор расходов</h1>
        <Form onSetList={setExpenses} />
        <List list={expenses} onSetList={setExpenses} />
        <Total list={expenses} onSetList={setExpenses} />
      </div>
    </div>
  );
};
