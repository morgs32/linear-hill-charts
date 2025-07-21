import { auth } from '@clerk/nextjs';
import { okrs } from 'okrs';


export function requireAuth() {
  const _auth = auth();
  if (!_auth.userId) {
    throw okrs.fail('You must be logged in to view this page');
  }
  return _auth;
}
