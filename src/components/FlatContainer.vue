<template>
  <div>
    <h1 class="flat__title">Предложения квартир</h1>
    <div class="flat">
    <Flat v-for="flat in allFlats"
          :key="flat.id"
          :flat_data="flat"
    />
  </div>
  </div>
</template>

<script>
import Flat from './Flat'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'FlatContainer',
  components: {
    Flat
  },
  computed: {
    ...mapGetters(['allFlats'])
  },
  methods: {
    ...mapActions(['getFlats'])
  },
  created() {
    this.getFlats()
  }
}
</script>

<style scoped>
.flat {
  max-width: 1240px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px 20px;
  justify-content: center;
}
.flat__title {
  margin: 0 auto;
  text-align: center;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
