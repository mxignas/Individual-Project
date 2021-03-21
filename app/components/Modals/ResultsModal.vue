<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground"> 
        <!-- Using v-if and v-else-if for displaying correct code result -->
        <StackLayout id="ResultsModal" v-if="shortFlashes === 0 && longFlashes === 0">
            <Label textWrap = true id="settingsTxt" text="RESULTS" />
            <Label textWrap = true text="Malfunction indicator lamp flashes 2x per second" class="h2 text-center" id="results_text"/>
            <Label textWrap = true text="Error level condition:" class="h2 text-center" id="results_text" />
            <Label textWrap = true text="Teaching of throttle valve position required" class="h3 text-center" style="color: red" />
            <Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
        </StackLayout>
        <StackLayout id="ResultsModal" v-else-if="shortFlashes === 2 && longFlashes === 0">
            <Label textWrap = true id="settingsTxt" text="RESULTS" />
            <Label textWrap = true text="Malfunction indicator lamp flashes 2x short" class="h2 text-center" id="results_text"/>
            <Label textWrap = true text="Error level condition:" class="h2 text-center" id="results_text" />
            <Label textWrap = true text="Crankshaft position sensor - circuit fault" class="h3 text-center" style="color: red" />
            <Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
        </StackLayout>
        <StackLayout id="ResultsModal" v-else-if="shortFlashes === 6 && longFlashes === 0" >
            <Label textWrap = true id="settingsTxt" text="RESULTS" />
            <Label textWrap = true text="Malfunction indicator lamp flashes 6x short" class="h2 text-center" id="results_text"/>
            <Label textWrap = true text="Error level condition:" class="h2 text-center" id="results_text" />
            <Label textWrap = true text="Throttle position sensor circuit A - input signal too low/high" class="h3 text-center" style="color: red" />
            <Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
        </StackLayout>
        <StackLayout id="ResultsModal" v-else-if="shortFlashes === 9 && longFlashes === 0" >
            <Label textWrap = true id="settingsTxt" text="RESULTS" />
            <Label textWrap = true text="Malfunction indicator lamp flashes 9x short" class="h2 text-center" id="results_text"/>
            <Label textWrap = true text="Error level condition:" class="h2 text-center" id="results_text" />
            <Label textWrap = true text="Manifold absolute pressure sensor cylinder 1 - input signal too low/high" class="h3 text-center" style="color: red" />
            <Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
        </StackLayout>
        <StackLayout id="ResultsModal" v-else-if="shortFlashes === 2 && longFlashes === 1" >
            <Label textWrap = true id="settingsTxt" text="RESULTS" />
            <Label textWrap = true text="Malfunction indicator lamp flashes 2x short, 1x long" class="h2 text-center" id="results_text"/>
            <Label textWrap = true text="Error level condition:" class="h2 text-center" id="results_text" />
            <Label textWrap = true text="Engine coolant temperature sensor - input signal too low/high" class="h3 text-center" style="color: red" />
            <Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
        </StackLayout>
        <StackLayout id="ResultsModal" v-else-if="shortFlashes === 3 && longFlashes === 1" >
            <Label textWrap = true id="settingsTxt" text="RESULTS" />
            <Label textWrap = true text="Malfunction indicator lamp flashes 3x short, 1x long" class="h2 text-center" id="results_text"/>
            <Label textWrap = true text="Error level condition:" class="h2 text-center" id="results_text" />
            <Label textWrap = true text="Intake air temperature sensor - input signal too low/high" class="h3 text-center" style="color: red" />
            <Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
        </StackLayout>
        <StackLayout id="ResultsModal" v-else-if="shortFlashes === 5 && longFlashes === 1" >
            <Label textWrap = true id="settingsTxt" text="RESULTS" />
            <Label textWrap = true text="Malfunction indicator lamp flashes 5x short, 1x long" class="h2 text-center" id="results_text"/>
            <Label textWrap = true text="Error level condition:" class="h2 text-center" id="results_text" />
            <Label textWrap = true text="Rollover sensor (A/D type) - input signal too low/high" class="h3 text-center" style="color: red" />
            <Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
        </StackLayout>
        <StackLayout id="ResultsModal" v-else-if="shortFlashes === 1 && longFlashes === 2" >
            <Label textWrap = true id="settingsTxt" text="RESULTS" />
            <Label textWrap = true text="Malfunction indicator lamp flashes 1x short, 2x long" class="h2 text-center" id="results_text"/>
            <Label textWrap = true text="Error level condition:" class="h2 text-center" id="results_text" />
            <Label textWrap = true text="Battery voltage - input voltage too high" class="h3 text-center" style="color: red" />
            <Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
        </StackLayout>
        <!--  v-else if none of the above flashes matches the ones that are here -->
        <StackLayout id="ResultsModal" v-else>
            <Label textWrap = true id="settingsTxt" text="RESULTS" />
            <Label textWrap = true text="This code does not exist" class="h2 text-center" id="results_text" style="color: red"/>
            <Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
        </StackLayout>
    </Page>
</template>

<script>
export default {
    // Getting Props from component, so I can use it here
	props: {
		shortFlashes: {
            type: Number
        },
        longFlashes: {
            type: Number
        }
	},
    data() {

		return {	
			
		};
    },
};
</script>

<style>
#ResultsModal {
	background-image: url('~/assets/InfoBackground.png');
	background-size: cover;
	width: 850px;
	height: 750px;
	border-color: white;
	border-width: 3px;
    border-radius: 20px;
}
#settingsTxt {
	color: white;
	font-size: 40px;
	text-align: center;
	font-family: "321Perfect";
}
#results_text {
    font: bold;
    color: white;
    margin-top: 20px;
}
</style>