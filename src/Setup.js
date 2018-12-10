import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table, Input, Button } from 'reactstrap';

export default class Setup extends React.Component {
  static propTypes = {
    compute: PropTypes.func.isRequired,
    showSetup: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      browsers: ['Chrome', 'Firefox', 'IE/Edge'],
      matrix: [
        [0.95, 0.23, 0.1],
        [0.03, 0.75, 0.3],
        [0.02, 0.02, 0.6],
      ],
      population: [70.6, 21, 8.4],
      generations: 5,
    };
    this.handleMatrixChange = this.handleMatrixChange.bind(this);
    this.handlePopulationChange = this.handlePopulationChange.bind(this);
    this.handleGenerationChange = this.handleGenerationChange.bind(this);
    this.handleComputeClick = this.handleComputeClick.bind(this);
  }


  handleMatrixChange(row, col) {
    return (event) => {
      const value = Number(event.target.value);
      this.setState((state) => {
        const prevMatrix = state.matrix;
        prevMatrix[row][col] = value;
        return {
          ...state,
          matrix: prevMatrix,
        };
      });
    };
  }

  handlePopulationChange(index) {
    return (event) => {
      const value = Number(event.target.value);
      this.setState((state) => {
        const prevPopulation = state.population;
        prevPopulation[index] = value;
        return {
          ...state,
          population: prevPopulation,
        };
      });
    }
  }

  handleGenerationChange(event) {
    const value = Number(event.target.value);
    this.setState((state) => {
      return {
        ...state,
        generations: value,
      };
    });
  }

  handleComputeClick() {
    this.props.compute(this.state.matrix, this.state.population, this.state.generations);
  }

  get rows() {
    return [0, 1, 2].map(i => this.getRow(i));
  }

  getRow(row) {
    return (
      <tr>
        <th scope="row">{this.state.browsers[row]}</th>
        {[0, 1, 2].map(col => (
          <td>
            <Input
              type="number"
              min="0"
              step="0.01"
              onChange={this.handleMatrixChange(row, col)}
              value={this.state.matrix[row][col]} />
          </td>
        ))}
        <td/>
        <td>
          <Input
            type="number"
            min="0"
            step="0.1"
            max="100"
            onChange={this.handlePopulationChange(row)}
            value={this.state.population[row]} />
        </td>
      </tr>
    );
  }

  get matrix() {
    return (
      <>
        <Row>
          <h4>Populační matice (Leslieho)</h4>
        </Row>
        <Row>
          <Table>
            <thead>
            <tr>
              <th>Prohlížeč</th>
              <th>Chrome</th>
              <th>Firefox</th>
              <th>IE/Edge</th>
              <th/>
              <th>Počáteční populace [%]</th>
            </tr>
            </thead>
            <tbody>
              {this.rows}
            </tbody>
          </Table>
        </Row>
      </>
    );
  }
  render() {
    return (
      <>
        {this.props.showSetup && this.matrix}
        <Row style={{ 'margin-bottom': 5 }}>
          <h4>Počet generací (měsíců)</h4>
        </Row>
        <Row>
          <Col sm="2">
            <Input
              type="number"
              min="1"
              value={this.state.generations}
              onChange={this.handleGenerationChange} />
          </Col>
            <Col sm="4">
              <Button color="primary" onClick={this.handleComputeClick}>
                Vypočítat
              </Button>
            </Col>
        </Row>
      </>
    )
  }
}