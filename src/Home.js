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
    return results.length
      ? <h1>
          {results.map(person=>
          <div>
             <h1>
             {person.gender}
           </h1>
           <h1>
             {person.name.first}
           </h1>
           <h1>
             {person.name.last}
           </h1>
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
