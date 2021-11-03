<template>
  <h1>Github Profiles</h1>
  <div class="mb-3">
    <p>
      Use the text field to input a username, for which a github profile should
      be loaded
    </p>
  </div>
  <input-form :initialLoad="initialUsername" @profileLoaded="onProfileLoaded" />
  <section class="container">
    <h2>Loaded profiles</h2>
    <p v-if="profiles.length === 0">No profiles loaded</p>
    <div class="container">
      <div
        class="
          row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4
          g-2 g-lg-3
        "
      >
        <profile
          v-for="profile in profiles"
          :key="profile.username"
          :name="profile.name"
          :avatarUrl="profile.avatarUrl"
          :bio="profile.bio"
          class="col"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Profile from "@/components/Profile.vue";
import InputForm from "@/components/InputForm.vue";

// @ is an alias to /src
export default {
  name: "GithubProfiles",
  components: { Profile, InputForm },
  props: { initialUsername: String },
  data() {
    return {
      profiles: [],
    };
  },
  methods: {
    onProfileLoaded(profile) {
      if (this.profiles.find((p) => p.username === profile.username)) {
        return;
      }
      this.profiles.unshift(profile);
    },
    getProfilesRow(rowNumber) {
      const lowerLimit = (rowNumber - 1) * 3;
      const upperLimit = lowerLimit + 3;
      console.log(rowNumber, lowerLimit, upperLimit);
      return this.profiles.filter(
        (_, index) => index >= lowerLimit && index < upperLimit
      );
    },
  },
  computed: {
    rows() {
      return Math.floor(this.profiles.length / 3) + 1;
    },
  },
};
</script>
<style lang="scss" scoped></style>
