<template>
  <div>
    <todo-input></todo-input>
    <todo-items></todo-items>
  </div>
</template>

<script>
import TodoInput from './todo-input'
import TodoItems from './todo-items'

export default {
  components: {
    TodoInput,
    TodoItems
  },
  name: 'TodoList'
}
</script>

<style lang="scss" scoped>

</style>
