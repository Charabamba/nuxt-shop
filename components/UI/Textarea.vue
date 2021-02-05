<template>
  <div class="input-wrapper">
    <textarea
      :required="isRequired"
      placeholder=" "
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
    <label>
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style lang="scss">
.input-wrapper {
  margin-top: 20px;
  position: relative;
  label {
    position: absolute;
    transition: 0.15s;
    left: 10px;
    top: 4px;
    pointer-events: none;
  }
  textarea {
    border: 1px solid rgb(29, 29, 29);
    resize: none;
    padding: 4px 10px;
    border-radius: 4px;
    width: 100%;
    &:hover + label,
    &:not(:placeholder-shown) + label,
    &:focus + label {
      top: -15px;
    }
  }
}
</style>
