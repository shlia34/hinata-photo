<template>
    <v-container>
        <v-row align-content="center" justify="center" class="form">

            <v-col cols="3">
                <v-select
                    :items="members"
                    v-model="form.member_code"
                    item-text="name"
                    item-value="code"
                    label="メンバー"
                ></v-select>
            </v-col>
            <v-col cols="3">
                <v-select
                    :items="years"
                    v-model="form.year"
                    label="年"
                    ></v-select>
            </v-col>

            <v-col cols="3">
                <v-select
                    :items="months"
                    v-model="form.month"
                    label="月"
                ></v-select>
            </v-col>

            <v-col cols="2">
                <v-btn v-on:click="clickBtn">取得</v-btn>
            </v-col>
        </v-row>

        <v-container align-content="center" justify="center">
            <div v-if="loading">ロード中です、、、5,6秒待ってね</div>
            <div v-if="!loading">画像を取得しました</div>
        </v-container>
        <div v-if="photos.length ===0 && !loading">データがないです</div>

        <v-row>
            <v-col cols="6" xs="6"  sm="4" md="4" lg="3" xl="3" v-for="photo in photos" :key="photo">
                <a :href="photo" target="_blank" rel="noopener noreferrer">
                    <v-img :src="photo" aspect-ratio="1"></v-img>
                </a>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
import axios from 'axios'
import {members} from '../const'
import {years} from '../const'
import {months} from '../const'
export default {
    props: {'member':String,'year':String,'month':String},
    data: function(){
        return {
            photos:[],
            loading : false,
            members: members,
            years:years,
            months:months,
            form: {
                member_code:this.member,
                month:this.month,
                year:this.year,
            }
        }
    },
    computed:{
        original_url : function(){
             var original_base_url = "https://www.hinatazaka46.com/s/official/diary/member/list?ima=0000&ct=";
             return original_base_url + this.form.member_code + "&dy=" + this.form.year + this.form.month;
        }
    },
    watch: {
        $route: function () {
            this.getPhotoUrl();
        }
    },
    mounted:function(){
        this.getPhotoUrl();
    },
    methods: {
        clickBtn(){
            this.$router.push({ path: '/hinata-photo'+ '/' + this.form.member_code + '/' +this.form.year + '/' + this.form.month });
        },
        getPhotoUrl() {
          var member_code = this.form.member_code;
          var year =  this.form.year;
          var month = this.form.month;
          var endpoint = 'https://497r9hvb2g.execute-api.ap-northeast-1.amazonaws.com/default/hinata';
          var url =  endpoint + '?' + 'member_code=' +  member_code + '&year='+  year +  '&month=' + month;

          var vm = this;
          vm.loading =  true;
          axios.get(url)
            .then(function (response){
                vm.photos = response.data;
                vm.loading = false;
            })
            .catch(function (error) {
                console.log(error);
                alert("エラー起きました、もう一度読み込んでください");
            });
      },
    }
}
</script>
