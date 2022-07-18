<template>
  <div id="portofolio">
    <div class="p-card">
      <h5 class="mb-3">Portfolio</h5>
      <Splide
        :options="{
          autoplay: true,
          type: 'loop',
          width: '100%',
          interval: 4000,
          gap: 15,
          type: 'loop',
          arrows: false,
          pagination: false,
          padding: { left: 0, right: 40 },
        }"
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
#portofolio {
  margin-top: 140px;
  background: var(--primary);
  background-image: linear-gradient(0deg, var(--secondary), var(--background));
  padding: 40px 20px 50px 20px;
  border-radius: 30px 30px 0 0;
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
  background: var(--primary);
  background-image: linear-gradient(45deg, var(--four), rgb(239, 230, 214));
  color: var(--primary);
  position: relative;
  width: 90%;
  margin: auto;
  z-index: 9;
  padding: 20px;
  font-size: 0.8em;
  margin-top: -40px;
  border-radius: 20px;
  text-align: center;
}
</style>