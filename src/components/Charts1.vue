<template>
    <div>
    <select v-model="selected">
    <option value="">Please select time period</option>
    <option>Last 30 Days</option>
    <option>Last 2 Weeks</option>
    <option>Last Week</option>
    </select>,<br><br>
    <span>Selected: {{ selected }}</span>
    <div v-if="selected=='Last 30 Days'">
    <line-chart class ="user" width=600px :min= null :data= "chartdata"></line-chart>
    </div>

    <div v-if="selected=='Last 2 Weeks'">
    <line-chart class ="user" width=600px :min= null :data= "twoWeekData"></line-chart>
    </div>

    <div v-if="selected=='Last Week'">
    <line-chart class ="user" width=600px :min= null :data= "weekData"></line-chart>
    </div>

    </div>
</template>
<script>
import firebaseApp from '../firebase.js';
import {getFirestore} from "firebase/firestore";
import {collection, getDocs} from "firebase/firestore";
const db = getFirestore(firebaseApp);


export default {

    name:'Charts1',
    props: {
       countryProp: String
    },
    data(){
        return{
            chartdata: {},
            weekData: {},
            twoWeekData: {},
            selected: "Last Week",
            country: this.countryProp

        }
    },

    mounted(){
        const self = this
 
        console.log("country:"  + self.country)


},
    watch: {
        
        countryProp: async function(x) {
            const self = this
            console.log("prop changed:" + x)
            this.country = x
            let obj = new Object();
            //change "Australia" to self.country
            let z = await getDocs(collection(db, x));
            z.forEach((d) => obj[d.data().date] = d.data().Cases);         
            let date = []
            let cases = []
            let casesDaily = []
            z.forEach((d) => date.push(d.data().date))
            z.forEach((d) => cases.push(d.data().Cases))
            console.log("cases")
            console.log(cases)
            for (let i = 1; i < cases.length; i++) {
                casesDaily[i] = cases[i] - cases[i - 1]
            }
            let monthData = new Object();
            for (let i = 1; i < cases.length; i++) {
                monthData[date[i]] = casesDaily[i]
            }
            self.chartdata = monthData

            let weekData = new Object();
            for (let i = 7; i > 0; i--){
                weekData[date[date.length-i]] = casesDaily[casesDaily.length-i]
            }
            let twoWeekData = new Object();
            for (let i = 14; i > 0; i--){
                twoWeekData[date[date.length-i]] = casesDaily[casesDaily.length-i]
            }
            self.weekData = weekData
            self.twoWeekData = twoWeekData

        }
    }
}
</script>
<style scoped>
    .user{
        display: inline-block;
    }
</style>