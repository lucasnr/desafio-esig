const doughnutData = {
	labels: ["Forniture", "Eletronics", "Toys"],
	datasets: [
		{
			data: [10, 6, 4],
			backgroundColor: ["#44F", "#AAF", "#008"],
			borderWidth: 5
		}
	]
};

const doughnutOptions = {
	responsive: true,
	elements: {
		arc: {
			borderWidth: 5
		}
	},
	legend: {
		position: "top",
		labels: {
			boxWidth: 14
		},
		reverse: true
	},
	plugins: {
		labels: {
			render: "value",
			fontColor: ["#fff", "#fff", "#fff"]
		}
	}
};

const doughnutContext = document
	.getElementById("doughnut-chart")
	.getContext("2d");
const doughnutChart = new Chart(doughnutContext, {
	type: "doughnut",
	data: doughnutData,
	options: doughnutOptions
});
