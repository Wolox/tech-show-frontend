<template lang="pug">
  .book-container
    img.book-image(:src="book.img" :alt="book.title")
    h4.book-title
      | {{ book.title }}
    span.book-author
      | {{ book.author }}
</template>

<script>
export default {
  name: 'Book',
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.book-container {
  align-items: start;
  background-color: white;
  box-shadow: 3px 4px 5px 0px rgba(100, 100, 100, 0.8);
  display: flex;
  flex-direction: column;
  height: 315px;
  padding: 20px;
  width: 100%;
}

.book-image {
  height: 75%;
  margin-bottom: 20px;
  object-fit: contain;
  object-position: top;
  width: 100%;
}

.book-title {
  font-weight: 600;
  margin-bottom: 10px;
  text-align: start;
}
</style>
