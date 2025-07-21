import { makeQi } from './makeQi'

export const qi = makeQi({
  h1: 'text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-2',
  button: 'rounded bg-indigo-500 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
  'stretched-link': 'after:absolute after:inset-0',
  center: 'grid text-center m-auto w-10/12 h-screen px-4 text-sm text-gray-500 place-content-center',
})
