<template>
  <p>
    <button
      @click="addDownload(mediaId, downloadId)"
      v-bind:class="{ active: isInCart }"
      :disabled="isInCart"
    >Add "{{ id }}" download</button>&nbsp;
  </p>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Download',
  props: ['id', 'mediaId'],
  computed: {
    isInCart() {
      return (
        this.$store.state.basket.filter(x => {
          return x.downloads.indexOf(this.id) > 0;
        }).length > 0
      );
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
