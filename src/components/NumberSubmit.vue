<template>
  <div>
    <!--<input v-model="numberInput" type="number">
    <button @click="addNumber(numberInput)">Add new number</button>-->
    <button @click="addItem()">Add initial download</button>&nbsp;
    <p>
      <button @click="addDownload()">Add generic download</button>
      &nbsp;
    </p>
    <p>
      <button @click="clearDownloads()">Clear downloads</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NumberSubmit',
  computed: {
    isInCart() {
      return downloadId => {
        if (!this.$store.state.basket[0]) {
          return null;
        }
        return this.$store.state.basket.filter(x => {
          return x.downloads.indexOf(downloadId) > 0;
        });
      };
    },
  },
  methods: {
    ...mapActions(['addItem', 'addDownload', 'clearDownloads']),
  },
};
</script>

<style>
button.active {
  background-color: green;
  color: #fff;
}
</style>
