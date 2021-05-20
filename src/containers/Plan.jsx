import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlanActions from '../actions/Plan';
import PlanComponent from '../components/Plan';

const mapStateToProps = state => ({
    planList: state.planReducer.planList,
});

const mapDispatchToProps = dispatch => ({
    planActions: bindActionCreators(PlanActions, dispatch),
});

const Plan = props => <PlanComponent {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Plan);
