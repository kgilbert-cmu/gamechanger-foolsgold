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
		"anna": {}
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

// scores CSV loaded by HTML script tag header
const jsonResult = csvToJson("social,date,video,views", scoresCSV);
for(let video in jsonResult) {
	let youtube = 0
	let instagram = 0
	let tiktok = 0
	for (let date in jsonResult[video]) {
		youtube = Math.max(jsonResult[video][date].youtube, youtube)
		instagram = Math.max(jsonResult[video][date].instagram, instagram)
		tiktok = Math.max(jsonResult[video][date].tiktok, tiktok)
	}
	document.getElementById(`${video}-youtube`).innerHTML = youtube
	document.getElementById(`${video}-instagram`).innerHTML = instagram
	document.getElementById(`${video}-tiktok`).innerHTML = tiktok
	document.getElementById(`${video}-total`).innerHTML = youtube + instagram + tiktok
	document.getElementById(`${video}-roi`).innerHTML = Math.round((youtube + instagram + tiktok) * 1000 / parseInt(document.getElementById(`${video}-funding`).innerHTML.replace(",", "").replace("$", "")))
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