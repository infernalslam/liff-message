<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head is-info">
        <h1> LINE APIs </h1>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="has-text-right">
            <span>{{ data }}</span>
          </div>
          <div style="padding-bottom: 10px;" :class="{'border-select': select === item.name}" v-for="(item, index) in list" :key="index" >
            <h1 class="title" @click="selectBox(item.name)">{{ item.name }}</h1>
            <h2 class="subtitle"> {{ item.birth_year }} </h2>
          </div>
        </div>
      </div>
    </section>
    {{ data }}
  </div>
</template>

<script>
import axios from 'axios'
const liff = window.liff
export default {
  name: 'home',
  data () {
    return {
      data: null,
      list: [],
      select: ''
    }
  },
  async mounted () {
    for (let i = 1; i <= 5; i++) {
      let { data } = await axios.get(`https://swapi.co/api/people/${i}/`)
      this.list.push(data)
    }
    if (localStorage.getItem('storageSelect')) {
      this.select = localStorage.getItem('storageSelect')
    }
    liff.init((data) => {
      this.data = data
    })
  },
  methods: {
    selectBox (name) {
      this.select = name
      localStorage.setItem('storageSelect', name)
    }
  }
}
</script>

<style>
.border-select {
  border: 2px solid green;
}

</style>
