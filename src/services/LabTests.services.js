import { SERVER_URL } from "../helpers/Constants";

const axios = require("axios");


export const getAllLabTests = async () => {
  const response = await axios.get(SERVER_URL + "/api/lab/getAllLabTests", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const createLabTest = async (data) => {
  const response = await axios.post(
    SERVER_URL + "/api/lab/createLabTest",
    data,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const getLabTestByName = async () => {
  const response = await axios.get(SERVER_URL + "/api/lab/getLabTestByName", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response;
};
