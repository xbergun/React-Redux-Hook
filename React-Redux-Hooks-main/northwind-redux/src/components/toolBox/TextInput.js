import React from "react";
//REACT-HOOKS
const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
  //bootstrap
  let wrapperClass = "from-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
        <div className="field">
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
          />
          {/*js özel syntax*/} 
          {/*hata varsa çalışır yoksa div in içi çalışmaz*/}
          {error&&<div className="alert alert-danger">{error}</div>}
        </div>
    </div>
  );
};

export default TextInput;
