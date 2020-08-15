import React from "react";
// Make sure you are passing a prop called username to the header
// Convert each function component to a class component.

// #1
function ConvertParent() {
  return (
    <div>
      <Header />
      <Greeting />
    </div>
  );
}

// #2
function Header(props) {
  return (
    <header>
      <p>Welcome, {props.username}!</p>
    </header>
  );
}

// #3
function Greeting() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }
  return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
}

export default ConvertParent;
