import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
const BiddingRoom = (props) => {
  const [message, setmessage] = useState("");
  const [chats, setchats] = useState([]);
  const [showsold, setshowsold] = useState(false);
  const [timer, settimer] = useState(60);
  const sendmessage = (e) => {
    e.preventDefault();
    const messagedetails = {
      message: message,
      room: props.Room,
      author: undefined,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };
    props.socket.emit("message", messagedetails);
    setchats((list) => [...list, message]);
    setmessage("");
  };
  // const getmaxbid = async () => {
  //   console.log("sajkdhkjasdhjk");
  //   try {
  //     await fetch("http://localhost:8000/getmaxbid", {
  //       method: "POST",
  //       mode:"no-cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: props.currentitem.title,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("*********", data);
  //         setmaxbid(data.maxbid);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    props.socket.on("recieve_message", (data) => {
      setchats((list) => [...list, data.message]);
    });
  }, []);
  const countertime = () => {
    setInterval(() => {
      if (timer === 0) {
        setshowsold(true);
      }
      if (timer > 0) settimer(timer - 1);
    }, 1000);
  };
  useEffect(() => {
    countertime();
  }, [timer]);
  return (
    <div>
      <Container>
        <Sidebar>
          <ItemDetails>
            <span
              style={{
                fontSize: "40px",
                textAlign: "center",
                position: "relative",
                bottom: "20px",
              }}
            >
              {timer}
            </span>
            <span>
              <img
                src={props.currentitem.displayPicture}
                style={{
                  width: "200px",
                  height: "200px",
                  marginLeft: "30px",
                }}
              />
              <span
                style={{
                  margin: "auto",
                  fontWeight: "bold",
                  paddingLeft: "30px",
                }}
              >
                {props.currentitem.title}
              </span>
              <span></span>
            </span>
            <span>Opening Bid : {props.currentitem.OpeningBid}</span>
          </ItemDetails>
          <Users>{showsold ? <span>Sold</span> : <span>UnSold</span>}</Users>
        </Sidebar>
        <Chats>
          <ChatArea>
            {chats.map((item) => {
              return <span>{`${item}$`}</span>;
            })}
          </ChatArea>
          <SendingArea>
            <input
              type="number"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
            <button type="button" onClick={(e) => sendmessage(e)}>
              Send
            </button>
            <AmtButtons>
              <button
                onClick={() => {
                  setmessage(parseInt(message) + 500);
                }}
              >
                +500
              </button>
              <button
                onClick={() => {
                  setmessage(parseInt(message) + 2000);
                }}
              >
                +2000
              </button>
              <button
                onClick={() => {
                  setmessage(parseInt(message) + 5000);
                }}
              >
                +5000
              </button>
            </AmtButtons>
          </SendingArea>
        </Chats>
      </Container>
    </div>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: row;
  margin-top: 150px;
  background: #f3f2ee;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 20px;
`;
const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 90%;
  margin-top: 25px;
  margin-left: 1.2vw;
  background-color: white;
`;
const AmtButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  margin-left: 50px;
`;
const SendingArea = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  /* background-color: white; */
  height: 40px;
  input {
    height: 90%;
    width: 50%;
    outline: none;
    border: none;
    background-color: white;
  }
  button {
    width: 150px;
    height: 90%;
    outline: none;
    border: none;
    background-color: lightgrey;
    margin-left: 10px;
  }
`;
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
`;
const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  background: white;
  height: 90%;
  gap: 10px;
  margin-right: 10px;
  span:first-child {
    margin-top: 20px;
  }
  span {
    height: 30px;
    width: 80%;
    background-color: lightblue;
    border-radius: 10px;
    padding-left: 10px;
    padding-top: 5px;
    margin-left: 20px;
  }
`;
const Users = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    margin-bottom: 40px;
    margin-left: 40%;
    font-weight: bold;
  }
`;
const Chats = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export default BiddingRoom;
