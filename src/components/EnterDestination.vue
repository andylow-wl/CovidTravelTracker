<template>
    <div id="container">
        <form id="userForm" @submit.prevent="searchAPI">
            <h2 class="titleofDiv">Enter your Destination Country</h2>
            <div class="formli">
                <input type="text" id="destCountry" required="" placeholder="Destination Country" 
                v-model="destCountry"><br><br>
                <div class = "search">
                    <button id="searchButton" type="button" @click="searchAPI()">Search</button>
                </div>
            </div>
        </form>
        <p>Destination Country: {{countryCode}}</p>
    </div>
</template>

<script>
    console.log("In EnterDestination")
    export default {
        

        data() {
            return {
                destCountry:"", 
                countryCode:"",
            }
        },

        methods: {
            async searchAPI() {
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
                console.log(this.destCountry)
                try {
                    this.countryCode = country_code_dict[this.destCountry]
                } catch {
                    this.countryCode = "error"
                }
            }
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