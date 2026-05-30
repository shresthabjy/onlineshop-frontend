import { request } from "./api";

const apiName= "productapi";
export const productService = {
  getAll: () =>
    request(apiName),

  getById: (id) =>
    request(`${apiName}/${id}`),

  create: (data) =>
    request(apiName, {
      method: "POST",
      body: data
    }),

  update: (id, data) =>
    request(`${apiName}/${id}`, {
      method: "PUT",
      body: data
    }),

  delete: (id) =>
    request(`${apiName}/${id}`, {
      method: "DELETE"
    }),
};