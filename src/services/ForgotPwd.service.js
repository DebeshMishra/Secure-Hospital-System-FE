const axios = require("axios");

const SERVER_URL = "http://localhost:8080";

export const requestOTP = async (data) => {
  const response = await axios.post(
    SERVER_URL + "/api/auth/forgotpassword",
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

export const confirmOTP = async (data) => {
  const response = await axios.post(
    SERVER_URL + "/api/auth/forgotpassword/confirmotp",
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
