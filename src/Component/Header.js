import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="size-full h-24 bg-gradient-to-b from-black absolute px-10  z-10 flex justify-between">
      <img src={LOGO} alt="logo" className="w-44 h-20"></img>
      {user && (
        <div className="flex gap-5 items-center ">
          <img alt="logo" className="w-8 rounded-full" src={USER_AVATAR}></img>
          <div
            onClick={handleSignOut}
            className="font-bold hover:bg-red-500 cursor-pointer bg-red-600 py-1 px-2 rounded"
          >
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
