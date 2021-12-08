

<template>
<div :key="inform">
    <!-- <div :key="projects"> -->
    <div class="block" v-if="showBlock" @click="stopTimer" @submit.prevent="handleSubmit">
        <p>คุณ {{inform.name}} </p>
        <p>สรุปอาการ</p>
        <p>มีอาการ</p>
        <p>{{inform.symptom}}</p>
        <!-- <p>{{projects.symptom}}</p> -->
        <p>มีโอกาสเสี่ยงเป็นโรคดังต่อไปนี้</p>
        <p>{{inform.diagnose}}</p>
       <!-- <p>{{projects.diagnose}}</p> -->
        <!-- <div :key="inform">
        <p>Summary</p>
        <br>
        <p>{{reactionTime}} {{inform.name}}</p> 
        </div> -->
    
    </div>
    <!-- </div> -->
    <button @submit.prevent="handleSubmit">Save</button>
</div>
<p>name2:{{name}}</p>

</template>

<script>
import Home from "../views/Home.vue"
export default {
    props: ['delay'],
    props: ['inform'],
    // props:['projects'],
    data(){
        return{
            showBlock: false,
            timer: null,
            reactionTime: 0,
            name: this.inform.name,
            qa: this.inform.qa,
            symptom: this.inform.symptom,
            diagnose: this.inform.diagnose
            // diagnose: this.projects.diagnose
        }
    },
    mounted(){
        console.log('component mounted')
       
        this.showBlock = true
         
    },
    methods:{
        startTimer(){
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10);
        },
        stopTimer(){
            clearInterval(this.timer)
            this.$emit('end', this.reactionTime)
            console.log(this.reactionTime)
            let project = {
                 name: this.name,
                qa: this.qa,
                symptom: this.inform.symptom
            }
            console.log(project)
  
            fetch('http://localhost:3000/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(project)
            })
        },
        handleSubmit(){
            let project = {
                 name: this.name,
                qa: this.qa,
               symptom: this.inform.symptom
            }
            console.log(project)
  
            fetch('http://localhost:3000/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(project)
            })
        }
        
    }
 
}
</script>

<style>
.block{
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: top;
    padding:100px 0;
    margin:40px auto;
}

</style>