<template>
  <div id="portofolio">
    <div class="p-card">
      <h5 class="mb-3">Portfolio</h5>

      <div class="row mb-2">
        <div class="col-12">
          <div class="detail-img">
            <img
              :src="require('@/assets/img/portofolio/' + detail.img)"
              class="w-100"
              style="border-radius: 15px"
            />
          </div>
          <div class="p-title">{{ detail.title }}</div>
          <div class="p-label">Description</div>
          <div class="p-description">
            {{ detail.desc }}
          </div>

          <div class="p-tech justify-content-between">
            <div class="text">Technology</div>
            <div class="p-icon">
              <div class="float-end">
                <div class="d-flex">
                  <i class="circle" v-for="i in detail.tech" :key="i">
                    <img :src="require('@/assets/img/icon/' + i)" />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Splide
        :options="{
          // autoplay: true,
          perPage: 3,
          width: '100%',
          interval: 4000,
          gap: 15,
          // type: 'loop',
          arrows: false,
          pagination: false,
          padding: { left: 0, right: 40 },
        }"
      >
        <SplideSlide
          class="position-relative overflow-hidden shadow-sm"
          v-for="i in list"
          :key="i"
        >
          <div class="card-list" @click="chekDetail(i)">
            <div class="img-sum position-relative overflow-hidden">
              <img
                :src="require('@/assets/img/portofolio/' + i.img)"
                class="w-100"
              />
              <div class="title-sum text-center">
                <h6 class="my-0">{{ i.title }}</h6>
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
      detail: {
        title: "Internal Operation System",
        img: "d-internal.webp",
        desc: "This system is used to manage client data, business development, finance and employees.",
        tech: [
          "back-end/codeigniter.svg",
          "back-end/mysql-4.svg",
          "front-end/html-1.svg",
          "front-end/css-3.svg",
          "front-end/jquery.svg",
          "front-end/bootstrap-5-1.svg",
        ],
      },
      list: [
        {
          title: "Internal Operation System",
          img: "d-internal.webp",
          desc: "This system is used to manage client data, business development, finance and employees.",
          tech: [
            "back-end/codeigniter.svg",
            "front-end/css-3.svg",
            "front-end/html-1.svg",
            "back-end/mysql-4.svg",
            "front-end/bootstrap-5-1.svg",
            "front-end/jquery.svg",
          ],
        },
        {
          title: "Edufair Website",
          img: "d-edufair.webp",
          desc: "This system is used to help students, parents conduct 1on1 meetings with admissions from several universities in the world",
          tech: [
            "back-end/codeigniter.svg",
            "front-end/html-1.svg",
            "back-end/mysql-4.svg",
            "front-end/jquery.svg",
            "front-end/css-3.svg",
            "front-end/bootstrap-5-1.svg",
          ],
        },
        {
          title: "Essay Editing Website",
          img: "d-essay.webp",
          desc: "This system is used to manage client data, business development, finance and employees.",
          tech: [
            "back-end/codeigniter.svg",
            "back-end/mysql-4.svg",
            "front-end/css-3.svg",
            "front-end/html-1.svg",
            "front-end/bootstrap-5-1.svg",
            "front-end/jquery.svg",
          ],
        },
        {
          title: "Internship Website",
          img: "d-internship.webp",
          desc: "This system is used to help students do internships with partner companies.",
          tech: [
            "back-end/laravel-2.svg",
            "back-end/mysql-4.svg",
            "front-end/html-1.svg",
            "front-end/jquery.svg",
            "front-end/css-3.svg",
            "front-end/bootstrap-5-1.svg",
          ],
        },
        {
          title: "Career Module Website",
          img: "d-career-module.webp",
          desc: "This system is used to provide student guidebooks or career modules, which can help students choose the right major.",
          tech: [
            "back-end/laravel-2.svg",
            "back-end/mysql-4.svg",
            "front-end/vue-9.svg",
            "front-end/html-1.svg",
            "front-end/css-3.svg",
            "front-end/jquery.svg",
            "front-end/bootstrap-5-1.svg",
          ],
        },
      ],
    };
  },
  methods: {
    chekDetail(i) {
      this.detail = i;
    },
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

.ription {
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

.card-pt:hover .ription {
  bottom: 0;
}

.detail-img {
  position: relative;
  overflow: hidden;
  height: 300px;
  border-radius: 15px;
}

.detail-img img {
  object-fit: cover;
  object-position: top;
  height: 100%;
  transition: all 0.3s ease-in-out;
}

.detail-img:hover img {
  transform: scale(1.1);
}

.p-title {
  font-size: 1.1em;
  font-weight: 600;
  margin: 15px 0 10px 0;
}

.p-label {
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 5px;
}

.p-description {
  font-size: 0.9em;
  margin-bottom: 10px;
}

.p-tech {
  display: flex;
  align-items: center;
  background: var(--color-2);
  border-radius: 15px;
  margin-top: 15px;
}

.p-tech .text {
  padding-left: 10px;
  font-size: 0.8em;
}

.p-icon {
  background: var(--color-1);
  padding: 5px 10px;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
}

.circle {
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 30px;
  margin: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle img {
  width: 60%;
}

.card-list {
  background: var(--color-5);
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
}

.img-sum {
  height: 110px;
}

.img-sum img {
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  animation: slide 3s ease-in-out alternate infinite;
}

.title-sum {
  position: absolute;
  background: var(--color-1);
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: all 0.3s;
}

.title-sum h6 {
  font-weight: 600 !important;
  color: var(--text-color-1);
}

.img-sum:hover .title-sum {
  left: 0;
}
</style>