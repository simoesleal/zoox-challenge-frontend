<template>
  <v-card
    :active-class="activeClass"
    :append="append"
    :color="color"
    :dark="dark"
    :disabled="disabled"
    :elevation="elevation"
    exact="exact"
    :exact-active-class="exactActiveClass"
    :flat="flat"
    :height="height"
    :hover="hover"
    :href="href"
    :img="img"
    :light="light"
    :link="link"
    :loader-height="loaderHeight"
    :loading="loading"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :outlined="outlined"
    :raised="raised"
    :replace="replace"
    :ripple="ripple"
    :rounded="rounded"
    :shaped="shaped"
    :tag="tag"
    :target="target"
    :tile="tile"
    :to="to"
    :width="width"
  >
    <slot name="card-title"></slot>
    <slot name="card-subtitle"></slot>
    <slot name="card-text"></slot>
    <slot name="content"></slot>
    <slot name="card-actions"></slot>
  </v-card>
</template>

<script>
export default {
  name: "BaseCard",
  inheritAttrs: false,

  props: {
    /** @description Configure the active CSS class applied when the link is active. */
    activeClass: {
      type: String,
      default: undefined,
    },

    /** @description Setting append prop always appends the relative path to the current path. */
    append: {
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

    /** @description Configure the active CSS class applied when the link is active with exact match. */
    exactActiveClass: {
      type: String,
      default: undefined,
    },

    /** @description Removes the card's elevation. */
    flat: {
      type: Boolean,
      default: false,
    },

    /** @description Sets the height for the component. */
    height: {
      type: [Number, String],
      default: undefined,
    },

    /** @description Will apply an elevation of 4dp when hovered (default 2dp).*/
    hover: {
      type: Boolean,
      default: false,
    },

    /** @description Designates the component as anchor and applies the href attribute. */
    href: {
      type: String,
      default: undefined,
    },

    /** @description Specifies an image background for the card. */
    img: {
      type: String,
      default: undefined,
    },

    /** @description Applies the light theme variant to the component. */
    light: {
      type: Boolean,
      default: false,
    },

    /** @description Designates that the component is a link. */
    link: {
      type: Boolean,
      default: false,
    },

    /** @description Specifies the height of the loader. */
    loaderHeight: {
      type: [Number, String],
      default: 4,
    },

    /** @description Displays linear progress bar. */
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

    /** @description Removes elevation (box-shadow) and adds a thin border.*/
    outlined: {
      type: Boolean,
      default: false,
    },

    /** @description Specifies a higher default elevation (8dp).*/
    raised: {
      type: Boolean,
      default: false,
    },

    /** @description Setting replace prop will call router.replace() instead of router.push() when clicked, so the navigation will not leave a history record.*/
    replace: {
      type: Boolean,
      default: false,
    },

    /** @description Applies the v-ripple directive.*/
    ripple: {
      type: [Boolean, Object],
      default: undefined,
    },

    /** @description Designates the border-radius applied to the component.*/
    rounded: {
      type: Boolean,
      default: false,
    },

    /** @description Applies a large border radius on the top left and bottom right of the card.*/
    shaped: {
      type: Boolean,
      default: false,
    },

    /** @description Specify a custom tag used on the root element.*/
    tag: {
      type: String,
      default: "div",
    },

    /** @description Designates the target attribute.*/
    target: {
      type: String,
      default: undefined,
    },

    /** @description Removes the component's border-radius.*/
    tile: {
      type: Boolean,
      default: false,
    },

    /** @description Denotes the target route of the link.*/
    to: {
      type: [String, Object],
      default: undefined,
    },

    /** @description Sets the width for the component. */
    width: {
      type: [Number, String],
      default: undefined,
    },
  },
};
</script>

<style></style>
