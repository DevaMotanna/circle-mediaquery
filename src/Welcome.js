import React from "react";

export function Welcome(props) {
  console.log(props);
  return (
    <h1>
      Welcome {props.name} {props.age}
    </h1>
  );
}
