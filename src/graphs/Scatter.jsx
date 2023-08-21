import React from 'react';
import Plot from 'react-plotly.js';
import drivingData from './driving'; // Make sure the path to your data is correct


const ScatterPlot = () => {
  const miles = drivingData.map(dataPoint => dataPoint.miles);
  const gas = drivingData.map(dataPoint => dataPoint.gas);

  const trace = {
    x: miles,
    y: gas,
    mode: 'markers',
    type: 'scatter',
    marker: { size: 8 },
    text: drivingData.map(dataPoint => `Year: ${dataPoint.year}`)
  };

  const layout = {
    title: 'Scatter Plot of Miles vs. Gas',
    xaxis: { title: 'Miles' },
    yaxis: { title: 'Gas' }
  };

  return (
    <Plot
      data={[trace]}
      layout={layout}
      style={{ width: '100%', height: '500px' }}
    />
  );
};

export default ScatterPlot;
