import '../styles/popup.css';

const Popup = (props) => {
  return (
    <div className="popup-overlay">
      <div className="popup-contents">
        <div className="popup-items">{props.children}</div>
      </div>
    </div>
  );
};

export default Popup;
