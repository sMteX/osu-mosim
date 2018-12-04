import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

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
        population: []
      },
      firefox: {
        name: 'Firefox',
        population: []
      },
      edge: {
        name: 'IE/Edge',
        population: []
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
        <Table>
          <thead>
          <tr>
              <th>Prohlížeč</th>
              <th>Počáteční populace</th>
              {[...Array(populationCount - 1)].map((_, i) => <th>{i + 1}. měsíc</th>)}
          </tr>
          </thead>
          <tbody>
            {Object.values(byBrowser).map(browser => {
              return (
                <tr>
                  <th scope="row">{browser.name}</th>
                  {browser.population.map(value => <td>{value.toFixed(2)} %</td>)}
                </tr>
              );
            })}
          </tbody>
        </Table>
    );
  }
}