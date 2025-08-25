import styles from './ProductDetails.module.css';

const ProductDetails =({name, price}) => {

    return (
        <div className={styles.content}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.price}>{price}</p>
        </div>
    );
};

export default ProductDetails;