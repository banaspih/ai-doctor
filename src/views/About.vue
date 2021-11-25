<template>
  

   <div class="home">
      
   <div v-if="projects.length">
     <div v-for="project in projects" :key="project.id">
        
       <SingleProject :project="project" />
       </div> 
       
     
   </div>
  </div>
    
</template>

<script> 
import SingleProject from '../components/SingleProject.vue'

export default{
name: 'About',
components: {SingleProject},
  data(){
        return{
           projects: [],
        };
    },
    //  methods: {
    // handleDelete(id) {
    //   this.projects = this.projects.filter(project => {
    //     return project.id !== id
    //   })
    // },

  mounted(){
  fetch('http://localhost:3000/projects')
    .then(res => res.json()) 
    .then(data => this.projects = data)
    .catch(err => console.log(err.message))
    }, 

}


</script>