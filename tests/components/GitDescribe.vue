<template lang="html">
  <span>
    {{versionRaw}}
  </span>
</template>

<script>
export default {
  name: 'GitDescribe',
  data() {
    return {
      version: GIT_DESCRIBE
    };
  },
  computed: {
    versionRaw() {
      return this.version.raw;
    }
  }
};
</script>
