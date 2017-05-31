/**
 * Created by Koleda_D on 31.05.2017.
 */
import React from 'react';
import {connect} from 'react-redux';

class SomeComponennt extends React.Component {
    render(){
        return (
          <div></div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, null)(SomeComponennt);