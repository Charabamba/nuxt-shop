<template>
  <div class="container">
    <h1 class="title">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
