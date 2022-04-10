<template>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <body class="w3-light-grey">

        <!-- Banner & Search Bar Section -->

        <div class="banner">
            <div class="content">
                <div class="circle">
                    <div class="circle_inner">
                        <div class="circle_inner__layer">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc7.png"/>
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
            </div>
    <br><br><br><br>
            <h2 class="banner-h2">Which destinations would you like to compare?</h2>
    <br><br>  
            <div class="w3-half" style="padding-top: 0">
                <form id="userForm1">
                    <h4>Select 1st Destination Country</h4>
                    <div class="formli">
                        <SearchAutocomplete @selected="countryToCode1"/>
                    </div>
                </form>
            </div>
            <div class="w3-half" style="padding-top: 0">
                <form id="userForm2">
                    <h4>Select 2nd Destination Country</h4>
                    <div class="formli">
                        <SearchAutocomplete @selected="countryToCode2"/>
                    </div>
                </form>
            </div>
        </div>
        <br>

        <!-- Summary Section -->

        <div class="container">
            <div v-if=destCountry1 class="split">
                <h2>{{this.destCountry1}}</h2>
                <div class = "w3 panel">
                    <div class="w3-row-padding" style="display: flex; height: auto;"> 
                            <table class="w3-table w3-striped w3-white" style="margin: auto; min-height: 100%">
                            <tr>
                                <td><i class="fa fa-list-alt w3-text-yellow w3-large"></i></td>
                                <td><b>Summary : </b><div v-html="this.summary1" style="text-align: justify; padding: 1em;"></div></td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                                <td><b>Mask Policy : </b><div v-html="this.mask1" style="text-align: justify; padding: 1em;"></div> </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                                <td><b> Tracing Application Requirement : </b><div v-html="this.tracing1" style="text-align: justify; padding: 1em;"></div> </td>
                            </tr>
                            </table>
                    </div>
                </div>
            </div>
            <div v-if=destCountry2 class="split">
                <h2 style="right: 0">{{this.destCountry2}}</h2>
                <div class = "w3 panel">
                    <div class="w3-row-padding" style="display: flex; height: auto;"> 
                            <table class="w3-table w3-striped w3-white" style="margin: auto; min-height: 100%">
                            <tr>
                                <td><i class="fa fa-list-alt w3-text-yellow w3-large"></i></td>
                                <td><b>Summary : </b><div v-html="this.summary2" style="text-align: justify; padding: 1em;"></div></td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                                <td><b>Mask Policy : </b><div v-html="this.mask2" style="text-align: justify; padding: 1em;"></div> </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                                <td><b> Tracing Application Requirement : </b><div v-html="this.tracing2" style="text-align: justify; padding: 1em;"></div> </td>
                            </tr>
                            </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Charts Sections -->

        <div class="container">
            <div v-if=destCountry1 class="split">
                <div class="w3-panel" style="padding: 1em;">
                    <div class="w3-row-padding">
                            <h5 style="font-weight: bold;">Covid Cases across</h5>
                            <Charts1 :countryProp = "destCountry1"/>
                            <br>
                            <h5 style="font-weight: bold;">Statistics</h5>
                            <table class="w3-table w3-striped w3-white" style="margin: auto; min-height: 100%">
                            <tr>
                                <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                                <td><b>Disease Risk Level : </b>{{this.diseaseLevel1}} </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                                <td><b>Number of active cases : </b>{{this.cases1}} </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
                                <td><b>Infection rate : </b>{{this.diseaseRate1}} </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                                <td><b>Percentage fully vaccinated : </b>{{this.dose1}}%</td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                                <td><b>The hotspot areas are : </b><div v-html="this.hotSpot1"></div> </td>
                            </tr>
                            </table>
                    </div>
                </div>
            </div>
            <div v-if=destCountry2 class="split">
                <div class="w3-panel" style="padding: 1em;">
                    <div class="w3-row-padding">
                            <h5 style="font-weight: bold;">Covid Cases across</h5>
                            <Charts2 :countryProp = "destCountry2"/>
                            <br>
                            <h5 style="font-weight: bold;">Statistics</h5>
                            <table class="w3-table w3-striped w3-white" style="margin: auto; min-height: 100%">
                            <tr>
                                <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                                <td><b>Disease Risk Level : </b>{{this.diseaseLevel2}} </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                                <td><b>Number of active cases : </b>{{this.cases2}} </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
                                <td><b>Infection rate : </b>{{this.diseaseRate2}} </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                                <td><b>Percentage fully vaccinated : </b>{{this.dose2}}%</td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                                <td><b>The hotspot areas are : </b><div v-html="this.hotSpot2"></div> </td>
                            </tr>
                            </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Travel Restrictions Section -->

        <div class="container">
            <div v-if=destCountry1 class="split">
                <div class = "w3 panel"> 
                    <h2>Travel Requirements</h2>
                    <table class="w3-table w3-striped w3-white">
                        <tr>
                            <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                            <td><b>Documents required : </b><div v-html="this.document1"></div> </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                            <td><b>Vaccination Policy : </b>{{this.vaccine1}}  </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                            <td><b>Pre Flight testing required : </b><div v-html="this.testing1"></div> </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                            <td><b>Entry Restrictions : </b><div v-html="this.entryRestriction1"></div> </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-laptop w3-text-red w3-large"></i></td>
                            <td><b>Exit Restrictions : </b><div v-html="this.exitRestriction1"></div> </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
                            <td><b>Quarantine Policy : </b><div v-html="this.quarantine1"></div> </td>
                        </tr>
                    </table>
                </div>
                <p>For more information, please refer to : </p><div v-html="this.link1"></div>
                <hr>
            </div>
            <div v-if=destCountry2 class="split">
                <div class = "w3 panel"> 
                    <h2>Travel Requirements</h2>
                    <table class="w3-table w3-striped w3-white">
                        <tr>
                            <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
                            <td><b>Documents required : </b><div v-html="this.document2"></div> </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                            <td><b>Vaccination Policy : </b>{{this.vaccine2}}  </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                            <td><b>Pre Flight testing required : </b><div v-html="this.testing2"></div> </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                            <td><b>Entry Restrictions : </b><div v-html="this.entryRestriction2"></div> </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-laptop w3-text-red w3-large"></i></td>
                            <td><b>Exit Restrictions : </b><div v-html="this.exitRestriction2"></div> </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
                            <td><b>Quarantine Policy : </b><div v-html="this.quarantine2"></div> </td>
                        </tr>
                    </table>
                </div>
                <p>For more information, please refer to : </p><div v-html="this.link2"></div>
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
          this.diseaseRate1 = x.data.diseaseInfection.rate
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
          this.link1 = "<a href=\"" + x.data.areaPolicy.referenceLink + "\" target=\"_blank\" rel=\"noopener\">"+  x.data.areaPolicy.referenceLink + "</a>" 
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
          this.diseaseRate2 = x.data.diseaseInfection.rate
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
          this.link2 = "<a href=\"" + x.data.areaPolicy.referenceLink + "\" target=\"_blank\" rel=\"noopener\">"+  x.data.areaPolicy.referenceLink + "</a>" 
        });
    },
  },
};
</script>

<style>
.banner {
        display: inline-block;
        height: 40em;
        vertical-align: middle;
        margin: auto;
}
.banner-h2 {
    display: inline-block;
    width: 100%;
    font-size: 3em;
    font-weight: bolder;
    color: black;
    background-color: transparent;
    transform: translateY(10%);
}
.formli{
    display: inline-block;
    text-align: center;
    margin: auto;
}
form {
    text-align: center;
    align-items: center;
    margin: auto;
}
.container {
    display: flex;
}

.split {
    width:49%
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
        transform: translateY(20%);
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
    h2 {
        font-weight: bolder;
        width: 99%;
        background-color: rgb(21, 21, 21);
        color: white;
        padding:none;
    }
    td {
        padding: 1em;
    }
</style>