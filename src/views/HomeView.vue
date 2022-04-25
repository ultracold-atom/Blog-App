<template>
  <div class="home">
    <div v-if="mistakes">
      {{mistakes}}
    </div>
    <div v-else-if="articles.length">
      <ArticleList :articles="articles"/>
    </div>
    <div v-else>
      Yükleniyor...
    </div>
  </div>
</template>

<script>
import ArticleList from '../components/Article-List.vue'
import getArticles from '../compasible/Get-Articles'


export default {
  name: 'HomeView',
  components: {
    ArticleList
},
  setup(){
    const {articles,mistakes,getArticleList} = getArticles()
    getArticleList()
    console.log(articles)
    return {articles,mistakes}
  }
}
</script>
