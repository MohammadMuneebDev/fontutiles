import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        if (!word) return ''; 
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      };

  return (
    props.alert&&<div class={`alert alert-{props.alert.type}  role="alert`}>
    <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
  </div>
  )
}

export default Alert