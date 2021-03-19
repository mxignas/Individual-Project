<template>
	<StackLayout class="ModalComponent" backgroundColor="white">
		<Label id="settingsTxt" text="Settings" />
		<Label class="h3 text-center" style="color:white; font: bold; margin-top: 20px;" :text="`Model: ${item.Model}`" />
		<Label class="h3 text-center" style="color:white; font: bold;" text="Fork settings:" />
		<Label class="ModalText h3 text-left" :text="`Spring Rate: ${item.Model}`" />
		<Label class="ModalText h3 text-left" :text="`Compression: ${item.Model}`" />
		<Label class="ModalText h3 text-left" :text="`Rebound: ${item.Model}`" />
		<Label class="ModalText h3 text-left" :text="`Fork-leg height: ${item.Model}`" />
		<Label class="h3 text-center" style="color:white; font: bold;" text="WP Shock Settings:" />
		<Label class="ModalText h3 text-left" :text="`Spring rate: ${item.Model}`" />
		<Label class="ModalText h3 text-left" :text="`Hi-compression: ${item.Model}`" />
		<Label class="ModalText h3 text-left" :text="`Lo-compression: ${item.Model}`" />
		<Label class="ModalText h3 text-left" :text="`Rebound: ${item.Model}`" />
		<Label class="ModalText h3 text-left" :text="`Race Sag: ${item.Model}`" />
		<Button class="btn btn-outline" text="Close Modal" @tap="$modal.close()" />
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
.ModalComponent {
	background-image: url('~/assets/InfoBackground.png');
	background-size: cover;
	width: 800px;
	height: 1300px;
	border-color: white;
	border-width: 3px;
}
.ModalText {
	color:white;
}
#settingsTxt {
	color: white;
	font-size: 30px;
	text-align: center;
	font-family: "321Perfect";
}
</style>
