import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

export default function Todolist({ value, onDelete, onEdit }) {
  const out = value.map((item) => (
    <div className="list" key={item.id}>
      <h3 className="text">{item.text}</h3>
      <div className="icon-container">
        <GrEdit onClick={() => onEdit(item.id)} className="edit" />
        <RiDeleteBin6Line
          onClick={() => onDelete(item.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));

  return (
    <div>
      <h3>{out}</h3>
    </div>
  );
}
