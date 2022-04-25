<template>
  <div class="article-list">
    <div v-for="article in articles" :key="article.id">
      <Article :article="article" />
    </div>
  </div>
</template>

<script>
import Article from './Article-App.vue'

export default {

  props: ['articles'],
  components:{
    Article
},
  setup(props){
    console.log(props.articles)
  }
}
</script>

<style>
  .article-list{
    margin-top: 120px !important;
  }


</style>