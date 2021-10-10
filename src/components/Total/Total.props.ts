import { Dispatch, SetStateAction } from 'react';
import { IExpense } from '../../interfaces/expense.interface';

export interface TotalProps {
  list: IExpense[];
  onSetList: Dispatch<SetStateAction<IExpense[]>>;
}
