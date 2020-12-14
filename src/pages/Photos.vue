<template>
    <v-container>
        <Form :member="this.member" :year="this.year" :month="this.month"></Form>

        <v-container align-content="center" justify="center">
            <div v-if="loading">ロード中</div>
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
import Form from '../components/Form'
import {members} from '../const'
import {years} from '../const'
import {months} from '../const'

export default {
    components:{Form},
    props: {'member':String,'year':String,'month':String},
    data: function(){
        return {
            photos:[],
            loading : false,
        }
    },
    watch: {
        $route: function () {
            this.getLog();
            this.getPhotoUrl();
        }
    },
    mounted:function(){
        this.redirectIfInvalidProps();
        this.getPhotoUrl();
    },
    methods: {
        getLog(){
            axios.get('https://httpbin.org/get')
          .then((response) => {
            console.log(response.data.headers["User-Agent"]);
            console.log(response.data.origin);
            console.log(this.member + this.year + this.month);
          })
          .catch((reason) => {
              console.log("情報取得に失敗しました");
              console.log(reason);
          });
        },
        getPhotoUrl() {
          var endpoint = 'https://koi33pn947.execute-api.ap-northeast-1.amazonaws.com/prod/photos';
          var url = endpoint + '/' + this.member + '/' + this.year + '/' + this.month

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
      redirectIfInvalidProps(){
        const memberCheck = members.find((member) => member.code === this.member);
        if(memberCheck === undefined){
            this.$router.push('/member_not_found')
        }

        const yearCheck = years.find((year) => year === this.year);
        if(yearCheck === undefined){
            this.$router.push('/year_not_found')
        }

        const monthCheck = months.find((month) => month === this.month);
        if(monthCheck === undefined){
            this.$router.push('/month_not_found')
        }

      }
    }
}
</script>
