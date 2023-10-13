import { service } from "~/composables/api.ts";

export const getCaptchaApi = () => {
  return service({
    url: "/api/captcha",
    method: "GET",
  });
};
