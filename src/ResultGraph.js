import React from 'react';
import PropTypes from 'prop-types';
import { LineSeries, YAxis, HorizontalGridLines, DiscreteColorLegend, FlexibleWidthXYPlot } from 'react-vis';

export default class ResultGraph extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    browsers: PropTypes.object.isRequired,
  };

  realPopulations = {
    chrome: {
      name: 'Chrome',
      population: [70.6, 71, 71.9, 72.5, 73.4, 73.6, 73.8, 74.2, 74.5, 75, 75.8, 75.7, 75.7, 76.1, 77.1, 77.7, 77.8, 78.3, 78.7, 78.9, 78.6, 78.6, 78.9, 79.2, 79.3, 79.9, 80.2, 80.7, 81, 81.3, 81.9, 81.8, 81.6, 81.6],
      color: '#66a3ff'
    },
    firefox: {
      name: 'Firefox',
      population: [21, 20.8, 20, 19.6, 18.9, 18.9, 19.1, 18.8, 18.3, 17.8, 17.3, 17.5, 17.4, 17, 16.1, 15.6, 15.6, 15.3, 15.3, 15.1, 15, 14.6, 14.6, 14.6, 14.5, 13.8, 13.8, 13.3, 13.2, 13, 12.8, 12.6, 12.5, 12.3],
      color: '#ffa366'
    },
    edge: {
      name: 'IE/Edge',
      population: [8.4, 8.2, 8.1, 7.9, 7.7, 7.5, 7.1, 7, 7.2, 7.2, 6.9, 6.8, 6.9, 6.9, 6.8, 6.7, 6.6, 6.4, 6, 6, 6.4, 6.8, 6.5, 6.2, 6.2, 6.3, 6, 6, 5.8, 5.7, 5.3, 5.6, 5.9, 6.1],
      color: '#66ff66',
    },
  };

  cropRealPopulation(count) {
    const copy = Object.entries(this.realPopulations).reduce((obj, [key, browser]) => {
      obj[key] = {
        name: browser.name,
        color: browser.color,
        population: browser.population.slice(0, Math.min(count, browser.population.length)),
      };
      return obj;
    }, {});
    return copy;
  }

  mapToXY(population) {
    return population.map((value, i) => ({ x: i, y: value }));
  }

  getLegend(browsers, simulated = false) {
    return Object.values(browsers).map(browser => ({
      title: `${browser.name}${simulated ? ' - simulovaný' : ' - reálný'}`,
      color: browser.color,
      strokeStyle: simulated ? 'dashed' : null,
    }));
  }

  render() {
    const { count, browsers } = this.props;
    const real = this.cropRealPopulation(count);
    return (
      <FlexibleWidthXYPlot
        height={400}
        yDomain={[0, 100]}>
        <YAxis/>
        <HorizontalGridLines />
        <DiscreteColorLegend
          items={[
            ...this.getLegend(real),
            ...this.getLegend(browsers, true)
          ]}
          orientation="horizontal" />
        {Object.values(real).map(browser => (
          <LineSeries
          data={this.mapToXY(browser.population)}
          color={browser.color} />
        ))}
        {Object.values(browsers).map(browser => (
          <LineSeries
            data={this.mapToXY(browser.population)}
            color={browser.color}
            strokeStyle="dashed" />
        ))}
      </FlexibleWidthXYPlot>
    );
  }
}