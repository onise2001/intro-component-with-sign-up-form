import styled from "styled-components";
import { useState } from "react";
//import Input from "./Input";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function checkErrors() {
    let tmpErrors = {};
    formData.firstName.length > 0
      ? ""
      : (tmpErrors.firstName = "First Name cannot be empty ");
    formData.lastName
      ? ""
      : (tmpErrors.lastName = "Last Name cannot be empty ");
    /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
      ? ""
      : (tmpErrors.email = "Look like this is not an email");
    formData.password ? "" : (tmpErrors.password = "Password cannot be empty ");

    console.log(tmpErrors);
    setErrors(tmpErrors);
    return Object.keys(tmpErrors).length > 0;
  }

  const submit = (event) => {
    event.preventDefault();
    const check = checkErrors();
    console.log(check);
    if (!check) {
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  const inputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setErrors({
      ...errors,
      [event.target.name]: "",
    });
  };

  return (
    <SignUpSection>
      <Form onSubmit={(event) => submit(event)}>
        <StyledInput
          type="text"
          placeholder={errors.firstName ? "" : "First Name"}
          name="firstName"
          value={formData.firstName}
          onChange={(event) => {
            inputChange(event);
          }}
          $error={errors.firstName}
        />
        {errors.firstName && <StyledError>{errors.firstName}</StyledError>}
        <StyledInput
          type="text"
          placeholder={errors.lastName ? "" : "Last Name"}
          value={formData.lastName}
          name="lastName"
          onChange={(event) => {
            inputChange(event);
          }}
          $error={errors.lastName}
        />
        {errors.lastName && <StyledError>{errors.lastName}</StyledError>}
        <StyledInput
          type="text"
          placeholder={errors.email ? "" : "Email Address"}
          style={{ color: `${errors.email ? "#ff7979" : "#3d3b48"}` }}
          name="email"
          value={formData.email}
          onChange={(event) => {
            inputChange(event);
          }}
          $error={errors.email}
        />
        {errors.email && <StyledError>{errors.email}</StyledError>}
        <StyledInput
          type="password"
          placeholder={errors.password ? "" : "Password"}
          value={formData.password}
          name="password"
          onChange={(event) => {
            inputChange(event);
          }}
          $error={errors.password}
        />
        {errors.password && <StyledError>{errors.password}</StyledError>}
        <SubmitButton type="submit">CLAIM YOUR FREE TRIAL</SubmitButton>
      </Form>
      <Terms>
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and Services</span>
      </Terms>
    </SignUpSection>
  );
}

const SignUpSection = styled.section`
  padding: 1rem 2.4rem 2.4rem;
  background-color: #fff;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  @media only screen and (min-width: 90rem) {
    padding: 2.6rem 4rem 4rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 0.6rem;

  @media only screen and (min-width: 90rem) {
    gap: 0.6rem;
  }
`;
const StyledInput = styled.input`
  background: ${({ $error }) => {
    return $error ? "url(./images/icon-error.svg)" : "white";
  }};
  background-repeat: no-repeat;
  background-position: right 2.7rem top 50%;
  padding: 1.5rem 1.9rem;
  border: ${({ $error }) =>
    $error ? " solid 2px #ff7979;" : "solid 1px #dedede"};
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.86;
  letter-spacing: 0.25px;
  border-radius: 5px;
  color: "#3d3b48";
  &:focus {
    outline: none;
  }
  margin-top: 1.4rem;
`;

const StyledError = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  font-style: italic;
  text-align: right;
  color: #ff7979;
  margin-top: 0.6rem;
`;

const SubmitButton = styled.button`
  all: unset;
  padding: 1.5rem;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.73;
  letter-spacing: 1px;
  text-align: center;
  background-color: #38cc8b;
  color: #fff;
  border-radius: 5px;
  box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.09);
  margin-top: 1.4rem;

  &:hover,
  &:active {
    background-color: #77e2b3;
    cursor: pointer;
  }
`;

const Terms = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.91;
  text-align: center;
  color: #bab7d4;

  span {
    font-weight: bold;
    color: #ff7979;
  }
`;
