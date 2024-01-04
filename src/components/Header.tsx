import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { LoginPopup } from "./LoginPopup";

export const Header = () => {
  const auth = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    console.log("auth: ", auth);
  }, []);

  useEffect(() => {
    if (!auth) {
      setAuthenticated(true);
    }
  }, [auth]);

  useEffect(() => {
    console.log("showLogin: ", showLogin);
  });

  return (
    <div className="">
      <LoginPopup open={showLogin} />
      {/* {auth.currentUser ? (
        <div>
          {auth.currentUser?.name}
          <button onClick={auth.logout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setShowLogin(true)}>Login</button>
        </div>
      )} */}
    </div>
  );
};
