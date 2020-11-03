// 防抖


// 节流
export function _throttle(fn, delay, isDebounce) {
  let timer
  let lastCall = 0
  return function (...args) {
    if (isDebounce) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, delay)
    } else {
      const now = new Date().getTime()
      if (now - lastCall < delay) return
      lastCall = now
      fn(...args)
    }
  }

}