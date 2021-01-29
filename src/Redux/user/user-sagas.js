import { takeLatest, put, all } from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDocument } from '../../Firebase/Firebase.utils';
import { googleSignInSuccess, googleSignInFailure,emailSignInSuccess,emailSignInFailure } from './user.action'
import Swal from 'sweetalert2'
// import { selectCurrentUser } from './user.selector'

export function* signInWithGoogle() {

    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield createUserProfileDocument(user);
        const userSnapShot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))

    } catch (error) {
       yield Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: (error),
            footer: '<a href>Why do I have this issue?</a>'
          })
          yield put(googleSignInFailure(error));
    }
}


export function* onGoogleSignInStart() {
    yield takeLatest('GOOGLE_SIGNIN_START', signInWithGoogle)
}


export function* signInWithEmail ({payload :{email,password}}){
   
      try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield createUserProfileDocument(user);
        const userSnapShot = yield userRef.get();
        yield put(emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
     

    }catch(error){
      yield Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: (error),
            footer: '<a href>Why do I have this issue?</a>'
          })
          yield put(emailSignInFailure(error));
    }


}

export function* onEmailSignInStart () {
    yield takeLatest('EMAIL_SIGNIN_START',signInWithEmail )
}



export function* userSagas() {
    yield all([onGoogleSignInStart(), onEmailSignInStart()])
}