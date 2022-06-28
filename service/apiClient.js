import axios from "axios";
let basePath =
  process.env.STRAPI_SERVER_PATH || process.env.NEXT_PUBLIC_STRAPI_SERVER_PATH;

const axiosInstance = axios.create({ baseURL: basePath });
console.log("patyh",basePath)
// get request
const getRequest = async (endpoint) => {
  try {
    let response = await axiosInstance.get(`${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// post request
const postRequest = async (endpoint, body) => {
  try {
    let options = {
      method: "post",
      Headers: {
        "Content-Type": "application/json",
      },
      url: endpoint,
      data: body,
    };
    return await axiosInstance(options);
  } catch (error) {
    console.error(error);
  }
};

const postFormData = async (endpoint, body) => {
  try {
    return await axiosInstance({
      method: "post",
      url: endpoint,
      data: body,
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.error(error);
  }
};

export { getRequest, postRequest, postFormData, axiosInstance };
