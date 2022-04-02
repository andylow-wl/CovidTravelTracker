<template>
    <button @click="fetchCovidCase()">test</button>
    <div>{{CN.data}}</div>
</template>
<script>
import axios from 'axios'
import firebaseApp from '../firebase.js';
import {getFirestore} from "firebase/firestore";
import {doc, setDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);


export default {
    name : 'AddDataFS',
    components : {},
    data() {
        return  {
            AU : '',
            CN : '',
            ID : '',
            JP : '',
            KR : '',
            MY : '',
            US : '',
        }
    },
    methods : {
        async  fetchCovidCase() {
            console.log("Working")
            var enddateObj = new Date()
            var startdateObj = new Date(new Date().setDate(enddateObj.getDate()-30));
            var enddate = enddateObj.toISOString();
            var startdate = startdateObj.toISOString();
            enddate = enddate.substring(0, enddate.indexOf('T')+1);
            startdate = startdate.substring(0, startdate.indexOf('T')+1);
            enddate += "00:00:00Z"
            startdate += "00:00:00Z"
            console.log(startdate, enddate)
            await axios.get('https://api.covid19api.com/total/country/' + 'AU' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.AU = response))
            await axios.get('https://api.covid19api.com/total/country/' + 'CN' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.CN = response))
            this.CN.data.forEach(data => setDoc(doc(db, "China", data["Date"]), {
                Country: "China", date: data["Date"], Cases: data["Cases"]
            }))
            await axios.get('https://api.covid19api.com/total/country/' + 'ID' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.ID = response))
            await axios.get('https://api.covid19api.com/total/country/' + 'JP' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.JP = response))
            await axios.get('https://api.covid19api.com/total/country/' + 'KR' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.KR = response))
            await axios.get('https://api.covid19api.com/total/country/' + 'MY' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.MY = response))
            await axios.get('https://api.covid19api.com/total/country/' + 'US' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.US = response))

        }
    },
    mounted() {
        console.log(this.AU)
    },
}
</script>
