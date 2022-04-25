<template>
  <div class="add-article">
      <form @submit.prevent="addArticle">
          <label>Article Title: </label>
          <input type="text" id="title" v-model="title" name="title" required/>
          <label>Article Content: </label>
          <textarea type="text" id="content" v-model="content" name="content" required></textarea>
          <button>Oluştur</button>
      </form>
  </div>
</template>


<script>
import {ref} from 'vue'
import {db,timeStamp} from '../firebase/config'
import { addDoc, collection } from '@firebase/firestore'
import { useRouter } from 'vue-router'


export default {

  setup(){
    const title = ref('')
    const content = ref('')  
    
    const router = useRouter()

    const addArticle = async ()=>{
      const article = {
        title: title.value,
        content: content.value,
        creationTime: timeStamp 
       }

      const colRef = collection(db,'Articles')
      addDoc(colRef,article)
      .catch((err)=>{console.log(err.message)})
      .then(()=>{router.push({name:"home"})})
 
      console.log(article)
      
    }

    return {title,content,addArticle}  
  }
}
</script>


<style>
.add-article form {
  max-width: 400px;
  margin: 0 auto;
}
.add-article input,
.add-article textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
.add-article label {
  display: block;
  margin-top: 24px;
}
textarea {
  height: 120px;
}
.add-article button {
  margin-top: 20px;
  background: #eb4d4b;
  color: white;
  padding: 6px;
  border-radius: 10px;
  font-size: 1.2em;
  cursor: pointer;
}
</style>