<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground">

        <StackLayout>
          <YoutubePlayer id="player" src="NauWNGKLvZ8" apiKey="AIzaSyBKDRw6KAbQTXoLMu1kM37mevxg1QU_Wo0"/>
        </StackLayout>
    </Page>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style>
.mainBackground {
    background-image: url('~/assets/InfoBackground.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }
</style>
