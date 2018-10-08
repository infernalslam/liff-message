<template>
  <div>
    <div style="padding-bottom: 100px; padding-top: 10px; padding-left: 10px;">
      <img src="@/assets/friends/line.png" alt="" width="100px;">
    </div>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in list" :key="index">
          <img :src="slide.img" width="400px" height="200px">
        </swiper-slide>
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
        slidesPerView: 2,
        spaceBetween: 5,
        centeredSlides: true,
        loop: true,
        // freeMode: true,
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
        { img: require('@/assets/friends/brown.png'), color: '#b5694f' },
        { img: require('@/assets/friends/cony.png'), color: '#f97e98' },
        { img: require('@/assets/friends/edward.png'), color: '#fdda00' },
        { img: require('@/assets/friends/james.png'), color: '#45e7cf' },
        { img: require('@/assets/friends/jessica.png'), color: '#af77d1' },
        { img: require('@/assets/friends/leonard.png'), color: '#44d256' },
        { img: require('@/assets/friends/moon.png'), color: '#52afff' },
        { img: require('@/assets/friends/sally.png'), color: '#f98135' }
      ]
    }
  },
  created () {
    this.craeteArray()
  },
  mounted () {
  },
  computed: {
    colorBackground () {
      let color = '#b5694f'
      return `background-color: ${color}`
    }
  },
  methods: {
    craeteArray () {
      for (let i = 0; i <= 7; i++) {
        // this.list.push({ id: i, img: this.images[Math.floor(Math.random() * 7) + 0].img })
        this.list.push({ id: i, img: this.images[i].img })
      }
    }
  }
}
</script>

<style scoped>
.swiper-slide {
    width: 60%;
  }
  .swiper-slide:nth-child(2n) {
      width: 40%;
  }
  .swiper-slide:nth-child(3n) {
      width: 20%;
  }
</style>
