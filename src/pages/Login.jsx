import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Loader from "../components/common/Loader";

function Login() {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (response?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <LoginComponent />;
}

export default Login;
