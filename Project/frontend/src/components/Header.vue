<template>
  <header>
    <div class="container" id="navbar">
      <nav class="navbar navbar-light" style="background-color: #e3f2fd">
        <div class="col-md-11"></div>
        <div class="col-md-1" id="links">
          <div class="container-fluid">
            <router-link to="/">Home</router-link>
          </div>
        </div>
      </nav>
    </div>
    <div></div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 10px;


}
</style>
