<template>
  <v-btn
    v-on="$listeners"
    v-bind="$attrs"
    @click="onClick"
    :absolute="absolute"
    :append="append"
    :block="block"
    :bottom="bottom"
    :color="color"
    :dark="dark"
    :depressed="depressed"
    :disabled="disabled"
    :elevation="elevation"
    :exact="exact"
    :fab="fab"
    :fixed="fixed"
    :height="height"
    :href="href"
    :icon="icon"
    :input-value="inputValue"
    :large="large"
    :left="left"
    :light="light"
    :link="link"
    :loading="loading"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :outlined="outlined"
    :replace="replace"
    :retain-focus-on-click="retainFocusOnClick"
    :right="right"
    :ripple="ripple"
    :rounded="rounded"
    :shaped="shaped"
    :small="small"
    :tag="tag"
    :target="target"
    :text="text"
    :tile="tile"
    :to="to"
    :top="top"
    :type="type"
    :value="value"
    :width="width"
    :x-large="xLarge"
    :x-small="xSmall"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "BaseButton",
  inheritAttrs: false,
  props: {
    isBlackGradient: {
      type: Boolean,
      default: false,
    },

    /** @description Applies position: absolute to the component. */
    absolute: {
      type: Boolean,
      default: false,
    },

    /** @description Setting append prop always appends the relative path to the current path. */
    append: {
      type: Boolean,
      default: false,
    },

    /** @description Expands the button to 100% of available space. */
    block: {
      type: Boolean,
      default: false,
    },

    /** @description Aligns the component towards the bottom. */
    bottom: {
      type: Boolean,
      default: false,
    },

    /** @description Applies specified color to the control. */
    color: {
      type: String,
      default: undefined,
    },

    /** @description Applies the dark theme variant to the component. */
    dark: {
      type: Boolean,
      default: false,
    },

    /** @description Removes the button box shadow. */
    depressed: {
      type: Boolean,
      default: false,
    },

    /** @description Removes the ability to click or target the component. */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** @description Designates an elevation applied to the component between 0 and 24 */
    elevation: {
      type: [Number, String],
      default: undefined,
    },

    /** @description Exactly match the link. Without this, '/' will match every route. */
    exact: {
      type: Boolean,
      default: false,
    },

    /** @description Designates the button as a floating-action-button - round. */
    fab: {
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
      type: String,
    },

    /** @description Designates the component as anchor and applies the href attribute. */
    href: {
      type: String,
    },

    /** @description Designates the button as icon - round and flat. */
    icon: {
      type: Boolean,
      default: false,
    },

    /** @description Controls the button's active state. */
    inputValue: {
      default: undefined,
    },

    /** @description Makes the component large. */
    large: {
      type: Boolean,
      default: false,
    },

    /** @description Aligns the component towards the left. This should be used with the absolute or fixed props. */
    left: {
      type: Boolean,
      default: false,
    },

    /** @description Applies the light theme variant to the component. */
    light: {
      type: Boolean,
      default: false,
    },

    /** @description Designates that the component is a link. This is automatic when using the href or to prop. */
    link: {
      type: Boolean,
      default: false,
    },

    /** @description Adds a loading icon animation. */
    loading: {
      type: Boolean,
      default: false,
    },

    /** @description Sets the maximum height for the component. */
    maxHeight: {
      type: [Number, String],
      default: undefined,
    },

    /** @description Sets the maximum width for the component. */
    maxWidth: {
      type: [Number, String],
      default: undefined,
    },

    /** @description Sets the minimum height for the component. */
    minHeight: {
      type: [Number, String],
      default: undefined,
    },

    /** @description Sets the minimum width for the component. */
    minWidth: {
      type: [Number, String],
      default: undefined,
    },

    /** @description Makes the background transparent and applies a thin border. */
    outlined: {
      type: Boolean,
      default: false,
    },

    /** @description Setting replace prop will call router.replace() instead of router.push() when clicked, so the navigation will not leave a history record.  */
    replace: {
      type: Boolean,
      default: false,
    },

    /** @description Don't blur on click. */
    retainFocusOnClick: {
      type: Boolean,
      default: false,
    },

    /** @description Aligns the component towards the right. This should be used with the absolute or fixed props. */
    right: {
      type: Boolean,
      default: false,
    },

    /** @description Applies the v-ripple directive. */
    ripple: {
      type: [Boolean, Object],
      default: undefined,
    },

    /** @description Applies a large border radius on the button. */
    rounded: {
      type: Boolean,
      default: false,
    },

    /** @description Applies a large border radius on the top left and bottom right of the card. */
    shaped: {
      type: Boolean,
      default: false,
    },

    /** @description Makes the component small. */
    small: {
      type: Boolean,
      default: false,
    },

    /** @description Specify a custom tag used on the root element. */
    tag: {
      type: String,
      default: "button",
    },

    /** @description Designates the target attribute. This should only be applied when using the href prop. */
    target: {
      type: String,
      default: undefined,
    },

    /** @description Makes the background transparent. */
    text: {
      type: Boolean,
      default: false,
    },

    /** @description Removes the component's border-radius. */
    tile: {
      type: Boolean,
      default: false,
    },

    /** @description Denotes the target route of the link. You can find more information about the to prop on the vue-router documentation. */
    to: {
      type: [String, Object],
      default: undefined,
    },

    /** @description Aligns the content towards the top. */
    top: {
      type: Boolean,
      default: false,
    },

    /** @description Set the button's type attribute. */
    type: {
      type: String,
      default: "button",
    },

    /** @description The value used when the component is selected in a group. If not provided, the index will be used. */
    value: {
      default: undefined,
    },

    /** @description Sets the width for the component. */
    width: {
      type: String,
      default: undefined,
    },

    /** @description Makes the component extra large. */
    xLarge: {
      type: Boolean,
      default: false,
    },

    /** @description Makes the component extra small. */
    xSmall: {
      type: Boolean,
      default: false,
    },

    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
};
</script>

<style scoped></style>
