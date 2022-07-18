<template>
  <div id="hobby">
    <div class="title mb-2">Hobbies</div>

    <Splide
      :options="{
        autoplay: true,
        type: 'loop',
        perPage: 1,
        interval: 2000,
        width: '100%',
        gap: 20,
        arrows: false,
        pagination: false,
        padding: { left: 0, right: 130 },
      }"
    >
      <SplideSlide class="py-2">
        <div class="card-outline d-flex align-items-center">
          <div
            class="position-absolute card-icon p-1 px-4 shadow-sm"
            style="width: 45%; border-radius: 15px"
          >
            <img src="@/assets/img/icon/game.webp" class="w-100" />
          </div>
          <div class="d-flex card-title align-items-center shadow-sm">
            <h3 class="my-0">Play Game</h3>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="py-2">
        <div class="card-outline d-flex align-items-center">
          <div
            class="position-absolute card-icon p-1 px-4 shadow-sm"
            style="width: 45%; border-radius: 15px"
          >
            <img src="@/assets/img/icon/jogging.webp" class="w-100" />
          </div>
          <div class="d-flex card-title align-items-center shadow-sm">
            <h3 class="my-0">Jogging</h3>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="py-2">
        <div class="card-outline d-flex align-items-center">
          <div
            class="position-absolute card-icon p-1 px-4 shadow-sm"
            style="width: 45%; border-radius: 15px"
          >
            <img src="@/assets/img/icon/musik.webp" class="w-100" />
          </div>
          <div class="d-flex card-title align-items-center shadow-sm">
            <h3 class="my-0">Listen Music</h3>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="py-2">
        <div class="card-outline d-flex align-items-center">
          <div
            class="position-absolute card-icon p-1 px-4 shadow-sm"
            style="width: 45%; border-radius: 15px"
          >
            <img src="@/assets/img/icon/movie.webp" class="w-100" />
          </div>
          <div class="d-flex card-title align-items-center shadow-sm">
            <h3 class="my-0">Watch a Movie</h3>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="py-2">
        <div class="card-outline d-flex align-items-center">
          <div
            class="position-absolute card-icon p-1 px-4 shadow-sm"
            style="width: 45%; border-radius: 15px"
          >
            <img src="@/assets/img/icon/gitar.webp" class="w-100" />
          </div>
          <div class="d-flex card-title align-items-center shadow-sm">
            <h3 class="my-0">Play Gitar</h3>
          </div>
        </div>
      </SplideSlide>
    </Splide>
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

.card-icon {
  display: flex;
  align-items: center;
  min-height: 70px;
  background: linear-gradient(-90deg, var(--four), var(--third));
}

.card-icon img {
  animation: slide 2s ease-in-out infinite alternate;
}

.card-title {
  background: var(--secondary);
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  width: 100%;
  margin-left: 10%;
  padding-left: 40%;
  padding-right: 5%;
  min-height: 100px;
  border-radius: 15px;
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