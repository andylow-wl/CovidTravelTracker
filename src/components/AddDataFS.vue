<template>
    <button @click="fetchCovidCase()">Update Charts</button>
</template>
<script>
import axios from 'axios'
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
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
            enddateObj.setHours(8,0,0,0)
            var startdateObj = new Date(new Date().setDate(enddateObj.getDate()-30))
            startdateObj.setHours(8,0,0,0)
            var enddate = enddateObj.toISOString();
            var startdate = startdateObj.toISOString();
            console.log(startdate, enddate)
            await axios.get('https://api.covid19api.com/total/country/' + 'AU' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.AU = response))
            this.AU.data.forEach(data => setDoc(doc(db, "Australia", data["Date"]), {
                Country: "Australia", date: data["Date"], Cases: data["Cases"]
            }))
            // const start = startdateObj;
            // const end = enddateObj;
            // let loop = new Date(start);
            // while (loop <= end) {
            //     console.log(loop.toISOString())
            //     var loopISO = loop.toISOString()
            //     this.AU_nc[loopISO] = 0
            //     let newDate = loop.setDate(loop.getDate() + 1);
            //     loop = new Date(newDate);
            // }
            // this.AU_nc[startdate] = this.AU.data[1]['Cases'] - this.AU.data[0]['Cases']
            // this.AU_nc[enddate] = this.AU.data[30]['Cases'] - this.AU.data[29]['Cases']
            // console.log(this.AU_nc)
            await axios.get('https://api.covid19api.com/total/country/' + 'CN' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.CN = response))
            this.CN.data.forEach(data => setDoc(doc(db, "China", data["Date"]), {
                Country: "China", date: data["Date"], Cases: data["Cases"]
            }))
            await axios.get('https://api.covid19api.com/total/country/' + 'ID' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.ID = response))
            this.ID.data.forEach(data => setDoc(doc(db, "Indonesia", data["Date"]), {
                Country: "Indonesia", date: data["Date"], Cases: data["Cases"]
            }))      
            await axios.get('https://api.covid19api.com/total/country/' + 'JP' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.JP = response))
            this.JP.data.forEach(data => setDoc(doc(db, "Japan", data["Date"]), {
                Country: "Japan", date: data["Date"], Cases: data["Cases"]
            }))            
            await axios.get('https://api.covid19api.com/total/country/' + 'KR' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.KR = response))
            this.KR.data.forEach(data => setDoc(doc(db, "Korea", data["Date"]), {
                Country: "South Korea", date: data["Date"], Cases: data["Cases"]
            }))            
            await axios.get('https://api.covid19api.com/total/country/' + 'MY' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.MY = response))
            this.MY.data.forEach(data => setDoc(doc(db, "Malaysia", data["Date"]), {
                Country: "Malaysia", date: data["Date"], Cases: data["Cases"]
            }))            
            await axios.get('https://api.covid19api.com/total/country/' + 'US' + '/status/confirmed?from=' + startdate + '&to=' + enddate).then(response => (this.US = response))
            this.US.data.forEach(data => setDoc(doc(db, "United States", data["Date"]), {
                Country: "USA", date: data["Date"], Cases: data["Cases"]
            }))
        }
    },
    mounted() {
    },
}
</script>