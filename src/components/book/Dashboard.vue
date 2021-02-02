<template>
  <div>
      <Header />
    <div class="components">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  name: "Dashboard",
  components: { Header },
};
</script>