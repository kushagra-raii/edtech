import axios from "axios";

export const axiosInstance = axios.create({});

interface ApiConnectorArgs {
    method: string;
    url: string;
    bodyData?: any;
    headers?: any;
    params?: any;
  }

export const apiConnector = ({method, url, bodyData, headers, params}:ApiConnectorArgs) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
