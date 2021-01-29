import { firestore, convertShopCollectionsToObject} from "../../Firebase/Firebase.utils";

export const fetchCollectionStart = (CollectionsObject) => ({
  type: "FETCH_COLLECTION_START"
});

export const fetchCollectionFailure = (errorMessage) => ({
    type: "FETCH_COLLECTION_FAILURE",
    payload: errorMessage,
  });

export const fetchCollectionSuccess = (collectionsObject) => ({
  type: "FETCH_COLLECTION_SUCCESS",
  payload: collectionsObject,
});

// Redux- thunk 
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
