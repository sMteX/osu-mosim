import React from 'react';
import {Button, Col} from 'reactstrap';
import Setup from './Setup';
import Result from "./Result";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [],
      initialPopulation: [],
      generations: 0,
      showResult: false,
      showSetup: false,
    };
    this.setValuesAndCompute = this.setValuesAndCompute.bind(this);
    this.computePopulations = this.computePopulations.bind(this);
    this.toggleSetup = this.toggleSetup.bind(this);
  }

  setValuesAndCompute(matrix, initialPopulation, generations) {
    this.setState(() => ({
      matrix,
      generations,
      initialPopulation,
    }), () => this.computePopulations());
  }

  computePopulations() {
    const reshapedPopulation = [];
    this.state.initialPopulation.forEach(value => reshapedPopulation.push([value])); // 3, 1
    const result = [];
    let oldPopulation = reshapedPopulation;
    result.push(oldPopulation);
    let newPopulation;
    for (let i = 0; i < this.state.generations; i++) {
      newPopulation = this.multiplyMatrices(this.state.matrix, oldPopulation);
      result.push(newPopulation);
      oldPopulation = newPopulation;
    }
    this.setState((state) => ({
      ...state,
      browsers: result,
      showResult: true,
    }));
  }

  multiplyMatrices(A, B) {
    if (A.length === 0 || B.length === 0) {
      throw new Error('Matrices cannot be empty');
    }
    if (A[0].length !== B.length) {
      throw new Error('Matrices must have the same size');
    }
    const newMatrix = [];
    for (let row = 0; row < A.length; row++) {
      const r = [];
      for (let col = 0; col < B[0].length; col++) {
        let value = 0;
        for (let k = 0; k < B.length; k++) {
          value += A[row][k] * B[k][col];
        }
        r.push(value);
      }
      newMatrix.push(r);
    }
    return newMatrix;
  }

  toggleSetup() {
    this.setState((state) => ({
      ...state,
      showSetup: !state.showSetup,
    }));
  }

  render() {
    return (
      <>
        <Col
          sm={{ size: 6, offset: 3 }}
          style={{ 'text-align': 'center', 'margin-top': 10 }}>
          <h1>MOSIM projekt</h1>
        </Col>
        <p>
          <strong>Téma:</strong> Průběh využití prohlížečů v čase<br />
          <strong>Autoři:</strong> Pavla Grossmannová, Lukáš Stuchlík<br />
          <br />
          <ul>
            <li>Tento projekt se snaží modelovat vývoj procentuálního využití 3 hlavních prohlížečů v čase, přičemž vycházíme z <a href="https://www.w3schools.com/browsers/default.asp">následujících dat</a> (leden 2016 - říjen 2018).</li>
            <li>Nesrovnalosti s reálnými daty lze vysvětlit podle nás tím, že mohou se vyskytnout náhlé události, které ovlivní rozložení uživatelů, např. ve Firefoxu se vyskytne chyba v zabezpečení, uniknou uživatelská data, tak část lidí hromadně migruje k Chromu, tyto události nelze s tímto modelem zachytit a modelovat. </li>
            <li>Simulace by mohla být o něco přesnější, kdyby se populační matice mohla měnit v čase, což stejně ovšem neřeší odhady dat do budoucna.</li>
            <li>K simulaci využíváme Leslieho populační matici. Tato matice má předem vyplněné hodnoty, které jsme experimentálně zjistili. Pro zobrazení nebo změnu hodnot matice nebo počáteční populace klikněte zde: <Button color="link" onClick={this.toggleSetup} style={{ padding: 0 }}>{this.state.showSetup ? 'Skrýt nastavení' : 'Zobrazit nastavení'}</Button></li>
          </ul>
        </p>
        <Setup
          showSetup={this.state.showSetup}
          compute={this.setValuesAndCompute} />
        {this.state.showResult && <Result populations={this.state.browsers} />}
      </>
    );
  }
}

export default MainPage;