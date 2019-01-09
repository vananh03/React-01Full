import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
 
    constructor(props){
        super(props);
        this.state ={
            results:[]
        }
    }
    componentDidMount() {
        fetch("https://randomuser.me/api?results=100")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                results: result.results
              });
            }
          )
      }
    render() {
    var { results} = this.state;
    var female = 0;
    var male = 0;
    results.map((item_gender, key) => {
      if (item_gender.gender == 'female') {
        female = female + 1;
      }
      else {
        male = male + 1;
      }
    });
    console.log(female);
    const data = {
        labels: [
          'Female',
          'Male'
        ],
        datasets: [{
          data: [female, male],
          backgroundColor: [
          '#FF6384',
          '#36A2EB', 
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          ]
        }]
      };
      
      const options = {
        maintainAspectRatio: false,
        responsive: false,
        legend: {
          position: 'left',
          labels: {
            boxWidth: 10
          }
        }
      }
        return (
            <div>
                <h1> van anh xinh gaiii</h1>
                <Pie 
                     data={data}
                     height={300} 
                     width={400}
                     options={
                        options
                    }
                />
            </div>
        );
    }
}

export default PieChart;