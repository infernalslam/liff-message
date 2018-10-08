<template>
  <div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in list" :key="index">
          <img :src="slide.img" width="200px" height="200px">
        </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
         <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'game',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      list: [],
      images: [
        { img: require('@/assets/friends/brown.png') },
        { img: require('@/assets/friends/cony.png') },
        { img: require('@/assets/friends/edward.png') },
        { img: require('@/assets/friends/james.png') },
        { img: require('@/assets/friends/jessica.png') },
        { img: require('@/assets/friends/leonard.png') },
        { img: require('@/assets/friends/moon.png') },
        { img: require('@/assets/friends/sally.png') }
      ]
    }
  },
  created () {
    this.craeteArray()
  },
  methods: {
    craeteArray () {
      for (let i = 0; i <= 10; i++) {
        this.list.push({ id: i, img: this.images[Math.floor(Math.random() * 7) + 0].img })
      }
    }
  }
}
</script>

<style scoped>
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 25%;
}
.center-images {
   display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.swiper-container {
    width: 300px!important;
    padding: 50px!important;
  }
  .swiper-slide {
    background-position: 50%!important;
    background-size: cover!important;
    width: 100%!important;
  }
</style>
