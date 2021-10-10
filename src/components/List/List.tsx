import React from 'react';
import { Item } from '../Item/Item';
import styles from './List.module.scss';
import { ListProps } from './List.props';

export const List = ({ list, onSetList }: ListProps): JSX.Element => {
  return (
    <ul className={styles.list}>
      {!list.length ? (
        <li>
          Расходов нет
          <span role="img" aria-label="Смайлик в черных очках">
            &#128526;
          </span>
          ...
        </li>
      ) : (
        list.map((item) => (
          <Item key={item.id} {...item} onSetList={onSetList} />
        ))
      )}
    </ul>
  );
};
