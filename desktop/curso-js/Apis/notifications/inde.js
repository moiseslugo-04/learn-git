/************************************
 ***    Notifications  Api        ***
 ************************************/

if (Notification !== 'granted') {
  Notification.requestPermission((permission) => {
    if (permission == 'granted') {
      notification()
    }
  })
} else {
  console.log('permission denied')
}
function notification() {
  const notification = new Notification('name', { body: 'this is a example' })
  notification.onclick = () => {
    this.close()
  }
}
