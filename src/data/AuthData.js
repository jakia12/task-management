// import React from 'react'
// const [user, setUser] = useState(null);
// export const [loading, setLoading] = useState(true);

// //email login

// //sign up

// const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
// }

// //login
// const login = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
// }


// //sigh out
// const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
// }

// //get current user
// useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//         setLoading(false);
//     });

//     return () => unSubscribe();
// }, []);


// //display user
// const updateUserProfile = (profile) => {
//     return updateProfile(auth.currentUser, profile);
// }

// //reset password

// const resetPassword = (email) => {
//     return sendPasswordResetEmail(auth, email);
// }
