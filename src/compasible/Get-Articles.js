
import { collection,onSnapshot,orderBy,query } from 'firebase/firestore'
import { ref } from 'vue'
import {db} from '../firebase/config'


const getArticles=()=>{

  const articles = ref([])
  const mistakes = ref(null)

  const getArticleList = async()=>{
    try{

      const colRef = collection(db,'Articles')
      const q = await query(colRef,orderBy('creationTime','desc'))
 
      onSnapshot(q,(snapshot)=>{
        snapshot.docs.forEach(doc=>{
          articles.value.push({...doc.data(),id:doc.id})
         
         })    
      })
       
    }
    catch(error){
      mistakes.value = error.message
    }
  }
  return {articles,mistakes,getArticleList}
}

export default getArticles