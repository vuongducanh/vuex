<template>
  <div class="home">
    <Todos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue';

export default {
  name: 'home',
  components: {
    Todos
  },

  // mounted() {
  //   this.getData();
  // },

  // methods: {
  //   getData() {
  //      axios
  //     .get('http://5c13e583a5e15f001345f63b.mockapi.io/api/demo/demo')
  //     .then(response => {
  //       console.log(response);
  //     })
  //   }
  // }
}
</script>
