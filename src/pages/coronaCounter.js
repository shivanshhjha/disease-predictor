import React, { useState, useEffect } from 'react'
import "./coronaCounter.css"
import {FormControl, Select, MenuItem, Card, CardContent} from "@material-ui/core"
import InfoBox from '../component/CoronaCounter/InfoBox'
import Map from '../component/CoronaCounter/Map'
import Table from '../component/CoronaCounter/Table'
import { sortData, preetyPrintStat } from '../component/CoronaCounter/util'
import LineGraph from '../component/CoronaCounter/LineGraph'
import "leaflet/dist/leaflet.css"


function CoronaCounter() {
    // api -> https://disease.sh/v3/covid-19/countries

    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('worldwide')
    const [countryInfo, setCountryInfo] = useState({})
    const [tableData, setTableData] = useState([])
    const [mapCenter, setMapCenter] = useState({lat: 20.5937, lng:78.9629})
    const [mapZoom, setMapZoom] = useState(3)
    const [mapCountries, setMapCountries] = useState([])
    const [casesType, setCasesType] = useState("cases")


    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json())
        .then((data) => {
            setCountryInfo(data)
        })
    }, [])

    useEffect(() => {
        //async -> request and wait until the data is not come
        const getCountriesData = async () => {
            //await is used with async
            await fetch("https://disease.sh/v3/covid-19/countries")
            .then((response) => response.json())
            .then((data) => {
                //write function here
                const countries = data.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2
                    }))
                const sortedData = sortData(data)
                setTableData(sortedData)
                setMapCountries(data)
                setCountries(countries)
            })
        }
        getCountriesData()
    }, [])

    const onCountryChange = async (event) => {
        const countryCode = event.target.value
        setCountry(countryCode)

        //if worldwide then use use /all else use /[countryCode]
        const url = countryCode === 'worldwide' 
                    ? 'https://disease.sh/v3/covid-19/all' 
                    : `https://disease.sh/v3/covid-19/countries/${countryCode}`
        await fetch(url)
        .then(response => response.json())
        .then((data) => {
            setCountry(countryCode)
            //console.log(data)
            // All the country data
            setCountryInfo(data)
        })
        setMapCenter([countryInfo.lat, countryInfo.long])
            //console.log(mapCenter)
        setMapZoom(4)
        console.log(countryInfo)
    }

    return (
        <div className="app-counter">
            <div className="app_left">
                <div className="app_header">
                    <h1>Covid-19 Tracker</h1>
                    <FormControl className="app_dropdown">
                        <Select variant="outlined" value={country} onChange={onCountryChange}>
                            <MenuItem value="worldwide">Worldwide</MenuItem>
                            {/* loop through the value in state */}
                            {
                                countries.map((country) => (
                                    <MenuItem value={country.name}>{country.name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
                <div className="app_stats">
                    {/* InfoBox */}
                    <InfoBox
                        onClick={e=>setCasesType("cases")} 
                        title="Coronavirus cases" 
                        total={preetyPrintStat(countryInfo.cases)} 
                        cases={preetyPrintStat(countryInfo.todayCases)} />
                    <InfoBox
                        onClick={e=>setCasesType("recovered")} 
                        title="Recovered" 
                        total ={preetyPrintStat(countryInfo.recovered)} 
                        cases={preetyPrintStat(countryInfo.todayRecovered)} />
                    <InfoBox
                        onClick={e=>setCasesType("deaths")} 
                        title="Deaths" 
                        total={preetyPrintStat(countryInfo.deaths)} 
                        cases={preetyPrintStat(countryInfo.todayDeaths)}/>
                </div>
                {/* Map */}
                <Map 
                    caseType={casesType}
                    center={mapCenter}
                    zoom={mapZoom}
                    countries = {mapCountries}
                />
            </div>
            
            {/* right section of the wireframe */}
            <Card className="app_right">
                <CardContent>
                    <h3>Live cases by country</h3>
                    {/* Table */}
                    <Table countries={tableData}/>
                    <h3>Worldwide new Cases</h3>
                    {/* graph */}  
                    <LineGraph />
                </CardContent>
            </Card>
        </div>
    )
}

export default CoronaCounter
