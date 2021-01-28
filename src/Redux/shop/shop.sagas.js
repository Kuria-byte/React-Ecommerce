import { takeEvery } from 'redux-saga/effects'

export function* fetchCollectionStartAsync() {

    yield console.log("Firing");
}

export function* fetchCollectionStart() {
    yield takeEvery('FETCH_COLLECTION_START', fetchCollectionStartAsync);
}
