<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <todo-input></todo-input>
        <todo-items></todo-items>
      </div>
      <div class="col"></div>
     </div>
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
.todo-list-container {
  max-width: 500px;
}

</style>
