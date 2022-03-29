<template>
    <div id="container">
        <form id="userForm">
            <h2 class="titleofDiv">Enter your Destination Country(Click on the selected country)</h2>
            <div class="formli">
                <SearchAutocomplete @selected="countryToCode"/>
            </div>
        </form>
        <p>Destination Country: {{this.destCountry}}</p>
        <p> Disease Risk Level: {{this.diseaseLevel}} as of {{this.diseaseDate}} </p>
        <p> Number of active cases : {{this.cases}} as of {{this.caseDate}}</p>
        <p> Percentage fully vaccinated : {{this.dose}}% as of {{this.doseDate}} </p>
        <p> The hotspot areas are : {{this.hotSpot}} </p>
        <p> Summary : {{this.summary}} </p>
        <p> Vaccination Policy : {{this.vaccine}} </p>
        <p> Documents required : {{this.document}} </p>
        <p> Pre Flight testing required : {{this.testing}} </p>
        <p> Entry Restrictions : {{this.entryRestriction}} </p>
        <p> Exit Restrictions : {{this.exitRestriction}} </p>
        <p> Mask Policy : {{this.mask}} </p>
        <p> Quarantine Policy : {{this.quarantine}} </p>
        <p> Tracing Application Requirement :{{this.tracing}} </p>
    </div>
    
</template>

<script>
    console.log("In EnterDestination")
    import SearchAutocomplete from '@/components/SearchAutocomplete.vue'
    export default {
        name: 'EnterDestination',
        
        components: {
            SearchAutocomplete,
        },
        data() {
            return {
                countryCode:"",
                destCountry:"",
                diseaseLevel:"",
                diseaseDate:"",
                cases:"",
                caseDate:"",
                summary:"",

            }
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
                        console.log(x.data)
                        this.diseaseLevel = x.data.diseaseInfection.level
                        this.diseaseDate = x.data.diseaseInfection.date 
                        this.cases = x.data.diseaseCases.confirmed 
                        this.caseDate = x.data.diseaseCases.date
                        this.hotSpot = x.data.hotspots.replaceAll("<p>","").replaceAll("</p>","") 
                        this.dose = x.data.areaVaccinated[1].percentage
                        this.doseDate = x.data.areaVaccinated[1].date
                        this.summary = x.data.summary.replaceAll("<p>","").replaceAll("</p>","") 
                        this.document = x.data.areaAccessRestriction.declarationDocuments.text.replaceAll("<p>","").replaceAll("</p>","") 
                        //this.documentDate =   x.data.areaAccessRestriction.declarationDocuments.date 
                        this.testing =  x.data.areaAccessRestriction.diseaseTesting.text.replaceAll("<p>","").replaceAll("</p>","").replaceAll("<strong>Before travel</strong>","")
                        //this.testingDate =  x.data.areaAccessRestriction.diseaseTesting.date 
                        this.vaccine =  x.data.areaAccessRestriction.diseaseVaccination.qualifiedVaccines
                        //this.vaccineDate =  x.data.areaAccessRestriction.diseaseVaccination.date 
                        this.entryRestriction =  x.data.areaAccessRestriction.entry.text.replaceAll("<p>","").replaceAll("</p>","") 
                        //this.entryRestrictionDate =  x.data.areaAccessRestriction.entry.date 
                        this.exitRestriction =  x.data.areaAccessRestriction.exit.text.replaceAll("<p>","").replaceAll("</p>","") 
                        //this.exitRestrictionDate =  x.data.areaAccessRestriction.exit.date 
                        this.mask =  x.data.areaAccessRestriction.mask.text.replaceAll("<p>","").replaceAll("</p>","") 
                        //this.maskDate = x.data.areaAccessRestriction.mask.date 
                        this.quarantine =  x.data.areaAccessRestriction.quarantineModality.text.replaceAll("<p>","").replaceAll("</p>","") 
                        this.tracing =  x.data.areaAccessRestriction.tracingApplication.text.replaceAll("<p>","").replaceAll("</p>","") 


                        

                        
                        
                        
        
                        
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