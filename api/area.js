import { service } from "~/composables/api.ts";

export const getAreaApi = () => {
  return service({
    url: "/area",
    method: "GET",
  });
};
