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
    this.cropRealBrowsers = this.cropRealBrowsers.bind(this);
  }

  realBrowsers = {
    chrome: {
      name: 'Chrome',
      population: [73.2334, 73.5608, 74.5203, 75.1334, 75.9574, 76.0339, 76.3270, 76.6949, 77.0457, 77.7423, 78.2609, 78.4043, 78.4043, 78.9137, 79.8936, 80.6177, 80.6383, 80.9979, 81.4225, 81.5483, 81.8182, 82.4485, 82.0513, 82.5295, 82.3906, 83.0490, 83.4402, 83.8847, 84.2217, 84.3783, 84.8517, 84.8195, 84.8614, 84.9520],
      color: '#66a3ff'
    },
    firefox: {
      name: 'Firefox',
      population: [20.1285, 19.8294, 18.9765, 18.6766, 17.9787, 18.0276, 18.1529, 17.7966, 17.3220, 16.7199, 16.2248, 16.4894, 16.3830, 15.9744, 15.0000, 14.4835, 14.4681, 14.1189, 14.1189, 13.8918, 13.6898, 13.1094, 13.3547, 13.2905, 13.2337, 12.5800, 12.2863, 11.9530, 11.6205, 11.5834, 11.4407, 11.2527, 10.9808, 10.7791],
      color: '#ffa366'
    },
    edge: {
      name: 'IE/Edge',
      population: [6.6381, 6.6098, 6.5032, 6.1900, 6.0638, 5.9385, 5.5202, 5.5085, 5.6323, 5.5378, 5.5143, 5.1064, 5.2128, 5.1118, 5.1064, 4.8988, 4.8936, 4.8832, 4.4586, 4.5599, 4.4920, 4.4420, 4.5940, 4.1801, 4.3757, 4.3710, 4.2735, 4.1622, 4.1578, 4.0383, 3.7076, 3.9278, 4.1578, 4.2689],
      color: '#66ff66',
    },
  };

  get flattenPopulations() {
    const { populations } = this.props;
    // [[[0][1][2]], [[3][4][5]]] => [[0, 1, 2], [3, 4, 5]]
    return populations.map(population => population.map(item => item[0]));
  }

  get groupByBrowser() {
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

  cropRealBrowsers(count) {
    return Object.entries(this.realBrowsers).reduce((obj, [key, browser]) => {
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
    const real = this.cropRealBrowsers(count);
    const simulated = this.groupByBrowser;
    const ret = {
      headers: ['Prohlížeč', ...[...Array(count)].map((_, i) => `${i + 1}. měsíc`)],
      data: [
        ...Object.values(real).map(browser => [`${browser.name} - skutečný`, ...browser.population]),
        ...Object.values(simulated).map(browser => [`${browser.name} - simulovaný`, ...browser.population]),
      ]
    };
    return ret;
  }

  render() {
    const populationCount = this.props.populations.length;
    const byBrowser = this.groupByBrowser;
    const croppedReal = this.cropRealBrowsers(populationCount);
    const csv = this.csvData;
    return (
      <>
        <Row style={{ 'margin-top': 20 }}>
          <h4>Výsledek - simulované využití prohlížečů</h4>
          <ResultTable
            count={populationCount}
            browsers={byBrowser} />
          <CSVLink
            filename="data.csv"
            headers={csv.headers}
            data={csv.data}
            className="btn csvLink"
            style={{
              'margin-left': 10,
              'margin-bottom': 20
            }}>
            Export do CSV
          </CSVLink>
        </Row>
        <Row>
          <h4>Graf - reálná data vs simulovaná</h4>
          <Col sm={{ size: 8, offset: 2 }}>
            <ResultGraph
              realData={croppedReal}
              browsers={byBrowser} />
          </Col>
        </Row>
      </>
    );
  }
}