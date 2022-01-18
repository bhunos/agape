import { v4 as uuid } from 'uuid'

type SigninInRequestData = {
  email: string
  password: string
}

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SigninInRequestData) {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Bruno Correia',
      email: 'bhuno.souzaa@gmail.com',
      avatar_url: 'https://avatars.githubusercontent.com/u/69815136?v=4'
    }
  }
}

export async function recoverUserInformation() {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Bruno Correia',
      email: 'bhuno.souzaa@gmail.com',
      avatar_url: 'https://avatars.githubusercontent.com/u/69815136?v=4'
    }
  }
}
