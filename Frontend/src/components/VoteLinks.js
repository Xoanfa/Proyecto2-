/* import React, { useState, useCallback, useEffect } from "react";
import { voteLinkService } from "../services";
import { useAuth } from "../context/AuthContext";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"; // importando los íconos
export const VoteLinks = ({ linkId, userLinks, onVote, liked }) => {
  const { userid: userId } = useAuth();
  const initialVotes =
    JSON.parse(localStorage.getItem(`votes_${userId}`)) || {};
  const [votes, setVotes] = useState(initialVotes);
  const initialVoteStatus = votes[linkId] || false;
  const [voteStatus, setVoteStatus] = useState(initialVoteStatus);
  useEffect(() => {
    onVote && onVote(voteStatus);
    localStorage.setItem(`votes_${userId}`, JSON.stringify(votes));
  }, [voteStatus, onVote, userId, votes]);
  const checkUserLink = useCallback(() => {
    return (userLinks || []).some((link) => link.id === linkId);
  }, [linkId, userLinks]);
  const handleVote = async () => {
    if (checkUserLink()) {
      alert("No puedes votar tus propios enlaces");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not logged in");
      }
      const response = await voteLinkService(token, linkId);
      if (
        response.message === "Vote added successfully" ||
        response.message === "Vote removed successfully"
      ) {
        const newVoteStatus = !voteStatus;
        setVoteStatus(newVoteStatus);
        setVotes((prevVotes) => ({
          ...prevVotes,
          [linkId]: newVoteStatus,
        }));
        alert(response.message);
      } else {
        throw new Error("Error voting for link");
      }
    } catch (error) {
      console.error("Error voting for link: ", error.message);
    }
  };
  return (
    <button onClick={handleVote} disabled={checkUserLink()}>
      {voteStatus ? <FaThumbsDown /> : <FaThumbsUp />} 
      {voteStatus ? "Eliminar voto" : "Votar"}
    </button>
  );
};

 */

import React, { useState, useCallback, useEffect } from "react";
import { voteLinkService } from "../services";
import { useAuth } from "../context/AuthContext";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"; // importando los íconos
export const VoteLinks = ({ linkId, userLinks, onVote, liked }) => {
  const { userid: userId } = useAuth();
  const initialVotes =
    JSON.parse(localStorage.getItem(`votes_${userId}`)) || {};
  const [votes, setVotes] = useState(initialVotes);
  const initialVoteStatus = votes[linkId] || false;
  const [voteStatus, setVoteStatus] = useState(initialVoteStatus);
  useEffect(() => {
    onVote && onVote(voteStatus);
    localStorage.setItem(`votes_${userId}`, JSON.stringify(votes));
  }, [voteStatus, onVote, userId, votes]);
  const checkUserLink = useCallback(() => {
    return (userLinks || []).some((link) => link.id === linkId);
  }, [linkId, userLinks]);
  const handleVote = async () => {
    if (checkUserLink()) {
      alert("You can't vote your own links");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not logged in");
      }
      const response = await voteLinkService(token, linkId);
      if (
        response.message === "Vote added successfully" ||
        response.message === "Vote removed successfully"
      ) {
        const newVoteStatus = !voteStatus;
        setVoteStatus(newVoteStatus);
        setVotes((prevVotes) => ({
          ...prevVotes,
          [linkId]: newVoteStatus,
        }));
        alert(response.message);
      } else {
        throw new Error("Error voting for link");
      }
    } catch (error) {
      console.error("Error voting for link: ", error.message);
    }
  };
  return (
    <button onClick={handleVote} disabled={checkUserLink()}>
      {voteStatus ? <FaThumbsDown /> : <FaThumbsUp />} {/* Usando los íconos */}
      {voteStatus ? "Delete Vote" : "Vote"}
    </button>
  );
};
