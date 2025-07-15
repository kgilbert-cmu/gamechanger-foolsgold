function zip(names, values) {
	if (names.length != values.length) {
		console.log(names)
		console.log(values)
		throw new Error("Incompatible header and data")
	}
	const obj = {}
	for (let j = 0; j < values.length; j++) {
		obj[names[j]] = values[j]
	}
	return obj
}

function csvToJson(header, csvString) {
  try {
    let data = {
		"brennan": {},
		"izzy": {},
		"erika": {},
		"jordan": {},
		"johnny": {},
		"grant": {},
		"paul": {},
		"sephie": {},
		"katie": {},
		"debbie": {}
	}; // Initialize an empty object for the JSON data

    // Split the CSV string into lines
    const lines = csvString.split('\n');

    // Iterate through each line (row)
    for (let i = 0; i < lines.length; i++) {
      const row = lines[i].trim(); // Remove leading/trailing whitespace

      // Check if the row is not empty
      if (!row) continue;

      parsedRow = zip(header.split(","), row.split(","))

      // Add the parsed row to the JSON data object
	  if (data[parsedRow.video].hasOwnProperty(parsedRow.date)) {
		data[parsedRow.video][parsedRow.date][parsedRow.social] = parseInt(parsedRow.views)
	  } else {
		data[parsedRow.video] = {[parsedRow.date]: { [parsedRow.social]: parseInt(parsedRow.views) }}
	  }
    }

    return data;  // Return the resulting JSON object
  } catch (error) {
    console.error("An error occurred during conversion:", error); //Handles errors in the CSV parsing
    return null; //Return null on failure to prevent errors in calling code
  }
}

// Example Usage:
const csvData = `youtube,day1,brennan,69
youtube,day1,izzy,63
youtube,day1,erika,54
youtube,day1,jordan,21
youtube,day1,johnny,18
youtube,day1,grant,23
youtube,day1,paul,17
youtube,day1,sephie,23
youtube,day1,katie,58
youtube,day1,debbie,27
tiktok,day1,brennan,579
tiktok,day1,izzy,72
tiktok,day1,erika,74
tiktok,day1,jordan,214
tiktok,day1,johnny,71
tiktok,day1,grant,50
tiktok,day1,paul,48
tiktok,day1,sephie,60
tiktok,day1,katie,258
tiktok,day1,debbie,88
instagram,day1,brennan,89
instagram,day1,izzy,25
instagram,day1,erika,24
instagram,day1,jordan,51
instagram,day1,johnny,12
instagram,day1,grant,11
instagram,day1,paul,23
instagram,day1,sephie,32
instagram,day1,katie,51
instagram,day1,debbie,26
youtube,day2,brennan,888
youtube,day2,izzy,413
youtube,day2,erika,367
youtube,day2,jordan,114
youtube,day2,johnny,76
youtube,day2,grant,83
youtube,day2,paul,83
youtube,day2,sephie,108
youtube,day2,katie,435
youtube,day2,debbie,128
tiktok,day2,brennan,1600
tiktok,day2,izzy,131
tiktok,day2,erika,151
tiktok,day2,jordan,445
tiktok,day2,johnny,136
tiktok,day2,grant,103
tiktok,day2,paul,87
tiktok,day2,sephie,101
tiktok,day2,katie,578
tiktok,day2,debbie,274
instagram,day2,brennan,163
instagram,day2,izzy,38
instagram,day2,erika,35
instagram,day2,jordan,108
instagram,day2,johnny,16
instagram,day2,grant,15
instagram,day2,paul,34
instagram,day2,sephie,46
instagram,day2,katie,78
instagram,day2,debbie,39`
const jsonResult = csvToJson("social,date,video,views", csvData);
for(let video in jsonResult) {
	let youtube = 0
	let instagram = 0
	let tiktok = 0
	for (let date in jsonResult[video]) {
		youtube += jsonResult[video][date].youtube
		instagram += jsonResult[video][date].instagram
		tiktok += jsonResult[video][date].tiktok
	}
	document.getElementById(`${video}-youtube`).innerHTML = youtube
	document.getElementById(`${video}-instagram`).innerHTML = instagram
	document.getElementById(`${video}-tiktok`).innerHTML = tiktok
	document.getElementById(`${video}-total`).innerHTML = youtube + instagram + tiktok
}

const mike = document.getElementsByClassName("mike") 
let mikeTotal = 0
let mikeSuffix = ""
for (let i = 0; i < mike.length; i++) {
	mikeTotal += parseInt(mike[i].textContent)
}

const rekha = document.getElementsByClassName("rekha") 
let rekhaTotal = 0
let rekhaSuffix = ""
for (let i = 0; i < rekha.length; i++) {
	rekhaTotal += parseInt(rekha[i].textContent)
}

const jordan = document.getElementsByClassName("jordan") 
let jordanTotal = 0
let jordanSuffix = ""
for (let i = 0; i < jordan.length; i++) {
	jordanTotal += parseInt(jordan[i].textContent)
}

highest = Math.max(jordanTotal, Math.max(rekhaTotal, mikeTotal))

if (mikeTotal == highest)
	mikeSuffix = "\t🥇"
if (jordanTotal == highest)
	jordanSuffix = "\t🥇"
if (rekhaTotal == highest)
	rekhaSuffix = "\t🥇"

document.getElementById("mike-overall").innerHTML = Math.trunc(mikeTotal/100)/10 +"M" + mikeSuffix
document.getElementById("rekha-overall").innerHTML = Math.trunc(rekhaTotal/100)/10 +"M" + rekhaSuffix
document.getElementById("jordan-overall").innerHTML = Math.trunc(jordanTotal/100)/10 +"M" + jordanSuffix
