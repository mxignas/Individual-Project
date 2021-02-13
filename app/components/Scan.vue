<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground">
        <ActionBar class="topTab">
            <Label text="Scan your issue"/>
        </ActionBar>

        <GridLayout>
            <YoutubePlayer id="player" src="NauWNGKLvZ8" apiKey="AIzaSyBKDRw6KAbQTXoLMu1kM37mevxg1QU_Wo0" height="300px" width="100%"/>
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    }
  };
</script>

<style>
.mainBackground {
    background-image: url('~/assets/InfoBackground.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }
.topTab {
    background-color: transparent;
    font-size: 10px;
}

</style>
