import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { register, login } from "../../actions/auth";
import store from "../../store";
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner
} from "components/common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: whitesmoke;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }
`;

export default function Login() {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const me = useSelector((state) => state.auth.isMe);

  function handleInputChange(e) {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    store.dispatch(login(formFields));
    setLoading(false);
  }

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    store.dispatch(register(formFields));
    setLoading(false);
  }

  if (isAuthenticated && !me) {
    return <Redirect to="/notes" />;
  }

  if (isAuthenticated && me) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              name="name"
              placeholder="Username - To Register"
              onChange={handleInputChange}
              value={formFields.username}
              type="text"
            />
            <Input
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={formFields.email}
              type="email"
            />

            <PasswordInput
              name="password"
              onChange={handleInputChange}
              value={formFields.password}
            />
          </>
        )}

        <Button large type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="buttom" onClick={handleRegister}>
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
}
