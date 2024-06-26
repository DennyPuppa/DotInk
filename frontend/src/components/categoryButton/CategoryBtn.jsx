import './category-btn.css'

const CategoryBtn = ({categoryName}) => {


    return (
        <button className='category-btn'>{categoryName}</button>
    );
}

export default CategoryBtn;