import PropTypes from 'prop-types';
import CategoryItem from '../category-item/category-item.component';
import { CategoryItemProps } from '../category-item/category-item.component';
import { CategoriesItemsProps } from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categories }: { categories: CategoriesItemsProps }) => {
  return (
    <div className='directory-container'>
      {categories.map((category: CategoryItemProps) => {
        return (
          <CategoryItem
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        );
      })}
    </div>
  );
};

Directory.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Directory;
