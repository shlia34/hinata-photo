<template>
<div>
    URLが不正ですのでリダイレクトしますね
</div>
</template>

<script>
export default {
    mounted:function(){
        setTimeout(() => {
            this.$router.push({ path: '/hinata-photo'+ '/20/2020/11' });
        } , 2000)
    },
}
</script>