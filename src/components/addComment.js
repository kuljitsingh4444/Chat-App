import React, { useMemo } from 'react';
import DropDown from './dropDown';
import '../styles/addComment.css';

const AddComment = () => {
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

  return (
    <React.Fragment>
      <div className="add-comment-section">
        <div className="initials-container">?</div>
        <div className="comments-contiainer">
          <textarea className="comment-area" rows={5}></textarea>
          <DropDown options={options}></DropDown>
          <div className="action-buttons">
            <button className="primary-button">Save</button>
            <button className="secondary-button">Cancel</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddComment;
