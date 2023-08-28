import "../css/links.css";
import React, { useState, useEffect, useCallback } from "react";
import { getLinksService } from "../services";
import { DeleteLinks } from "./DeleteLinks";
import { VoteLinks } from "./VoteLinks";
import { useAuth } from "../context/AuthContext";
export const ViewLinks = ({
  userId,
  userLinks,
  links,
  setLinks,
  searchDate,
  setSearchDate,
}) => {
  console.log(setSearchDate);
  const [error, setError] = useState("");
  const handleSearchDateChange = (event) => {
    setSearchDate(event.target.value);
  };
  const fetchSearchLinks = useCallback(async () => {
    try {
      console.log("links actualizados");
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not logged in");
      }
      const data = await getLinksService(token, searchDate);
      setLinks(data);
    } catch (error) {
      setError(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchDate]);
  useEffect(() => {
    fetchSearchLinks();
  }, [searchDate, fetchSearchLinks]);
  const handleDelete = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };
  const handleVote = useCallback(() => {
    fetchSearchLinks();
  }, [fetchSearchLinks]);
  const { userid } = useAuth();
  return (
    <section>
      <h1>View Links</h1>
      <form>
        <label>
          Search by Date:
          <input
            type="date"
            value={searchDate}
            onChange={handleSearchDateChange}
          />
        </label>
      </form>
      <p>{console.log(links)}</p>
      {error ? (
        <p className="message-error">Error: {error}</p>
      ) : links === null ? null : links.length === 0 ? (
        <p className="message-error">No links found</p>
      ) : (
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <p>
                <strong>URL:</strong> <a href={link.url}>{link.url}</a>
              </p>
              <p>
                <strong>Title:</strong> {link.title}
              </p>
              <p>
                <strong>Description:</strong> {link.description}
              </p>
              <p>
                <strong>Votes:</strong> {link.votes}{" "}
              </p>
              <VoteLinks
                linkId={link.id}
                userId={userId}
                userLinks={userLinks}
                onVote={handleVote}
                liked={link.liked}
              />
              {+userid === link.userId && (
                <DeleteLinks id={link.id} onDelete={handleDelete} />
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};