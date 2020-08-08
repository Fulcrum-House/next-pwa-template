declare global {
  interface Window {
    isLight: boolean
  }
}

const isServer = typeof window === 'undefined'

export function getLightMode() {
  if (!isServer) {
    return window.isLight
  }
  return false
}

export function toggleLightMode(value: boolean) {
  if (value) {
    try {
      window.localStorage.setItem('light-mode', '1')
      document.querySelector('html').classList.add('light')
      window.isLight = true
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Unable to update theme', err)
    }
  } else {
    try {
      window.localStorage.removeItem('light-mode')
      document.querySelector('html').classList.remove('light')
      window.isLight = false
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Unable to update theme', err)
    }
  }
}
