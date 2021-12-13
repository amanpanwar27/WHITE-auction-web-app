import styled from "styled-components";
import React from "react";
const BidCard = (props) => {
  const Bidclickhandler = (e) => {
    e.preventDefault();
    props.setRoom(props.item.title);
    props.socket.emit("join_room", props.item.title);
    props.setshowchats(true);
  };
  return (
    <Card>
      <img src={props.item.displayPicture} />
      <CardDetails>
        <span>{props.item.title}</span>
        <span>{props.item.description}</span>
        <span>Opening Price : {props.item.OpeningBid}</span>
        <span>
          Status: <span>active</span>
        </span>
        <div>
          <span>Current Participants : 0</span>
          <Bid onClick={(e) => Bidclickhandler(e)}>Bid</Bid>
        </div>
      </CardDetails>
    </Card>
  );
};
const Bid = styled.button`
  border: none;
  outline: none;
  background-color: #34a2dd;
  height: 40px;
  width: 50%;
  font-weight: bold;
  font-size: 18px;
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
export default BidCard;
