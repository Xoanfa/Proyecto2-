import React from "react";
import { deleteLinkService } from "../services";
import { FaTrash } from "react-icons/fa";
export const DeleteLinks = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not logged in");
      }
      await deleteLinkService(token, id);
      onDelete(id);
      // Agrega un popup con el mensaje "Link deleted"
      window.alert("Link deleted");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <button onClick={handleDelete}>
      <FaTrash /> Delete
    </button>
  );
};
