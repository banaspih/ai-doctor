<template>
<h1> Diagnose </h1>

<Block v-if="isPlaying"  @end="endGame" :inform="inform"/>

<form v-if="showingDetails">
      <label>คุณชื่ออะไร</label><br>
      <input type="name" required v-model="inform.name"><br>
      <label><p>กรุณาเลือกอาการที่คุณมี</p></label>
      <br>
      <label><p>อาการคัน</p></label>
      <input type="checkbox" value="itching" v-model="inform.symptom" id="itching" />
      <label><p>มีอาการจามอย่างต่อเนื่อง</p></label>
       <input type="checkbox" value="continuous_sneezing" v-model="inform.symptom" id="continuous_sneezing" />
      <label><p>มีอาการปวดท้อง</p></label>
     <input type="checkbox" value="stomach_pain" v-model="inform.symptom" id="stomach_pain" />
       <label><p>อาเจียน</p></label>
    <input type="checkbox" value="vomiting" v-model="inform.symptom" id="vomiting" />
      <label><p>กล้ามเนื้อลีบ</p></label>
    <input type="checkbox" value="muscle_wasting" v-model="inform.symptom" id="muscle_wasting" />
     <label><p>อ่อนเพลีย</p></label>
    <input type="checkbox" value="fatigue" v-model="inform.symptom" id="fatigue" />
     <label><p>ปวดหัว</p></label>
    <input type="checkbox" value="headache" v-model="inform.symptom" id="headache" />
     <label><p>กรดไหลย้อน</p></label>
    <input type="checkbox" value="acidity" v-model="inform.symptom" id="acidity" />
     <label><p>ปวดหลัง</p></label>
    <input type="checkbox" value="back_pain" v-model="inform.symptom" id="back_pain" />
     <label><p>หนาวสั่น</p></label>
    <input type="checkbox" value="chill" v-model="inform.symptom" id="chill" />
     <label><p>มีผื่น</p></label>
    <input type="checkbox" value="skin_rash" v-model="inform.symptom" id="skin_rash" />
     <label><p>ปวดตามข้อ</p></label>
    <input type="checkbox" value="joint_pain" v-model="inform.symptom" id="joint_pain" />
      <label><p>ตัวสั่น</p></label>
    <input type="checkbox" value="shivering" v-model="inform.symptom" id="shivering" />
      <label><p>อาหารไม่ย่อย</p></label>
    <input type="checkbox" value="indigestion" v-model="inform.symptom" id="indigestion" />
      <label><p>คออักเสบ</p></label>
    <input type="checkbox" value="patches_in_throat" v-model="inform.symptom" id="patches_in_throat" />
     <label><p>น้ำหนักลด</p></label>
    <input type="checkbox" value="weight_loss" v-model="inform.symptom" id="weight_loss" />
     <label><p>เบ้าตาลึก</p></label>
    <input type="checkbox" value="sunken_eyes" v-model="inform.symptom" id="sunken_eyes" />
     <label><p>มีอาการไอ</p></label>
    <input type="checkbox" value="cough" v-model="inform.symptom" id="cough" />
     <label><p>เจ็บหน้าอก</p></label>
    <input type="checkbox" value="chest_pain" v-model="inform.symptom" id="chest_pain" />

        <label><p>เเขนขาอ่อนเเรง</p></label>
    <input type="checkbox" value="weakness_in_limbs" v-model="inform.symptom" id="weakness_in_limbs" />
       
        <label><p>ท้องผูก</p></label>
    <input type="checkbox" value="constipation" v-model="inform.symptom" id="constipation" />

        <label><p>ผิวเหลือง</p></label>
    <input type="checkbox" value="yellowish_skin" v-model="inform.symptom" id="yellowish_skin" />


    <label><p>เจ็บระหว่างขับถ่าย</p></label>
    <input type="checkbox" value="pain_during_bowel_movements" v-model="inform.symptom" id="pain_during_bowel_movements" />

    <label><p>หายใจไม่ออก</p></label>
    <input type="checkbox" value="breathlessness" v-model="inform.symptom" id="breathlessness" />

    <label><p>ตะคริว</p></label>
    <input type="checkbox" value="cramps" v-model="inform.symptom" id="cramps" />
     <label><p>น้ำหนักเพิ่ม</p></label>
    <input type="checkbox" value="weight_gain" v-model="inform.symptom" id="weight_gain" />

     <label><p>ผื่นขึ้นตามผิวหนัง</p></label>
    <input type="checkbox" value="nodal_skin_eruptions" v-model="inform.symptom" id="nodal_skin_eruptions" />
        <label><p>แผลพุพองที่ลิ้น</p></label>
    <input type="checkbox" value="ulcers_on_tongue" v-model="inform.symptom" id="ulcers_on_tongue" />
     <label><p>ภาวะไม่อยากอาหาร</p></label>
    <input type="checkbox" value="loss_of_appetite" v-model="inform.symptom" id="loss_of_appetite" />
     <label><p>มีไข้สูง</p></label>
    <input type="checkbox" value="high_fever" v-model="inform.symptom" id="high_fever" />
     <label><p>กระสับกระส่าย</p></label>
    <input type="checkbox" value="restlessness" v-model="inform.symptom" id="restlessness" />
     <label><p>ภาวะขาดน้ำ</p></label>
    <input type="checkbox" value="dehydration" v-model="inform.symptom" id="dehydration" />
     <label><p>เวียนหัว</p></label>
    <input type="checkbox" value="dizziness" v-model="inform.symptom" id="dizziness" />
   <label><p>ร่างกายอ่อนเเอไปซีกนึง</p></label>
    <input type="checkbox" value="weakness_of_one_body_side" v-model="inform.symptom" id="weakness_of_one_body_side" />
     <label><p>อาการง่วงซึม</p></label>
    <input type="checkbox" value="lethargy" v-model="inform.symptom" id="lethargy" />
         <label><p>อาการปวดท้อง</p></label>
    <input type="checkbox" value="abdominal_pain" v-model="inform.symptom" id="abdominal_pain" />
    <label><p>มีอาการเจ็บที่บริเวณทวหารหนัก</p></label>
    <input type="checkbox" value="pain_in_anal_region" v-model="inform.symptom" id="pain_in_anal_region" />
        <label><p>เหงื่อออก</p></label>
    <input type="checkbox" value="sweating" v-model="inform.symptom" id="sweating" />
        <label><p>มีรอยฝกช้ำ</p></label>
    <input type="checkbox" value="bruising" v-model="inform.symptom" id="bruising" />
        <label><p>มือเท้าเย็น</p></label>
    <input type="checkbox" value="cold_hands_and_feets" v-model="inform.symptom" id="cold_hands_and_feets" />
       
         <label><p>มีรอยฝกช้ำ</p></label>
    <input type="checkbox" value="dischromic_patches" v-model="inform.symptom" id="dischromic_patches" />

    <label><p>น้ำตาไหลมากกว่าปกติ</p></label>
    <input type="checkbox" value="watering_from_eyes" v-model="inform.symptom" id="watering_from_eyes" />
       <label><p>คลื่นไส้</p></label>
    <input type="checkbox" value="nausea" v-model="inform.symptom" id="nausea" />
    
     <label><p>ปัสสาวะขัด</p></label>
    <input type="checkbox" value="burning_micturition" v-model="inform.symptom" id="burning_micturition" />
 <label><p>โรคติดต่อทางเพศสัมพันธ์</p></label>
    <input type="checkbox" value="extra_marital_contacts" v-model="inform.symptom" id="extra_marital_contacts" />
    <label><p>ท้องร่วง</p></label>
    <input type="checkbox" value="diarrhoea" v-model="inform.symptom" id="diarrhoea" />
        <label><p>ทรงตัวไม่ค่อยอยู่</p></label>
    <input type="checkbox" value="loss_of_balance" v-model="inform.symptom" id="loss_of_balance" />
       <label><p>ตามัว</p></label>
    <input type="checkbox" value="blurred_and_distorted_vision" v-model="inform.symptom" id="blurred_and_distorted_vision" />
<label><p>รู้สึกชาๆ</p></label>
    <input type="checkbox" value="altered_sensorium" v-model="inform.symptom" id="altered_sensorium" />
       <label><p>ปัสสาวะสีเข้ม</p></label>
    <input type="checkbox" value="dark_urine" v-model="inform.symptom" id="dark_urine" />
       <label><p>ท้องอืด</p></label>
    <input type="checkbox" value="swelling_of_stomach" v-model="inform.symptom" id="swelling_of_stomach" />
  <label><p>อุจจาระเป็นเลือด</p></label>
    <input type="checkbox" value="bloody_stool" v-model="inform.symptom" id="bloody_stool" />
      <label><p>ภาวะโรคอ้วน</p></label>
    <input type="checkbox" value="obesity" v-model="inform.symptom" id="obesity" />
      <label><p>อารมณ์แปรปรวน</p></label>
    <input type="checkbox" value="mood_swings" v-model="inform.symptom" id="mood_swings" />
  <label><p>ระดับน้ำตาลในเลือดผิดปกติ</p></label>
    <input type="checkbox" value="irregular_sugar_level" v-model="inform.symptom" id="irregular_sugar_level" />
    <label><p>โรคประจำตัวในครอบครัว</p></label>
    <input type="checkbox" value="family_history" v-model="inform.symptom" id="family_history" />
  <label><p>ไม่มีสมาธิ</p></label>
    <input type="checkbox" value="lack_of_concentration" v-model="inform.symptom" id="lack_of_concentration" />
      <label><p>หิวบ่อย</p></label>
    <input type="checkbox" value="excessive_hunger" v-model="inform.symptom" id="excessive_hunger" />
      <label><p>รู้สึกระคายเคืองบริเวณทวารหนัก</p></label>
    <input type="checkbox" value="irritation_in_anus" v-model="inform.symptom" id="irritation_in_anus" />
      <label><p>ขาบวม</p></label>
    <input type="checkbox" value="swollen_legs" v-model="inform.symptom" id="swollen_legs" />
     <label><p>ไอมีเสมหะเป็นมูก</p></label>
    <input type="checkbox" value="mucoid_sputum" v-model="inform.symptom" id="mucoid_sputum" />
     <label><p>คอเคล็ด</p></label>
    <input type="checkbox" value="stiff_neck" v-model="inform.symptom" id="stiff_neck" />
     <label><p>มีประวัติติดสุรา</p></label>
    <input type="checkbox" value="history_of_alcohol_consumption" v-model="inform.symptom" id="history_of_alcohol_consumption" />
     <label><p>หลอดเลือดบวม</p></label>
    <input type="checkbox" value="swollen_blood_vessels" v-model="inform.symptom" id="swollen_blood_vessels" />
     <label><p>ปัสสาวะเป็นเลือด</p></label>
    <input type="checkbox" value="spotting_urination" v-model="inform.symptom" id="spotting_urination" />
     <label><p>อาการคันภายใน</p></label>
    <input type="checkbox" value="internal_itching" v-model="inform.symptom" id="internal_itching" />
   <label><p>ผายลม</p></label>
    <input type="checkbox" value="passage_of_gases" v-model="inform.symptom" id="passage_of_gases" />
     <label><p>ตาเหลือง</p></label>
    <input type="checkbox" value="yellowing_of_eyes" v-model="inform.symptom" id="yellowing_of_eyes" />
   <label><p>ปวดตามกล้ามเนื้อ</p></label>
    <input type="checkbox" value="muscle_pain" v-model="inform.symptom" id="muscle_pain" />
     <label><p>โรคต่อมน้ำเหลืองอักเสบ</p></label>
    <input type="checkbox" value="swelled_lymph_nodes" v-model="inform.symptom" id="swelled_lymph_nodes" />
   <label><p>อ่อนเพลีย รู้สึกไม่สบาย</p></label>
    <input type="checkbox" value="malaise" v-model="inform.symptom" id="malaise" />
     <label><p>ภาวะเส้นเลือดขอด</p></label>
    <input type="checkbox" value="prominent_veins_on_calf" v-model="inform.symptom" id="prominent_veins_on_calf" />
     <label><p>หน้าบวม ตาบวม</p></label>
    <input type="checkbox" value="puffy_face_and_eyes" v-model="inform.symptom" id="puffy_face_and_eyes" />
    <label><p>มีอาการหงุดหงิด ฉุนเฉียวง่าย</p></label>
    <input type="checkbox" value="irritability" v-model="inform.symptom" id="irritability" />
    <label><p>มีไข้ไม่สูงมาก</p></label>
    <input type="checkbox" value="mild_fever" v-model="inform.symptom" id="mild_fever" />
    <label><p>ปัสสาวะสีเหลือง</p></label>
    <input type="checkbox" value="yellow_urine" v-model="inform.symptom" id="yellow_urine" />
    <label><p>มีเสมหะ</p></label>
    <input type="checkbox" value="phlegm" v-model="inform.symptom" id="phlegm" />
    <label><p>ต่อมไทรอยด์ใหญ่ขึ้น</p></label>
    <input type="checkbox" value="enlarged_thyroid" v-model="inform.symptom" id="enlarged_thyroid" />
    <label><p>ความอยากอาหารเพิ่มขึ้น</p></label>
    <input type="checkbox" value="increased_appetite" v-model="inform.symptom" id="increased_appetite" />
     <label><p>เล็บเปราะ</p></label>
    <input type="checkbox" value="brittle_nails" v-model="inform.symptom" id="brittle_nails" />
     <label><p>ปัสสาวะออกมามาก</p></label>
    <input type="checkbox" value="polyuria" v-model="inform.symptom" id="polyuria" />
    <label><p>ปวดบริเวณเปลือกตา</p></label>
    <input type="checkbox" value="pain_behind_the_eyes" v-model="inform.symptom" id="pain_behind_the_eyes" />
       <label><p>เจ็บบริเวณหน้าท้อง</p></label>
    <input type="checkbox" value="belly_pain" v-model="inform.symptom" id="belly_pain" />
       <label><p>ไข้รากสากใหญ่</p></label>
    <input type="checkbox" value="toxic_look_(typhos)" v-model="inform.symptom" id="toxic_look_(typhos)" />
       <label><p>อาการระคายเคืองที่คอ</p></label>
    <input type="checkbox" value="throat_irritation" v-model="inform.symptom" id="throat_irritation" />
       <label><p>หัวใจเต้นเร็ว</p></label>
    <input type="checkbox" value="fast_heart_rate" v-model="inform.symptom" id="fast_heart_rate" />
       <label><p>เเขนขาบวม</p></label>
    <input type="checkbox" value="swollen_extremeties" v-model="inform.symptom" id="swollen_extremeties" />
       <label><p>มีจุดสีแดงตามร่างกาย</p></label>
    <input type="checkbox" value="red_spots_over_body" v-model="inform.symptom" id="red_sports_over_body" />
       <label><p>เคยรับการถ่ายเลือด</p></label>
    <input type="checkbox" value="receiving_blood_transfusion" v-model="inform.symptom" id="receiving_blood_transfusion" />
<label><p>ตาเเดง</p></label>
    <input type="checkbox" value="redness_of_eyes" v-model="inform.symptom" id="redness_of_eyes" />
    <label><p>มีเสมหะสีสนิม</p></label>
    <input type="checkbox" value="rusty_sputum" v-model="inform.symptom" id="rusty_sputum" />
        <label><p>มีอาการซึมเศร้า</p></label>
    <input type="checkbox" value="depression" v-model="inform.symptom" id="depression" />
 <label><p>ความผิดปกติของสายตา</p></label>
    <input type="checkbox" value="visual_disturbances" v-model="inform.symptom" id="visual_disturbances" />
     <label><p>ไซนัสอักเสบ</p></label>
    <input type="checkbox" value="sinus_pressure" v-model="inform.symptom" id="sinus_pressure" />
     <label><p>น้ำมูกไหล</p></label>
    <input type="checkbox" value="runny_nose" v-model="inform.symptom" id="runny_nose" />
     <label><p>เลือดคั่ง</p></label>
    <input type="checkbox" value="congestion" v-model="inform.symptom" id="congestion" />
     <label><p>ไอเป็นเลือด</p></label>
    <input type="checkbox" value="blood_in_sputum" v-model="inform.symptom" id="blood_in_sputum" />
     <label><p>สูญเสียการได้กลิ่น</p></label>
    <input type="checkbox" value="loss_of_smell" v-model="inform.symptom" id="loss_of_smell" />
         <label><p>เคยติดเชื้อโรค</p></label>
    <input type="checkbox" value="receiving_unsterile_injections" v-model="inform.symptom" id="receiving_unsterile_injections" />



    <button @click="start" :disabled="isPlaying">Diagnose</button>
  </form>
<p>name: {{inform.name}}</p>
<p>symptom: {{inform.symptom}}</p>


<p>{{isPlaying}}</p>

 
</template>

<script>

import Block from '../components/Block.vue'


export default {
  name: 'Home',
  components: {Block,},
  data(){
    return{
      inform:{
        name:'',
       
        symptom:[],
        diagnose:[]
      }
        
      ,
      
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
     
      result: null,
      showingDetails: true ,
      
      // projects: []
    
    }
  },
  mounted(){
  // fetch('http://localhost:3000/projects')
  //   .then(res => res.json()) 
  //   .then(data => this.projects = data)
  //   .catch(err => console.log(err.message))
  console.log('home')
    }, 
    methods: {
      start(){
      // this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true,
      this.showingDetails = false
      console.log(this.delay)
      },
      endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false,
      this.showResults = true,
      this.showingDetails = true,
      this.inform.name='',
      this.inform.qa=null
      },
      handleComplete(id){
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete
    }

    
    

  }
  
    
   
  
  
}
</script>
<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: #aaa;
    display:inline-block;
    margin: 25px 0 15 px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
</style>

