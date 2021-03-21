<template>
  <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground">
    <StackLayout>

        <GridLayout columns="190, auto, *" rows="200, auto, *" height="500" width="400">
          <Label text="SOLVE" height="200px" textWrap = true
          color="white" class="AboveTabsText" col="0" row="0" colSpan="4"/>
          <DropDown ref="dropDownList" selectedIndex="0" :items="items" v-model="selectedItem" @selectedIndexChanged="dropDownSelectedIndexChanged" class="dropdown item-drop-down" col="1" row="1" colSpan="2" > </DropDown>
          <Button text="LONG FLASH" height="250px" width="450px" col="0" row="2" rowSpan="2" id="button_left" @tap="LongFlash"/>
          <Button text="SHORT FLASH" height="250px" width="450px" col="2" row="2" rowSpan="2" id="button_right" @tap="ShortFlash"/>
        </GridLayout>

        <StackLayout orientation="horizontal">
          <Label id="result_left">
            <FormattedString>
              <Span text="Long Flashes: "></Span>
              <Span :text="`${Longs}`" color="rgb(237,28,36)" ></Span>
            </FormattedString>
          </Label>
          <Label id="result_right">
            <FormattedString>
              <Span text="Short Flashes: "></Span>
              <Span :text="`${Shorts}`" color="rgb(237,28,36)" ></Span>
            </FormattedString>
          </Label>
        </StackLayout>

      <Button text="RESULTS" height="120px" width="450px" id="button_results" @tap="ResultsModal()"/>
      <Button text="RESET COUNT" height="120px" width="450px" id="button_reset" @tap="Reset"/>
      <Image src.decode="font://&#xf128;" class="fas t-36" id="question_mark" @tap="question"></Image>
    </StackLayout>
  </Page>
</template>

<script>
import ResultsModal from './Modals/ResultsModal'
import QuestionMark from './Modals/QuestionMark'

  export default {
    components: {
      QuestionMark,
      ResultsModal
    },

    data () {
      return {
        Longs: 0,
        Shorts: 0,
        items: ["KTM SX-F 250-450 2016-2019", "HUSQVARNA FC 250-450 2016-2019"],
        selectedItem: 0
      }
    },
    methods: {
      dropDownSelectedIndexChanged(){
         let index = this.$refs.dropDownList.nativeView.selectedIndex;
         console.log("INDEX: " + index) 
      },

      LongFlash(){
        this.Longs = this.Longs + 1
      },

      ShortFlash(){
        this.Shorts = this.Shorts + 1
      },

      ResultsModal() {
        this.$showModal(ResultsModal, {
            props: {
              longFlashes: this.Longs,
              shortFlashes: this.Shorts
              },
            animated: true,
            dismissEnabled: true,
         })
      },

      Reset() {
        this.Longs = 0;
        this.Shorts = 0;
      },

      question() {
        this.$showModal(QuestionMark, {
            animated: true,
            dismissEnabled: true,
          });
      }
    }
  };
</script>

<style>
.item-drop-down{
    font-size: 20;
    color: white;
    background-color: grey;
    border-radius: 20px;
    height: 40;
    padding: 4;
    width: 100%;
}
#button_left {
  margin-top: 200px;
  margin-right: -50px;
  border-color: rgb(237, 28, 36);
  border-width: 5px;
  border-radius: 50px;
  font: bold;
}
#button_right {
  margin-top: 200px;
  margin-left: -50px;
  border-color: rgb(237, 28, 36);
  border-width: 5px;
  border-radius: 50px;
  font: bold;
}
#button_reset {
  /* margin-top: -20px; */
  border-radius: 50px;
}
#button_results {
  border-radius: 50px;
}
#result_left {
  margin-left: 150px;
  font-weight: bold;
  color: white;
  font-size: 16px;
}
#result_right {
  margin-left: 140px;
  font-weight: bold;
  color: white;
  font-size: 16px;
}
#question_mark {
  margin-left: -900px;
  margin-top: 70px;
  color: white;
  width: 150px;
  height: 150px;
  
}
</style>
