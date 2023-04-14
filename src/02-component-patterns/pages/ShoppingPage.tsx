import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from '../components';

import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Sopping Store</h1>
            <hr />

            <ProductCard
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {({
                    reset,
                    count,
                    isMaxCountReached,
                    increaseBy,
                    maxCount,
                }) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )}
            </ProductCard>
        </div>
    );
};
