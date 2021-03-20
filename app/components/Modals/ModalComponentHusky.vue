<template>
	<StackLayout class="ModalComponent">
		<Label id="settingsTxt" text="Settings" />
		<Label class="h2 text-center" style="color:white; font:bold;" :text="`Model: ${item.Model}`" />
		<Label class="h2 text-center" style="color:red; font:bold;" text="Fork Settings" />
		<Label textWrap = true class="info">
		<FormattedString>
			<Span text="Spring Rate: " fontWeight="Bold" color="rgb(237,28,36)" class="h3"></Span>
			<Span class="ModalText h3" :text="`${item.FSpringR}`"></Span>
		</FormattedString>
		</Label>
		<Label textWrap = true class="info">
		<FormattedString>
			<Span text="Compression: " fontWeight="Bold" color="rgb(237,28,36)" class="h3"></Span>
			<Span class="ModalText h3" :text="`${item.FCompr}`"></Span>
		</FormattedString>
		</Label>
		<Label textWrap = true class="info">
		<FormattedString>
			<Span text="Rebound: " fontWeight="Bold" color="rgb(237,28,36)" class="h3"></Span>
			<Span class="ModalText h3" :text="`${item.FReb}`"></Span>
		</FormattedString>
		</Label>
		<Label textWrap = true class="info">
		<FormattedString>
			<Span text="Leg Height: " fontWeight="Bold" color="rgb(237,28,36)" class="h3"></Span>
			<Span class="ModalText h3" :text="`${item.FLegH}`"></Span>
		</FormattedString>
		</Label>
		<Label class="h2 text-center" style="color:red; font: bold;" text="WP Shock Settings" />
		<Label textWrap = true class="info">
		<FormattedString>
			<Span text="Spring Rate: " fontWeight="Bold" color="rgb(237,28,36)" class="h3"></Span>
			<Span class="ModalText h3" :text="`${item.RSpringR}`"></Span>
		</FormattedString>
		</Label>
		<Label textWrap = true class="info">
		<FormattedString>
			<Span text="High Compression: " fontWeight="Bold" color="rgb(237,28,36)" class="h3"></Span>
			<Span class="ModalText h3" :text="`${item.RHiComp}`"></Span>
		</FormattedString>
		</Label>
		<Label textWrap = true class="info">
		<FormattedString>
			<Span text="Low Compression: " fontWeight="Bold" color="rgb(237,28,36)" class="h3"></Span>
			<Span class="ModalText h3" :text="`${item.RLoComp}`"></Span>
		</FormattedString>
		</Label>
		<Label textWrap = true class="info">
		<FormattedString>
			<Span text="Rebound: " fontWeight="Bold" color="rgb(237,28,36)" class="h3"></Span>
			<Span class="ModalText h3" :text="`${item.RReb}`"></Span>
		</FormattedString>
		</Label>
		<Label textWrap = true class="info">
		<FormattedString>
			<Span text="Sag: " fontWeight="Bold" color="rgb(237,28,36)" class="h3"></Span>
			<Span class="ModalText h3" :text="`${item.Sag}`"></Span>
		</FormattedString>
		</Label>
		
		<Button class="btn btn-outline button" text="CLOSE" @tap="$modal.close()" />
	</StackLayout>
</template>

<script>
export default {
	props: {
		item: {
			type: Object
		}
	},
    data() {

		return {	
			
		};
    },
};
</script>

<style>
.button {
	margin-top: 40px;
	width: 200px;
	height: 100px;
	background-color: grey;
	border-width: 3px;
	border-color: white;
	border-radius: 20px;
}
.ModalText {
	color:white;
}
#settingsTxt {
	color: white;
	font-size: 40px;
	text-align: center;
	font-family: "321Perfect";
}
.info {
	margin-left: 15px;
}
</style>
