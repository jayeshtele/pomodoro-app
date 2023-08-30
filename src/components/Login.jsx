import React from "react";
import { auth } from "../firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";

export default function Logout() {
  const [user] = useAuthState(auth);

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  function handlelogout() {
    signOut(auth);
  }

  return (
    <>
      {user ? (
        <button
          onClick={handlelogout}
          className="absolute right-5 top-5 rounded-2xl bg-white px-4 py-2 text-xl font-bold text-[#270000]"
        >
          Logout
        </button>
      ) : (
        <GoogleButton
          className="absolute right-5 top-5"
          onClick={googleSignIn}
        />
      )}
    </>
  );
}
