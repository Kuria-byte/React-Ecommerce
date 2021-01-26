import { firestore, convertShopCollectionsToObject} from "../../Firebase/Firebase.utils";

export const fetchCollectionStart = (CollectionObject) => ({
  type: "FETCH_COLLECTION_START "
});

export const fetchCollectionFailure = (errorMessage) => ({
    type: "FETCH_COLLECTION_SUCCESS",
    payload: errorMessage,
  });

export const fetchCollectionSuccess = (collectionsObject) => ({
  type: "FETCH_COLLECTION_SUCCESS",
  payload: collectionsObject,
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("shopCollections");
    dispatch(fetchCollectionStart());

    collectionRef.get().then((snapshot) => {
      const collectionsObject = convertShopCollectionsToObject(snapshot);

      dispatch(fetchCollectionSuccess(collectionsObject));
    }).catch(error => dispatch(fetchCollectionFailure(error.message)) )
  }
}
