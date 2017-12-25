<template>
  <div id="app">
    <router-link to="/">Go to main page</router-link>
    <router-link to="/TodoList">Go to todo list</router-link>
    <router-view/>
  </div>
</template>

<script>
import TodoList from './components/todo-list'

export default {
  components: {
    TodoList
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
