<template>
  <div id="sosmed">
    <div class="title text-end">Social Media</div>
    <div class="row align-items-center g-2">
      <div class="col-7">
        <div class="sosmed-icon">
          <i :class="desc.icon"></i>
        </div>
        <div class="sosmed-card">
          <label class="d-block">{{ desc.type }}</label>
          <div class="sosmed-name">{{ desc.name }}</div>
          <button class="sosmed-btn shadow mt-3">
            {{ desc.button }} <i class="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
      <div class="col-5">
        <div class="row row-cols-3 g-2">
          <div class="col" @click="checkTab('email')">
            <div class="icon" :class="tabIcon == 'email' ? 'active' : ''">
              <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
          <div class="col" @click="checkTab('ig')">
            <div class="icon" :class="tabIcon == 'ig' ? 'active' : ''">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div class="col" @click="checkTab('fb')">
            <div class="icon" :class="tabIcon == 'fb' ? 'active' : ''">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </div>
          <div class="col" @click="checkTab('linkedin')">
            <div class="icon" :class="tabIcon == 'linkedin' ? 'active' : ''">
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div class="col" @click="checkTab('github')">
            <div class="icon" :class="tabIcon == 'github' ? 'active' : ''">
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
          <div class="col" @click="checkTab('twitter')">
            <div class="icon" :class="tabIcon == 'twitter' ? 'active' : ''">
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "socialMedia",
  data() {
    return {
      desc: {
        icon: "fa-solid fa-envelope",
        type: "Email",
        name: "Hafidz.bdt@gmail.com",
        link: "mailto:hafidz.bdt@all-inedu.com",
        button: "Send a Email",
      },
      tabIcon: "email",
    };
  },
  methods: {
    checkTab(n) {
      this.tabIcon = n;
      if (n == "email") {
        this.desc.icon = "fa-solid fa-envelope";
        this.desc.type = "Email";
        this.desc.name = "Hafidz.bdt@gmail.com";
        this.desc.link = "mailto:hafidz.bdt@all-inedu.com";
        this.desc.button = "Send a Email";
      } else if (n == "ig") {
        this.desc.icon = "fa-brands fa-instagram";
        this.desc.type = "Instagram";
        this.desc.name = "Hafidz Annur";
        this.desc.link = "https://www.instagram.com/hafidz_annur/";
        this.desc.button = "Follow";
      } else if (n == "fb") {
        this.desc.icon = "fa-brands fa-facebook-f";
        this.desc.type = "Facebook";
        this.desc.name = "Hafidz Annur";
        this.desc.link = "https://www.instagram.com/hafidz_annur/";
        this.desc.button = "Add to Friend";
      } else if (n == "linkedin") {
        this.desc.icon = "fa-brands fa-linkedin";
        this.desc.type = "Linkedin";
        this.desc.name = "Hafidz Annur";
        this.desc.link = "https://www.instagram.com/hafidz_annur/";
        this.desc.button = "Follow";
      } else if (n == "github") {
        this.desc.icon = "fa-brands fa-github";
        this.desc.type = "Github";
        this.desc.name = "Hafidz Annur";
        this.desc.link = "https://www.instagram.com/hafidz_annur/";
        this.desc.button = "Visit Now";
      } else if (n == "twitter") {
        this.desc.icon = "fa-brands fa-twitter";
        this.desc.type = "Twitter";
        this.desc.name = "Hafidz Annur";
        this.desc.link = "https://www.instagram.com/hafidz_annur/";
        this.desc.button = "Follow";
      }
    },
  },
  created() {},
};
</script>

<style lang="scss">
:root {
  --bg-sosmed: #f9dad5;
  --card-bg-sosmed: #11184f;
  --card-bg-sosmed-active: #ea7a66;
  --card-color-sosmed: #fff;
  --card-color-sosmed-active: #fff;
  --btn-bg: #ea7a66;
  --btn-color: #fff;
}

:root[data-theme="dark"] {
  --bg-sosmed: #11184f;
  --card-bg-sosmed: #dedede;
  --card-bg-sosmed-active: #6474e5;
  --card-color-sosmed: #000;
  --card-color-sosmed-active: #fff;
  --btn-bg: #5959a3;
  --btn-color: #fff;
}

#sosmed {
  transition: all 0.4s;
  background: var(--bg-sosmed);
  margin-top: -50px;
  padding: 80px 20px 30px 20px;
  border-radius: 40px 40px 0 0;
}

.col-7 {
  position: relative;
}

.sosmed-card label {
  font-size: 0.8em;
}

.sosmed-icon {
  position: absolute;
  right: 20px;
  font-size: 3em;
  bottom: -15px;
  z-index: 0;
  color: #c7c7c782;
}

.sosmed-name {
  position: relative;
  z-index: 1;
  font-size: 1.1em;
}

.sosmed-btn {
  background: var(--btn-bg);
  color: var(--btn-color);
  padding: 5px 15px;
  font-size: 0.8em;
  border: 0;
  border-radius: 20px;
}

.icon {
  width: 100%;
  background: var(--card-bg-sosmed);
  color: var(--card-color-sosmed);
  box-shadow: var(--card-shadow);
  padding: 7px 10px;
  text-align: center;
  border-radius: 10px;
  font-size: 1.3em;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.icon.active {
  transform: scale(1.1);
  background: var(--card-bg-sosmed-active);
  color: var(--card-color-sosmed-active);
}
</style>