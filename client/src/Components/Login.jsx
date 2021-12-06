import styled from "styled-components";
import React from "react";
import { useState } from "react";
import SignupModal from "./SignupModal";
const Login = () => {
  const [clickstatus, setclickstatus] = useState("close");
  const [usernamestate, setusername] = useState("");
  const [passwordstate, setpassword] = useState("");
  const buttonclickhandler = async (e) => {
    e.preventDefault();
    const logindetails = {
      username: usernamestate,
      password: passwordstate,
    };
    const response = await fetch("http://127.0.0.1:8000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logindetails),
    });
    const data = await response.json();
    console.log(data);
    if (data.accesstoken) {
      alert("login sucessfully");
      window.location.href = "/profile";
      localStorage.setItem("usertoken", data.accesstoken);
    } else alert("wrong credentials");
  };
  const clickhandler = (e) => {
    e.preventDefault();
    setclickstatus("open");
  };
  return (
    <div>
      <Nav>
        <Logo>
          <img src="/images/logo2.png" />
        </Logo>
        <span>
          <Join
            onClick={(e) => {
              clickhandler(e);
            }}
          >
            Signup
          </Join>
        </span>
      </Nav>
      <Main>
        <Intro>
          <span>
            Welcome To Auction <br />
            Happy bidding!
          </span>
        </Intro>
        <LoginCard>
          <div>
            <span>SignIn</span>
          </div>
          <Google>
            <img src="/images/google.png" />
            <span>Google</span>
          </Google>
          <form>
            <img src="/images/user.png" />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setusername(e.target.value)}
            />
            <img src="/images/padlock.png" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <button type="button" onClick={(e) => buttonclickhandler(e)}>
              Sign in
            </button>
          </form>
        </LoginCard>
      </Main>
      {clickstatus === "open" && (
        <SignupModal setclickstatus={setclickstatus} />
      )}
    </div>
  );
};
const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 0;
  & > span {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    height: 40px;
    margin-right: 10px;
  }
`;

const Logo = styled.div`
  & > img {
    width: 200px;
    height: 200px;
  }
`;
const Join = styled.button`
  width: 100px;
  border-radius: 25px;
  margin-right: 10px;
  border: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
  background-color: black;
  color: white;
`;
const Main = styled.div`
  /* http://www.pngmagic.com/product_images/black-&-white-background-picture1.jpg */
  height: 680px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
`;
const LoginCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  top: 0px;
  left: 25%;
  width: 450px;
  height: 500px;
  background-color: white;
  margin: auto;
  border-radius: 10px;
  @media (max-width: 900px) {
    left: 0;
    top: 80px;
  }
  & > div {
    width: 100%;
    background-color: white;
    height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid lightgray;
    span {
      font-size: 20px;
      font-weight: bolder;
      align-items: center;
      margin-left: 41%;
      color: #0c5cbc;
    }
    padding-top: 10px;
  }
  form {
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    input {
      height: 40px;
      width: 340px;
      margin: auto;
      padding-left: 60px;
    }
    img {
      width: 25px;
      height: 25px;
      position: relative;
      left: 30px;
      top: 35px;
      border-right: 2px solid black;
      padding-right: 1px;
    }
    button {
      height: 40px;
      width: 400px;
      margin: auto;
      margin-top: 30px;
      background-color: #0c5cbc;
      outline: none;
      border: none;
      color: white;
    }
  }
`;
const Google = styled.button`
  width: 400px;
  height: 40px;
  margin: auto;
  margin-top: 40px;
  margin-left: 24px;
  background-color: #c23320;
  outline: none;
  border: none;
  color: white;
  img {
    width: 27px;
    height: 27px;
    padding-top: 5px;
    position: relative;
    margin-right: 5px;
  }
  span {
    position: relative;
    bottom: 7px;
  }
`;
const Intro = styled.span`
  width: 400px;
  height: 500px;
  font-size: 4em;
  font-weight: bolder;
  position: absolute;
  left: 20px;
  & > span {
    position: absolute;
    padding-left: 10px;
    white-space: nowrap;
    @media (max-width: 1180px) {
      font-size: 30px;
    }
  }
`;
export default Login;
