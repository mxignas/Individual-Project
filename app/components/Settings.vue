<template>
  <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground"> 
    <StackLayout>
      <Label text="SETTINGS" height="200px"
      color="white" class="AboveTabsText"/>

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
      </TabStrip>

  <TabContentItem >
    <ScrollView orientation="vertical" >
        <ScrollView orientation="vertical" >
            <ListView for="husky in Husqvarnas">
                <v-template>
                    <StackLayout>
                        <Label class="text_below_youtube h2 text-center m-10" 
                            :text="`Title: ${husky.Title}`" textWrap="true"/>
                    </StackLayout>
                </v-template>
            </ListView>
        </ScrollView>
    </ScrollView>
</TabContentItem>
<TabContentItem >
    <ScrollView orientation="vertical" >
        <ScrollView orientation="vertical" >
            <ListView for="ktm in Ktms">
                <v-template>
                    <StackLayout>
                        <Label class="text_below_youtube h2 text-center m-10" 
                            :text="`Title: ${ktm.Title}`" textWrap="true"/>
                        <Label :text="`${ktm.Front}`" style="color: white;" textWrap="true"/>
                    </StackLayout>
                </v-template>
            </ListView>
        </ScrollView>
    </ScrollView>
</TabContentItem>

      </Tabs>
    </StackLayout>
  </Page> 
</template>

<script>
const ToolTip = require("nativescript-tooltip").ToolTip;
  export default {
    data() {
      return {
        Husqvarnas: [
          {Title: "Husqvarna 250FC 2016"},
          {Title: "Husqvarna 250FC 2016"},
          {Title: "Husqvarna 250FC 2016"},
          {Title: "Husqvarna 250FC 2016"}
        ],
        Ktms: [
          {Title: "2021 KTM 350 SX-F", Image: "2021KTM350.png", 
          Front: "Spring rate: Pros, 10.6 bar (155 psi); Intermediates, 10.3 bar (150 psi); Fast Novices, 10.0 bar (145 psi); Novices/Vets, 9.6 bar(140 psi)Compression: 15 clicks out (12 clicks out stock)Rebound: 10 clicks out (12 clicks out stock)Fork-leg height: Third line", 
          Rear: "Spring rate: 45 N/mmRace sag: 105mmHi-compression: 1-1/4 turns out (1-1/2 turns out stock) Lo-compression: 15 clicks out Rebound: 10 clicks out (15 clicks out stock)", Link: "https://motocrossactionmag.com/mxa-race-test-2021-ktm-350sxf/"},
          {Title: "KTM 250SX-F 2016"},
          {Title: "KTM 250SX-F 2016"},
          {Title: "KTM 250SX-F 2016"},
          {Title: "KTM 250SX-F 2016"}
        ]
      }
    },
    methods: {
      pushIt() {
        
        const t = new ToolTip({
           text: "Testing le Tester",
          hideArrow: false,
          textColor: "white",
          backgroundColor: "blue",
          style: "CustomToolTipLayoutStyle",
          width:400
        });
        t.show();
      }
    }
  }
</script>

<style>
</style>
