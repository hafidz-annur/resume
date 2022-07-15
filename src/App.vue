<template>
  <div class="resume">
    <div class="menu-top">
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          v-model="status"
          type="checkbox"
          role="switch"
          @change="checkStatus"
        />
      </div>
      <!-- <div class="btn-top">
        <img
          src="@/assets/img/icon/brightness.svg"
          alt=""
          @click="checkMode('dark')"
          v-if="mode == ''"
          class="pointer"
        />
        <i
          class="fa-solid fa-moon fa-1x pointer"
          v-if="mode != ''"
          @click="checkMode('')"
        ></i>
      </div> -->
    </div>
    <v-personal />
    <v-sosmed />
    <v-experience />
    <v-edu />
    <v-skill />
    <v-hobby />
    <v-portofolio />
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
      status: true,
    };
  },
  methods: {
    checkMode(theme) {
      this.mode = theme;
      document.documentElement.setAttribute("data-theme", theme);
    },

    checkStatus() {
      if (this.status) {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    },
  },
  created() {
    document.title = "My Resume - Hafidz Annur Fanany";
  },
};
</script>

<style lang="scss">
:root {
  --bg-menu: #fcbaae;
  --bg-color: #ea7a66;
}

/* Define styles for the root window with dark - mode preference */
:root[data-theme="dark"] {
  --bg-menu: rgb(128, 126, 126);
  --bg-color: #11184f;
}

.form-check-input:checked {
  background-color: #e65b4f;
  border-color: #e65b4f;
}

.resume {
  padding-top: 35px !important;
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

.menu-top {
  position: fixed;
  z-index: 9999;
  top: 15px;
  right: 15px;
  display: flex;
}

.btn-top {
  width: 35px;
  height: 35px;
  padding: 5px 8px;
  border-radius: 20px;
  background: var(--bg-menu);
}

.btn-top img {
  width: 100%;
}

.btn-top i {
  text-align: center;
  margin-top: 4px;
  font-size: 1.2em;
}

@media only screen and (min-width: 1200px) {
  .menu-top {
    right: 36%;
  }
}
</style>
