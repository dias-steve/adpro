import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setProducts } from './products.actions';
import productsTypes from './products.types';
import { handleFetchProducts } from './products.helpers';

// fecthing products

export function* fetchproducts() {
    console.log('try');
    try {
        const products = yield handleFetchProducts()//[{id:1},{id:2},{id:3}]

        yield put (
            setProducts(products)
        )
    }catch(err) {
        console.log(err)
    }
}

export function* onFecthProductsStart(){
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchproducts)
}
export default function* productsSagas(){
    yield all([
        call(onFecthProductsStart)
    ])
}