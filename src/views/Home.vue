<template>
  <div>
    Hello world
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
