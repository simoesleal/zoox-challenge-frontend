<template>
  <v-navigation-drawer
    v-if="isAuth"
    app
    :clipped="true"
    :dark="true"
    :expand-on-hover="true"
    :value="menuDrawer"
    :disable-resize-watcher="true"
    :disable-route-watcher="true"
    :mobile-breakpoint="0"
  >
    <v-list dense>
      <template v-for="item in items">
        <v-list-group
          v-if="item.children"
          :key="item.text"
          v-model="item.model"
          :append-icon="item.appendIcon"
          color="white"
        >
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>{{ item.prependIcon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            link
            @click="updateRouteThroughMenu(child.routeName, child.url)"
          >
            <v-list-item-action v-if="child.prependIcon">
              <v-icon>{{ child.prependIcon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ child.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-else
          :key="item.text"
          link
          @click="updateRouteThroughMenu(item.routeName, item.url)"
        >
          <v-list-item-action>
            <v-icon>{{ item.prependIcon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import nav from "../../router/_nav";
export default {
  data() {
    return {
      items: nav.items,
    };
  },
  computed: {
    ...mapState("MenuToggle", ["menuDrawer"]),
    ...mapGetters("Auth", ["isAuth"]),
  },
  methods: {
    updateRouteThroughMenu(routeName, url) {
      if (
        this.$router.history.current.name !== routeName &&
        this.$router.history.current.path !== url
      )
        this.$router.push({ name: routeName });
      return false;
    },
  },
};
</script>

<style scoped></style>
