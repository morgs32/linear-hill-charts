import { okrs } from 'okrs';

export async function handleRes(res: Response): Promise<okrs.Either> {
  let error = await res.text();
  try {
    error = JSON.parse(error);
  } catch {
    // noop
  }
  return okrs.fail(JSON.stringify(error, null, 2), {
    status: res.status,
  });
}
