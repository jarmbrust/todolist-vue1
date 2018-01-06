<template>
  <div>
    <ul class="todo-items">
      <li class="list-item" v-for="(item, index) in todoList" :key="item.id"> {{ index }}: {{ item }}
        <button class="btn btn-secondary x-button" @click="completeItem(item)">X</button>
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
      this.$store.commit({
        type: 'REMOVE_TODO_ITEM',
        item: item
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  text-align: left;
}
.x-button {
  text-align: right;
  margin: 5px;
}
</style>
