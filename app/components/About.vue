<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="infoBackground">

        <StackLayout orientation="vertical" class="about-txt-background">
          <Label text="ABOUT" height="200px"
                color="white" id="about-txt"/>

          <TextView class="info-txt" editable="false" width="80%">
            <FormattedString >
              <Span text="This product is created by Ignas Lamanauskas during the 3rd year of Computer Science course in Middlesex University.

                  " fontWeight="bold"/>
              <Span text="App was developed as a final individual project for third year of Computer Science and not meant for production.
              
              " fontWeight="bold"/>
              <Span text="App main functionality is to scan the light of the KTM's and Husqvarna's FI light and detect an error of electrical or mechanical issue.

              Other functionalities is Map with tracks in Lithuania, tutorials of how to get better on riding motorcycle and best regular settings for KTM and Huqsvarna dirt bikes. " fontWeight="bold" />
            </FormattedString>
          </TextView>
        </StackLayout>
    </Page>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  };
</script>

<style>
.infoBackground {
    background-image: url('~/assets/InfoBackground.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }
.topTab {
    background-color: transparent;
    font-size: 10px;
    margin-top: 50px;
}
#about-txt {
  font-family: "321Perfect";
  font-size: 50px;
  text-align: center;
  margin-top: 300px;
}
.info-txt {
  margin-top: 100px;
  color: white;
  font-size: 15px;
}
</style>
