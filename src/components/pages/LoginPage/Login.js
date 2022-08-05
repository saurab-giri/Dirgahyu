import React from "react";
import { Controller, useForm } from "react-hook-form";
import LoginImg from "../../utils/images/dirgahyu-small.png";
import { ErrorMessage } from "@hookform/error-message";
import "font-awesome/css/font-awesome.min.css";
import { PasswordField } from "../../molecules";

const Login = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submitHandler = async (values) => {
    const data = { ...values, active: true };
    console.log(data);
  };
  return (
    <div className="login">
      <div className="login-left col-12 col-lg-6 col-md-4 col-sm-12">
        {/* eslint-disable-next-line */}
        <img src={LoginImg} alt="Login-image" className="login-img" />
      </div>
      <div className="login-right col-12 col-lg-6 col-md-6 col-sm-12">
        <div className="login-box col-12 col-lg-12 col-md-12 col-sm-12">
          <h2 className="login-title">Login</h2>
          <form autoComplete="off" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group col-6">
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <input
                      {...field}
                      {...fieldState}
                      error={fieldState.error}
                      type="text"
                      placeholder="&#xF007; User ID"
                      label="Email"
                    />
                  );
                }}
              />
              <ErrorMessage
                errors={errors}
                name="singleErrorInput"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className="form-group col-6">
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <PasswordField
                      {...field}
                      {...fieldState}
                      error={fieldState.error}
                      placeholder="&#xF023; Password"
                      type="password"
                      label="Password"
                    />
                  );
                }}
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
