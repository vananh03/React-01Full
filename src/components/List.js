import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      info_user: []
    };
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
  handleClick(item) {
    this.setState({
      info_user: item
    });
  };

  render() {
    var { results, info_user } = this.state;
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
    var modal = [];
    if (info_user.length !== 0) {
      modal.push(
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title panel panel-info" id="myModalLabel">INFO USER</h4>
              </div>
              <div className="modal-body">
                <img className="img-thumbnail" src={info_user.picture.large}></img>
                <p>Email : {info_user.email}</p>
                <p>Gender: {info_user.gender}</p>
                <p>Name: {info_user.name.title}  {info_user.name.first} {info_user.name.last}</p>
                <p>Phone: {info_user.phone}</p>
                <p>Location: {info_user.location.street}</p>
                <p>National: {info_user.nat}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="showInfo">
        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-head">
              <td>ID</td>
              <td>Image</td>
              <td>Email</td>
              <td>Name</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody className="table-hover ">
            {results.map((item, key) => (
              <tr data-toggle="modal" data-target="#myModal" onClick={this.handleClick.bind(this, item)}>
                <td>{key + 1}</td>
                <td>
                  <img className="image" src={item.picture.large} /></td>
                <td>{item.email}</td>
                <td className="namecss">{item.name.first}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {modal}
      </div>
    );
  }
}

export default List;