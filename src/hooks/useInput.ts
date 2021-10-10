import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

interface IUseInput {
  value: string;

  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  setValue: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<boolean>>;
  error: boolean;
}

export const useInput = (initial: string): IUseInput => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(false);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    setError(false);
  };

  const onFocus = () => {
    setError(false);
  };

  return { value, onChange, onFocus, setValue, setError, error };
};
