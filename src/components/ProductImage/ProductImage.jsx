import styles from './ProductImage.module.css';

const ProductImage = ({image}) => {

    return (
        <div>
            <img className={styles.imagemProduto} src={image} alt="Foto A05" />
        </div>
    );

};

export default ProductImage;