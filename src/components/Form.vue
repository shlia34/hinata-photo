<template>
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
        </v-row>

</template>

<script>
import {members} from '../const'
import {years} from '../const'
import {months} from '../const'

export default {
    props:["member","year","month"],
    data: function(){
        return {
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
        },
        isDisable : function(){
            return this.form.member_code === undefined ||  this.form.year === undefined || this.form.month === undefined;
        }
    },
    watch: {
        "form": {
            handler: function () {
                if(this.form.member_code !== undefined && this.form.year !== undefined && this.form.month !== undefined){
                    this.$router.push({ path: '/' + this.form.member_code + '/' +this.form.year + '/' + this.form.month });
                }
            },
            deep: true
        }
    },

}
</script>