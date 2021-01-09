<template>
  <main>
    {{ name }} {{ replays }}
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      name: 'name',
    }),
    ...mapState('replays', {
      replays: 'replaysTest',
    })
  }
}
</script>

<style></style>
