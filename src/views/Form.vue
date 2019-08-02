<template>
  <v-container>
    <v-form v-model="formValid">
      <v-jsonschema-form v-if="schema" :schema="schema" :model="dataObject" :options="options" @error="showError" @change="showChange" @input="showInput" />
    </v-form>
    <v-card-actions v-if="schema">
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="schemaFn">Schema</v-btn>
      <v-btn color="secondary" @click="dataFn">Data</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import Vuetify from 'vuetify'
  import 'vuetify/dist/vuetify.min.css'
  import Draggable from 'vuedraggable'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import Swatches from 'vue-swatches'
  import 'vue-swatches/dist/vue-swatches.min.css'
  import VJsonschemaForm from '@koumoul/vuetify-jsonschema-form'
  import '@koumoul/vuetify-jsonschema-form/dist/main.css'
  import { Sketch } from 'vue-color'

  Vue.use(Vuetify)
  Vue.use(VueAxios, axios)

  Vue.component('swatches', Swatches)
  Vue.component('draggable', Draggable)
  Vue.component('color-picker', Sketch)

  export default {
    components: { VJsonschemaForm },
    data() {
      return {
        schema: null,
        dataObject: {},
        formValid: false,
        options: {
          debug: false,
          disableAll: false,
          autoFoldObjects: true
        }
      }
    },
    methods: {
      getSchema(){
        console.log();
        axios
        .get(`http://localhost:8080/${this.$route.params.id}.json`)
        .then(response => {
          this.schema = response.data
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => console.log(this.schema))
      },
      showError(err) {
        window.alert(err)
      },
      change(e) {
        console.log('"change" event', e)
      },
      input(e) {
        console.log('"input" event', e)
      },
      showChange(e) {
        // console.log(e)
      },
      showInput(e) {
        // console.log(e)
      },
      schemaFn(){
        alert(JSON.stringify(this.schema, null, 2))
      },
      dataFn(){
        alert(JSON.stringify(this.dataObject, null, 2))
      }
    },
    computed: {
      idForm(){
        return this.$route.params.id
      }
    },
    watch: {
      dataObject(){
        console.log(this.dataObject)
      },
      idForm(){
        this.getSchema()
      }
    },
    mounted(){
      this.getSchema()
    }
  }
</script>

<style>

</style>
