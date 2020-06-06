import React from 'react';
import styles from './ProductList.scss';
import SearchInput from '../../components/inputs/SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Category = ({ title, iconName, setCategory }) => {
  return (
    <div>
      <FontAwesomeIcon
        className={`fas fa-${iconName} fa-2x`}
        css={{
          color: 'red',
          minWidth: '40px',
        }}
        icon={iconName}
      />
    &emsp;
      <b 
       onClick={() => setCategory(title)}
       className={styles.titleCategory}
       >
         {title}
       </b>
    </div>
  );
}

const SideBar = ({ goods, setGoodsList }) => {
  
  const sortGoodsList = e => {
    const title = e.target.value.toLowerCase();
    const filterGoods = goods.filter(v => v.nameProduct.toLowerCase().includes(title));
    return setGoodsList(filterGoods);
  };

  const getGoodsByCategory = category => {
    if(category === "Все товары")
      return setGoodsList(goods);
    const filterGoods = goods.filter(v => v.category === category);
    return setGoodsList(filterGoods);
  }

  return (
  <div className={styles.sideBar}>
    <div className={styles.searchGoods}>
      <SearchInput sortList={sortGoodsList} placeholder="Enter product title"/>
    </div>
    <div className={styles.categories}>
      <Category title="Все товары" iconName="atom" setCategory={getGoodsByCategory}/>
      <Category title="Мониторы" iconName="desktop" setCategory={getGoodsByCategory}/>
      <Category title="Ноутбуки" iconName="laptop" setCategory={getGoodsByCategory}/>
      <Category title="Платы" iconName="server" setCategory={getGoodsByCategory}/>
      <Category title="Видеокарты" iconName="gamepad" setCategory={getGoodsByCategory}/>
      <Category title="Охлаждение" iconName="fan" setCategory={getGoodsByCategory}/>
      <Category title="Блоки питания" iconName="plug" setCategory={getGoodsByCategory}/>
      <Category title="Процессоры" iconName="microchip" setCategory={getGoodsByCategory}/>
      <Category title="Корпуса" iconName="box" setCategory={getGoodsByCategory}/>
      <Category title="Оперативная память" iconName="memory" setCategory={getGoodsByCategory}/>
      <Category title="Программное обеспечение" iconName="shield-alt" setCategory={getGoodsByCategory}/>
      <Category title="Накопители" iconName="save" setCategory={getGoodsByCategory}/>
      <Category title="Аксессурары" iconName="satellite-dish" setCategory={getGoodsByCategory}/>
    </div>
  </div>
  );
}

export default SideBar;