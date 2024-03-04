import { service } from "~/composables/api.ts";

export const getFooterListApi = () => {
  return service({
    url: "/v1/footer",
    method: "GET",
  });
};
export const getFooterContentApi = (id) => {
  return service({
    url: `/v1/footer/${id}`,
    method: "GET",
  });
};
