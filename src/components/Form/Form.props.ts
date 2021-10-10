import { Dispatch, SetStateAction } from 'react';
import { IExpense } from '../../interfaces/expense.interface';

export interface FormProps {
  onSetList: Dispatch<SetStateAction<IExpense[]>>;
}
