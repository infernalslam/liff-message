<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head is-info">
        <h1> LINE APIs </h1>
      </div>
      <div class="hero-body">
        <div class="container">
          <div style="padding-bottom: 10px;" v-for="(index, item) in 5" :key="index" >
            <h1 class="title">Large title {{ item }}</h1>
            <h2 class="subtitle">Large subtitle</h2>
          </div>
        </div>
      </div>
    </section>
    {{ data }}
  </div>
</template>

<script>
const liff = window.liff
export default {
  name: 'home',
  data () {
    return {
      data: null
    }
  },
  mounted () {
    liff.init((data) => {
      this.data = data
    })
  }
}
</script>
