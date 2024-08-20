"use client";
import React, { useState } from 'react';
import { signup } from '@/services/api'; 
import { TButtonColor, THead3, TInputPassword, TInputText } from "@/components/Common/ReusableTags";
import { XEye } from "@/components/Common/ReusableSvgs";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const data = { 
        username: formData.username, 
        email: formData.email, 
        password: formData.password 
      };
      const response = await signup(data);
      console.log('Signup successful:', response);
      setLoading(false);
      window.location.href = '/signin'; 
    } catch (err) {
      setError(err.message || 'Failed to sign up');
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
        }}
      >
        <div className="container mx-auto flex">
          <div className="flex w-full max-w-4xl">
            <div className="w-full rounded-l-lg bg-black p-8 md:w-1/2">
              <THead3 title="Create Account" />

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <TInputText placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <TInputText placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="relative mb-4">
                  <TInputPassword placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <XEye />
                  </div>
                </div>
                <div className="relative mb-6">
                  <TInputPassword placeholder="Confirm password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <XEye />
                  </div>
                </div>
                <TButtonColor text="Sign up" link="#" onClick={handleSubmit} />
                {error && <div className="text-red-500 text-center mt-2">{error}</div>}
                {loading && <div className="text-center mt-2">Loading...</div>}
                <div className="my-6 flex items-center justify-center">
                  Already Have An Account ?{" "}
                  <a href="/signin" className="ml-1 text-blue-600">
                    Log in
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

export default SignupPage;

