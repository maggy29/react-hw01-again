import PropTypes from 'prop-types';
import defaultImage from '../../img/default.jpg';

const styles = {                     // just one obj, it not recreates at each rerender
  container: {
        outline: '2px solid #991111',
  }
}

const Painting = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'не известно',
  price,
  quantity,
}) => {
  const fewLeft = quantity < 10
  return (
    <div
    // style = {styles.container}
    >
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p
      //style={{color: fewLeft ? "red" : "green"}}
      >
        Доступность: {fewLeft ? 'заканчивается' : 'есть в наличии'}
      </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;