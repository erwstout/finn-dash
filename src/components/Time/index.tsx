import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 100;
  font-size: 8rem;
  padding: 2rem 1rem;
`;

const Date = styled.div`
  font-size: 2rem;
`;

const getTime = () => moment().tz("America/Chicago").format("h:mm A");
const getDate = () => moment().tz("America/Chicago").format("MMMM Do YYYY");

export const Time = () => {
  const [time, setTime] = useState(getTime());

  const [date, setDate] = useState(getDate());

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setDate(moment().tz("America/Chicago").format("MMMM Do YYYY"));
    }, 10000);
  }, []);

  return (
    <Container>
      <div>{time}</div>
      <Date>{date}</Date>
    </Container>
  );
};
