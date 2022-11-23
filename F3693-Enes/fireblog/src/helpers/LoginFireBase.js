import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function LoginFireBase(
  email,
  password,
  setError,
  setLogin,
  dispatch,
  navigate
) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      
      const user = userCredential.user;
  
      dispatch(setLogin(user.uid));
      
  
      navigate(-2);

      // ...
    })
    .catch((error) => {
      setError(error.code);
    });
}

export default LoginFireBase;
