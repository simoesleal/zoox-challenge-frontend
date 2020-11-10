<template>
  <v-text-field
    v-on="listeners"
    v-bind="$attrs"
    @input="updateValue"
    :append-icon="appendIcon"
    :append-outer-icon="appendOuterIcon"
    :autofocus="autofocus"
    :background-color="backgroundColor"
    :clear-icon="clearIcon"
    :clearable="clearable"
    :color="color"
    :counter="counter"
    :dark="dark"
    :dense="dense"
    :disabled="disabled"
    :error="error"
    :error-count="errorCount"
    :error-messages="errorMessages"
    :filled="filled"
    :flat="flat"
    :full-width="fullWidth"
    :height="height"
    :hide-details="hideDetails"
    :hint="hint"
    :id="id"
    :label="label"
    :light="light"
    :loader-height="loaderHeight"
    :loading="loading"
    :messages="messages"
    :outlined="outlined"
    :persistent-hint="persistentHint"
    :placeholder="placeholder"
    :prefix="prefix"
    :prepend-icon="prependIcon"
    :prepend-inner-icon="prependInnerIcon"
    :readonly="readonly"
    :reverse="reverse"
    :rounded="rounded"
    :rules="rules"
    :shaped="shaped"
    :single-line="singleLine"
    :solo="solo"
    :solo-inverted="soloInverted"
    :success="success"
    :success-messages="successMessages"
    :suffix="suffix"
    :type="type"
    :validate-on-blur="validateOnBlur"
    :value="value"
  ></v-text-field>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    /** @description Appends an icon to the component, uses the same syntax as v-icon. */
    appendIcon: {
      type: String,
      default: undefined,
    },

    /** @description Appends an icon to the outside the component's input, uses same syntax as v-icon. */
    appendOuterIcon: {
      type: String,
      default: undefined,
    },

    /** @description Enables autofocus. */
    autofocus: {
      type: Boolean,
      default: false,
    },

    /** @description Changes the background-color of the input. */
    backgroundColor: {
      type: String,
      default: undefined,
    },

    /** @description Applied when using clearable and the input is dirty. */
    clearIcon: {
      type: String,
    },

    /** @description Add input clear functionality, default icon is Material Icons clear. */
    clearable: {
      type: Boolean,
      default: false,
    },

    /** @description Applies specified color to the control. */
    color: {
      type: String,
      default: undefined,
    },

    /** @description Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.. */
    counter: {
      type: [Boolean, String, Number],
      default: undefined,
    },

    /** @description Applies the dark theme variant to the component. */
    dark: {
      type: Boolean,
      default: false,
    },

    /** @description Reduces the input height. */
    dense: {
      type: Boolean,
      default: false,
    },

    /** @description Disable the input. */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** @description Puts the input in a manual error state. */
    error: {
      type: Boolean,
      default: false,
    },

    /** @description The total number of errors that should display at once. */
    errorCount: {
      type: [Number, String],
      default: 1,
    },

    /** @description Puts the input in an error state and passes through custom error messages. */
    errorMessages: {
      type: [Array, String],
      default: "",
    },

    /** @description Applies the alternate filled input style. */
    filled: {
      type: Boolean,
      default: false,
    },

    /** @description Removes elevation (shadow) added to element when using the solo or solo-inverted props. */
    flat: {
      type: Boolean,
      default: false,
    },

    /** @description Designates input type as full-width. */
    fullWidth: {
      type: Boolean,
      default: false,
    },

    fontSize12px: {
      type: Boolean,
      default: false,
    },

    /** @description Sets the height of the input. */
    height: {
      type: [Number, String],
      default: undefined,
    },

    /** @description Hides hint and validation errors. */
    hideDetails: {
      type: [Boolean, String],
      default: false,
    },

    /** @description Hint text. */
    hint: {
      type: String,
      default: undefined,
    },

    /** @description Sets the DOM id on the component. */
    id: {
      type: String,
      default: undefined,
    },

    /** @description Sets input label. */
    label: {
      type: String,
      default: "",
    },

    /** @description Applies the light theme variant to the component. */
    light: {
      type: Boolean,
      default: false,
    },

    /** @description Specifies the height of the loader. */
    loaderHeight: {
      type: [Number, String],
      default: 2,
    },

    /** @description Displays linear progress bar. */
    loading: {
      type: Boolean,
      default: false,
    },

    /** @description Displays a list of messages or message if using a string. */
    messages: [String, Array],

    /** @description Applies the outlined style to the input. */
    outlined: {
      type: Boolean,
      default: false,
    },

    /** @description Forces hint to always be visible. */
    persistentHint: {
      type: Boolean,
      default: false,
    },

    /** @description Sets the input’s placeholder text. */
    placeholder: {
      type: String,
      default: undefined,
    },

    /** @description Displays prefix text. */
    prefix: {
      type: String,
      default: undefined,
    },

    /** @description Prepends an icon to the component, uses the same syntax as v-icon. */
    prependIcon: {
      type: String,
      default: undefined,
    },

    /** @description Prepends an icon inside the component's input, uses the same syntax as v-icon. */
    prependInnerIcon: {
      type: String,
      default: undefined,
    },

    /** @description Puts input in readonly state. */
    readonly: {
      type: Boolean,
      default: false,
    },

    /** @description Reverses the input orientation. */
    reverse: {
      type: Boolean,
      default: false,
    },

    /** @description Adds a border radius to the input. */
    rounded: {
      type: Boolean,
      default: false,
    },

    /** @description Accepts an array of functions that take an input value as an argument and return either true / false or a string with an error message. */
    rules: {
      type: Array,
    },

    /** @description Round if outlined and increase border-radius if filled. Must be used with either outlined or filled. */
    shaped: {
      type: Boolean,
      default: false,
    },

    /** @description Label does not move on focus/dirty. */
    singleLine: {
      type: Boolean,
      default: false,
    },

    /** @description Changes the style of the input. */
    solo: {
      type: Boolean,
      default: false,
    },

    /** @description Reduces element opacity until focused. */
    soloInverted: {
      type: Boolean,
      default: false,
    },

    /** @description Puts the input in a manual success state. */
    success: {
      type: Boolean,
      default: false,
    },

    /** @description Puts the input in a success state and passes through custom success messages. */
    successMessages: {
      type: [String, Array],
    },

    /** @description Displays suffix text. */
    suffix: {
      type: String,
      default: undefined,
    },

    /** @description Sets input type. */
    type: {
      type: String,
      default: "text",
    },

    /** @description Makes the component extra small. */
    validateOnBlur: {
      type: Boolean,
      default: false,
    },

    /** @description The input's value. */
    value: {},
  },

  computed: {
    /**
     * @description This method is necessary to work with multiple actions, like blur, touch, and input events.
     *              The last executed is the one with more priority.
     */
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },

  methods: {
    /**
     * @description Take the event that is happening
     *              and emit the event to the parent.
     */
    updateValue(event) {
      this.$emit("input", event);
    },
  },
};
</script>

<style scoped></style>
