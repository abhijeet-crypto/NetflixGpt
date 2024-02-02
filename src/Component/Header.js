import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="size-full h-24 bg-gradient-to-b from-black absolute px-10 pt-2 z-10 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      ></img>
      {user && (
        <div className="flex gap-6 items-center ">
          <img
            alt="logo"
            className="w-8 rounded-full"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAilBMVEX///8AAAAREiSOjo4AAAvw8PCLi4v6+vr19fV7e3t/f38cHBzo6OhsbGwODyLe3t5OTk50dHQwMDBERERhYWG7u7tXV1fJycmjo6Q8PDxJSUkPDw/V1dUnJyfBwcGwsLCampoAABcDBR1KS1YfIC4YGSg+P0oAABI1NTp9foVzc3pXWF1XWGJoaHB/rF3AAAAEGklEQVR4nO2biW7iMBCGcWnuiyTkgkAgdNkF2vd/vc3RtJsSiI+xE2n9Sb1V8cuejGf+MYuFRCKRSCQSyf+E4kXqKrO2WyuL1chTptZTkS9j1CNe5tMq0pNwi+7Yhok+naZkda+oZZVMJEn3H0mq8SdZrCR4pgmhYILFigaC6UdoRaI1HcYk1aRiNaU4mhAqRGoq8DQJVeVZuKIsT5QmbYerCaGdJkgUVpB3HMRoyrE3T+AGOiSaEHJEaLLJNCFkCxBlkooy+WuyQ1JRIf+l2pNqQmjPXZRKLkrlLmq0OLjH4q1JI9eEEO+sntCI4l3uYdcH/8K7VqCIc4SWnEURp84a3unTkKIwoYop3tkTs2Pow/vpm2WeUmhEcXeHaETx1rR46moM43MXRXHO8O9IvYxUUyCgnyHeP/67V7V9pKKEWKCEnUMoQhNp/hRk6BEdygK6vgaFwEywhHn9BL0f/57viyWupoM4TdhVsaiAatGw/CBHlI3XgVGC8m5iBhitQQW76C3e09QeCvOF++hPFiudYF6kJU0CUtTBqVGgNilznwgN9Lx6+MzGoLOL9U9J66L9S5U2HHFDUsVpTKpd0WyRpkRGmAU7y9oFWWhESrM8etFMALaOoGMm/Tr6sqJ7Sc328tyzu+2yi6/61BLxENq9tBmo3l3caF4/0hzuRux9MZWpUd4tkWbn0UDscy6phpOAFcZrx/eddRwOVzU8t1CncqdqTH5pi6IR7eDV0mjx+Gs/JuaTSKn8sm8MHpqo46mDQ8VH5VX3AfcUqMyynwDnK51glv2YHWxiYA6oFtCwimA0IQR5/QVKE6TTiN17jgPW4XgjN6VIALP1gKK8BSjWqYahj4E5A6nGMY8BiSqF+CLCczYQrQRYjuqAyFWMFcs9ADWMDq0JIfYTEKQ86MNeLDDU5Y9g3j8N+NmrCVlTFeQR08F81IAnhBrWpEA1yB6DtWEGPmNaGK8E4FnTpDBa2frDu/ksrNjSp048nMUhYxNFMrDCh3G0RXU3YhwpSpCoWcbUHJ++WeYpjUM5hZDPWLsAduzfsHZZXEoX1hG8B+KW9WH3E+4mZ+ysWTXNs5tZMFn6Q7AvFOnbZMaxQKalFO9qeAbQ7ZcIcK12YFasDRZXMeRI2VPjoXdcWEG2iR3fMExTrTBNw/CdeJUFQ2u7jVXoCxSKt09NZ5MFlY61YS7TKKlH2baiaL2TTNMUxa7H3EmULk1jXf3HLts4ZrqfxXu5JRKJRCKRSCQSCQ3LGbJ4nSGLlxnSiHLdF7f52vzKPR7Lsv2ufCndiUSVp7df59eyRKfy+Lt8/XO5nk6v6HhE5xt6P5VTiXp/q4TcrpeP98vperhsrsVHdLtFV/VwPsOJqjbk86Pemc+9cZsfy+qTW7pHt3m1v0PsSHpndgBfAAAAAElFTkSuQmCC"
          ></img>
          <div
            onClick={handleSignOut}
            className="font-bold hover:text-red-500 cursor-pointer"
          >
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
