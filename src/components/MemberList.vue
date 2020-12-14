<template>
    <v-container>
        <h1>メンバー</h1>
        <v-row>
            <v-col  cols="6" xs="6"  sm="4" md="4" lg="3" xl="3" v-for="member in members" :key="member.code">
                <router-link :to="/members/ + member.code">{{member.name}}</router-link>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import {members} from '../const'

export default {
    data: function(){
        return {
            members: members,
        }
    },

}
</script>