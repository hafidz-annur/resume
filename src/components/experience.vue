<template>
  <div id="experience">
    <div class="row justify-content-center" v-if="currentWeather?.length != 0">
      <div class="col-11">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <div class="text-start">
            <button
              class="btn btn-city btn-sm py-1 px-3 shadow-sm me-1"
              :class="city == 'Srengseng' ? 'active' : ''"
              @click="checkLocation('Srengseng')"
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
                  />
                </div>
                <p class="my-0" style="text-transform: capitalize">
                  {{ currentWeather.condition.text }}
                </p>
              </div>
              <div class="ps-4 text-end" style="width: 60%">
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
              }"
              class="pb-3 mt-2"
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
                    bg-white
                    my-1
                    text-muted
                    p-2
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  style="border-radius: 10px"
                >
                  <div class="pe-3" style="width: 40%">
                    <img :src="i.condition.icon" class="w-100" />
                  </div>
                  <div class="text-end" style="width: 60%">
                    <p
                      class="text-muted my-0 mb-2"
                      style="line-height: 15px; font-size: 0.8em"
                    >
                      {{ customTime(i.time) }}
                    </p>
                    <p
                      class="text-muted my-0"
                      style="
                        line-height: 15px;
                        font-size: 1em;
                        text-transform: capitalize;
                      "
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
          <div class="" v-if="tab == 1">
            PT. Jawara Edukasih Indonesia
            <hr class="my-1" />
            Managing all-in's website, such as maintaining, designing and
            improving the website performance. After that i have made several
            systems from planning until implementation, and this system can help
            and make it easier for company to improve performance.
          </div>
          <div class="" v-if="tab == 2">
            Taman Cerdas Puntadewa
            <hr class="my-1" />
            Guide childs around 7th until 15th years old to learn about computer
            science, such as how to use computer from turning on and off the
            computer, using microsoft office and painting with windows feature
            etc.
          </div>
          <div class="" v-if="tab == 3">
            CV. Jogja Web Center
            <hr class="my-1" />
            Learn about how to build and maintance the website with wordpress
            platform. After that for my taks, i have made the financial system
            to help managing company's finance with PHP Native.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "experienceComp",
  data() {
    return {
      tab: 1,
      city: "Srengseng",
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
    customDate(d) {
      return moment(d).format("LLL");
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

    async getWeather(city = "Srengseng") {
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
        let currentTime = this.locationWeather.localtime;
        array.forEach((i) => {
          if (i.time > currentTime) {
            this.nextHour.push(i);
          }
        });
      } catch (e) {
        console.log(e.response);
      }
    },

    async getWetaherByLocation(i) {
      this.city = "Location";
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
        let currentTime = this.locationWeather.localtime;
        array.forEach((i) => {
          if (i.time > currentTime) {
            this.nextHour.push(i);
          }
        });
      } catch (e) {
        console.log(e.response);
      }
    },
  },
  created() {
    this.getWeather();
    this.getLocation();
  },
};
</script>

<style lang="scss">
.ex-icon {
  position: absolute;
  right: -30px;
  font-size: 8em;
  transform: rotate(-30deg);
  opacity: 0.2;
  color: var(--primary);
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
  border-left: 5px solid var(--primary);
}

.ts-list::before {
  position: absolute;
  content: "";
  border-radius: 10px;
  height: 20px;
  width: 20px;
  margin-top: -2px;
  margin-left: -27px;
  background: var(--third);
  transition: all 0.4s;
}

.ts-list.active::before {
  background: var(--secondary);
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
  background: var(--secondary);
  color: var(--four);
  border-radius: 20px;
  border: 0;
  transition: all 0.3s;
}

.btn-city.active {
  background: var(--four);
  color: var(--primary);
}
</style>