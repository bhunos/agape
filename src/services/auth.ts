import { v4 as uuid } from "uuid";

type SigninInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: SigninInRequestData) {
  await delay();

  return {
    token: uuid(),
    URL: "https://api.agapeoc.com.br/",
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
    token: uuid(),
    URL: "https://api.agapeoc.com.br/",
  };
}
