<template>
  <div class="pro">
      <div class="actions">
     <p >ผลสรุป</p>
        <!-- <h3 @click="showDetails = !showDetails">{{ project.title }}</h3> -->
         <p>คุณ{{project.name}}</p>  
          <p>มีอาการ</p>
          <p>{{ project.symptom }} </p> 
          <p>มีโอกาสเสี่ยงเป็นโรคดังต่อไปนี้</p>
          <p>{{ project.diagnose }} </p> 
        
         
         <br>
        <div class="icon">
            <!-- <span class="material-icons-outlined">edit</span> -->
            <span @click="deleteProject" class="material-icons">delete</span>
            <!-- <span @click="toggleCompete" class="material-icons-outlined">done</span> -->
        </div>
      </div>
      <!-- <p>datails: {{project.details}}</p> -->

  <!-- <div v-if="showDetails" class="details">
      <p>{{project.details}}</p>
  </div> -->
  </div>
     

</template>

<script>
export default {
    
    props:['project'],
    data(){
        return{
            // showDetails: false,
            uri: 'http://localhost:3000/projects' + this.project.id
        }
    },
      methods: {
    deleteProject() {
      fetch(this.uri, { method: 'DELETE' })
        // .then(() => this.$emit('delete', this.project.id))
        // .catch(err => console.log(err))
    },}
    // methods:{
    //     toggleComplete(){
    //         fetch(this.uri,{
    //             method:'PATCH',
    //             headers:{'Conten-Type': 'application/json'},
    //             body: JSON.stringify({ complete: !this.project.complete})
    //             }).then(() => {
    //                 this.$emit('complete', this.project.id)
    //             })
    //     }
    // }
}
</script>

<style scoped>
.pro{
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0,0.5);
    border-left:4px solid #e90074 ;

}
h3{
    cursor: pointer;
}
.action{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons{
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
.material-icons:hover{
    color: #777;
}
.project.complete{
    border-left: 4px solid #00ce89;
}
</style>