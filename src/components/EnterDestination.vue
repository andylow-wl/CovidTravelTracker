<template>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
<body class="w3-light-grey">

    <div id="container">
        <form id="userForm">
            <h2 class="titleofDiv">Enter your Destination Country(Click on the selected country)</h2>
            <div class="formli">
                <SearchAutocomplete @selected="countryToCode"/>
            </div>
        </form>
    </div>

    <div v-if=destCountry>
    <p>Destination Country: {{this.destCountry}}</p>
    <div v-html="this.summary"></div>
    <div class="w3-panel">
        <div class="w3-row-padding" style="margin:0 -16px">
        <div class="w3-third">
            <h5>Covid Cases across time</h5>
            <Charts1 :countryProp = "destCountry"/>
        </div>
    <div class="w3-twothird">

            <h5>Statistics</h5>
            <table class="w3-table w3-striped w3-white">
            <tr>
                <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                <td>Disease Risk Level:{{this.diseaseLevel}} </td>
            </tr>
            <tr>
                <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                <td>Number of active cases : {{this.cases}} </td>
            </tr>
            <tr>
                <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                <td> Percentage fully vaccinated : {{this.dose}}%</td>
            </tr>
            <tr>
                <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                <td>The hotspot areas are : <div v-html="this.hotSpot"></div> </td>
            </tr>
            </table>
    </div>
    </div>
    </div>

    <div class = "w3 panel"> 
        <h5>Travel Requirements</h5>
            <table class="w3-table w3-striped w3-white">
                <tr>
                    <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                    <td> Documents required: <div v-html="this.document"></div> </td>
                </tr>
                <tr>
                    <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                    <td>Vaccination Policy : {{this.vaccine}}  </td>
                </tr>
                <tr>
                    <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                    <td> Pre Flight testing required : <div v-html="this.testing"></div> </td>
                </tr>
                <tr>
                    <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                    <td>Entry Restrictions : <div v-html="this.entryRestriction"></div> </td>
                </tr>
                <tr>
                    <td><i class="fa fa-laptop w3-text-red w3-large"></i></td>
                    <td>Exit Restrictions : <div v-html="this.exitRestriction"></div> </td>
                </tr>
                <tr>
                    <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
                    <td> Quarantine Policy : <div v-html="this.quarantine"></div> </td>
                </tr>
            </table>
    </div>

      <div class = "w3 panel"> 
        <h5>Domestic Requirements</h5>
            <table class="w3-table w3-striped w3-white">
                <tr>
                    <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                    <td>Mask Policy : <div v-html="this.mask"></div> </td>
                </tr>
                <tr>
                    <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                    <td>Tracing Application Requirement :<div v-html="this.tracing"></div> </td>
                </tr>
            </table>
                   For more information, please refer to : <div v-html="this.link"></div>
    </div>
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

<style>
    h2{
        background-color: rgb(129,184,99);
    }
    .formli{
        display: inline-block;
        text-align: right;
    }
    form {
        text-align: center;
        align-items: center;
        margin: auto;
    }
    .search{
        text-align: center;
    }
    #searchButton:hover {
        background-color: aquamarine;
        font-weight: bolder;
    }
</style>