<template>
  <div id="hobby">
    <div class="title text-center">Hobbies</div>
    <div class="hb-content mt-4">
      <div
        :class="tab == 'game' ? 'active' : ''"
        class="hb-icon hb-1"
        @click="checkTab('game')"
      >
        <img src="@/assets/img/icon/game.webp" alt="" />
      </div>
      <div
        :class="tab == 'jogging' ? 'active' : ''"
        class="hb-icon hb-2"
        @click="checkTab('jogging')"
      >
        <img src="@/assets/img/icon/jogging.webp" alt="" />
      </div>
      <div class="hb-text d-flex align-items-center">
        <div class="w-100 text-center">
          {{ titleTab }}
        </div>
      </div>
      <div
        :class="tab == 'gitar' ? 'active' : ''"
        class="hb-icon hb-3"
        @click="checkTab('gitar')"
      >
        <img src="@/assets/img/icon/gitar.webp" alt="" />
      </div>
      <div
        :class="tab == 'musik' ? 'active' : ''"
        class="hb-icon hb-4"
        @click="checkTab('musik')"
      >
        <img src="@/assets/img/icon/musik.webp" alt="" />
      </div>
      <div
        :class="tab == 'movie' ? 'active' : ''"
        class="hb-icon hb-5"
        @click="checkTab('movie')"
      >
        <img src="@/assets/img/icon/movie.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hobbyComp",
  data() {
    return {
      tab: "game",
      titleTab: "Play Game",
    };
  },
  methods: {
    checkTab(n) {
      this.tab = n;
      if (n == "game") {
        this.titleTab = "Play Game";
      } else if (n == "jogging") {
        this.titleTab = "Jogging";
      } else if (n == "gitar") {
        this.titleTab = "Play Gitar";
      } else if (n == "musik") {
        this.titleTab = "Listen Music";
      } else if (n == "movie") {
        this.titleTab = "Watch Movie";
      }
    },
  },
};
</script>

<style lang="scss">
#hobby {
  border-radius: 40px 40px 0 0;
  margin-top: -30px;
  padding: 50px 20px 20px 20px;
  background: var(--background);
}

.hb-content {
  position: relative;
  height: 300px;
  /* background: red; */
  /* overflow: auto; */
}

.hb-icon {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  padding: 15px;
  background: var(--secondary);
  background-image: linear-gradient(45deg, var(--primary), var(--secondary));
  transition: all 0.3s ease-in-out;
}

.hb-icon.active {
  padding: 5px;
  background: var(--third);
  background-image: linear-gradient(45deg, var(--secondary), var(--third));
}

.hb-icon.hb-icon.active::after {
  width: 20px;
  height: 20px;
  background: red;
}

.hb-icon img {
  width: 100%;
}

.hb-text {
  position: absolute;
  left: 50%;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  transform: translateX(-50%);
  top: 32%;
  display: flex;
  padding: 10px;
  line-height: 0.9;
  font-size: 1.1rem;
}

.hb-1 {
  position: absolute;
  left: 50%;
  top: -4%;
  transform: translateX(-50%);
}

.hb-2 {
  position: absolute;
  left: 95%;
  transform: translateX(-95%);
  top: 23%;
}

.hb-3 {
  position: absolute;
  left: 75%;
  transform: translateX(-75%);
  top: 62%;
}

.hb-4 {
  position: absolute;
  left: 25%;
  transform: translateX(-25%);
  top: 62%;
}

.hb-5 {
  position: absolute;
  left: 5%;
  transform: translateX(-5%);
  top: 23%;
}
</style>