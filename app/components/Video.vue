<template>
    <Page class="mainBackground">
        <ActionBar class="topTab">
            <Label text="Video"/>
        </ActionBar>

        <GridLayout>
            <label class="page__content-holder" :text="message"></label>
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    data() {
        return {
            message: "asdd",
        }
      }
    };
</script>

<style>
    .mainBackground {
    background-image: url('~/assets/Background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }
.topTab {
    background-color: transparent;
    font-size: 10px;
}
</style>
