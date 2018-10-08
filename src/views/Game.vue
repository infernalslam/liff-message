<template>
  <div>
    <section class="hero is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in list" :key="index">
              <img :src="slide.img" width="200px" height="200px">
            </swiper-slide>
              <div class="swiper-scrollbar" slot="scrollbar"></div>
          </swiper>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <div class="container has-text-right">
          <img src="@/assets/friends/moon-bg.png" height="100px" width="60%">
        </div>
      </div>
      </section>
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
        spaceBetween: 10,
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
    console.log(window)
    // let mySwiper = new Swiper('.swiper-container', {})
    // mySwiper.on('slideChange', function () {
    //   console.log('slide changed')
    // })
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
  /* .swiper-container {
    width: 360px!important;
    margin-left: 0px !important;
  } */
</style>
