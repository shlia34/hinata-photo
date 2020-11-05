<template>
    <v-container>
        <v-row class="form">

            <v-col>
                <v-select
                    :items="members"
                    v-model="form.member_code"
                    item-text="name"
                    item-value="code"
                    label="メンバー"
                ></v-select>
            </v-col>
            <v-col>
                <v-select
                    :items="years"
                    v-model="form.year"
                    label="年"
                    ></v-select>
            </v-col>

            <v-col>
                <v-select
                    :items="months"
                    v-model="form.month"
                    label="月"
                ></v-select>
            </v-col>

            <v-col>
                <v-btn v-on:click="clickBtn">画像を読み込む</v-btn>
            </v-col>
        </v-row>
        <div>
            {{original_url}}
        </div>
        <div v-if="loading">ロード中です、、、5,6秒待ってね</div>
        <div v-if="photos.length ===0 && !loading">データがないです</div>
        <v-row>
            <v-col cols="3"  v-for="photo in photos" :key="photo">
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
    data: function(){
        return {
            photos:[],
            loading : false,
            members: members,
            years:years,
            months:months,
            form: {
                member_code:'20',
                month:"01",
                year:"2020",
            }
        }
    },
    computed:{
        original_url : function(){
             var original_base_url = "https://www.hinatazaka46.com/s/official/diary/member/list?ima=0000&ct=";
             return original_base_url + this.form.member_code + "&dy=" + this.form.year + this.form.month;
        }
    },
    mounted:function(){
        this.getPhotoUrl();
    },
    methods: {
        clickBtn(){
            this.getPhotoUrl();
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
