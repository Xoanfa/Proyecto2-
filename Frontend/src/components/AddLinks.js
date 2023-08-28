import React, { useState } from "react";
import { addLinkService } from "../services";
export const AddLinks = ({ addLink }) => {
  const [newLink, setNewLink] = useState({
    url: "",
    title: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleInputChange = (event) => {
    setNewLink({
      ...newLink,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not logged in");
      }
      const result = await addLinkService({ ...newLink, token });
      setNewLink({
        url: "",
        title: "",
        description: "",
      });
      addLink({ id: result.id, ...newLink });
      setSuccess("Your link has been added successfully");
      // Limpia el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h1>Add Links</h1>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Link Information</legend>
          <label>
            URL:
            <input
              type="text"
              name="url"
              placeholder="https://www.example.com"
              value={newLink.url}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newLink.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              placeholder="Description"
              value={newLink.description}
              onChange={handleInputChange}
              required
              rows="5"
              cols="50"
            />
          </label>
          <button type="submit" className="submit-button">
            Add Link
          </button>
        </fieldset>
      </form>
      {success && <p className="message-success">{success}</p>}
      {error && <p className="message-error">Error: {error}</p>}
    </section>
  );
};
