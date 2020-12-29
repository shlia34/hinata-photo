<template>
    <v-container class="nav">
        <v-layout class="tabs">
            <v-tab @click="pushTop">トップ</v-tab>
            <v-tab @click="pushAbout">メンバーたち</v-tab>
            <v-spacer></v-spacer>
            <v-tab @click="openOfficialSite">公式</v-tab>
        </v-layout>
    </v-container>
</template>


<style>
.nav {
    height:80px;
}

.tabs {
    height:100%;
}
</style>

<script>
export default {
    methods:{
        pushTop(){
            this.$router.push('/');
        },
        pushAbout(){
            this.$router.push('/members');
        },
        openOfficialSite(){
            var url = 'https://www.hinatazaka46.com';
            window.open(url);
        }
    },
}

</script>

