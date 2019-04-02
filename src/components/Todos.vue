<template>
  <div>
    <h1>todo</h1>
    {{getItem}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Todos",

  computed:  mapGetters(['getItem'])
}
</script>