import { Dispatch, SetStateAction } from 'react';
import { IExpense } from '../../interfaces/expense.interface';

export interface ListProps {
  list: IExpense[];
  onSetList: Dispatch<SetStateAction<IExpense[]>>;
}
