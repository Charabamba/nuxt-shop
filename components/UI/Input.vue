<template>
  <div class="input-wrapper">
    <input
      :type="type"
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
    type: {
      type: String,
      default: "text",
    },
    isRequired: {
      type: Boolean,
      default: true,
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
  input {
    border: 1px solid rgb(29, 29, 29);
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
