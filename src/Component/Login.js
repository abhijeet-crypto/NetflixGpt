import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handelButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // sing up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handelsignup = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="background-img"
        ></img>
      </div>
      <form
        className="bg-black absolute w-3/12 mx-auto my-44 px-12 py-10 bg-opacity-80 left-0 right-0 text-white rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-transparent appearance-none border-white border-solid border rounded-lg"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-transparent appearance-none border-white border-solid border rounded-lg"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-transparent border-white border-solid border rounded-lg appearance-none"
        ></input>
        <p className="py-2 font-bold text-red-500">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-lg"
          onClick={handelButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="mt-10 font-bold cursor-pointer hover:text-gray-400"
          onClick={handelsignup}
        >
          {isSignIn
            ? "New to Netflix? Sign Up now"
            : "Already Member Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
