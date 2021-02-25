<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground">
        
        <GridLayout>
            <!-- <YoutubePlayer id="player" src="Ml9pyQr7Cgc" apiKey="AIzaSyBKDRw6KAbQTXoLMu1kM37mevxg1QU_Wo0" height="800px" width="100%" @error="onError"/> -->
        </GridLayout>
        
    </Page>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {
      
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
