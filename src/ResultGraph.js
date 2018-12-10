import React from 'react';
import PropTypes from 'prop-types';
import { LineSeries, YAxis, HorizontalGridLines, DiscreteColorLegend, FlexibleWidthXYPlot } from 'react-vis';

export default class ResultGraph extends React.Component {
  static propTypes = {
    browsers: PropTypes.object.isRequired,
    realData: PropTypes.object.isRequired,
  };

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
    const { realData, browsers } = this.props;
    return (
      <FlexibleWidthXYPlot
        height={400}
        yDomain={[0, 100]}>
        <DiscreteColorLegend
          items={[
            ...this.getLegend(realData),
            ...this.getLegend(browsers, true)
          ]}
          orientation="horizontal" />
        <YAxis/>
        <HorizontalGridLines />
        {Object.values(realData).map(browser => (
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