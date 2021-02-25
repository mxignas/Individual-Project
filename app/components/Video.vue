<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground">
        <StackLayout>
            <Label text="TUTORIALS" height="200px"
            color="white" id="tutorials-txt"/>

        <Tabs selectedIndex="0">
        <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
        <TabStrip class="tabs">
            <TabStripItem id="vaziuojam">
                <Label text="Basics"/>
                <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Jumps"/>
                <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Corners"/>
                <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Extra"/>
                <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
            </TabStripItem>
        </TabStrip>
    
        <TabContentItem class="try">
            <ScrollView orientation="vertical">
                <GridLayout rows="200 200 200 200 200 200">
                    <Image
                        src="~/assets/youtube.png" stretch="aspectFit" row="0" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="1"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                    <Image
                        src="~/assets/youtube.png" stretch="aspectFit" row="2" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="3"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                    <Image
                        src="~/assets/youtube.png" stretch="aspectFit" row="4" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="5"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                </GridLayout>
            </ScrollView>
        </TabContentItem>
        <TabContentItem style="background: transparent; background-color: transparent;">
            <ScrollView orientation="vertical">
                <GridLayout rows="200 200 200 200 200 200">
                    <Image src="~/assets/youtube.png" stretch="aspectFit" row="0" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="1"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                    <Image src="~/assets/youtube.png" stretch="aspectFit" row="2" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="3"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                    <Image src="~/assets/youtube.png" stretch="aspectFit" row="4" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="5"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                </GridLayout>
            </ScrollView>
        </TabContentItem>
        <TabContentItem>
            <ScrollView orientation="vertical">
                <GridLayout rows="200 200 200 200 200 200">
                    <Image src="~/assets/youtube.png" stretch="aspectFit" row="0" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="1"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                    <Image src="~/assets/youtube.png" stretch="aspectFit" row="2" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="3"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                    <Image src="~/assets/youtube.png" stretch="aspectFit" row="4" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="5"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                </GridLayout>
            </ScrollView>
        </TabContentItem>
        <TabContentItem>
            <ScrollView orientation="vertical">
                <GridLayout rows="200 200 200 200 200 200">
                    <Image src="~/assets/youtube.png" stretch="aspectFit" row="0" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="1"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                    <Image src="~/assets/youtube.png" stretch="aspectFit" row="2" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="3"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                    <Image src="~/assets/youtube.png" stretch="aspectFit" row="4" class="Youtube_Pic" @onTap="YoutubeLink()"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" row="5"
                        text="Title: first basic video about bla bla bla" textWrap="true"/>
                </GridLayout>
            </ScrollView>
        </TabContentItem>
    

</Tabs>
</StackLayout>

</Page>
</template>

<script>
import { Utils } from "@nativescript/core";
  export default {
    data() {
        return {

        }
      },
      methods: {
          YoutubeLink () {
              Utils.openUrl("https://www.youtube.com/")
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
    height: 160px;
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
    background-color: blue;    
}
TabContentItem {
    background-color:transparent;
}
.try {
    background-color:transparent;
}
.Youtube_Pic {
    margin-top: 50px;
}
.text_below_youtube {
    color:white;
}
</style>
