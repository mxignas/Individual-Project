<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground">
        <StackLayout>
            <Label text="TUTORIALS" height="200px"
            color="white" class="AboveTabsText"/>

        <Tabs selectedIndex="0">
        <!-- The bottom tab UI is created via TabStrip (the container) and TabStripItem (for each tab)-->
        <TabStrip class="tabs">
            <TabStripItem>
                <Label text="Basics"/>
                <Image src.decode="font://&#xf19d;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Corners"/>
                <Image src.decode="font://&#xf19d;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Jumps"/>
                <Image src.decode="font://&#xf19d;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Extra"/>
                <Image src.decode="font://&#xf19d;" class="fas t-36"></Image>
            </TabStripItem>
        </TabStrip>
    
<!-- Items in the TAB -->
<TabContentItem >
        <ScrollView orientation="vertical" >
            <!-- Using ListView to display each object with accessing its properties in Basics array -->
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
</TabContentItem>
<TabContentItem >
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
</TabContentItem>
<TabContentItem >
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
// Importing Utils library and firestore
import { Utils } from "@nativescript/core";
import {firestore} from "@nativescript/firebase"

  export default {
    data() {
        return {
            Basics: [],
            Corners: [],
            Jumps: [],
            Extras: []
        }
      },
      methods: {
        //   When tapped, opens url which is in TubeLink property
          onVideoTap(event) {
            Utils.openUrl(event.item.TubeLink)
        }
      },
      mounted() {
    //fetch data from the firestore
    firestore.collection('Basics').get()
    .then(snapshot => {
        // navigating through each document inside that collection
      snapshot.forEach((doc) => {
        let basic = doc.data();
        basic.id = doc.id;
        this.Basics.push(basic)
      })
    })

    firestore.collection('Corners').get()
    .then(snapshot => {
      snapshot.forEach((doc) => {
        let corner = doc.data();
        corner.id = doc.id;
        this.Corners.push(corner)
      })
    })

    firestore.collection('Jumps').get()
    .then(snapshot => {
      snapshot.forEach((doc) => {
        let jump = doc.data();
        jump.id = doc.id;
        this.Jumps.push(jump)
      })
    })

    firestore.collection('Extras').get()
    .then(snapshot => {
      snapshot.forEach((doc) => {
        let extra = doc.data();
        extra.id = doc.id;
        this.Extras.push(extra)
      })
    })
  } 
    };
</script>

<style>

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
