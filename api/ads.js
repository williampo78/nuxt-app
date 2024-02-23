import { service } from "~/composables/api.ts";

export const getAdsApi = () => {
  return service({
    url: "/v1/ad_slots",
    method: "GET",
  });
};
