let producersAxis = ['Mike Trapp', 'Rekha Shanker', 'Jordan Myrick', 'Sam Reich']

var traceBrennan = {
  x: producersAxis,
  y: [3749/20000, 150/20000, 0, 16101/20000].map(elem => elem * document.getElementById("izzy-total").innerHTML),
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
	xaxis: {
		title: {
			text: 'Video Portfolios'
		}
	}
};
Plotly.newPlot('portfolios', portfolios, portfoliosLayout);

// Tinkering with more charts...
/*
videoTimeline = 1;
var videoTimelineLayout = {
}
Plotly.newPlot('videoTimeline', videoTimeline, videoTimelineLayout);

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
