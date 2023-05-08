import {createStore} from 'vuex'

const userInfo = {
	
}

const store = createStore({
  state () {
    return {
      userInfo
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store