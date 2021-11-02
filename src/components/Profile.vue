<template>
  <article class="profile container">
    <h3>{{ profileTitle }}</h3>
    <figure class="figure">
      <img v-show="!isAvatarLoaded" src="placeholder.png" />
      <img
        v-show="isAvatarLoaded"
        width=""
        @load="onLoad"
        :src="avatarUrl"
        :alt="'Profile picture for' + name"
        class="figure-img img-fluid img-thumbnail rounded"
      />
      <figcaption class="figure-caption">{{ profileBio }}</figcaption>
    </figure>
  </article>
</template>
<script>
export default {
  name: "profile",
  props: {
    name: String,
    avatarUrl: String,
    bio: String,
  },
  data() {
    return { isAvatarLoaded: false };
  },
  computed: {
    profileTitle() {
      return this.name || "<No name provided>";
    },
    profileBio() {
      return this.bio || "<No bio provided>";
    },
  },
  methods: {
    onLoad() {
      this.isAvatarLoaded = true;
    },
  },
};
</script>
<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.profile {
  border: 2px solid $secondary;
  margin-bottom: 1em;
}
</style>
