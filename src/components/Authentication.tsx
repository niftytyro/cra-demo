import React from "react";
import GoogleLogo from "../svg/google.svg";

const Authentication = () => {
  return (
    <section className="flex-1 flex flex-col justify-center pb-40">
      <div className="w-3/5 mx-auto">
        <h1 className="text-darkGray text-3xl font-bold">Sign In</h1>
        <p className="text-gray text-base">
          Welcome back! Please enter your details.
        </p>

        <form className="mt-8 w-full">
          <label className="text-base block font-semibold">Email</label>
          <input
            className="outline outline-2 outline-lightGray rounded-md px-4 py-2 mt-2 w-full"
            placeholder="Type your email here"
          />
          <label className="text-base block font-semibold mt-6">Password</label>
          <input
            className="outline outline-2 outline-lightGray rounded-md px-4 py-2 mt-2 w-full"
            placeholder="Type your password here"
          />
          <a
            className="text-pink text-sm font-bold mt-4 text-end block"
            href="/"
          >
            Forgot password?
          </a>
          <button className="bg-purple text-white w-full tece font-bold mt-4 py-3 rounded-lg hover:bg-darkPurple">
            Sign In
          </button>

          <div className="flex justify-center items-center my-6">
            <div className="h-0.5 flex-1 bg-lightGray mr-4" />
            <span className="text-sm text-gray font-light">or</span>
            <div className="h-0.5 flex-1 bg-lightGray ml-4" />
          </div>

          <button className="bg-white text-black w-full font-bold mt-4 py-3 rounded-lg border-2 border-lightGray flex justify-center items-center hover:bg-superLightGray">
            <img src={GoogleLogo} alt="logo" className="w-6 mr-3" />
            Sign in with Google
          </button>

          <p className="font-medium text-gray text-sm pt-4 text-center">
            Are you a new user?{" "}
            <a className="text-pink text-sm font-boldtext-end" href="/">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Authentication;
