import { service } from "~/composables/api.ts";

export const getCaptchaApi = () => {
  return service({
    url: "/captcha",
    method: "GET",
  });
};
