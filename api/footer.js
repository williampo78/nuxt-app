import { service } from "~/composables/api.ts";

export const getFooterInfoApi = () => {
  return service({
    url: "/v1/footer",
    method: "GET",
  });
};
