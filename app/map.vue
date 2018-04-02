<template>
  <v-app class="map">
    <v-container>
      <v-layout row wrap style="height: 400px">
        <v-flex xs9 class="pr-4">
          <gmap-map
            :center="center"
            :zoom="15"
            style="width: 100%; height: 100%"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            ></gmap-marker>
          </gmap-map>
        </v-flex>
        <v-flex xs3>
          <v-card class="px-4" style="">
            <v-select
              placeholder="Category"
            ></v-select>
            <v-layout row wrap>
            <v-flex xs6 pr-2>
              <v-text-field
                name="zip"
                label="Zip Code"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-select
                name="Distance"
                placeholder="Distance"
              ></v-select>
            </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        center: {lat: 41.1402777, lng: -104.8224152},
        markers: [
          {
            position: {lat: 41.1402777, lng: -104.8224152}
          },
          {
            position: {lat: 41.1370545, lng: -104.8263918}
          }
        ],
      }
    },
  }
</script>
