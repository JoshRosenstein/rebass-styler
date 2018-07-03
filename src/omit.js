import { reduce, is, curryN, attach, empty } from "@roseys/futils"

const omitKey = (key, keyedList) =>
  reduce(
    (accumulated, value, k) =>
      key === k ? accumulated : attach(k, value, accumulated),
    empty(keyedList),
    keyedList
  )

export const omit = curryN(2, (keys, obj) => {
  if (is("String", keys)) {
    keys = keys.trim().split(",")
  }
  if (!Array.isArray(keys)) return obj

  return reduce((acc, key) => omitKey(key, acc), obj, keys)
})

export default omit
