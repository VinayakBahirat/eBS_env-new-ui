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
            data: [100, 1000, 500, 20]
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