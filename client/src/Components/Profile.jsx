import React from "react";
import styled from "styled-components";
import data from "../data.json";
const Profile = () => {
  return (
    <div style={{ background: "#F3F2EE", height: "260vh" }}>
      <Navbar>
        <Logo>
          <img src="/images/logo.jpeg" alt="logo" />
        </Logo>
        <User>
          <img src="/images/profile.png" />
          <span>Aman panwar</span>
          <Logout>Logout</Logout>
        </User>
      </Navbar>
      <Container>
        {data.arr.map((item) => {
          return (
            <Card>
              <img src={item.displayPicture} />
              <CardDetails>
                <span>{item.title}</span>
                <span>{item.description}</span>
                <span>Opening Price : {item.OpeningBid}</span>
                <span>
                  Status: <span>active</span>
                </span>
                <div>
                  <span>Current Participants : 0</span>
                  <Bid>Bid</Bid>
                </div>
              </CardDetails>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};
const CardDetails = styled.div`
  background-color: white;
  width: 78%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > span {
    padding-left: 10px;
  }
  span:first-child {
    padding-top: 5px;
    font-size: 18px;
    font-weight: bolder;
  }
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
      background-color: rgb(255, 246, 158);
      margin-left: 5px;
      width: 25%;
      padding-top: 5px;
      text-align: center;
    }
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 170px;
  margin: auto;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    height: 100%;
    width: 22%;
  }
`;
const Navbar = styled.nav`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: space-between;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
`;
const Logo = styled.div`
  & > img {
    width: 200px;
    height: 100px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  position: absolute;
  top: 150px;
`;
const Logout = styled.button`
  margin-left: 100px;
  position: relative;
  right: 20px;
  bottom: 13px;
  width: 90px;
  border-radius: 25px;
  height: 40px;
  margin-right: 10px;
  border: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
  background-color: black;
  color: white;
  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
    left: 0;
  }
`;
const User = styled.div`
  & > img {
    width: 40px;
    height: 40px;
  }
  margin-top: 30px;
  span {
    position: relative;
    bottom: 12px;
    left: 5px;
    font-size: 18px;
    font-weight: bold;
  }
`;
const Bid = styled.button`
  border: none;
  outline: none;
  background-color: #34a2dd;
  height: 40px;
  width: 50%;
`;
export default Profile;
