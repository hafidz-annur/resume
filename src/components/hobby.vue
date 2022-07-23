<template>
  <div id="hobby" data-aos="fade-up" data-aos-duration="1000">
    <div class="title mb-2">Hobbies</div>

    <Splide
      :options="{
        // autoplay: true,
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
  background: var(--color-6);
}

.card-icon {
  display: flex;
  align-items: center;
  height: 75px;
  background: var(--color-2);
  // background: linear-gradient(-90deg, var(--four), var(--third));
}

.card-icon img {
  animation: slide 2s ease-in-out infinite alternate;
}

.card-title {
  background: var(--color-5);
  color: var(--text-color-5);
  width: 100%;
  margin-left: 10%;
  padding-left: 40%;
  padding-right: 5%;
  min-height: 100px;
  border-radius: 15px;
}

.card-title h3 {
  font-size: 1.3em !important;
}
</style>