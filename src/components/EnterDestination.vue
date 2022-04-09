<template>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body class="w3-light-grey">

    <div class="banner">
        <table class="banner-left">
            <tr><td><h2 class="banner-h2">Where would you like to go?</h2></td></tr>
            <!--Source: https://codepen.io/jcoulterdesign/pen/OMOqjy-->
            <!-- Spent close to 3hours debugging this... -->
            <tr><td><div class="content">
                <div class="circle">
                <div class="circle_title">
                </div>
                <div class="circle_inner">
                    <div class="circle_inner__layer">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc7.png"/>
                    <!-- <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc1.png"/> -->
                    </div>
                    <div class="circle_inner__layer">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc8.png"/>
                    </div>
                    <div class="circle_inner__layer">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc9.png"/>
                    </div>
                </div>
                <div class="content_shadow"></div>
                </div>
            </div></td></tr>
        </table>
    
        <form id="userForm">
            <i class="fa fa-search w3-text-gray w3-large"></i>
            <div class="formli">
                <SearchAutocomplete @selected="countryToCode"/>
            </div>
        </form>
    </div>

    <div v-if=destCountry>
    <h1>{{this.destCountry}}</h1>
    <div class = "w3 panel">
        <div class="w3-row-padding" style="display: flex; height: 35em;"> 
            <div class="w3-half w3-striped w3-white" style="margin: auto; min-height: 100%">
                <div v-html="this.summary" style="display: inline-block; position: relative; text-align: justify; padding: 1em;"></div>
            </div>
            <div class="w3-half">
                <table class="w3-table w3-striped w3-white" style="margin: auto; min-height: 100%">
                <tr>
                    <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                    <td><b>Mask Policy : </b><div v-html="this.mask" style="display: inline-block; position: relative; text-align: justify; padding: 1em;"></div> </td>
                </tr>
                <tr>
                    <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                    <td><b> Tracing Application Requirement : </b><div v-html="this.tracing" style="display: inline-block; position: relative; text-align: justify; padding: 1em; height: 100%"></div> </td>
                </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="w3-panel" style="padding: 1em;">
        <div class="w3-row-padding" style="display: flex; height: 25em;">
            <div class="w3-half" style="margin: auto; min-height: 100%">
                <h5 style="font-weight: bold;">Covid Cases across</h5>
                <Charts1 :countryProp = "destCountry"/>
            </div>
            <div class="w3-half">
                <h5 style="font-weight: bold;">Statistics</h5>
                <table class="w3-table w3-striped w3-white" style="margin: auto; min-height: 100%">
                <tr>
                    <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                    <td><b>Disease Risk Level : </b>{{this.diseaseLevel}} </td>
                </tr>
                <tr>
                    <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                    <td><b>Number of active cases : </b>{{this.cases}} </td>
                </tr>
                <tr>
                    <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                    <td><b>Percentage fully vaccinated : </b>{{this.dose}}%</td>
                </tr>
                <tr>
                    <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                    <td><b>The hotspot areas are : </b><div v-html="this.hotSpot"></div> </td>
                </tr>
                </table>
            </div>
        </div>
    </div>
    <br>

    <div class = "w3 panel"> 
        <h1>Travel Requirements</h1>
            <table class="w3-table w3-striped w3-white">
                <tr>
                    <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                    <td><b>Documents required : </b><div v-html="this.document"></div> </td>
                </tr>
                <tr>
                    <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                    <td><b>Vaccination Policy : </b>{{this.vaccine}}  </td>
                </tr>
                <tr>
                    <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                    <td><b>Pre Flight testing required : </b><div v-html="this.testing"></div> </td>
                </tr>
                <tr>
                    <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                    <td><b>Entry Restrictions : </b><div v-html="this.entryRestriction"></div> </td>
                </tr>
                <tr>
                    <td><i class="fa fa-laptop w3-text-red w3-large"></i></td>
                    <td><b>Exit Restrictions : </b><div v-html="this.exitRestriction"></div> </td>
                </tr>
                <tr>
                    <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
                    <td><b>Quarantine Policy : </b><div v-html="this.quarantine"></div> </td>
                </tr>
            </table>
        </div>
        <p>For more information, please refer to : </p><div v-html="this.link"></div>
    <hr>
    </div>
  </body>
</template>
      
<script>
console.log("In EnterDestination");

import SearchAutocomplete from "@/components/SearchAutocomplete.vue";
import Charts1 from "@/components/Charts1.vue";
export default {
  name: "App",
  components: {
    SearchAutocomplete,
    Charts1,
  },

  data() {
    return {
      countryCode: "",
      destCountry: false,
      diseaseLevel: "",
      diseaseDate: "",
      cases: "",
      caseDate: "",
      summary: "",
    };
  },
        methods: {
            async countryToCode(destCountry) {
                var country_code_dict = {
                "Australia": "AU",
                "China":"CN",
                "Indonesia": "ID",
                "Japan" :"JP",
                "Korea": "KR",
                "Malaysia": "MY",
                "United States": "US", 
                }  
                try {
                    this.countryCode = country_code_dict[destCountry]
                    this.destCountry = destCountry
                    console.log(this.countryCode)
                } catch {
                    this.countryCode = "error"
                }
                const Amadeus = require("amadeus")
                const amadeus = new Amadeus({
                clientId: 'uDGFRwqjN9TMyagU3pwL4Yv53iUZzXN3',
                clientSecret: 'FjthFeiXCnw4KX9D'
                });
                const query = {
                    countryCode: this.countryCode
                };
                console.log(query);
            
                amadeus.client.get('/v1/duty-of-care/diseases/covid19-area-report', query).then(
                    x => {
                        //console.log(x.data)
                        this.diseaseLevel = x.data.diseaseInfection.level
                        this.diseaseDate = x.data.diseaseInfection.date 
                        this.cases = x.data.diseaseCases.confirmed 
                        this.caseDate = x.data.diseaseCases.date
                        this.hotSpot = x.data.hotspots
                        this.dose = x.data.areaVaccinated[1].percentage
                        this.doseDate = x.data.areaVaccinated[1].date
                        this.summary = x.data.summary
                        this.document =x.data.areaAccessRestriction.declarationDocuments.text
                        //this.documentDate =   x.data.areaAccessRestriction.declarationDocuments.date 
                        this.testing =  x.data.areaAccessRestriction.diseaseTesting.text
                        //this.testingDate =  x.data.areaAccessRestriction.diseaseTesting.date 
                        this.vaccine =  x.data.areaAccessRestriction.diseaseVaccination.qualifiedVaccines
                        //this.vaccineDate =  x.data.areaAccessRestriction.diseaseVaccination.date 
                        this.entryRestriction =  x.data.areaAccessRestriction.entry.text
                        //this.entryRestrictionDate =  x.data.areaAccessRestriction.entry.date 
                        this.exitRestriction =  x.data.areaAccessRestriction.exit.text
                        //this.exitRestrictionDate =  x.data.areaAccessRestriction.exit.date 
                        this.mask =  x.data.areaAccessRestriction.mask.text
                        //this.maskDate = x.data.areaAccessRestriction.mask.date 
                        this.quarantine =  x.data.areaAccessRestriction.quarantineModality.text
                        this.tracing =  x.data.areaAccessRestriction.tracingApplication.text
                        this.link = "<a href=\"" + x.data.areaPolicy.referenceLink + "\" target=\"_blank\" rel=\"noopener\">"+  x.data.areaPolicy.referenceLink + "\"</a>" 
                    });
                
            },
        }
    }
</script>

<style scoped>
    .banner {
        display: flex;
        height: 40em;
    }
    .formli{
        text-align: center;
        padding-left: 0.5em;
        position: absolute;
    }
    form {
        width: 33%;
        text-align: left;
        align-items: center;
        margin: auto;
    }
    .banner-left {
        width: 66%;
        margin:auto;
    }
    .banner-h2 {
        display: inline-block;
        font-size: 3em;
        font-weight: bolder;
        background-color: transparent;
    }
    
    .content {
        display: inline-block;
        align-items: center;
        max-width: 300px;
    }
    #circle-h2 {
        background-color: transparent;
        font-size: 1.5em;
        font-weight: bold;
    }
    #circle-h3 {
        color:#F28C28;
    }
    .circle_inner__layer {
        width: 600px;
        height: 200px;
        transition: all 0.4s;
        position: absolute;
        top: 0;
        left: -200px;
    }
    .circle_inner__layer img {
        width: 100%;
        position: relative;
        bottom: 0;
    }
    .circle {
        position: relative;
        left: 0;
        right: 0;
        margin: auto;
        top: 50%;
        width: 200px;
        /* transform: translateY(20%); */
        transition: all 0.5s;
        cursor: pointer;
    }
    .circle:hover h2, .circle:hover h3 {
        opacity: 1;
        left: 10em;
        top: 8em;
    }
    .circle:hover .content_shadow {
        transform: scale(1.1);
        top: -22px;
    }
    .circle:hover h3 {
        transition: all 0.2s 0.04s;
    }
    .circle:hover h2 {
        transition: all 0.2s;
    }
    .circle .circle_inner__layer:nth-of-type(1) {
        top: 0px;
        left: 0px;
    }
    .circle .circle_inner__layer:nth-of-type(2) {
        top: 0px;
        left: -210px;
    }
    .circle .circle_inner__layer:nth-of-type(3) {
        top: 0px;
        left: -440px;
    }
    .circle_title {
        text-align: center;
    }
    .circle_title h2, .circle_title h3 {
        opacity: 0;
        margin: 0;
        transition: all 0.2s 0.04s;
        position: relative;
    }
    .circle_title h3 {
        transition: all 0.2s;
    }
    .circle_inner {
        border-radius: 200px;
        background: #b0d5d6;
        overflow: hidden;
        width: 200px;
        z-index: 1;
        transition: all 0.3s;
        height: 200px;
        position: relative;
    }
    .circle_inner:hover {
        transform: scale(1.1);
    }
    .circle_inner:hover .circle_inner__layer:nth-of-type(1) {
        left: -80px;
        transition: all 4s linear;
    }
    .circle_inner:hover .circle_inner__layer:nth-of-type(2) {
        left: -400px;
        transition: all 4s linear;
    }
    .circle_inner:hover .circle_inner__layer:nth-of-type(3) {
        left: -140px;
        transition: all 4s linear;
    }
    .content_shadow {
        width: 200px;
        box-shadow: 0px 31px 19px -2px #e0e8f9;
        height: 20px;
        border-radius: 70%;
        transition: all 0.3s;
        z-index: 0;
    }
    h1 {
        font-weight: bolder;
        width: 100%;
        background-color: rgb(21, 21, 21);
        color: white;
    }
    tr {
        padding: 3em;
    }
</style>