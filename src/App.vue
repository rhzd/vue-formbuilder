<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <template v-for="menu in menuList">
          <v-list-tile @click="goTo(menu.route)">
            <v-list-tile-action>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>FORM</span>
        <span class="font-weight-light">JSONSCHEMA</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      menuList: [
        {
          route: '/',
          icon: 'dashboard',
          title: 'Dashboard'
        },
        {
          route: '/form/basic',
          icon: 'check_box_outline_blank',
          title: 'Basic'
        },
        {
          route: '/form/arrays',
          icon: 'view_array',
          title: 'Arrays'
        },
        {
          route: '/form/pickers',
          icon: 'timelapse',
          title: 'Pickers'
        },
        {
          route: '/form/validation',
          icon: 'format_align_justify',
          title: 'Validation'
        },
        {
          route: '/form/selects',
          icon: 'format_list_bulleted',
          title: 'Selects'
        },
        {
          route: '/form/nested',
          icon: 'format_line_spacing',
          title: 'Nested'
        },
        {
          route: '/form/dependencies',
          icon: 'format_paint',
          title: 'Dependencies'
        },
        {
          route: '/form/combinations',
          icon: 'format_align_right',
          title: 'Combinations'
        },
        {
          route: '/form/accordion',
          icon: 'format_list_numbered',
          title: 'Accordion'
        },
        {
          route: '/form/icons',
          icon: 'format_bold',
          title: 'Icons'
        }
      ]
    }),
    props: {
      source: String
    },
    methods: {
      goTo(route){
        this.$router.push(route)
      }
    }
  }
</script>
