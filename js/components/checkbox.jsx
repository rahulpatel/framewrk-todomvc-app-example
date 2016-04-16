'use strict';

export default (props) => {

  let label = '';
  if (props.label) {
    label = (<label for={props.className}>{props.label}</label>);
  }

  console.log(props);

  return (
    <div>
      <input
        type="checkbox"
        className={props.className}
        checked={props.checked || false}
        onChange={props.onChange}
      />
      {label}
    </div>
  );
};
