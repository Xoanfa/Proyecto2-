const BACKEND_URL = process.env.REACT_APP_BACKEND;
export const registerUserService = async ({ name, email, password }) => {
  const response = await fetch(`${BACKEND_URL}/register`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};
export const getUserDataService = async (token) => {
  const response = await fetch(`${BACKEND_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};
export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${BACKEND_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Invalid email or password");
  }
  const json = await response.json();
  return json;
};
export const logOutUserService = async (token) => {
  const response = await fetch(`${BACKEND_URL}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (!response.ok) {
    throw new Error("Error logging out");
  }
  const json = await response.json();
  return json;
};
export const getLinksService = async (token, date) => {
  const url = `${BACKEND_URL}/links?date=${date}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Error: ${message}`);
  }
  const json = await response.json();
  return json;
};
export const addLinkService = async ({ token, ...linkData }) => {
  const response = await fetch(`${BACKEND_URL}/links`, {
    method: "POST",
    body: JSON.stringify(linkData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // Comprobación de estado
  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Error: ${message}`);
  }
  const json = await response.json();
  return json;
};
export const deleteLinkService = async (token, id) => {
  const response = await fetch(`${BACKEND_URL}/links/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Could not delete link.");
  }
  return response.json();
};
export const updateUserService = async ({ name, email, password, token }) => {
  const response = await fetch(`${BACKEND_URL}/users`, {
    method: "PUT",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};
export const voteLinkService = async (token, linkId) => {
  const response = await fetch(`${BACKEND_URL}/links/${linkId}/vote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Error al votar por el enlace");
  }
  const json = await response.json();
  return json;
};
export const deleteUserAccountService = async ({ userId, password, token }) => {
  // Comprobación añadida
  if (userId === null) {
    throw new Error("userId no puede ser null");
  }
  const response = await fetch(`${BACKEND_URL}/users/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }), // Agrega esta línea para incluir la contraseña en el cuerpo de la solicitud
  });
  if (!response.ok) {
    const json = await response.json();
    throw new Error(json.message || "Hubo un problema al eliminar la cuenta");
  }
  // Considera añadir un retorno de algo específico (como true) si la eliminación fue exitosa
  return response.ok;
};








