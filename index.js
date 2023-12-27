let ctx2 = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx2, {
        type: 'pie',
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
                    align: "start"
                }
                }
            }
        });
 
        let ctx1 = document.getElementById("productGridChart").getContext('2d');
        var myChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ["Impacted FT", "Impacted Product", "Impacted Package", "Impacted Account","Impacted Quote"],
            datasets: [{
            label: ["Impacted FT", "Impacted Product", "Impacted Package", "Impacted Account","Impacted Quote"],
            backgroundColor: [
                "#e7e5e4",
                "#fde047",
                "#4ade80",
                "#ef4444",
                "#eff6ff"
            ],
            data: [10, 20, 30, 11,11]
            }]
        },
        options: {
                plugins: {
                    legend: {
                        position: 'right',
                        align: "start"
                    }
                },
                title:{
                    display: true,
                    text: "Product Grid"
                }
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
                    align: "start"
                }
                }
            }
        });