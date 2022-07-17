<template>
  <div id="personal">
    <div class="intro">
      <div class="name">Hi, I am Hafidz <br /></div>

      <VueWriter
        :array="[
          'Software Engineer Senior',
          'Web Developer',
          'Son of My Mother',
          'Husband of My Wife',
        ]"
        :eraseSpeed="40"
        :typeSpeed="50"
        :delay="3000"
      />
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
  created() {},
};
</script>

<style lang="scss">
#personal {
  transition: all 0.4s;
  padding: 0 20px;
}

.card {
  transition: all 0.4s;
  background: var(--primary);
  background-image: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--four);
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