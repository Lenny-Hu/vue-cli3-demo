import _ from 'lodash'
import jsCookie from 'js-cookie'

const utils = {
  getUserFromLocal () {
    let user = jsCookie.get('user')
    try {
      if (user) user = JSON.parse(user)
    } catch (error) {
      this.delUserFromLocal()
    }
    if (user && user._id) {
      return _.cloneDeep(user)
    } else {
      return {}
    }
  },
  delUserFromLocal () {
    jsCookie.remove('user')
  }
}
export default utils
