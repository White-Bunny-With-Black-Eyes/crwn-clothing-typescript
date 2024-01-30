import PropTypes from 'prop-types';
import './category-item.styles.scss';

export interface CategoryItemProps {
  id?: number;
  imageUrl: string;
  title: string;
}

export type CategoriesItemsProps = CategoryItemProps[];

const CategoryItem = ({ imageUrl, title }: CategoryItemProps) => {
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CategoryItem;
