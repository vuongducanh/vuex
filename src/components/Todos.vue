<template>
  <div class="todos">
    <h1>ll</h1>
    <div class="todos__content">
      <div class="todos__item" v-for="(TodoItem, index) in getTodos" :key="index">
       {{ TodoItem.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",

  methods: {
    ...mapActions(['fetData'])
  },
  computed: {
     ...mapGetters(['getTodos'])
  },
  created() {
    this.fetData();
  }
}
</script>
<style lang="scss">
  .todos {
    &__content {
      display: flex;
      flex-wrap: wrap;
    }

    &__item {
      width: 400px;
      height: 100px;
      background-color: bisque;
      margin: 10px;
      display: flex;
      align-items: center;
      padding: 15px;
      word-break: break-all;
    }
  }
</style>


