<template>
    <v-container align-content="center" justify="center">
        <h1>{{memberName}}</h1>
        <div v-if="loading">データロード中</div>
        <div v-if="!loading">取得したよ</div>
        <div v-if="items.length ===0 && !loading">データがないです</div>

        <v-row>
            <v-col cols="6" xs="6"  sm="4" md="2" lg="2" xl="2" v-for="(count,month) in items" :key="month">
                <router-link :to=" '/' + member + '/' +  parseMonthForLink(month)">{{parseMonthForView(month)}} => {{count}}枚</router-link>
            </v-col>
        </v-row>
        <MemberList></MemberList>
    </v-container>

</template>


<script>
import axios from 'axios'
import MemberList from '../components/MemberList'
import {members} from '../const'

export default {
    components:{MemberList},
    props: {'member':String},
    data: function(){
        return {
            items:[],
            loading : false,
        }
    },
    watch: {
        $route: function () {
            this.getItems();
        }
    },
    mounted:function(){
        this.getItems();
        this.redirectIfInvalidProps();
    },
    computed:{
        memberName : function(){
            const member = members.find((member) => member.code === this.member);
            return member.name;
        },
    },
    methods:{
        getItems(){
          var endpoint = 'https://koi33pn947.execute-api.ap-northeast-1.amazonaws.com/prod/count';
          var url = endpoint + '/' + this.member;

          var vm = this;
          vm.items = [];
          vm.loading =  true;
          axios.get(url)
            .then(function (response){
                vm.items = response.data;
                vm.loading = false;
            })
            .catch(function (error) {
                console.log(error);
                alert("エラー起きました、もう一度読み込んでください");
            });
        },
        parseMonthForLink(month){
            return month.substr( 0, 4 ) + "/" + month.substr( 4, 6 );
        },
        parseMonthForView(month){
            return month.substr( 0, 4 ) + "年" + month.substr( 4, 6 )+ "月";
        },
        redirectIfInvalidProps(){
            const memberCheck = members.find((member) => member.code === this.member);
            if(memberCheck === undefined){
                this.$router.push('/member_not_found')
            }
        }
    },

}
</script>