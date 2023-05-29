
import { connect } from 'react-redux';
import { addCommentOperation } from '../duck/operations.js';
import MainComponent from '../components/main';

const mapStateToProps = (state) => {
  return {
    comments : state.reducer.comments
  };
}

const mapDispatchToProps = (dispatch) => {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);