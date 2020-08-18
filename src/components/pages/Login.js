import React, { useState } from "react";
import axios from "axios";
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner
} from "components/common";
import styled from "styled-components";
import setAuthToken from "../../utils/setAuthToken";
const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
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

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function Login() {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

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

    async function getData() {
      const url = "https://arcane-oasis-30423.herokuapp.com/users/register";
      // const url = "https://go0oc.sse.codesandbox.io/users/register";
      console.log(formFields);
      const response = await axios.post(url, formFields);
      console.log(JSON.stringify(response.data.token));
    }
    getData();
    setLoading(false);
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
              placeholder="Username"
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
            <Button secondary type="buttom">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
}
