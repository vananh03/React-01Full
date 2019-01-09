import React, { Component } from 'react';
import { Bar }from 'react-chartjs-2';
class HightChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
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
        //mình sẽ lấy 1 mảng các nước trước nhé
        const all_data = this.state.results
        //1 mang luu cac nuoc của 100 thằng
        var country = [];
        //map từ cái all_data và push vào mảng country
        all_data.map(x => country.push(x.nat));
        //loại bỏ những nước trùng nhau
        var mini_coutry = country.filter((v,i) => country.indexOf(v)===i);
        //mảng lưu giá trị các nước trong miny_country
        var val_mini_country = [];
        mini_coutry.forEach(function(y){
            val_mini_country.push(country.filter(x => x==y).length);
        });
        val_mini_country.push(0);
        console.log(val_mini_country);
        const charData = {
            //cái bd cột này cần 2 thứ,1 là 1 mang các nước với 1 mảng dữ liệu các nc đó
            labels: mini_coutry,
            datasets: [
                {
                    label: 'Points',
                    data: val_mini_country,
                    backgroundColor: 'rgb(229, 39, 39)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgb(252, 224, 12)',
                    hoverBorderColor: 'rgba(255,99,132,1)'
                }
            ]
        }
        const options ={
            legend: {
                display: true,
                position: true
            },
            animation:{
                animateScale: false
            }
        }
        return (
            <div>
                <h1> van anh xinh gai</h1>
                <Bar
                    data={charData}
                    height={35} 
                    width={100}
                    options={{
                        options
                    }}
                />
            </div>
        );
    }
}

export default HightChart;