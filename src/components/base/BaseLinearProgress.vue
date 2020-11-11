<template>
  <v-progress-linear
    :absolute="absolute"
    :active="active"
    :background-color="backgroundColor"
    :background-opacity="backgroundColor"
    :bottom="bottom"
    :buffer-value="bufferValue"
    :color="color"
    :dark="dark"
    :fixed="fixed"
    :height="height"
    :indeterminate="indeterminate"
    :light="light"
    :query="query"
    :reverse="reverse"
    :rounded="rounded"
    :stream="stream"
    :striped="striped"
    :top="top"
    :value="value"
  />
</template>

<script>
export default {
  name: "BaseLinearProgress",
  props: {
    /** @description Applies position: absolute to the component. */
    absolute: {
      type: Boolean,
      default: false,
    },

    /** @description Reduce the height to 0, hiding component. */
    active: {
      type: Boolean,
      default: false,
    },

    /** @description Background color, set to component's color if null. */
    backgroundColor: {
      type: String,
      default: undefined,
    },

    /** @description Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise. */
    backgroundOpacity: {
      type: [Number, String],
      default: undefined,
    },

    /** @description Aligns the component towards the bottom. */
    bottom: {
      type: Boolean,
      default: false,
    },

    /** @description The percentage value for the buffer. */
    bufferValue: {
      type: [Number, String],
      default: 100,
    },

    /** @description Applies specified color to the control. */
    color: {
      type: String,
      default: "primary",
    },

    /** @description Applies the dark theme variant to the component. */
    dark: {
      type: Boolean,
      default: false,
    },

    /** @description Applies position: fixed to the component. */
    fixed: {
      type: Boolean,
      default: false,
    },

    /** @description Sets the height for the component. */
    height: {
      type: [Number, String],
      default: 4,
    },

    /** @description Constantly animates, use when loading progress is unknown. */
    indeterminate: {
      type: Boolean,
      default: false,
    },

    /** @description Applies the light theme variant to the component. */
    light: {
      type: Boolean,
      default: false,
    },

    /** @description Animates like indeterminate prop but inverse. */
    query: {
      type: Boolean,
      default: false,
    },

    /** @description Displays reversed progress. */
    reverse: {
      type: Boolean,
      default: false,
    },

    /** @description Adds a border radius to the progress component. */
    rounded: {
      type: Boolean,
      default: false,
    },

    /** @description An alternative style for portraying loading that works in tandem with buffer-value. */
    stream: {
      type: Boolean,
      default: false,
    },

    /** @description Adds a stripe background to the filled portion of the progress component. */
    striped: {
      type: Boolean,
      default: false,
    },

    /** @description Aligns the content towards the top. */
    top: {
      type: Boolean,
      default: false,
    },

    /** @description The percentage value for current progress. */
    value: {
      type: [Number, String],
      default: 0,
    },
  },
};
</script>

<style></style>
