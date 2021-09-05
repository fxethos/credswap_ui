import axios from "axios";

const host = new URL("https://credaccess.web.app/");
const endpoints = {
  generateOTP: "auth/generateOtp", //POST - phone (string)
  verifyOTP: "auth/verifyOtp", // POST - token (string), otp (string)
  createUser: "profile", //POST - first_name, last_name, email
  getUser: "profile", //GET
  burn: "profile/coins/burn", // POST - coins (int)
};
const headers = {
  "content-type": "application/json",
  "credaccess-secret-key": '04202d1c89149110aa62e5e326a9761a',
};

export let userphoneno = "";

export const authUser = async (phoneNumber) => {
  host.pathname = endpoints.generateOTP;
  let data = { phone: phoneNumber };
  userphoneno = phoneNumber;
  try {
    const token = (await axios.post(host.href, data, { headers })).data.token;
    host.pathname = endpoints.verifyOTP;
    data = { token: token, otp: "1234" };
    const access_token = (await axios.post(host.href, data, { headers })).data
      .access_token;
    headers["credaccess-access-token"] = access_token;
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const createUser = async (userInfo) => {
  host.pathname = endpoints.createUser;
  try {
    const data = (await axios.post(host.href, userInfo, { headers })).data;
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getUser = async () => {
  host.pathname = endpoints.getUser;
  try {
    const data = (await axios.get(host.href, { headers })).data;
    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const spend = async(coins) => {
  host.pathname = endpoints.burn;
  try {
    const data = (await axios.post(host.href, {coins}, { headers })).data;
    console.log("spend() =>", data);
    return data;
  } catch(err) {
    console.log(err);
  }
}
