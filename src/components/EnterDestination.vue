<template>
    <div id="container">
        <form id="userForm">
            <h2 class="titleofDiv">Enter your Destination Country</h2>
            <div class="formli">
                <SearchAutocomplete @selected="countryToCode"/>
            </div>
        </form>
        <p>Destination Country: {{countryCode}}</p>
        <p> Request: {{results}}</p>
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
                results: "",
            }
        },

        methods: {
            async getData(queryCountryCode) {
                const Amadeus = require("amadeus")
                const amadeus = new Amadeus({
                clientId: "mI8eIig47TqnEx3hMJXmL8arVfX2EKxG",
                clientSecret: "AavRlk6yEoE9knt4"
                });
                const query = {
                    countryCode: queryCountryCode
                };
                amadeus.client.get('/v1/duty-of-care/diseases/covid19-area-report', query)
                .then(function(response) {
                    this.results = response
                    console.log(response)
                }).catch(function(responseError) {
                    console.log(responseError)
                });
                },

            async countryToCode(destCountry) {
                var country_code_dict = {
                "Australia": "AU",
                "Brunei": "BN",
                "Cambodia": "KH",
                "Canada": "CA",
                "Denmark": "DK",
                "Fiji": "FJ",
                "Finland": "FN",
                "France": "FR",
                "Germany": "DE",
                "India": "IN",
                "Indonesia": "ID",
                "Italy": "IT",
                "Malaysia": "MY",
                "Maldives": "MV",
                "Netherland": "NL",
                "Korea": "KR",
                "Spain": "ES",
                "Sri Lanka": "LK",
                "Sweden": "SE",
                "Switzerland": "CH",
                "Thailand": "TH",
                "Turkey": "TR",
                "United Kingdom": "GB",
                "United States": "US", 
            }  
                console.log(destCountry)
                try {
                    this.countryCode = country_code_dict[destCountry]
                } catch {
                    this.countryCode = "error"
                }
                if (this.country != "error") {
                    await this.getData(this.countryCode)
                }
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