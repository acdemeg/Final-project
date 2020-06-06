import React from 'react';
import style from './UsersInfo.scss';

const OrderHeader = () => (
  <div className={style.orderHeader}>
    <div>Название</div>
    <div>Количество</div>
    <div>Цена</div>
    <div>Статус</div>
    <div>Сумма заказа</div>
    <div>Действия</div>
  </div>
);

export default OrderHeader;
