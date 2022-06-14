<template>
  <div class="resume">
    <v-personal />
    <v-sosmed />
    <v-experience />
    <v-edu />
    <v-skill />
    <v-hobby />
    <v-portofolio />

    <div class="menu-content">
      <div class="menu">
        <div class="menu-mode d-flex align-items-center">
          <div class="w-100 text-center p-3">
            <img
              src="@/assets/img/icon/brightness.svg"
              alt=""
              @click="checkMode('dark')"
              v-if="mode == ''"
            />
            <i
              class="fa-solid fa-moon fa-xl pointer"
              v-if="mode != ''"
              @click="checkMode('')"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Personal from "./components/personal";
import Sosmed from "./components/sosmed";
import Experience from "./components/experience";
import Education from "./components/education";
import Skill from "./components/skill";
import Hobby from "./components/hobby";
import Portofolio from "./components/portofolio";

export default {
  name: "App",
  components: {
    "v-personal": Personal,
    "v-sosmed": Sosmed,
    "v-experience": Experience,
    "v-edu": Education,
    "v-skill": Skill,
    "v-hobby": Hobby,
    "v-portofolio": Portofolio,
  },
  data() {
    return {
      mode: "",
    };
  },
  methods: {
    checkMode(theme) {
      this.mode = theme;
      document.documentElement.setAttribute("data-theme", theme);
    },
  },
};
</script>

<style lang="scss">
:root {
  --bg-menu: #11184f;
  --bg-color: #ea7a66;
}

/* Define styles for the root window with dark - mode preference */
:root[data-theme="dark"] {
  --bg-menu: rgb(128, 126, 126);
  --bg-color: #11184f;
}

.resume {
  padding-top: 30px !important;
}

#app {
  color: var(--text-primary-color);
  margin: 0;
}

.menu-content {
  position: relative !important;
  width: 100% !important;
}

.menu {
  transition: all 0.4s;
  position: fixed;
  z-index: 9999;
  bottom: 10px;
  width: 28%;
  margin-left: 1%;
  max-width: inherit;
  height: 60px;
  border-radius: 30px;
  background-image: radial-gradient(
    circle at 50% 10px,
    transparent 38px,
    var(--bg-menu) 37px
  );
  box-shadow: 0px 5px 10px 0px #adacac;
  -webkit-box-shadow: 0px 5px 10px 0px #adacac;
  -moz-box-shadow: 0px 5px 10px 0px #adacac;
}

.menu-mode {
  position: absolute;
  background: var(--bg-color);
  border-radius: 40px;
  left: 50%;
  margin-top: -23px;
  width: 65px;
  height: 65px;
  transform: translateX(-50%);
}
</style>
