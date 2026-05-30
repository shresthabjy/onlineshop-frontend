import { request } from "./api";

const apiName= "categoryapi";
export const categoryService = {
  getAll: () =>
    request(apiName),

  getById: (id) =>
    request(`${apiName}/${id}`),

  create: (data) =>
    request(apiName, {
      method: "POST",
      body: JSON.stringify(data)
    }),

  update: (id, data) =>
    request(`${apiName}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    }),

  delete: (id) =>
    request(`${apiName}/${id}`, {
      method: "DELETE"
    }),
};