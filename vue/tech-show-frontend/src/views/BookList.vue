<template lang="pug">
  .book-list-container
    input.book-filter-input(type="text" @input="changeFilter" :value="filter")
    .book-list
      book(v-for="book in filteredBooks" :key="book.id" :book="book")
</template>

<script>
import Book from '@/components/Book'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'BookList',
  components: {
    Book
  },
  methods: {
    ...mapActions({
      getBooks: 'books/getBooks',
      changeFilter: 'books/changeFilter'
    })
  },
  computed: {
    ...mapState({
      books: state => state.books.books,
      filter: state => state.books.filter
    }),
    ...mapGetters({
      filteredBooks: 'books/filteredBooks'
    })
  },
  mounted () {
    this.getBooks()
  }
}
</script>

<style lang="scss" scoped>
.book-list-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 30px 300px;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  justify-content: space-between;
  gap: 20px 30px;
  padding: 50px 0;
}

.book-filter-input {
  align-self: center;
  font-size: 20px;
  height: 50px;
  line-height: 20px;
  min-height: 50px;
  padding: 15px;
  width: 70%
}
</style>
