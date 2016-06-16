import React, { PropTypes } from 'react';
import TextInput from './TextInput/TextInput';
import TextInputShowcaseCard from './TextInput/TextInputShowcaseCard';

export function getInputComponentById(id, props, context, sendAddr) {
  switch (id) {
    case 1:
      return <TextInput labels={props} context={context} sendAddr={sendAddr}/>;
    default:
      return <div>Null</div>;
  }
}

export function getAllInputComponentsForShowcase(data) {
  return [
    <TextInputShowcaseCard key={Math.random()}
      demoProps={data}/>
  ];
}