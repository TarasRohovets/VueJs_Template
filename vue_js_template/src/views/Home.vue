<template>
  <div>
    <div class="container">
      <div class="row center-row">
        <button type="button" class="btn btn-primary" @click="mix">Mix</button>
      </div>
      <div class="row center-row" v-if="loading">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-if="!loading">
        <div
          class="row"
          v-for="i in Math.ceil(randomArray.length / 4)"
          :key="i"
        >
          <div
            class="col-sm"
            v-for="item in randomArray.slice((i - 1) * 4, i * 4)"
            :key="item"
          >
            <div class="card custom-card">
              <div class="card-body">
                <div class="card-title">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { getAll } from "@/service/random-api";

export default {
  name: "home",
  setup() {
    const state = reactive({
      randomArray: [],
      loading: true,
    });
    onMounted(async () => {
      const { data } = await getAll();
      state.randomArray = data;
      state.loading = false;
    });

    const mix = () => {
      state.randomArray.sort(function () {
        return 0.5 - Math.random();
      });
    };

    return {
      ...toRefs(state),
      mix,
    };
  },
};
</script>

<style>
.custom-card {
  margin: 5px;
  height: 100px;
  background-color: rgb(53, 49, 49);
  color: white;
}
.spinner-border {
  margin-top: 30px !important;
}
.center-row {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.btn {
  width: 150px !important;
  border-radius: 30px;
}
</style>