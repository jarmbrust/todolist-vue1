<template>
    <div class="input-field">
        <input type="text" v-model="listItem" /><button @click="addItem" class="enter-button btn btn-primary">Add Item</button>
        <div> typed: {{ listItem }} </div>
    </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      listItem: ''
    }
  },
  methods: {
    addItem () {
      this.$store.commit({
        type: 'SET_TODO_ITEM',
        item: this.listItem
      })
      this.listItem = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-field {
    margin: 10px;
  }
  .enter-button {
    margin: 20px;
  }
</style>
