
import { connect } from 'react-redux';
import { addCommentOperation } from '../duck/operations.js';
import AddCommentComponent from '../components/addComment';

const mapStateToProps = (state) => {
  return {
    comments : state.reducer.comments
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCommentOperation: (data) => {
      return dispatch(addCommentOperation(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentComponent);