import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

export default class ResultTable extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    browsers: PropTypes.shape({
      name: PropTypes.string,
      population: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
  };

  render() {
    const { count, browsers } = this.props;
    return (
      <Table responsive className="resultTable">
        <thead>
        <tr>
          <th>Prohlížeč</th>
          <th>Počáteční populace</th>
          {[...Array(count - 1)].map((_, i) => (
            <th>{i + 1}. měsíc</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {Object.values(browsers).map(browser => (
          <tr>
            <th scope="row">{browser.name}</th>
            {browser.population.map(value => (
              <td>{value.toFixed(2)} %</td>
            ))}
          </tr>
        ))}
        </tbody>
      </Table>
    );
  }
}