import React, { useMemo, useState } from 'react';
import DropDown from './dropDown';
import '../styles/addComment.css';

const AddComment = ({ addCommentOperation }) => {
  const [comment, setComment] = useState("")
  const [tagged, setTagged] = useState([])

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
    if(comment && comment.length){
      const newComment = {
        comment,
        taggedTo: tagged,
        updatedBy: "Anonymous User",
        updatedOn: new Date().toISOString()
      }
      addCommentOperation(newComment)
      setComment("")
    }
  }

  const commentUpdated = (e) => {
    setComment(e.target.value)
  }

  return (
    <React.Fragment>
      <div className="add-comment-section">
        <div className="initials-container">?</div>
        <div className="comments-contiainer">
          <textarea value={comment} onChange={(e) => commentUpdated(e)} className="comment-area" rows={5}></textarea>
          <DropDown updateTags={setTagged} options={options}></DropDown>
          <div className="action-buttons">
            <button onClick={() => handleAddComment()} className="primary-button">Save</button>
            <button className="secondary-button">Cancel</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddComment;
