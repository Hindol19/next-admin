import axios from "axios";

export const fetchDataFromApi = async (query) => {
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/" + query);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
