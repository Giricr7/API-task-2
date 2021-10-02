
  
  //fetching the api data
    var url='https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    fetchData = async () => {
        
        try {
            jsdata = await fetch(url);
        convertedData = await jsdata.json();
       
        
        return convertedData
        } catch(err) {
            console.error(err);
        }
    }
    

//inserting the data to html

function setData(live_cases,recovered,deaths) {
  
    //setting the dropdown
    keys = Object.keys(live_cases);
    currentDate = keys[0];
    drpdwn = document.getElementById('dates');

    for (i = 0; i < keys.length;i++){
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode(keys[i]));
        drpdwn.appendChild(opt);

     }
        
    displayData(live_cases,recovered,deaths)
}

//dynamically fetching the selected dates in dropdown
function setDate() {
    
    currentDate = drpdwn.options[drpdwn.selectedIndex].value
    displayData(live_cases,recovered,deaths)
}

//displaying the coivd-data
function displayData(live_cases,recovered,deaths) {
    

    let cases = document.getElementById('cases');
    let recovery = document.getElementById('recovered');
    let dead = document.getElementById('deaths');


    cases.innerHTML = live_cases[currentDate];
    recovery.innerHTML = recovered[currentDate];
    dead.innerHTML = deaths[currentDate];
}

    //separating the data

function assignData(data) {
    
    live_cases = data.cases;
    recovered = data.recovered;
    deaths = data.deaths;

    setData(live_cases,recovered,deaths)
}
    
    // main function
    async function start () {
        let case_details = await fetchData();
        assignData(case_details)
    }

    //program execution starts here
    start();
