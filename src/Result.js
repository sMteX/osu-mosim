import React from 'react';
import {Col, Row} from 'reactstrap'
import PropTypes from 'prop-types';
import ResultTable from "./ResultTable";
import ResultGraph from "./ResultGraph";
import {CSVLink} from "react-csv";

export default class Result extends React.Component {
  static propTypes = {
    // samotny objekt
    populations: PropTypes.arrayOf(
      // jednotliva populace
      PropTypes.arrayOf(
        // je sloupcovy vektor (prvky jsou pole s jednim prvkem)
        PropTypes.arrayOf(
          PropTypes.number
        )
      )
    ).isRequired,
  };

  constructor(options) {
    super(options);
    this.cropRealPopulation = this.cropRealPopulation.bind(this);
  }

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

  get flattenPopulations() {
    const { populations } = this.props;
    // [[[0][1][2]], [[3][4][5]]] => [[0, 1, 2], [3, 4, 5]]
    return populations.map(population => population.map(item => item[0]));
  }

  get populationsByBrowser() {
    const populations = this.flattenPopulations; // jsou groupnute podle poctu populaci (a kazda populace ma 3 prvky)
    const result = {
      chrome: {
        name: 'Chrome',
        population: [],
        color: '#0066ff'
      },
      firefox: {
        name: 'Firefox',
        population: [],
        color: '#ff6600',
      },
      edge: {
        name: 'IE/Edge',
        population: [],
        color: '#00cc00',
      },
    };
    populations.forEach(population => {
      result.chrome.population.push(population[0]);
      result.firefox.population.push(population[1]);
      result.edge.population.push(population[2]);
    });
    return result;
  }

  cropRealPopulation(count) {
    return Object.entries(this.realPopulations).reduce((obj, [key, browser]) => {
      obj[key] = {
        name: browser.name,
        color: browser.color,
        population: browser.population.slice(0, Math.min(count, browser.population.length)),
      };
      return obj;
    }, {});
  }

  get csvData() {
    const count = this.props.populations.length;
    const real = this.cropRealPopulation(count);
    const simulated = this.populationsByBrowser;
    const ret = {
      headers: ['Prohlížeč', ...[...Array(count)].map((_, i) => `${i + 1}. měsíc`)],
      data: [
        ...Object.values(real).map(browser => [`${browser.name} - skutečný`, ...browser.population]),
        ...Object.values(simulated).map(browser => [`${browser.name} - simulovaný`, ...browser.population]),
      ]
    };
    console.log('csvData(), ret', ret);
    return ret;
  }

  render() {
    const populationCount = this.props.populations.length;
    const byBrowser = this.populationsByBrowser;
    const croppedReal = this.cropRealPopulation(populationCount);
    const csv = this.csvData;
    return (
      <>
        <Row>
          <ResultTable count={populationCount} populations={byBrowser} />
        </Row>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <ResultGraph realData={croppedReal} browsers={byBrowser} />
          </Col>
        </Row>
        <Row>
          <CSVLink filename="data.csv" headers={csv.headers} data={csv.data}>Export do CSV</CSVLink>
        </Row>
      </>
    );
  }
}