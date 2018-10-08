<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head is-info">
        <h1> LINE APIs </h1>
        <button @click="login()"> LINE LOGIN </button>
        <router-link :to="{ name: 'setting', query: { token: 123 }}">User</router-link>
        {{ error }}
      </div>
      <div class="hero-body">
        {{ profile }}
      </div>
    </section>
  </div>
</template>

<script>
const liff = window.liff
export default {
  name: 'home',
  data () {
    return {
      profile: null,
      list: [],
      select: '',
      error: null
    }
  },
  async mounted () {
    liff.init(async (data) => {
      let profile = await liff.getProfile()
      this.profile = profile
    })
  },
  methods: {
    selectBox (name) {
      this.select = name
      localStorage.setItem('storageSelect', name)
    },
    async login () {
      try {
        window.location.href = `https://84cee381.ngrok.io/api/login`
      } catch (err) {
        this.error = err
      }
    }
  }
}
</script>

<style>
.border-select {
  border: 2px solid green;
}

</style>
