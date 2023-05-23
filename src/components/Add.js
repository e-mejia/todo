import React from "react";

const out = addtodo.map((item) => (
  <div className="list" key={item.id}>
    <h2 className="text">{item.text}</h2>
    {/* <RiDeleteBin6Line onClick={() => handleDelete(item.id)} */} />
  </div>
));

export default function Add() {
  return <div>{out}</div>;
}
