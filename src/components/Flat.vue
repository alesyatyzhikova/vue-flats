<template>
  <div class="flat__item">
    <h2>{{ flat_data.attributes.title }}</h2>
    <p>Количество комнат: {{ flat_data.attributes.rooms }}</p>
    <p>{{ isAgent }}</p>
    <p>Адрес: 
      {{ flat_data.attributes.address.street }}
      {{ flat_data.attributes.address.house }}
    </p>  
    <fa-icon name="heart" class="flat__icon" :class="isLiked.class" @click="likeFlat"/>    
  </div>
</template>

<script>
import FaIcon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/heart';

export default {
  name: 'Flat',
  components: {
			FaIcon
  },
  data() {
    return {
      like: false
    }
  },
  props: {
    flat_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    isAgent() {
      return this.flat_data.relationships.type === 'agent' ? 
      'Предложение от агента' : 'Предложение от собственника'
    },
    isLiked() {
      return this.like ? { class: 'flat__icon_liked' } : ''
    }
  },
  methods: {
    likeFlat() {
      this.like = !this.like
    }
  }
}
</script>
<style scoped>
  .flat__item {
    max-width: 400px;
    padding: 15px;
    box-sizing: border-box;
    background-color: azure;
    border-radius: 4px;
    text-align: center;
    position: relative;
  }

  .flat__icon {
    color: grey;
    position: absolute;
    right: 15px;
    bottom: 15px;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .flat__icon_liked {
    color: red;
    transition: all 0.3s ease-in;
    transform: scale(1.5);
  }
</style>
