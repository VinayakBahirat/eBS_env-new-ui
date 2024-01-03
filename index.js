let SearchType = document.getElementById("SearchType")

let SelectedSearchType = SearchType.value

let DesignName= document.getElementById("DesignName")
let DesignVersion= document.getElementById("DesignVersion")


let MlDesignName= document.getElementById("MlDesignName")
let MlDesignVersion= document.getElementById("MlDesignVersion")

let MlProductValue= document.getElementsByClassName("ml-product-value")
let ImpactedValue=document.getElementsByClassName("impacted-value")
let MdmValue=document.getElementsByClassName("mdm-value")

let MlValue=document.getElementsByClassName('ml-value')



var ChartValue =[];

let ChartValueTwo=[];
let ChartValueThree=[];

let MasterlistValue= [];


MlDesignName.style.display='none'
MlDesignVersion.style.display='none'




SearchType.addEventListener('change', function () {
    let style = this.value == "By Design" ? 'flex' : 'none';
    DesignName.style.display = style;
	DesignVersion.style.display=style
});

SearchType.addEventListener('change', function () {

    let style = this.value == "By Design" ? 'none' : 'flex';
    MlDesignName.style.display = style;
	MlDesignVersion.style.display=style
	 ChartValue = this.value == "By Design" ? [100,1000,500,30] : [200,800,350,20]
	 ChartValueTwo = this.value == "By Design" ? [10,22,30,11,11] : [20,34,64,23,21]
	 ChartValueThree = this.value == "By Design" ? [300,220,800,120] : [100,344,500,233]
	 MasterlistValue = this.value == "By Design" ?[10,10] : [10,2]

	

	  for (let i = 0; i < ChartValue.length; i++) {
        MlProductValue[i].textContent = ChartValue[i];
    }

	 for (let i = 0; i < ChartValueTwo.length; i++) {
        ImpactedValue[i].textContent = ChartValueTwo[i];
    }
	 for (let i = 0; i < ChartValueThree.length; i++) {
        MdmValue[i].textContent = ChartValueThree[i];
    }

	for (let i = 0; i < MasterlistValue.length; i++) {
        MlValue[i].textContent = MasterlistValue[i];
    }

});


// Chart 1

let ctx2 = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx2, {
	type: 'doughnut',
	data: {
		labels: ["QUEUED", "IN-PROGRES", "COMPLETE", "ERROR"],
		datasets: [{
			backgroundColor: [
				"#e7e5e4",
				"#fde047",
				"#4ade80",
				"#ef4444"
			],
			data: [23,34,24,13]
		}]
	},
	options: {
		plugins: {
			legend: {
				position: 'right',
				align: "middle"
			}
		}
	}
});

let ctx1 = document.getElementById("productGridChart").getContext('2d');
var myChart = new Chart(ctx1, {
	type: 'bar',
	// data: {
	//     labels: ["Foundation Template", "Product", "Package", "Account","Quote"],
	//     datasets: [{
	//     label: ["Foundation Template", "Product", "Package", "Account","Quote"],
	//     backgroundColor: [
	//         "#e7e5e4",
	//         "#fde047",
	//         "#4ade80",
	//         "#ef4444",
	//         "#eff6ff"
	//     ],
	//     data: [100, 1000, 500, 20, 200]
	//     }]
	// }
	data: {
		labels: ["FT", "Product", "Package", "Account", "Quote"],
		datasets: [{
			label: 'Foundation Template',
			backgroundColor: "#e7e5e4",
			data: [10, 0, 0, 0, 0],
		}, {
			label: 'Product',
			backgroundColor: "#fde047",
			data: [0, 22, 0, 0, 0],
		}, {
			label: 'Package',
			backgroundColor: "#4ade80",
			data: [0, 0, 30, 0, 0],

		}, {
			label: 'Account',
			backgroundColor: "#ef4444",
			data: [0, 0, 0, 11, 0],

		}, {
			label: 'Quote',
			backgroundColor: "#eff6ff",
			data: [0, 0, 0, 0, 11],
		}]
	},

	options: {
		legend: {
			display: true,
			position: 'top',
			labels: {
				fontColor: "#000080",
			}

		},
		barThickness: 15,
		borderWidth: 1,
		// 	scales: {
		// 		x: {
		// 				grid: {
		// 					offset: true
		// 				}
		// 		}
		// }
	}
});

// let ctx3 = document.getElementById("myChartAuditLog").getContext('2d');
// var myChartAuditLog = new Chart(ctx3, {
// type: 'doughnut',
// data: {
//     labels: ["QUEUED", "IN-PROGRES", "COMPLETE", "ERROR"],
//     datasets: [{
//     backgroundColor: [
//         "#e7e5e4",
//         "#fde047",
//         "#4ade80",
//         "#ef4444"
//     ],
//     data: [80, 200, 120, 30]
//     }]
// },
// options: {
//         plugins: {
//         legend: {
//             position: 'right',
//             align: "start"
//         }
//         }
//     }
// });
let ctx4 = document.getElementById("myChartImpactAnalyzer").getContext('2d');
var myChartImpactAnalyzer = new Chart(ctx4, {
	type: 'doughnut',
	data: {
		labels: ["QUEUED", "IN-PROGRES", "COMPLETE", "ERROR"],
		datasets: [{
			backgroundColor: [
				"#e7e5e4",
				"#fde047",
				"#4ade80",
				"#ef4444"
			],
			data: [300, 220, 800, 120]
		}]
	},
	options: {
		plugins: {
			legend: {
				position: 'right',
				align: "middle"
			}
		}
	}
});