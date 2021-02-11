<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground">
        <StackLayout>
            <Label text="TUTORIALS" height="200px"
                color="white" id="tutorials-txt"/>
            <Tabs height="150px" >
                <TabStrip class="tabs">
                    <TabStripItem id="vaziuojam">
                        <Label text="Basics"></Label>
                        <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Jumps"></Label>
                        <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Corners"></Label>
                        <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Extra"></Label>
                        <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
                    </TabStripItem>
                </TabStrip>

                <TabContentItem>
                    <GridLayout>
                        <Label text="Basics as asdasdasdasdasdasdassd"
                            class="h2 text-center">
                        </Label>
                    </GridLayout>
                </TabContentItem>
                <TabContentItem>
                    <GridLayout>
                        <Label text="Jumps"
                            class="h2 text-center">
                        </Label>
                    </GridLayout>
                </TabContentItem>
                <TabContentItem>
                    <GridLayout>
                        <Label text="Corners"
                            class="h2 text-center">
                        </Label>
                    </GridLayout>
                </TabContentItem>
                <TabContentItem>
                    <GridLayout>
                        <Label text="Extra"
                            class="h2 text-center">
                        </Label>
                    </GridLayout>
                </TabContentItem>
            </Tabs>
        </StackLayout>

    <!-- <StackLayout>
            <YoutubePlayer id="player" src="NauWNGKLvZ8" apiKey="AIzaSyBKDRw6KAbQTXoLMu1kM37mevxg1QU_Wo0"/>
        </StackLayout> -->

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
    .mainBackground {
    background-image: url('~/assets/InfoBackground.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.tabs {
    background-color:rgb(237, 28, 36);
}
#tutorials-txt {
font-family: "321Perfect";
  font-size: 50px;
  text-align: center;
  margin-top: 8%;
  margin-bottom: 2%;
}
TabStrip {
    selected-item-color: white;
    un-selected-item-color: black;
    selected-item-background-color: white;
}
</style>
