<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground">
        <StackLayout>
            <Label text="TUTORIALS" height="200px"
            color="white" id="tutorials-txt"/>

        <Tabs selectedIndex="0">
        <!-- The bottom tab UI is created via TabStrip (the container) and TabStripItem (for each tab)-->
        <TabStrip class="tabs">
            <TabStripItem>
                <Label text="Basics"/>
                <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Corners"/>
                <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Jumps"/>
                <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Extra"/>
                <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
            </TabStripItem>
        </TabStrip>
    
<!-- Items in the TAB -->
<TabContentItem >
    <ScrollView orientation="vertical" >
        <ScrollView orientation="vertical" >
            <ListView for="basic in Basics" @itemTap="onVideoTap">
                <v-template>
                    <StackLayout>
                        <Image :src="`${basic.Picture}`" stretch="aspectFit"  class="Youtube_Pic"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" 
                            :text="`Title: ${basic.Title}`" textWrap="true"/>
                    </StackLayout>
                </v-template>
            </ListView>
        </ScrollView>
    </ScrollView>
</TabContentItem>
<TabContentItem >
    <ScrollView orientation="vertical" >
        <ScrollView orientation="vertical" >
            <ListView for="corner in Corners" @itemTap="onVideoTap">
                <v-template>
                    <StackLayout>
                        <Image :src="`${corner.Picture}`" stretch="aspectFit"  class="Youtube_Pic"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" 
                            :text="`Title: ${corner.Title}`" textWrap="true"/>
                    </StackLayout>
                </v-template>
            </ListView>
    </ScrollView>
    </ScrollView>
</TabContentItem>
<TabContentItem >
    <ScrollView orientation="vertical" >
        <ScrollView orientation="vertical" >
            <ListView for="jump in Jumps" @itemTap="onVideoTap">
                <v-template>
                    <StackLayout>
                        <Image :src="`${jump.Picture}`" stretch="aspectFit"  class="Youtube_Pic"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" 
                            :text="`Title: ${jump.Title}`" textWrap="true"/>
                    </StackLayout>
                </v-template>
            </ListView>
    </ScrollView>
    </ScrollView>
</TabContentItem>
<TabContentItem >
    <ScrollView orientation="vertical" >
        <ListView for="extra in Extras" @itemTap="onVideoTap">
            <v-template>
                <StackLayout>
                    <Image :src="`${extra.Picture}`" stretch="aspectFit"  class="Youtube_Pic"></Image>
                    <Label class="text_below_youtube h2 text-center m-10" 
                        :text="`Title: ${extra.Title}`" textWrap="true"/>
                </StackLayout>
            </v-template>
        </ListView>
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
            Basics: [
                {TubeLink: "https://www.youtube.com/watch?v=wIHQ6M-EZW0", Title: "Top 5 Tips on Getting Into Motocross - The ABSOLUTE BASICS", 
                Picture: "~/assets/Basics1.png"},
                {TubeLink: "https://www.youtube.com/watch?v=hTNlSMI-Zks", Title: "Top 5 Beginner Motocross Mistakes & How to Avoid Them", 
                Picture: "~/assets/Basics2.png"},
                {TubeLink: "https://www.youtube.com/watch?v=eo5OJY7dlGY", Title: "Five Essential Dirt Bike Skills and Tips", 
                Picture: "~/assets/Basics3.png"}
            ],
            Jumps: [
                {TubeLink: "https://www.youtube.com/watch?v=mS0_CfHNeYQ", Title: "How To Properly Jump a Dirt Bike - 3 Basic Techniques", 
                Picture: "~/assets/Jump1.png"},
                {TubeLink: "https://www.youtube.com/watch?v=25ETLZ4XB_U", Title: "How to Jump Your Dirt Bike Straight | 3 Easy Steps", 
                Picture: "~/assets/Jump2.png"},
                {TubeLink: "https://www.youtube.com/watch?v=eeLLE3ilrZ8", Title: "Learn How to Jump a Dirt Bike w/Adam Enticknap's Top 5 Tips", 
                Picture: "~/assets/Jump3.png"}
            ],
            Corners: [
                {TubeLink: "https://www.youtube.com/watch?v=CCUp7ur_WTs", Title: "Top 5 Pro Corner Dirt Bike Tips w/ Kris Keefer", 
                Picture: "~/assets/Corners1.png"},
                {TubeLink: "https://www.youtube.com/watch?v=fc4P-rJmEQg", Title: "How to Corner on a Dirt Bike - Basic Rut Technique", 
                Picture: "~/assets/Corners2.png"},
                {TubeLink: "https://www.youtube.com/watch?v=gSws2jFPjWo", Title: "Top 5 Dirt Bike Cornering Mistakes & Tips to Correct Them", 
                Picture: "~/assets/Corners3.png"}
            ],
            Extras: [
                {TubeLink: "https://www.youtube.com/watch?v=tPn4vFUAqIY&t", Title: "Title: How To: Ride Smooth and FAST!", 
                Picture: "~/assets/Extra1.png"},
                {TubeLink: "https://www.youtube.com/watch?v=ZSvghxUEFhk&t", Title: "5 Motocross Drills that will DRASTICALLY Improve your Dirt Bike Riding", 
                Picture: "~/assets/Extra2.png"},
                {TubeLink: "https://www.youtube.com/watch?v=Nq9GMkTxLz8", Title: "HOW TO WHIP", 
                Picture: "~/assets/Extra3.png"}
            ]
        }
      },
      methods: {
          YoutubeLink () {
              Utils.openUrl("https://www.youtube.com/")
          },
          onVideoTap(event) {
            Utils.openUrl(event.item.TubeLink)
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
}
TabContentItem {
    background-image: url('~/assets/VideoBackground.png');
    background-size: cover;
}
.Youtube_Pic {
    margin-top: 50px;
    border-width:2.5px;
    border-color: white;
}
.text_below_youtube {
    color:white;
    font: bold;
}
</style>
