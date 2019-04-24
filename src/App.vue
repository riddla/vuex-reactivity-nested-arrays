<template>
  <div id="app">
    <NumberSubmit/>
    <Download id="foo" media-id="test"/>
    <Download id="bar" media-id="test"/>
    <hr>
    <NumberDisplay/>
  </div>
</template>

<script>
import NumberDisplay from './components/NumberDisplay';
import NumberSubmit from './components/NumberSubmit';
import Download from './components/Download';

export default {
  name: 'App',
  components: {
    NumberDisplay,
    NumberSubmit,
    Download,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
