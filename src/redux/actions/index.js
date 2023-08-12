// // import { signInWithPopup } from "firebase/auth";
// // import { auth, googleProvider } from "../../firebase";
// // import * as actions from "./actions";

// // export function signInAPI() {
// //   return (dispatch) => {
// //     signInWithPopup(auth, googleProvider)
// //       .then((payload) => {
// //         dispatch(actions.setUser(payload.user));
// //       })
// //       .catch((error) => alert(error.message));
// //   };
// // }

// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "../../firebase";
// import { setUser } from "./actions";

// export const signInAPI = () => async (dispatch) => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider);
//     // const user = {
//     //   uid: result.user.uid,
//     //   displayName: result.user.displayName,
//     //   email: result.user.email,
//     // };
//     const user = await result.user;
//     dispatch(setUser(user));
//   } catch (error) {
//     alert(error.message);
//   }
// };
