import { Dispatch, SetStateAction } from 'react';
import { IExpense } from '../../interfaces/expense.interface';

export interface ItemProps extends IExpense {
  onSetList: Dispatch<SetStateAction<IExpense[]>>;
}
