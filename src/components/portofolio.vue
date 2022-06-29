<template>
  <div id="portofolio">
    <!-- <div class="p-card">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="p-slide">
              <img src="@/assets/img/portofolio/d-internal.webp" alt="" />
            </div>
            <div class="p-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ut eveniet eaque commodi minus amet, voluptatum libero aspernatur
              quas corrupti praesentium animi natus nobis porro. Commodi
              voluptate sunt eaque adipisci.
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/portofolio/d-internship.webp" alt="" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/portofolio/d-edufair.webp" alt="" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/portofolio/d-career-module.webp" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div> -->

    <div class="p-card">
      <h5 class="text-center mb-3">Portfolio</h5>
      <Splide
        :options="{
          rewind: true,
          width: '100%',
          gap: 15,
          type: 'loop',
          padding: { left: 40, right: 40 },
        }"
        class="pb-5"
      >
        <SplideSlide
          class="position-relative overflow-hidden"
          v-for="i in details"
          :key="i"
        >
          <div class="p-slide">
            <img
              :src="require('@/assets/img/portofolio/' + i.img)"
              alt="Resume"
            />
          </div>
          <div class="p-desc">
            {{ i.desc }}
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
export default {
  name: "portofolioComp",
  components: {},
  data() {
    return {
      details: [
        {
          img: "d-internal.webp",
          desc: "This system is used to manage client data, business development, finance and employees.",
        },
        {
          img: "d-edufair.webp",
          desc: "This system is used to help students, parents conduct 1on1 meetings with admissions from several universities in the world",
        },
        {
          img: "d-essay.webp",
          desc: "This system is used to manage client data, business development, finance and employees.",
        },
        {
          img: "d-internship.webp",
          desc: "This system is used to help students do internships with partner companies.",
        },
        {
          img: "d-career-module.webp",
          desc: "This system is used to provide student guidebooks or career modules, which can help students choose the right major.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
:root {
  --p-bg: #dedede;
  --card-bg: #ea7a66;
  --card-color: #fff;
}
:root[data-theme="dark"] {
  --p-bg: #bbbbbb3a;
  --card-bg: #e9e9e9;
  --card-color: #ea7a66;
}

#portofolio {
  margin-top: 140px;
  background: var(--p-bg);
  padding: 40px 20px 90px 20px;
}

.p-card {
  position: relative;
  border-radius: 10px !important;
  margin-top: -150px;
}

.p-slide img {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s;
}

.p-slide img:hover {
  transform: scale(1.1);
}

.p-desc {
  background: var(--card-bg);
  color: var(--card-color);
  position: relative;
  width: 80%;
  margin: auto;
  z-index: 9;
  padding: 20px;
  font-size: 0.8em;
  margin-top: -40px;
  border-radius: 20px;
  text-align: center;
}

.p-desc:hover .p-slide img {
  background: red;
}
</style>