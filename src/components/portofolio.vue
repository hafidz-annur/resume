<template>
  <div id="portofolio">
    <div class="p-card">
      <h5 class="mb-3">Portfolio</h5>
      <Splide
        :options="{
          // autoplay: true,
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
          class="position-relative overflow-hidden shadow-sm"
          v-for="i in details"
          :key="i"
        >
          <div
            class="card-pt position-relative overflow-hidden py-2"
            style="border-radius: 10px"
          >
            <div class="p-slide">
              <img
                :src="require('@/assets/img/portofolio/' + i.img)"
                alt="Resume"
              />
            </div>
            <div class="p-desc">
              <div class="">
                <i class="fa-solid fa-circle-info mb-2"></i> <br />
                {{ i.desc }}
              </div>
            </div>
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
  margin-top: -20px;
  background: var(--color-6);
  padding: 40px 20px 50px 20px;
  border-radius: 30px 30px 0 0;
}

.p-card {
  position: relative;
  border-radius: 10px !important;
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
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 70%;
  background: var(--color-4);
  color: var(--text-color-4);
  margin: auto;
  z-index: 9;
  padding: 20px;
  font-size: 1em;
  border-radius: 0 0 10px 10px;
  text-align: center;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.card-pt:hover .p-desc {
  bottom: 0;
}
</style>