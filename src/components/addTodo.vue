<template>
  <div class="add-todo">
    <form @submit="handleSubmit">
      <input type="text" v-model="item">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      item: ''
    }
  },

  methods: {
    ...mapActions(['addTodo']),
    handleSubmit(e) {
      e.preventDefault();
      this.addTodo(this.item);
      this.item = '';
    }
  },
}
</script>
