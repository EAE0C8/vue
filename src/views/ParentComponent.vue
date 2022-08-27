<template>
  <child-component @send-message="sendMessage" ref="child_componen" />
</template>

<script>
import ChildComponent from "@/views/ChildComponent";
export default {
  components: {ChildComponent},
  mounted() {
    this.$refs.child_componen.$refs.btn.click();
  }
}
</script>

<style scoped></style>
