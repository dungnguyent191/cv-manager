import * as React from 'react'

const TagTypes = ['strong', 'label'];
const classNameTypes = {
  uppercase: 'text-uppercase'
}
function getTagName(prop, state) {
  if (TagTypes.includes(prop)) state.tag = prop;
}
function getClassName(prop, state) {
  for (const classId in classNameTypes) {
    if (prop === classId) state.classNames.push(classNameTypes[classId])
  }
}

export const Text = (props) => {
  const state = {
    tag: '',
    classNames: []
  }
  for (const prop in props) {
    getTagName(prop, state);
    getClassName(prop, state);
  }

  switch (state.tag) {
    case 'strong':
      return (
        <strong className={state.classNames}>
          {props.children}
        </strong>
      )
    default:
      return (
        <label className={state.classNames}>
          {props.children}
        </label>
      )
  }
}