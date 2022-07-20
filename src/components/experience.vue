<template>
  <div id="experience">
    <div
      class="row mt-3 justify-content-center"
      v-if="currentWeather?.length != 0"
    >
      <div class="col-11">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div class="text-start">
            <button
              class="btn btn-city btn-sm py-1 px-3 shadow-sm me-1"
              :class="city == 'Srengseng Jakarta' ? 'active' : ''"
              @click="checkLocation('Srengseng Jakarta')"
            >
              Srengseng
            </button>
            <button
              class="btn btn-city btn-sm py-1 px-3 shadow-sm"
              :class="city == 'Surakarta' ? 'active' : ''"
              @click="checkLocation('Surakarta')"
            >
              Surakarta
            </button>
          </div>
          <div class="text-end" v-if="yourLocation.latitude != ''">
            <button
              class="btn btn-city btn-sm py-1 px-3 shadow-sm"
              :class="city == 'Location' ? 'active' : ''"
              @click="getWetaherByLocation(yourLocation)"
            >
              Your Location
            </button>
          </div>
        </div>
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center">
              <div class="text-center" style="width: 40%">
                <div class="px-3">
                  <img
                    :src="currentWeather.condition.icon"
                    alt=""
                    class="w-50"
                    style="
                      animation: up-bottom 2s ease-in-out infinite alternate;
                    "
                  />
                </div>
                <p class="my-0" style="text-transform: capitalize">
                  {{ currentWeather.condition.text }}
                </p>
              </div>
              <div
                class="ps-2 text-end"
                style="width: 60%"
                v-if="locationWeather?.length != 0"
              >
                <h6 class="my-0">
                  {{ locationWeather.region + ", " + locationWeather.country }}
                </h6>
                <h3 class="my-0">{{ locationWeather.name }}</h3>
                <small class="">
                  {{ customDate(locationWeather.localtime) }}
                </small>
              </div>
            </div>
            <Splide
              :options="{
                perPage: 2,
                width: '100%',
                gap: 15,
                arrows: false,
                padding: { left: 0, right: 20 },
                pagination: false,
              }"
              class="mt-2"
              v-if="nextHour?.length != 0"
            >
              <SplideSlide
                class="align-items-stretch d-grid"
                v-for="i in nextHour"
                :key="i"
              >
                <div
                  class="
                    shadow-sm
                    card-weather
                    my-1
                    p-2
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  style="border-radius: 10px"
                >
                  <div class="pe-1" style="width: 40%">
                    <img
                      :src="i.condition.icon"
                      class="w-100"
                      style="animation: slide 2s ease-in-out infinite alternate"
                    />
                  </div>
                  <div class="text-end" style="width: 60%">
                    <p
                      class="my-0 position-absolute"
                      style="
                        line-height: 15px;
                        font-size: 0.75em;
                        top: 15px;
                        right: 10px;
                      "
                    >
                      <i class="fa-regular fa-clock me-2"></i>
                      {{ customTime(i.time) }}
                    </p>
                    <p
                      class="my-0 mt-3 f-status"
                      style="line-height: 15px; text-transform: capitalize"
                    >
                      {{ i.condition.text }}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
    <div class="ex-icon">
      <i class="fa-solid fa-briefcase"></i>
    </div>
    <div class="experience">
      <div class="title">Experience</div>
      <div class="timeline d-flex align-items-end">
        <div class="timeline-sidebar">
          <div
            class="ts-list pointer"
            :class="tab == 1 ? 'active shadow-sm' : ''"
            @click="tab = 1"
          >
            <div class="ts-year">2021-Current</div>
            <div class="ts-pos">Software Engineer Senior</div>
            <hr class="my-1" />
            <div class="ts-year">2019-2021</div>
            <div class="ts-pos">Software Engineer Associate</div>
          </div>
          <div
            class="ts-list pointer"
            :class="tab == 2 ? 'active shadow-sm' : ''"
            @click="tab = 2"
          >
            <div class="ts-year">2015-2018</div>
            <div class="ts-pos">IT Staff</div>
          </div>
          <div
            class="ts-list pointer"
            :class="tab == 3 ? 'active shadow-sm' : ''"
            @click="tab = 3"
          >
            <div class="ts-year">2016</div>
            <div class="ts-pos">Web Developer (Internship)</div>
          </div>
        </div>
        <div class="timeline-content text-end">
          <transition name="slide">
            <div v-if="tab == 1">
              PT. Jawara Edukasih Indonesia
              <hr class="my-1" />
              Managing all-in's website, such as maintaining, designing and
              improving the website performance. After that i have made several
              systems from planning until implementation, and this system can
              help and make it easier for company to improve performance.
            </div>
          </transition>

          <transition name="slide">
            <div v-if="tab == 2">
              Taman Cerdas Puntadewa
              <hr class="my-1" />
              Guide childs around 7th until 15th years old to learn about
              computer science, such as how to use computer from turning on and
              off the computer, using microsoft office and painting with windows
              feature etc.
            </div>
          </transition>

          <transition name="slide">
            <div v-if="tab == 3">
              CV. Jogja Web Center
              <hr class="my-1" />
              Learn about how to build and maintance the website with wordpress
              platform. After that for my taks, i have made the financial system
              to help managing company's finance with PHP Native.
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import moment from "moment";
import moment from "moment-timezone";
import Swal from "sweetalert2";

export default {
  name: "experienceComp",
  data() {
    return {
      tab: 1,
      city: "Srengseng Jakarta",
      localtime: "",
      locationWeather: [],
      currentWeather: [],
      forecastWeather: [],
      nextHour: [],
      yourLocation: {
        latitude: "",
        longitude: "",
      },
    };
  },
  methods: {
    loading() {
      Swal.fire({
        width: "100px",
        allowOutsideClick: false,
      });
      Swal.showLoading();
    },

    customDate(d) {
      let day = d.substr(0, 10);
      return moment(day).format("LL");
    },

    customTime(d) {
      return moment(d).format("LT");
    },

    showPosition(position) {
      this.yourLocation.latitude = position.coords.latitude;
      this.yourLocation.longitude = position.coords.longitude;
    },

    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    },

    checkLocation(city) {
      this.city = city;
      this.getWeather(city);
    },

    async getWeather(city = "Srengseng Jakarta") {
      this.loading();
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/forecast.json?key=61d9ab06af804125b17123311221507&q=" +
            city +
            "&aqi=yes"
        );

        this.locationWeather = response.data.location;
        this.currentWeather = response.data.current;
        this.forecastWeather = response.data.forecast;

        this.nextHour = [];
        let array = this.forecastWeather.forecastday[0].hour;
        array.forEach((i) => {
          if (i.time_epoch > this.locationWeather.localtime_epoch) {
            this.nextHour.push(i);
          }
        });
      } catch (e) {
        console.log(e.response);
      }
      Swal.close();
    },

    async getWetaherByLocation(i) {
      this.city = "Location";

      this.loading();
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/forecast.json?key=61d9ab06af804125b17123311221507&q=" +
            i.latitude +
            "," +
            i.longitude +
            "&aqi=yes"
        );

        this.locationWeather = response.data.location;
        this.currentWeather = response.data.current;
        this.forecastWeather = response.data.forecast;

        this.nextHour = [];
        let array = this.forecastWeather.forecastday[0].hour;
        array.forEach((i) => {
          if (i.time_epoch > this.locationWeather.localtime_epoch) {
            this.nextHour.push(i);
          }
        });
      } catch (e) {
        console.log(e.response);
      }
      Swal.close();
    },
  },
  created() {
    this.getWeather();
    this.getLocation();
  },
};
</script>

<style lang="scss">
.card-weather {
  // background: linear-gradient(-45deg, var(--color-6) 20%, var(--color-4) 100%);
  background: var(--color-2);
  color: var(--text-color-2);
}

.f-status {
  font-size: 0.9em;
}

.ex-icon {
  position: absolute;
  right: -30px;
  font-size: 8em;
  transform: rotate(-30deg) !important;
  opacity: 0.1;
  color: var(--color-1);
  z-index: 0;
}

.experience {
  transition: all 0.4s;
  position: relative;
  z-index: 1;
  padding: 40px 20px;
}

.timeline {
  width: 100%;
}

.timeline-sidebar {
  width: 40%;
}

.ts-list {
  display: block;
  padding: 10px 5px 10px 15px;
  border-left: 5px solid var(--color-5);
}

.ts-list::before {
  position: absolute;
  content: "";
  border-radius: 10px;
  height: 20px;
  width: 20px;
  margin-top: -2px;
  margin-left: -27px;
  background: var(--color-4);
  transition: all 0.4s;
}

.ts-list.active::before {
  background: var(--color-1);
}

.ts-list.active {
  border-right: 2px solid var(--color-3);
  // background-image: linear-gradient(60deg, var(--four) 50%, #fff);
  // color: var(--text-color-3);
  // border-radius: 0 10px 10px 0;
}

.ts-year {
  font-size: 0.7em;
}

.ts-pos {
  font-size: 0.8em;
}

.timeline-content {
  padding-left: 20px;
  width: 60%;
  font-size: 0.9em;
}

.btn-city {
  background: var(--color-4);
  color: var(--text-color-4);
  border-radius: 20px;
  border: 0;
  transition: all 0.3s;
}

.btn-city:hover {
  background: var(--color-6);
  color: var(--text-color-6);
}

.btn-city.active {
  background: var(--color-5);
  color: var(--text-color-5);
}

.exp-active {
  background: var(--four) !important;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-enter-active {
  transition: all 0.6s ease-out;
}
s .slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>