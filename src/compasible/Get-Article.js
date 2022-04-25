import { collection,getDocs } from 'firebase/firestore'
import {ref} from 'vue'
import {db} from '../firebase/config'


const getArticle = (id) =>{
  const article = ref(null)
  const mistakes = ref(null)

  const uploadArticle = async ()=>{
    try{
      const colRef = collection(db,'Articles')
      
      getDocs(colRef)
      .catch(err=>{console.log(err.message)})
      .then(snapshot=>{
        snapshot.docs.forEach(doc=>{
          if(id == doc.id){

            article.value = {...doc.data(),id:doc.id}   
           } 
        }) 
      })   
    }
    catch(error){mistakes.value = error.message}  
  }
  return {article,mistakes,uploadArticle}  
}

export default getArticle

