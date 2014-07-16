window.drawGraph = drawGraph;
function drawGraph(data) {
  console.log(data.length);
  data = [{
    values: data.map(function (datum) {
      return {
        x: datum.time.getTime(),
        y: datum.value
      }
    })
  }];
  $('#graph').html('<svg></svg>')
  nv.addGraph(function () {
    var chart = nv
      .models
      .lineChart()
      .useInteractiveGuideline(true)
      ;

    chart.xAxis
      .axisLabel('Time')
      ;

    chart.yAxis
      .axisLabel('Amount')
      ;

    d3
      .select('#graph svg')
      .datum(data)
      .transition().duration(500)
      .call(chart)
      ;

    nv.utils.windowResize(chart.update);

    return chart;
  });
}