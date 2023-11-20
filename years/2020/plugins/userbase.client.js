import userbase from "userbase-js";
userbase.init({ appId: "2b809cf0-62cd-440b-ae01-d220c76c0592" });
export default (context, inject) => {
    inject("userbase", userbase);
    context.$userbase = userbase;
};
