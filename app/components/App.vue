<template lang="html">
    <BottomNavigation>
        <TabStrip class="bottom_navigation">
            <TabStripItem class="navigation__item">
                <Label text="Video"></Label>
                <Image src.decode="font://&#xf03d;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Map"></Label>
                <Image src.decode="font://&#xf124;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Scan"></Label>
                <Image src.decode="font://&#xf7d9;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Settings"></Label>
                <Image src.decode="font://&#xf0ad;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="About"></Label>
                <Image src.decode="font://&#xf129;" class="fas t-36"></Image>
            </TabStripItem>
        </TabStrip>

        <TabContentItem>
            <Frame id="Video">
                <Video/>
            </Frame>
        </TabContentItem>
        
        <TabContentItem>
            <Frame id="Map">
                <Map/>
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame id="Scan">
                <Scan/>
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame id="Settings">
                <Settings/>
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame id="About">
                <About/>
            </Frame>
        </TabContentItem>

    </BottomNavigation>
</template>

<script>
  import Video from "./Video.vue";
  import About from "./About.vue";
  import Settings from "./Settings.vue";
  import Map from "./Map.vue";
  import Scan from "./Scan.vue";

  export default {
    components: {
      Settings, 
      Map,
      Video,
      About,
      Scan
    }
  };
</script>

<style>
    .bottom_navigation {
        background-color:rgb(237, 28, 36)
    }
</style>
