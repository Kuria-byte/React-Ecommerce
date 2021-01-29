 
 export const googleSignInStart = () =>({
     type : 'GOOGLE_SIGNIN_START'
 });

 export const googleSignInSuccess = (user) =>({
    type : 'GOOGLE_SIGNIN_SUCCESS',
    payload: user
});

export const googleSignInFailure = (error) =>({
    type : 'GOOGLE_SIGNIN_SUCCESS',
    payload: error
});

export const emailSignInStart = (emailAndPassword) =>({
    type : 'EMAIL_SIGNIN_START',
    payload  : emailAndPassword
});

export const emailSignInSuccess = (user) =>({
    type : 'EMAIL_SIGNIN_SUCCESS',
    payload : user 
});


export const emailSignInFailure = (error) =>({
    type : 'EMAIL_SIGNIN_FAILURE',
    payload : error
});




 export const logOut = () =>({
     type: 'LOG_OUT_USER'
 });