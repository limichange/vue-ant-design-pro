export default {
  login () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'adsf'
        })
      }, 1000)
    })
  },
  logout () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }
}
