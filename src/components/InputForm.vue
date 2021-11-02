<template>
  <form
    class="container input-form needs-validation"
    action="submit"
    @submit.prevent="submit"
    ref="form"
  >
    <div class="mb-3">
      <label class="form-label" for="username">Username:</label
      ><input
        class="form-control"
        type="text"
        name="username"
        id="username"
        v-model="userToLoad"
        required
      />
      <p class="invalid-text" v-if="invalidUsername">
        Invalid username, please try a different one.
      </p>
    </div>
    <button class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { getUser } from "@/repository/github";
export default {
  name: "input-form",
  emits: {
    profileLoaded: null,
  },
  props: {
    initialLoad: String,
  },
  data() {
    return {
      userToLoad: "",
      invalidUsername: false,
    };
  },
  mounted() {
    if (this.initialLoad) {
      this.userToLoad = this.initialLoad;
      this.fetchUser();
    }
  },
  methods: {
    submit: async function () {
      this.$refs.form.classList.remove("was-validated");
      if (!this.$refs.form.checkValidity()) {
        return;
      }
      this.fetchUser();
    },
    fetchUser: async function () {
      const user = await getUser(this.userToLoad);
      if (!user) {
        this.invalidUsername = true;
        return;
      }
      this.$refs.form.classList.add("was-validated");
      this.invalidUsername = false;
      this.$emit("profileLoaded", {
        username: this.userToLoad,
        name: user.name,
        avatarUrl: user.avatar_url,
        bio: user.bio,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.input-form {
  margin-bottom: 1em;
}
.invalid-text {
  color: $form-feedback-invalid-color;
}
</style>
