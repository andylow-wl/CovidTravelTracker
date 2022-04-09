<template>
    <head>
    <title>W3.CSS Template</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>

    <body class="w3-light-grey">
        <h1>Work in Progress!</h1>
        <div class="split left">
            <form id="userForm1">
                <h2 class="titleofDiv">Select First Destination Country</h2>
                <div class="formli">
                    <SearchAutocomplete @selected="countryToCode1"/>
                </div>
            </form>

            <div v-if=destCountry1>
                <p>Destination Country: {{this.destCountry1}}</p>
                <div v-html="this.summary1"></div>
                <div class="w3-panel">
                    <div class="w3-row-padding" style="margin:0 -16px">
                        <div class="w3-third">
                            <h5>Covid Cases across time</h5>
                            <Charts1 :countryProp = "destCountry1"/>
                        </div>
                        <div class="w3-twothird">
                            <h5>Statistics</h5>
                            <table class="w3-table w3-striped w3-white">
                                <tr>
                                    <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                                    <td>Disease Risk Level:{{this.diseaseLevel1}} </td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                                    <td>Number of active cases : {{this.cases1}} </td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                                    <td> Percentage fully vaccinated : {{this.dose1}}%</td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                                    <td>The hotspot areas are : <div v-html="this.hotSpot1"></div> </td>
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
                                <td> Documents required: <div v-html="this.document1"></div> </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                                <td>Vaccination Policy : {{this.vaccine1}}  </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                                <td> Pre Flight testing required : <div v-html="this.testing1"></div> </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                                <td>Entry Restrictions : <div v-html="this.entryRestriction1"></div> </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-laptop w3-text-red w3-large"></i></td>
                                <td>Exit Restrictions : <div v-html="this.exitRestriction1"></div> </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
                                <td> Quarantine Policy : <div v-html="this.quarantine1"></div> </td>
                            </tr>
                        </table>
                </div>

                <div class = "w3 panel"> 
                    <h5>Domestic Requirements</h5>
                    <table class="w3-table w3-striped w3-white">
                        <tr>
                            <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                            <td>Mask Policy : <div v-html="this.mask1"></div> </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                            <td>Tracing Application Requirement :<div v-html="this.tracing1"></div> </td>
                        </tr>
                    </table>
                    <p>For more information, please refer to :</p> <div v-html="this.link1"></div>
                </div>
                <hr>
            </div>
        </div>
<!------------------------------------------------ Right Side ------------------------------------------------------------------------------------->
        <div class="split right">
            <form id="userForm2">
                <h2 class="titleofDiv">Select Second Destination Country</h2>
                <div class="formli">
                    <SearchAutocomplete @selected="countryToCode2"/>
                </div>
            </form>
            <div v-if=destCountry2>
                <p>Destination Country: {{this.destCountry2}}</p>
                <div v-html="this.summary2"></div>
                <div class="w3-panel">
                    <div class="w3-row-padding" style="margin:0 -16px">
                        <div class="w3-third">
                            <h5>Covid Cases across time</h5>
                            <Charts2 :countryProp = "destCountry2"/>
                        </div>
                        <div class="w3-twothird">
                            <h5>Statistics</h5>
                            <table class="w3-table w3-striped w3-white">
                                <tr>
                                    <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                                    <td>Disease Risk Level:{{this.diseaseLevel2}} </td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                                    <td>Number of active cases : {{this.cases2}} </td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                                    <td> Percentage fully vaccinated : {{this.dose2}}%</td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                                    <td>The hotspot areas are : <div v-html="this.hotSpot2"></div> </td>
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
                                <td> Documents required: <div v-html="this.document2"></div> </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                                <td>Vaccination Policy : {{this.vaccine2}}  </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                                <td> Pre Flight testing required : <div v-html="this.testing2"></div> </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                                <td>Entry Restrictions : <div v-html="this.entryRestriction2"></div> </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-laptop w3-text-red w3-large"></i></td>
                                <td>Exit Restrictions : <div v-html="this.exitRestriction2"></div> </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
                                <td> Quarantine Policy : <div v-html="this.quarantine2"></div> </td>
                            </tr>
                        </table>
                </div>

                <div class = "w3 panel"> 
                    <h5>Domestic Requirements</h5>
                    <table class="w3-table w3-striped w3-white">
                        <tr>
                            <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                            <td>Mask Policy : <div v-html="this.mask2"></div> </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                            <td>Tracing Application Requirement :<div v-html="this.tracing2"></div> </td>
                        </tr>
                    </table>
                    <p>For more information, please refer to :</p> <div v-html="this.link2"></div>
                </div>
                <hr>
            </div>
        </div>
    </body>
</template>

<script>
console.log("In Compare");

import SearchAutocomplete from "@/components/SearchAutocomplete.vue";
import Charts1 from "@/components/Charts1.vue";
import Charts2 from "@/components/Charts2.vue";

export default {
  name: "Compare",
  components: {
    SearchAutocomplete,
    Charts1,
    Charts2,
  },

  data() {
    return {
      countryCode1: "",
      countryCode2: "",
      destCountry1: false,
      destCountry2: false,
      diseaseLevel1: "",
      diseaseDate1: "",
      cases1: "",
      caseDate1: "",
      summary1: "",
      diseaseLevel2: "",
      diseaseDate2: "",
      cases2: "",
      caseDate2: "",
      summary2: "",
    };
  },

  methods: {
    async countryToCode1(destCountry1) {
      var country_code_dict = {
        Australia: "AU",
        China: "CN",
        Indonesia: "ID",
        Japan: "JP",
        Korea: "KR",
        Malaysia: "MY",
        "United States": "US",
      };
      try {
        this.countryCode1 = country_code_dict[destCountry1];
        this.destCountry1 = destCountry1;
        console.log(this.countryCode1);
      } catch {
        this.countryCode = "error";
      }

      const Amadeus = require("amadeus");
      const amadeus = new Amadeus({
        clientId: "uDGFRwqjN9TMyagU3pwL4Yv53iUZzXN3",
        clientSecret: "FjthFeiXCnw4KX9D",
      });
      const query = {
        countryCode: this.countryCode1,
      };
      console.log(query);

      amadeus.client
        .get("/v1/duty-of-care/diseases/covid19-area-report", query)
        .then((x) => {
          console.log(x.data);
          this.diseaseLevel1 = x.data.diseaseInfection.level;
          this.diseaseDate1 = x.data.diseaseInfection.date;
          this.cases1 = x.data.diseaseCases.confirmed;
          this.caseDate1 = x.data.diseaseCases.date;
          this.hotSpot1 = x.data.hotspots;
          this.dose1 = x.data.areaVaccinated[1].percentage;
          this.doseDate1 = x.data.areaVaccinated[1].date;
          this.summary1 = x.data.summary;
          this.document1 =
            x.data.areaAccessRestriction.declarationDocuments.text;
          //this.documentDate =   x.data.areaAccessRestriction.declarationDocuments.date
          this.testing1 = x.data.areaAccessRestriction.diseaseTesting.text;
          //this.testingDate =  x.data.areaAccessRestriction.diseaseTesting.date
          this.vaccine1 = x.data.areaAccessRestriction.diseaseVaccination.qualifiedVaccines;
          //this.vaccineDate =  x.data.areaAccessRestriction.diseaseVaccination.date
          this.entryRestriction1 = x.data.areaAccessRestriction.entry.text;
          //this.entryRestrictionDate =  x.data.areaAccessRestriction.entry.date
          this.exitRestriction1 = x.data.areaAccessRestriction.exit.text;
          //this.exitRestrictionDate =  x.data.areaAccessRestriction.exit.date
          this.mask1 = x.data.areaAccessRestriction.mask.text;
          //this.maskDate = x.data.areaAccessRestriction.mask.date
          this.quarantine1 = x.data.areaAccessRestriction.quarantineModality.text;
          this.tracing1 = x.data.areaAccessRestriction.tracingApplication.text;
          this.link1 = x.data.areaPolicy.referenceLink;
        });
    },

    async countryToCode2(destCountry2) {
      var country_code_dict = {
        Australia: "AU",
        China: "CN",
        Indonesia: "ID",
        Japan: "JP",
        Korea: "KR",
        Malaysia: "MY",
        "United States": "US",
      };
      try {
        this.countryCode2 = country_code_dict[destCountry2];
        this.destCountry2 = destCountry2;
        console.log(this.countryCode2);
      } catch {
        this.countryCode2 = "error";
      }

      const Amadeus = require("amadeus");
      const amadeus = new Amadeus({
        clientId: "uDGFRwqjN9TMyagU3pwL4Yv53iUZzXN3",
        clientSecret: "FjthFeiXCnw4KX9D",
      });
      const query = {
        countryCode: this.countryCode2,
      };
      console.log(query);

      amadeus.client
        .get("/v1/duty-of-care/diseases/covid19-area-report", query)
        .then((x) => {
          console.log(x.data);
          this.diseaseLevel2 = x.data.diseaseInfection.level;
          this.diseaseDate2 = x.data.diseaseInfection.date;
          this.cases2 = x.data.diseaseCases.confirmed;
          this.caseDate2 = x.data.diseaseCases.date;
          this.hotSpot2 = x.data.hotspots;
          this.dose2 = x.data.areaVaccinated[1].percentage;
          this.doseDate2 = x.data.areaVaccinated[1].date;
          this.summary2 = x.data.summary;
          this.document2 =
            x.data.areaAccessRestriction.declarationDocuments.text;
          //this.documentDate =   x.data.areaAccessRestriction.declarationDocuments.date
          this.testing2 = x.data.areaAccessRestriction.diseaseTesting.text;
          //this.testingDate =  x.data.areaAccessRestriction.diseaseTesting.date
          this.vaccine2 =
            x.data.areaAccessRestriction.diseaseVaccination.qualifiedVaccines;
          //this.vaccineDate =  x.data.areaAccessRestriction.diseaseVaccination.date
          this.entryRestriction2 = x.data.areaAccessRestriction.entry.text;
          //this.entryRestrictionDate =  x.data.areaAccessRestriction.entry.date
          this.exitRestriction2 = x.data.areaAccessRestriction.exit.text;
          //this.exitRestrictionDate =  x.data.areaAccessRestriction.exit.date
          this.mask2 = x.data.areaAccessRestriction.mask.text;
          //this.maskDate = x.data.areaAccessRestriction.mask.date
          this.quarantine2 =
            x.data.areaAccessRestriction.quarantineModality.text;
          this.tracing2 = x.data.areaAccessRestriction.tracingApplication.text;
          this.link2 = x.data.areaPolicy.referenceLink;
        });
    },
  },
};
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
.split {
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    /*top: 0;*/
    overflow-x: hidden;
    padding-top: 20px;
}
.left {
  left: 0;
}
.right {
  right: 0;
}

</style>