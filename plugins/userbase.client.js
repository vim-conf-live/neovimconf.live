import userbase from "userbase-js";

export default (context, inject) => {
  userbase.init({ appId: context.$config.userbase.appId });
  inject("userbase", userbase);
  context.$userbase = userbase;
};
