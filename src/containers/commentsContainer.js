import { connect } from 'react-redux';
import { addCommentOperation } from '../duck/operations.js';
import CommentsComponent from '../components/comments';

const mapStateToProps = (state) => {
  return {
    comments: state.reducer.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCommentOperation: (data) => {
      return dispatch(addCommentOperation(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsComponent);
