<template>
  <div class="todos">
    <div class="todos__content">
      <div class="todos__item" v-for="TodoItem in getTodos" :key="TodoItem.id">
       {{ TodoItem.title }}
        <i class="fas fa-trash" data-toggle="modal" data-target="#exampleModalCenter" @click="deleteToDo(TodoItem.id)"></i>
        <!-- <i class="fas fa-trash" data-toggle="modal" data-target="#exampleModalCenter"></i>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Do you want to remove the item ?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="deleteToDo(TodoItem.id)">Remove</button>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",

  methods: {
    ...mapActions(['fetData','deleteToDo']),
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
    padding-top: 20px;
    margin-left: -10px;
    margin-right: -10px;

    &__content {
      display: block;
    }

    &__item {
      width: 100%;
      height: 100px;
      background-color: bisque;
      margin: 10px;
      display: flex;
      align-items: center;
      padding: 15px;
      word-break: break-all;
      position: relative;

      .fas {
        position: absolute;
        top: 20px;
        right: 20px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>


