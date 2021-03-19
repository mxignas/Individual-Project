<template>
  <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground"> 
    <StackLayout>
      <Label text="SETTINGS" height="200px"
      color="white" class="AboveTabsText"/>

  <Tabs selectedIndex="0">
    <!-- The bottom tab UI is created via TabStrip (the container) and TabStripItem (for each tab)-->
    <TabStrip class="tabs">
        <TabStripItem>
            <Label text="HUSQVARNA"/>
            <Image src.decode="font://&#xf21c;" class="fas t-36"></Image>
        </TabStripItem>
        <TabStripItem>
            <Label text="KTM"/>
            <Image src.decode="font://&#xf21c;" class="fas t-36"></Image>
        </TabStripItem>
    </TabStrip>
    
<!-- Items in the TAB -->
<TabContentItem >
        <ScrollView orientation="vertical" >
            <ListView for="husky in Husqvarnas" > <!-- @itemTap="onItemTap" -->
                <v-template>
                    <StackLayout>
                        <Image :src="`${husky.Image}`" stretch="aspectFit"  class="Youtube_Pic" @tap="openSettingsModal(husky)"></Image> <!-- @tap="openSettingsModal, onItemTap" -->
                        <Label class="text_below_youtube h2 text-center m-10" 
                            :text="`Model: ${husky.Model}`" textWrap="true"/>
                    </StackLayout>
                </v-template>
            </ListView>
    </ScrollView>
</TabContentItem>
<TabContentItem >
        <ScrollView orientation="vertical" >
            <ListView for="ktm in Ktms">
                <v-template>
                    <StackLayout>
                        <Image :src="`${ktm.Image}`" stretch="aspectFit"  class="Youtube_Pic"></Image>
                        <Label class="text_below_youtube h2 text-center m-10" 
                            :text="`Title: ${ktm.Model}`" textWrap="true"/>
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
import {firestore} from "@nativescript/firebase"
import ModalComponent from "./ModalComponent";

  export default {
    components: {
      ModalComponent
    },
    data() {
      return {
        Husqvarnas: [],
        Ktms: []
      }
    },

    methods: {
      openSettingsModal(husky) {
          this.$showModal(ModalComponent, {
            props: {item: husky},
            animated: true,
            dismissEnabled: true,
          });
      },
    },
    mounted() {
    //fetch data from the firestore collection and ordering by Model year in descending way
    firestore.collection('Husqvarnas').orderBy("Model", "desc").get()
    .then(snapshot => {
      // navigating through each document inside that collection
      snapshot.forEach((doc) => {
        let husky = doc.data();
        husky.id = doc.id;
        this.Husqvarnas.push(husky)
      })
    })

    firestore.collection('Ktms').orderBy("Model", "desc").get()
    .then(snapshot => {
      // navigating through each document inside that collection
      snapshot.forEach((doc) => {
        let ktm = doc.data();
        ktm.id = doc.id;
        this.Ktms.push(ktm)
      })
    })
      
  } 
}
</script>

<style>
</style>
