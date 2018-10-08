<template>
  <div>
    <div class="container" style="padding-top: 10px;">
      <nav class="navbar navbar-dark bg-info">
        <a class="navbar-brand" href="#dummy"> ตั้งค่าเพื่อดูดวงได้ง่ายๆ </a>
      </nav>
      <br>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput"> วันเกิด: </label>
          <input class="form-control" id="formGroupExampleInput" placeholder="วันเกิด" type="date">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput"> ราศี: </label>
          <select class="custom-select">
           <option>1</option>
           <option>2</option>
         </select>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting',
  props: ['token']
}
</script>

<style scoped>
.bg-info {
    background-color: #666f86 !important;
}
.navbar {
    position: relative;
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0.5rem 1rem;
}
</style>
