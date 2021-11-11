import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/**
 * Simple Straightforward implementation of Quill rich text editor
 * @param props
 * @returns 
 */
const QuillEditorComponent = (props : any):React.ReactElement => {
  const [value, setValue] = useState('');

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue}/>
  );
}

export default QuillEditorComponent;