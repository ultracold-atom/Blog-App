<template>
  <h1>Article Detail</h1>
  <br>
  <div v-if="mistakes">
    {{mistakes}}
  </div>
  <div v-if="article" class="detail content">
    <h2><i>Article Title : </i>{{article.title}}</h2>
    <br>
    <div class="content">
      <i>Article Content:</i>
      <p>{{article.content}}</p>
    </div>
    <br>
    <div class="content">
      <i>Creation Time:</i>
      <p>{{article.creationTime.toDate()}}</p>
    </div>
    <br> 
    <a class="delete" @click="deleteArticle">
      <img src="/trashcan.svg" alt="delete article">
    </a>       
  </div>  
  <div v-else> 
    Loading...
  </div>

</template>


<script>
import { useRoute,useRouter} from "vue-router"
import getArticle from "../compasible/Get-Article"
import {db} from '../firebase/config'
import { deleteDoc,doc } from "@firebase/firestore"


export default {
  setup(){
    const route = useRoute()  
    const router = useRouter()
    const {article,mistakes,uploadArticle} = getArticle(route.params.id)

    uploadArticle()
    const deleteArticle = ()=>{
      const docRef = doc(db,'Articles',route.params.id) 
      deleteDoc(docRef).then(()=>{router.push('/')})
    
    }

    return {article,mistakes,deleteArticle}
  }

}
</script>


<style>
a{
  cursor: pointer;
}
</style>