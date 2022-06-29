<template>
  <div id="personal">
    <div class="intro">
      <div class="name">Hi, I am Hafidz <br /></div>
      Software Engineer Senior
    </div>
    <div class="card border-0">
      <div class="card-body">
        <div class="profil">
          <div class="desc">
            I have experience in web developer since 2018. I have developed many
            web-apps using PHP native, CI Framework, Laravel Framework,
            Bootsrap, VueJs etc
          </div>
          <div class="foto">
            <img src="@/assets/img/hafidz.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal-vue",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
html {
  --bg-card-personal: #0f172f;
  --bg-card-gradient: linear-gradient(
    90deg,
    #0f172f 54%,
    #2d395e 74%,
    #667194 100%
  );
}

/* Define styles for the root window with dark - mode preference */
html[data-theme="dark"] {
  --bg-card-personal: #77a6c8;
  --bg-card-gradient: linear-gradient(
    90deg,
    #ffffff 54%,
    #91bcdb 74%,
    #77a6c8 100%
  );
}

#personal {
  transition: all 0.4s;
  padding: 0 20px;
  background: var(--bg-color-primary);
}

.card {
  transition: all 0.4s;
  background: var(--bg-card-personal);
  background: var(--bg-card-gradient);
  color: var(--card-text);
  border-radius: 20px;
}

.name {
  font-size: 1.5em;
  margin-bottom: -10px;
}

.intro {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.profil {
  position: relative;
  display: flex;
}

.desc {
  width: 60%;
  font-size: 0.8em;
}

.foto {
  position: relative;
  // overflow-x: hidden;
  width: 40%;
}

.foto img {
  position: absolute;
  bottom: -15px;
  right: -10px;
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .foto img {
    width: 120%;
  }
}
</style>