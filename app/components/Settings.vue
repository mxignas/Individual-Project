<template>
  <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground"> 
    <StackLayout>
      <Label text="SETTINGS" height="200px"
      color="white" class="AboveTabsText"/>

      <Label text="HELLOO" style="color: white" />

      <ListView for="husky in Husqvarnas"> 
        <v-template>
            <StackLayout>
                <Label :text="`Model: ${husky.Model}`" textWrap="true"/>
                <Label :text="`Front Compression: ${husky.FCompr}`" textWrap="true"/>
            </StackLayout>
        </v-template>
    </ListView>

    </StackLayout>
  </Page> 
</template>

<script>
import {firestore} from "@nativescript/firebase"
  export default {
    data() {
      return {
        Husqvarnas: [],
      }
    },

    methods: {

    },
    mounted() {
    //fetch data from the firestore
    firestore.collection('Husqvarnas').get()
    .then(snapshot => {
      snapshot.forEach((doc) => {
        // console.log(doc.data(), doc.id)
        let husky = doc.data();
        husky.id = doc.id;
        this.Husqvarnas.push(husky)
      })
    })
  } 
}
</script>

<style>
</style>
