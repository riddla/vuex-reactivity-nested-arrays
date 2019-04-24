<template>
  <div>
    <!--<h2>{{ getNumbers }}</h2>-->
    <code>
      <pre>foo = {{ JSON.stringify(getStore, null, 2) }}</pre>
    </code>
    <h2>Via Getter</h2>
    <code>
      <pre>{{ getDownloads }}</pre>
    </code>
    <h2>Via Computed</h2>
    <pre>{{ getDownloadsComputed }}</pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NumberDisplay",
  computed: {
    getStore() {
      return this.$store.state.basket;
    },
    getDownloadsComputed() {
      if (!this.$store.state.basket[0]) {
        return null;
      }
      return JSON.stringify(this.$store.state.basket[0].downloads, null, 2);
    },
    getDownloads() {
      return JSON.stringify(this.$store.getters.getDownloads, null, 2);
    }
  }
};
</script>
