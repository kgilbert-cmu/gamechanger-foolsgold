let producersAxis = ['Mike Trapp', 'Rekha Shanker', 'Jordan Myrick', 'Sam Reich']

var traceBrennan = {
  x: producersAxis,
  y: [3749/20000, 150/20000, 0, 16101/20000].map(elem => elem * document.getElementById("brennan-total").innerHTML),
  name: document.getElementById("brennan-description").innerHTML,
  type: 'bar'
};

var traceIzzy = {
  x: producersAxis,
  y: producersAxis.map(elem => {
    let count = Math.sumPrecise(producersAxis.map(elem => 1.0 * document.getElementById("izzy-producer").innerHTML.includes(elem)));
    return document.getElementById("izzy-producer").innerHTML.includes(elem) * document.getElementById("izzy-total").innerHTML / count;
  }),
  name: document.getElementById("izzy-description").innerHTML,
  type: 'bar'
};

var traceErika = {
  x: producersAxis,
  y: producersAxis.map(elem => {
    let count = Math.sumPrecise(producersAxis.map(elem => 1.0 * document.getElementById("erika-producer").innerHTML.includes(elem)));
    return document.getElementById("erika-producer").innerHTML.includes(elem) * document.getElementById("erika-total").innerHTML / count;
  }),
  name: document.getElementById("erika-description").innerHTML,
  type: 'bar'
};

var traceJordan = {
  x: producersAxis,
  y: producersAxis.map(elem => {
    let count = Math.sumPrecise(producersAxis.map(elem => 1.0 * document.getElementById("jordan-producer").innerHTML.includes(elem)));
    return document.getElementById("jordan-producer").innerHTML.includes(elem) * document.getElementById("jordan-total").innerHTML / count;
  }),
  name: document.getElementById("jordan-description").innerHTML,
  type: 'bar'
};

var traceJohnny = {
  x: producersAxis,
  y: producersAxis.map(elem => {
    let count = Math.sumPrecise(producersAxis.map(elem => 1.0 * document.getElementById("johnny-producer").innerHTML.includes(elem)));
    return document.getElementById("johnny-producer").innerHTML.includes(elem) * document.getElementById("johnny-total").innerHTML / count;
  }),
  name: document.getElementById("johnny-description").innerHTML,
  type: 'bar'
};

var traceGrant = {
  x: producersAxis,
  y: producersAxis.map(elem => {
    let count = Math.sumPrecise(producersAxis.map(elem => 1.0 * document.getElementById("grant-producer").innerHTML.includes(elem)));
    return document.getElementById("grant-producer").innerHTML.includes(elem) * document.getElementById("grant-total").innerHTML / count;
  }),
  name: document.getElementById("grant-description").innerHTML,
  type: 'bar'
};

var tracePaul = {
  x: producersAxis,
  y: producersAxis.map(elem => {
    let count = Math.sumPrecise(producersAxis.map(elem => 1.0 * document.getElementById("paul-producer").innerHTML.includes(elem)));
    return document.getElementById("paul-producer").innerHTML.includes(elem) * document.getElementById("paul-total").innerHTML / count;
  }),
  name: document.getElementById("paul-description").innerHTML,
  type: 'bar'
};

var traceSephie = {
  x: producersAxis,
  y: producersAxis.map(elem => {
    let count = Math.sumPrecise(producersAxis.map(elem => 1.0 * document.getElementById("sephie-producer").innerHTML.includes(elem)));
    return document.getElementById("sephie-producer").innerHTML.includes(elem) * document.getElementById("sephie-total").innerHTML / count;
  }),
  name: document.getElementById("sephie-description").innerHTML,
  type: 'bar'
};

var traceKatie = {
  x: producersAxis,
  y: producersAxis.map(elem => {
    let count = Math.sumPrecise(producersAxis.map(elem => 1.0 * document.getElementById("katie-producer").innerHTML.includes(elem)));
    return document.getElementById("katie-producer").innerHTML.includes(elem) * document.getElementById("katie-total").innerHTML / count;
  }),
  name: document.getElementById("katie-description").innerHTML,
  type: 'bar'
};

var traceAnna = {
  x: producersAxis,
  y: producersAxis.map(elem => {
    let count = Math.sumPrecise(producersAxis.map(elem => 1.0 * document.getElementById("anna-producer").innerHTML.includes(elem)));
    return document.getElementById("anna-producer").innerHTML.includes(elem) * document.getElementById("anna-total").innerHTML / count;
  }),
  name: document.getElementById("anna-description").innerHTML,
  type: 'bar'
};


var portfolios = [traceBrennan, traceIzzy, traceErika, traceJordan, traceJohnny, traceGrant, tracePaul, traceSephie, traceKatie, traceAnna];
var portfoliosLayout = {
	barmode: 'stack',
	title: {
		text: '(chart normalized for producer funding/investment)'
	},
};
Plotly.newPlot('portfolios', portfolios, portfoliosLayout);

const epochs = Object.keys(jsonResult["brennan"])
const dates = Object.keys(jsonResult["brennan"]).map(d => new Date(parseInt(d)))
var lineTraceBrennan = {
  type: 'scatter',
  x: dates,
  y: epochs.map(d => jsonResult["brennan"][d].youtube + jsonResult["brennan"][d].instagram + jsonResult["brennan"][d].tiktok),
  mode: 'lines+markers',
  name: document.getElementById("brennan-description").innerHTML
};

var lineTraceIzzy = {
  type: 'scatter',
  x: dates,
  y: epochs.map(d => jsonResult["izzy"][d].youtube + jsonResult["izzy"][d].instagram + jsonResult["izzy"][d].tiktok),
  mode: 'lines+markers',
  name: document.getElementById("izzy-description").innerHTML,
};

var lineTraceErika = {
  type: 'scatter',
  x: dates,
  y: epochs.map(d => jsonResult["erika"][d].youtube + jsonResult["erika"][d].instagram + jsonResult["erika"][d].tiktok),
  mode: 'lines+markers',
  name: document.getElementById("erika-description").innerHTML,
};

var lineTraceJordan = {
  type: 'scatter',
  x: dates,
  y: epochs.map(d => jsonResult["jordan"][d].youtube + jsonResult["jordan"][d].instagram + jsonResult["jordan"][d].tiktok),
  mode: 'lines+markers',
  name: document.getElementById("jordan-description").innerHTML,
};

var lineTraceJohnny = {
  type: 'scatter',
  x: dates,
  y: epochs.map(d => jsonResult["johnny"][d].youtube + jsonResult["johnny"][d].instagram + jsonResult["johnny"][d].tiktok),
  mode: 'lines+markers',
  name: document.getElementById("johnny-description").innerHTML,
};

var lineTraceGrant = {
  type: 'scatter',
  x: dates,
  y: epochs.map(d => jsonResult["grant"][d].youtube + jsonResult["grant"][d].instagram + jsonResult["grant"][d].tiktok),
  mode: 'lines+markers',
  name: document.getElementById("grant-description").innerHTML,
};

var lineTracePaul = {
  type: 'scatter',
  x: dates,
  y: epochs.map(d => jsonResult["paul"][d].youtube + jsonResult["paul"][d].instagram + jsonResult["paul"][d].tiktok),
  mode: 'lines+markers',
  name: document.getElementById("paul-description").innerHTML,
};

var lineTraceSephie = {
  type: 'scatter',
  x: dates,
  y: epochs.map(d => jsonResult["sephie"][d].youtube + jsonResult["sephie"][d].instagram + jsonResult["sephie"][d].tiktok),
  mode: 'lines+markers',
  name: document.getElementById("sephie-description").innerHTML,
};

var lineTraceKatie = {
  type: 'scatter',
  x: dates,
  y: epochs.map(d => jsonResult["katie"][d].youtube + jsonResult["katie"][d].instagram + jsonResult["katie"][d].tiktok),
  mode: 'lines+markers',
  name: document.getElementById("katie-description").innerHTML,
};

var lineTraceAnna = {
  type: 'scatter',
  x: dates,
  y: epochs.map(d => jsonResult["anna"][d].youtube + jsonResult["anna"][d].instagram + jsonResult["anna"][d].tiktok),
  mode: 'lines+markers',
  name: document.getElementById("anna-description").innerHTML,
};

var videoTimeline = [lineTraceBrennan, lineTraceIzzy, lineTraceErika, lineTraceJordan, lineTraceJohnny, lineTraceGrant, lineTracePaul, lineTraceSephie, lineTraceKatie, lineTraceAnna];

var videoTimelineLayout = {
  yaxis: {
	  type: "log"
  },
  xaxis: {
    tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
    tickformat: '%d %B\n(%A)',
    dtick: 24 * 60 * 60 * 1000 // one day in milliseconds
  },
  showlegend: false
}

Plotly.newPlot('videoTimeline', videoTimeline, videoTimelineLayout);


let mikeFractions = {"brennan": 3749/20000, "izzy": .5, "johnny": .5, "grant": 1, "paul": 1}
var producerLineMike = {
	type: 'scatter',
	x: dates,
	y: epochs.map(d => 
		Math.sumPrecise(Object.keys(mike).map(i => mike[i].parentNode.id).map(v => 
			mikeFractions[v] * (jsonResult[v][d].youtube + jsonResult[v][d].instagram + jsonResult[v][d].tiktok)
		))
	),
  mode: 'lines',
  name: "Mike Trapp",
};

let rekhaFractions = {"brennan": 150/20000, "izzy": .5, "sephie": .5, "katie": 1}
var producerLineRekha = {
	type: 'scatter',
	x: dates,
	y: epochs.map(d => 
		Math.sumPrecise(Object.keys(rekha).map(i => rekha[i].parentNode.id).map(v => 
			rekhaFractions[v] * (jsonResult[v][d].youtube + jsonResult[v][d].instagram + jsonResult[v][d].tiktok)
		))
	),
	mode: 'lines',
	name: "Rekha Shanker",
};

let jordanFractions = {"brennan": 0, "erika": 1, "jordan": 1, "johnny": .5, "sephie": .5, "anna": 1}
var producerLineJordan = {
	type: 'scatter',
	x: dates,
	y: epochs.map(d => 
		Math.sumPrecise(Object.keys(jordan).map(i => jordan[i].parentNode.id).map(v => 
			jordanFractions[v] * (jsonResult[v][d].youtube + jsonResult[v][d].instagram + jsonResult[v][d].tiktok)
		))
	),
	mode: 'lines',
	name: "Jordan Myrick",
};

var producerTimeline = [producerLineMike, producerLineRekha, producerLineJordan];

var producerTimelineLayout = {
  xaxis: {
    tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
    tickformat: '%d %B\n(%A)',
    dtick: 24 * 60 * 60 * 1000 // one day in milliseconds
  }
}

Plotly.newPlot('producerTimeline', producerTimeline, producerTimelineLayout);

// Tinkering with more charts...
/*
var videos = []
for (let video in jsonResult) {
	videos.push(video)
}
var videoScatter = [{
  x: videos.map(v => document.getElementById(`${v}-youtube`).innerHTML),
  y: videos.map(v => document.getElementById(`${v}-tiktok`).innerHTML),
  text: videos.map(v => document.getElementById(`${v}-description`).innerHTML),
  mode: 'markers',
  marker: {
    size: videos.map(v => document.getElementById(`${v}-instagram`).innerHTML)
  }
}];

var videoScatterLayout = {
  title: {
    text: 'Total Video Views'
  },
  showlegend: false
};

Plotly.newPlot('videoScatter', videoScatter, videoScatterLayout);*/
