import AddToCartButton from '../AddToCartButton/AddToCartButton';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductImage from '../ProductImage/ProductImage';
import styles from './ProductCard.module.css';

const ProductCard = ({name, price, image}) => {

    return (
        <div className={styles.content}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <ProductImage 
                        image={image}
                    />
                </div>
                <div className={styles.detailsContainer}>
                    <ProductDetails 
                        name={name}
                        price={price}
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <AddToCartButton />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;