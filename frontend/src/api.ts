const API = "http://localhost:3000";

export const getItems = async () => {

  const res = await fetch(`${API}/items`);
  return res.json();
};

export const addItem = async (name: string) => {

  const res = await fetch(`${API}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  });
  return res.json();
};

export const toggleItem = async (id: string, bought: boolean) => {
  return fetch(`${API}/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ bought })
  });
};

export const deleteItem = async (id: string) => {
  return fetch(`${API}/items/${id}`, {
    method: "DELETE"
  });
};