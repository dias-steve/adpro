import productsTypes from './products.types'

// by default filters is {}
//fetchProductsStart = (filters = {}) 
export const fetchProductsStart = () => ({
    type: productsTypes.FETCH_PRODUCTS_START,
    //payload: filters
});

export const setProducts = products => ({
    type: productsTypes.SET_PRODUCTS,
    payload:products
})

export const fetchProductStart = productID => ({
    type: productsTypes.FETCH_PRODUCT_START,
    payload: productID
});

export const setProduct = product => ({
    type: productsTypes.SET_PRODUCT,
    payload: product
});