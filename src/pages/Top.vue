<template>
    <v-container>
        <Form></Form>
        <div>メンバーブログからデータを取得します</div>
        <div>メンバー別、月別で検索します</div>
        <div>https://www.hinatazaka46.com/s/official/diary/member?ima=0000</div>
        <router-link to="/members">メンバーから探す</router-link>
    </v-container>
</template>

<script>
import Form from '../components/Form'

export default {
    components:{Form},
    data: function(){
        return {}
    },
}
</script>
