import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  

  render() {
    const { results = [] } = this.props.data;
    return results.length ? (
      <h1 className='container'>
        {results.map((person) => (
          <div className='flex'>
          <label><h1>gender</h1></label>
            <h3>{person.gender}</h3>
             <label><h1>first Name</h1></label>
            <h3>{person.name.first}</h3>
             <label><h1>last Name</h1></label>
            <h3>{person.name.last}</h3>
             <label><h1>Image</h1></label>
            <img src={person.picture.medium} />
          </div>
          )}
        </h1>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
