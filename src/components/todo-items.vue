<template>
  <div>
    <ul>
      <li>list</li>
      <li v-for="(item, index) in todoList" :key="item.id"> {{ item }}, {{ index }}
        <button @click="completeItem(item)">X</button>
      </li>
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
  },
  methods: {
    completeItem (item) {
      console.log('hi')
      this.$store.commit({
        type: 'REMOVE_TODO_ITEM',
        item: item
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
