<template>
  <div id="contact">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h6>Contact Us</h6>
          <form @submit.prevent="handleSubmit" class="mb-3">
            <div class="form-group mb-2">
              <input
                id="name"
                type="text"
                v-model="contact.name"
                class="form-control"
                placeholder="Full Name"
                required
              />
              <label for="name">Full Name</label>
            </div>
            <div class="form-group mb-2">
              <input
                id="email"
                type="email"
                v-model="contact.email"
                class="form-control"
                placeholder="Full Name"
                required
              />
              <label for="email">Email</label>
            </div>
            <div class="form-group mb-2">
              <textarea
                name=""
                id="message"
                cols="30"
                rows="5"
                class="form-control"
                v-model="contact.message"
                placeholder="Describe yourself here..."
                required
              ></textarea>
              <label for="message">Message</label>
            </div>
            <hr />
            <div class="text-end">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div
        class="row mb-3"
        v-if="this.$route.params.id == 'list' && messageList?.length != 0"
      >
        <div class="col-12">
          <h6>Message List</h6>
          <div class="list-group">
            <div class="list-group-item" v-for="i in messageList" :key="i">
              {{ i.name }}
            </div>
          </div>
          <div class="d-grid gap-2">
            <button
              class="btn btn-outline-danger"
              type="button"
              @click="removeALL"
            >
              Remove ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Services from "../Services";
import Swal from "sweetalert2";

export default {
  name: "contactUs",
  props: {
    messageList: Object,
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: "",
      },
      contact_list: [],
    };
  },
  methods: {
    toast(s, t) {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: s,
        title: t,
      });
    },

    handleSubmit() {
      Swal.showLoading();
      Services.create(this.contact)
        .then(() => {
          this.contact = {
            name: "",
            email: "",
            message: "",
          };
          this.toast("success", "Message sent successfully!");
        })
        .catch((e) => {
          console.log(e);
          Swal.close();
        });
      this.$emit("check", null);
    },

    removeALL() {
      Services.deleteAll();
      this.$emit("check", null);
    },
  },
  created() {},
};
</script>

<style scoped>
#contact {
  background: var(--color-6);
}

.form-control {
  box-shadow: none !important;
  border: 1px solid #dedede;
}

.form-control:focus {
  border: 1.5px solid var(--color-1);
}

.form-control::placeholder {
  color: transparent !important;
}

.form-control:valid {
  border: 1.5px solid var(--color-5);
}

.form-group {
  position: relative;
  padding-top: 5px;
}

input,
textarea {
  border-radius: 10px;
}

.form-group label {
  position: absolute;
  top: 12px;
  color: rgb(48, 48, 48);
  margin-left: 12px;
  transition: all 0.3s ease-in-out;
}

input:not(:placeholder-shown) + label,
textarea:not(:placeholder-shown) + label {
  background: var(--color-6);
  color: var(--text-color-6);
  border-radius: 5px;
  padding: 0 5px;
  top: -6px !important;
  margin-left: 10px;
  font-size: 0.8em;
}

.btn-primary {
  background: var(--color-1);
  border: none !important;
  border-radius: 15px;
  padding: 5px 20px;
  box-shadow: none !important;
}
</style>