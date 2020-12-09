<template>
<main>
  <h1>{{ $t('replays.title') }}</h1>
  <TheReplayTable id="replayTable" />
</main>
</template>

<script>
export default {

}
</script>

<style>

#replayTable{
  width: 90%;
  display: flex;
  flex-direction: column;
}

</style>