export const getUsers = async (limit?: number) => {
  try {
    const params = new URLSearchParams();
    if (limit) {
      params.append("_limit", limit.toString());
    }

    console.log(`http://localhost:3000/users?${params.toString()}`);

    const response = await fetch(
      `http://localhost:3000/users?${params.toString()}`
    ).then((resp) => resp.json());

    return response;
  } catch (error) {
    console.error("Failed to fetch items:", error);
    throw error;
  }
};
