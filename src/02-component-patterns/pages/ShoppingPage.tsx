import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from '../components';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
    const product = {
        id: '1',
        title: 'Coffee Mug',
        img: './coffee-mug.png',
    };

    return (
        <div>
            <h1>Sopping Store</h1>
            <hr />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-img" />
                    <ProductCard.Title className="text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage
                        className="custom-img"
                        style={{
                            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{ backgroundColor: '#78D1f8' }}
                >
                    <ProductImage
                        style={{
                            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons
                        style={{ display: 'flex', justifyContent: 'end' }}
                    />
                </ProductCard>
            </div>
        </div>
    );
};
