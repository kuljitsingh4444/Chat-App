import "../styles/dropDown.css";
import React, { useEffect, useState, useRef } from "react";

const DropDown = ({ options }) => {
	const [showOptions, setShowOptions] = useState(false);
	const [tagged, setTagged] = useState([])
	const dropdownRef = useRef(null);

	const handleCheck = (option) => {
		if(!tagged.includes(option.name)){
			setTagged(tagged.concat(option.name))
		} else {
			const updatedTags = tagged.filter(tag => tag != option.name)
			setTagged(updatedTags)
		}
	}

	const handleClick = (e, taggedPerson) => {
		e.preventDefault()
		e.stopPropagation()
		const updatedTags = tagged.filter(tag => tag != taggedPerson)
		setTagged(updatedTags)
	}

	useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
	
	return(
		<div ref={dropdownRef} className="dropdown">
			<div onClick={() => setShowOptions(!showOptions)} className="dropdown-container">
				<div className="common-select">
					<div>Tag To :</div>
					<div className="tagged-list">
						{
							tagged.map(taggedPerson => <div onClick={(e) => handleClick(e, taggedPerson)} className="highlighted-text">{taggedPerson} {'\u2A2F'}</div>)
						}
					</div>
				</div>
				<div className="down-icon">{'\u2304'}</div>
			</div>
			{
				showOptions &&
				<div className="options-list">
					{
						options.map(option => {
							return (
								<div onClick={() => handleCheck(option)} key={option.key} className="option-container">
									<input key={option.name} checked={tagged.includes(option.name)} className="checkbox-custom" type="checkbox"></input>
									<div className="option-item" value={option.name}>{option.name}</div>
								</div>
							)
						})
					}
				</div>
			}
		</div>
	)
}

export default DropDown