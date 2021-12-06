import React from "react";
import styled from "styled-components";
import { useState } from "react";
export default function SignupModal(props) {
  const [usernamestate, setusername] = useState("");
  const [passwordstate, setpassword] = useState("");
  const [confirm_passwordstate, setconfirm_password] = useState("");
  const onclickbutton = async (e) => {
    const signupdetails = {
      username: usernamestate,
      password: passwordstate,
      confirm_password: confirm_passwordstate,
    };
    console.log(signupdetails);
    e.preventDefault();
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupdetails),
    });
    props.setclickstatus("close");
  };
  return (
    <div>
      <Container>
        <ModalCard>
          <div>
            <span>Signup</span>
            <img
              src="/images/close.png"
              onClick={() => {
                props.setclickstatus("close");
              }}
            />
          </div>
          <form>
            <img src="/images/user.png" />
            <input
              type="text"
              placeholder="Email/Username"
              onChange={(e) => setusername(e.target.value)}
            />
            <img src="/images/padlock.png" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <img src="/images/padlock.png" />
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setconfirm_password(e.target.value)}
            />
            <button type="button" onClick={(e) => onclickbutton(e)}>
              Signup
            </button>
          </form>
        </ModalCard>
      </Container>
    </div>
  );
}
const Container = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
const ModalCard = styled.div`
  transition: width 2s, height 2s, transform 2s;
  width: 450px;
  height: 500px;
  background-color: white;
  position: relative;
  margin: auto;
  top: 20%;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  & > div > img {
    width: 25px;
    height: 25px;
    position: relative;
    z-index: 1;
    left: 178px;
    top: -12px;
  }
  & > div {
    width: 100%;
    border-bottom: 1px solid lightgrey;
    height: 50px;
  }
  & > div > span {
    margin-left: 41%;
    font-weight: bolder;
    width: 150px;
    font-size: 22px;
    color: #0c5cbc;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    input {
      width: 85%;
      height: 40px;
      margin: auto;
      padding-left: 50px;
    }
    button {
      width: 98%;
      height: 40px;
      margin: auto;
      margin-top: 10px;
      font-weight: bold;
      background-color: #c23320;
      color: white;
      border: none;
      outline: none;
    }
    img {
      width: 25px;
      height: 25px;
      position: relative;
      left: 10px;
      top: 35px;
      border-right: 2px solid black;
      padding-right: 1px;
      margin-right: 5px;
    }
  }
`;
