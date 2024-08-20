"use client";
import React, { useState } from "react";
import { Metadata } from "next";
import {
  TButtonColor,
  THead3,
  TInputPassword,
  TInputText,
} from "@/components/Common/ReusableTags";
import { XEye } from "@/components/Common/ReusableSvgs";
import { signin } from "@/services/api";

const SigninPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        email: formData.email,
        password: formData.password,
      };
      const response = await signin(data);
      console.log("Sigin successful:", response);
      setLoading(false);
      window.location.href = "/watch";
    } catch (err) {
      setError(err.message || "Failed to sign in");
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="relative z-10 overflow-hidden bg-black pb-16 pt-24 md:pb-20 lg:pb-12 lg:pt-[50px]"
        style={{
          background: `url("/images/sign.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "60%",
          position: "relative",
          backgroundPosition: "right",
          height: "100vh",
        }}
      >
        <div className="container mx-auto flex">
          <div className="flex w-full max-w-4xl">
            <div className="w-full rounded-l-lg bg-black p-8 md:w-1/2">
              <THead3 title="Welcome Back" />

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <TInputText
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative mb-4">
                  <TInputPassword
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
              
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <XEye />
                  </div>
                </div>

                {/* <a href="forgotPassword" className="text-gray-300">
                  Forgot password?
                </a> */}

                <div className="mt-10">
                  <TButtonColor
                    text="Log in"
                    onClick={handleSubmit}
                    link="watch"
                  />
                </div>
                {error && (
                  <div className="mt-2 text-center text-red-500">{error}</div>
                )}
                {loading && <div className="mt-2 text-center">Loading...</div>}
                <div className="my-6 flex items-center justify-center">
                  Don't Have An Account ?{" "}
                  <a href="/signup" className="ml-1 text-blue-600">
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
