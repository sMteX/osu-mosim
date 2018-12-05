import React from 'react';
import { Col } from 'reactstrap'
import PropTypes from 'prop-types';
import ResultTable from "./ResultTable";
import ResultGraph from "./ResultGraph";

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

  render() {
    const populationCount = this.props.populations.length;
    const byBrowser = this.populationsByBrowser;
    return (
      <>
        <ResultTable count={populationCount} populations={byBrowser} />
        <Col sm={{ size: 8, offset: 2 }}>
          <ResultGraph count={populationCount} browsers={byBrowser} />
        </Col>
      </>
    );
  }
}