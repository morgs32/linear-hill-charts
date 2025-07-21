import { handleRes } from 'lhc/src/utils/handleRes'
import { okrs } from 'okrs'
import { z } from 'zod'

const linearAuth = {
  access_token: '00a21d8b0c4e2375114e49c067dfb81eb0d2076f48354714cd5df984d87b67cc',
  token_type: 'Bearer',
  expires_in: 315705599,
  scope: ['read', 'write'],
};

type ILinearAuth = typeof linearAuth;

interface IProps {
  code: string
  redirect_uri: string
}

export async function getLinearAuth(props: IProps) {

  const {
    redirect_uri,
    code,
  } = props

  // Exchange "code" for an access token
  const linearUrl = new URL('https://api.linear.app/oauth/token');
  const formBody = new URLSearchParams()
  formBody.append('code', code);
  formBody.append('client_id', z.string().parse(process.env.NEXT_PUBLIC_LINEAR_CLIENT_ID));
  formBody.append('client_secret', z.string().parse(process.env.LINEAR_CLIENT_SECRET));
  formBody.append('redirect_uri', redirect_uri);
  formBody.append('grant_type', 'authorization_code');
  return okrs.strict(async () => {
    const res = await fetch(linearUrl.href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    });
    if (!res.ok) throw handleRes(res);
    return (await res.json()) as ILinearAuth;
  })

}
