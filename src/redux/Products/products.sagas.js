import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setProducts, setProduct } from './products.actions';
import productsTypes from './products.types';
import { handleFetchProducts, handleFetchProduct} from './products.helpers';

// fecthing products

export function* fetchproducts() {
    console.log('try');
    try {
        const products = yield handleFetchProducts()//[{id:1},{id:2},{id:3}]
        if( Array.isArray(products) ){
            yield put (
                setProducts(products)
            )
        }else{
            yield put (
                setProducts([])
            )
        }

    }catch(err) {
        console.log(err)
    }
}

export function* onFecthProductsStart(){
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchproducts)
}

// fetch product detail
export function* fetchproduct({payload}){
    console.log('try on fetchproduct');
    try {
        const product = yield handleFetchProduct(payload);
        if(product.id){
            yield put (
                setProduct(product)
            )
        }
    }catch(err){
        console.log(err)
        yield put (
            setProduct({})
        )
    }
}

export function* onFecthProductStart(){
    yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchproduct)
}

export default function* productsSagas(){
    yield all([
        call(onFecthProductsStart),
        call(onFecthProductStart)
    ])
}