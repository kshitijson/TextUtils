import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text");

  const changeHandler = (event) => {
    setText(event.target.value);
  }

  const uppercaseConverter = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.alert('Converted to Uppercase', 'success');
  }

  const lowercaseConverter = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.alert('Converted to Lowercase', 'success');
  }
  
  const clearText = () => {
    let newtext = '';
    setText(newtext);
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.alert('Copied to Clipboard', 'success');
  }

  const txtChecker = (text) => {
    let arr = text.split(" ");

    if (arr[arr.length - 1] === "") {
      return arr.length - 1;
    }
    else{
      return arr.length
    }
  }

  return (
    <>
      <div className="mb-3">
        <h1 className={`text-${props.mode === 'light'?'dark': 'light'}`}>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={changeHandler} id="exampleFormControlTextarea1" rows="8" 
              style={{backgroundColor: props.mode === 'light'?'white': 'grey', color: props.mode === 'light'?'black': 'white'}}></textarea>
        <button className="btn btn-primary my-2" onClick={uppercaseConverter}>Convert to uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={lowercaseConverter}>Convert to LowerCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear</button>
        <button className="btn btn-primary my-2 mx-2" onClick={copyText}>Copy</button>
    </div>
    <div className="container">
      <h1 className={`text-${props.mode === 'light'?'dark': 'light'}`}>Your Passage contains..</h1>
      <p className={`text-${props.mode === 'light'?'dark': 'light'}`}>{txtChecker(text)} words and {text.length} characters</p>
    </div>
    </>
  )
}
