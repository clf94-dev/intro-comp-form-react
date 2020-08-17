import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Button } from "@material-ui/core/";
import ErrorMessage from "./ErrorMessage";
import "../styles/Form.scss";

function Form() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <Grid container className="form-cont">
      <Grid item md={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name "
            style={
              errors.firstName && {
                borderColor: "red",
                backgroundColor: "lightpink"
              }
            }
            ref={register({ required: true, maxLength: 20 })}
            className="first-name input"
          />
          <ErrorMessage error={errors.firstName} />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            style={
              errors.lastName && {
                borderColor: "red",
                backgroundColor: "lightpink"
              }
            }
            ref={register({ required: true })}
            className="last-name input"
          />
          <ErrorMessage error={errors.lastName} />
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            style={
              errors.email && {
                borderColor: "red",
                backgroundColor: "lightpink"
              }
            }
            ref={register({
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
            className="email-address input"
          />
          <ErrorMessage error={errors.email} />

          <input
            type="password"
            name="password"
            placeholder="Password"
            style={
              errors.password && {
                borderColor: "red",
                backgroundColor: "lightpink"
              }
            }
            ref={register({ required: true, maxLength: 20 })}
            className="password input"
          />
          <ErrorMessage error={errors.password} />
        </form>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          {" "}
          Claim your free trial
        </Button>
        <h5 className="signup">
          By clicking the button you are agreeing to our{" "}
          <strong>Terms and Services</strong>
        </h5>
      </Grid>
    </Grid>
  );
}

export default Form;
