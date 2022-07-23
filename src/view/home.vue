<template>
  <div id="resume" :class="loading ? 'pt-4' : ''">
    <transition>
      <div class="" v-if="loading">
        <div class="d-flex align-content-between align-items-center w-100 px-2">
          <div class="w-50">
            <!-- <div class="dropdown">
          <div
            class="btn btn-sm dropdown-toggle bg-light py-0 me-1"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <label v-if="lang == 'id'">
              <span class="fi fi-id me-2"></span> Indonesia
            </label>
            <label v-if="lang == 'en'">
              <span class="fi fi-um me-2"></span> English
            </label>
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li
              @click="changeLang"
              data-href="#googtrans(en|id)"
              data-lang="id"
            >
              <a class="dropdown-item" href="#">
                <span class="fi fi-id me-2"></span> Indonesia
              </a>
            </li>
            <li
              @click="changeLang"
              data-href="#googtrans(id|en)"
              data-lang="en"
            >
              <a class="dropdown-item" href="#">
                <span class="fi fi-um me-2"></span> English
              </a>
            </li>
          </ul>
        </div> -->
          </div>
          <div class="w-50">
            <div
              class="form-check form-switch float-end"
              style="position: relative; z-index: 10000001"
            >
              <input
                class="form-check-input"
                v-model="status"
                type="checkbox"
                role="switch"
                @change="checkStatus"
              />
            </div>
          </div>
        </div>
        <v-personal />
        <v-sosmed />
        <v-experience />
        <v-edu />
        <v-skill />
        <v-hobby />
        <v-portofolio />
        <v-contact :messageList="contact_list" @check="getData" />
        <v-footer />
      </div>
    </transition>
  </div>
</template>


<script>
import Services from "../Services";

import Personal from "@/components/personal";
import Sosmed from "@/components/sosmed";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skill from "@/components/skill";
import Hobby from "@/components/hobby";
import Portofolio from "@/components/portofolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default {
  name: "homeView",
  components: {
    "v-personal": Personal,
    "v-sosmed": Sosmed,
    "v-experience": Experience,
    "v-edu": Education,
    "v-skill": Skill,
    "v-hobby": Hobby,
    "v-portofolio": Portofolio,
    "v-contact": Contact,
    "v-footer": Footer,
  },
  data() {
    return {
      mode: "",
      status: true,
      lang: "",
      loading: false,
      contact_list: [],
    };
  },
  methods: {
    getData() {
      let list = [];
      Services.getAll().on("value", (snap) => {
        snap.forEach(function (childSnap) {
          list.push(childSnap.val());
        });
      });
      this.contact_list = list;
    },

    checkMode(theme) {
      this.mode = theme;
      document.documentElement.setAttribute("data-theme", theme);
    },

    changeLang(e) {
      const langHref = e.currentTarget.getAttribute("data-href");
      const lang = e.currentTarget.getAttribute("data-lang");

      const gooLang = document.getElementsByClassName("goog-te-combo");
      if (gooLang.length > 0) {
        this.lang = lang;
        localStorage.setItem("lang", lang);
        gooLang[0].value = lang;
        window.location = langHref;
        window.location.reload();
      }
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
    this.getData();

    // this.$router.push({ path: "/" });

    // if (localStorage.getItem("lang")) {
    //   this.lang = localStorage.getItem("lang");
    // } else {
    //   this.lang = "en";
    // }

    setTimeout(
      function () {
        this.loading = true;
      }.bind(this),
      1000
    );
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

#resume {
  background: var(--background);
  position: relative;
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
  z-index: 99999;
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
  margin-left: 0px;
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

// translate

.goog-logo-link {
  display: none !important;
}
.goog-te-gadget {
  color: transparent !important;
  display: none !important;
}
.goog-te-banner-frame {
  background: var(--background) !important;
  display: none !important;
}

#goog-gt-tt,
.goog-te-balloon-frame {
  display: none !important;
}
.goog-text-highlight {
  background: none !important;
  box-shadow: none !important;
}
</style>