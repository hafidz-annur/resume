<template>
  <div id="maps">
    <div id="map"></div>
    <div
      class="position-fixed w-50 h-100"
      style="
        z-index: 9999;
        top: 50%;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      "
      v-if="modal != ''"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-5">
            <div class="card w-100">
              <div class="card-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                odit corrupti corporis aliquid nostrum quo repudiandae
                consequatur, atque quia maxime nesciunt repellendus molestiae
                officiis praesentium, reprehenderit vitae? Corrupti, animi?
                Quia.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
export default {
  name: "mapsComponent",
  data() {
    return {
      modal: "",
      city: {
        lat: -6.894066105572903,
        long: 109.67244285343287,
        zoom: 14,
      },
      location: {
        UMKM: [
          {
            lat: -6.90139411851998,
            long: 109.65544837863955,
          },
          {
            lat: -6.9163906284649235,
            long: 109.68514579418748,
          },
          {
            lat: -6.870036245464442,
            long: 109.67776435564089,
          },
        ],

        Pasar: [
          {
            lat: -6.8809435667577254,
            long: 109.6539034263856,
          },
          {
            lat: -6.9252519787915325,
            long: 109.65630668544729,
          },
          {
            lat: -6.918946804283613,
            long: 109.68566077827212,
          },
        ],
      },
    };
  },
  methods: {
    initMaps() {
      let map;

      map = L.map("map").setView(
        [this.city.lat, this.city.long],
        this.city.zoom
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 40,
        attribution: "Hanf",
      }).addTo(map);

      this.location.UMKM.forEach((element) => {
        L.circle([element.lat, element.long], {
          radius: 50,
        })
          .addTo(map)
          .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
          .openPopup();
      });

      this.location.Pasar.forEach((element) => {
        L.circle([element.lat, element.long], {
          color: "red",
          fillColor: "#f03",
          radius: 50,
        }).addTo(map);
      });
    },
  },

  mounted() {
    this.initMaps();
  },

  created() {},
};
</script>

<style>
#map {
  height: 100vh;
}
</style>