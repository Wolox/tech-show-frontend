import { getBooks } from '@/service/BookService'

const INITIAL_STATE = {
  books: [],
  filter: ''
}

const books = {
  namespaced: true,

  state: INITIAL_STATE,

  actions: {
    async getBooks ({ commit }) {
      const response = await getBooks()
      commit('GET_BOOKS', { books: response.data })
    },
    changeFilter ({ commit }, event) {
      commit('CHANGE_FILTER', event.target.value)
    }
  },
  getters: {
    filteredBooks: state => state.books.filter(book => book.title.toLowerCase().includes(state.filter.toLowerCase()))
  },
  mutations: {
    GET_BOOKS (state, payload) {
      state.books = payload.books
    },
    CHANGE_FILTER (state, payload) {
      state.filter = payload
    }
  }
}

export default books
