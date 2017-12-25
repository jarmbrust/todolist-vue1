<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoList" :key="item.id"> {{ item }}, {{ index }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoListItem: ''
    }
  },
  computed: {
    todoList () {
      return this.$store.getters.todoList
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
