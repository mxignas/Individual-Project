<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false" class="mainBackground">
        <StackLayout class="ModalComponent2">
            <Label id="settingsTxt" text="How To Use" textWrap = true />
            <Label text="" />
            <Label text="This Tab is for detecting an electrical issue of your bike by telling the app, how many long and short FI flashes bike outputs" color="white" class="h3 text-center questions" textWrap = true />
            <Label text="" />
            <Label text="• Select your bike model on the top right corner" color="white" class="h3 questions" textWrap = true />
            <Label text="• Count long and short flashes on your bike and then press same amount in the app" color="white" class="h3 questions" textWrap = true />
            <Label text="• When you are done, press 'Results' to see whats the issue" color="white" class="h3 questions" textWrap = true />            
            <Label text="• Tap 'Reset' if you made a mistake" color="white" class="h3 questions" textWrap = true />
            <Label text="• If indicator lamp flashes 2x per second, leave flashes as 0-0 and tap 'Results'" color="white" class="h3 questions" textWrap = true />
            <Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
        </StackLayout>
    </Page>
</template>

<style>
#settingsTxt {
	color: white;
	font-size: 40px;
	text-align: center;
	font-family: "321Perfect";
}
.ModalComponent2 {
	background-image: url('~/assets/InfoBackground.png');
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-color: white;
	border-width: 3px;
    border-radius: 20px;
    border: none;
	background-size: cover;
	width: 900px;
	height: 1450px;
}
.questions {
    padding-left: 15px;
    padding-right: 15px;
    font: bold;
}
</style>