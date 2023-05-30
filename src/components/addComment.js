import React, { useMemo, useState, useRef } from 'react';
import DropDown from './dropDown';
import '../styles/addComment.css';

const AddComment = ({ addCommentOperation }) => {
  const [comment, setComment] = useState('');
  const [tagged, setTagged] = useState([]);
  const [actions, showActions] = useState(false);
  const childRef = useRef(null);

  const options = useMemo(() => {
    return [
      {
        id: 0,
        name: 'Arnold Papis',
      },
      {
        id: 1,
        name: 'Bob Haylett',
      },
      {
        id: 2,
        name: 'Dan Jenkin',
      },
      {
        id: 3,
        name: 'Holmes Pond',
      },
      {
        id: 4,
        name: 'James Pond',
      },
    ];
  }, []);

  const handleAddComment = () => {
    if ((comment && comment.length) || (tagged && tagged.length)) {
      const newComment = {
        comment,
        taggedTo: tagged,
        updatedBy: 'Anonymous User',
        updatedOn: new Date().toISOString(),
      };
      addCommentOperation(newComment);
      clearComment();
    }
  };

  const commentUpdated = (e) => {
    setComment(e.target.value);
  };

  const clearComment = () => {
    setComment('');
    if (childRef && childRef.current) {
      childRef.current.clearTagsSelected();
    }
  };

  return (
    <React.Fragment>
      <div className="add-comment-section">
        <div className="initials-container">AU</div>
        <div className="comments-contiainer">
          <textarea
            placeholder="Anonymous User can send message here"
            value={comment}
            onChange={(e) => commentUpdated(e)}
            className="comment-area"
            rows={5}
          ></textarea>
          <DropDown
            ref={childRef}
            updateTags={setTagged}
            options={options}
            udpateActionsView={showActions}
          ></DropDown>
          {!actions && (
            <div className="action-buttons">
              <button
                onClick={() => handleAddComment()}
                className="primary-button"
              >
                Save
              </button>
              <button
                onClick={() => clearComment()}
                className="secondary-button"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddComment;
