<template>
  <div class="home">
    <AddTodo/>
    <Todos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from "@/components/Todos.vue";
import AddTodo from "@/components/addTodo.vue";

export default {
  name: "home",
  components: {
    Todos,
    AddTodo
  }
};
</script>

<style lang="scss">
.home {
  width: 1100px;
  margin: 0 auto;
  padding-top: 20px;
}
</style>
