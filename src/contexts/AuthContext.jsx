import React, { useState } from "react";
import { auth, firebase } from "../services/firebase";

export const AuthContext = React.createContext({});

function AuthProvider(props) {
  const [user, setUser] = useState();

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const response = await auth.signInWithPopup(provider);

    if (response.user) {
      const { displayName, email, photoURL, uid } = response;
      setUser({
        id: uid,
        name: displayName || email,
        avatar: photoURL || "https://i.imgur.com/xqL5hmc.jpeg",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);

export default AuthProvider;
