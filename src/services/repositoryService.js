import api from "./services/api";

const getRepositories = () => {
  return api.get("repositories", (response) => response.data);
};
