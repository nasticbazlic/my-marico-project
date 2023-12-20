import { Link } from 'react-router-dom';
import './item-list.css'

const ItemList = ({items, variation, style_li}) => {
  const listItems = items.map(({item, to, id}) =>
    <li key={id} className={style_li}><Link to={to}>{item}</Link></li>
  );
  return (
    <ul className={variation}>{listItems}</ul>
  );
}

export default ItemList;