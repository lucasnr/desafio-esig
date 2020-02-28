// labels: ["Laptops", "Headsets", "Monitors", "Phones"],
const lineData = {
	labels: ["0", "50", "100", "150", "200"],
	datasets: [
		{
			label: "Laptops",
			backgroundColor: "#22A",
			data: [
				{
					x: 0,
					y: 2
				},
				{
					x: 50,
					y: 4
				},
				{
					x: 100,
					y: 8
				},
				{
					x: 150,
					y: 4
				},
				{
					x: 200,
					y: 2
				}
			],
			lineTension: 0
		},
		{
			label: "Headsets",
			backgroundColor: "#44D",
			data: [
				{
					x: 0,
					y: 10
				},
				{
					x: 50,
					y: 18
				},
				{
					x: 100,
					y: 15
				},
				{
					x: 150,
					y: 24
				},
				{
					x: 200,
					y: 10
				}
			],
			lineTension: 0
		},
		{
			label: "Monitors",
			backgroundColor: "#66F",
			data: [
				{
					x: 0,
					y: 20
				},
				{
					x: 50,
					y: 35
				},
				{
					x: 100,
					y: 22
				},
				{
					x: 150,
					y: 40
				},
				{
					x: 200,
					y: 10
				}
			],
			lineTension: 0
		},
		{
			label: "Phones",
			backgroundColor: "#88F",
			data: [
				{
					x: 0,
					y: 30
				},
				{
					x: 50,
					y: 50
				},
				{
					x: 100,
					y: 28
				},
				{
					x: 150,
					y: 65
				},
				{
					x: 200,
					y: 10
				}
			],
			lineTension: 0
		}
	]
};

const lineOptions = {
	responsive: true,
	elements: {
		point: {
			borderWidth: 0
		}
	},
	legend: {
		position: "top",
		labels: {
			boxWidth: 14,
			padding: 5
		}
	}
};

const lineContext = document.getElementById("line-chart").getContext("2d");
const lineChart = new Chart(lineContext, {
	type: "line",
	data: lineData,
	options: lineOptions
});
