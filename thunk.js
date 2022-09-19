const getAlarm = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('alarm')
    }, 1000)
  })
}
const alarmThunk = () => {
  return (dispatch, getState) => {
    getAlarm().then((alarm) => {
      dispatch({ type: 'ALARM', alarm })
    })
  }
}
console.log(alarmThunk())
console.log(getAlarm())
