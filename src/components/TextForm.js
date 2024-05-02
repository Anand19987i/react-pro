import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("on Change");
        setText(event.target.value)
    }
    const handleReClick = ()=>{
        let newText ="";
        for(let i = text.length-1; i>=0; i--){
            newText += text[i];
        }
        setText(newText);
    }
    const handleClearClick = ()=>{
        let newText = ' ';
        setText(newText)
    }
    const [text, setText] = useState("");
    return(
        <>
        <div className={`container my-3 text-${props.mode ==='dark'?'light':'dark'}`}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7" placeholder='Enter the text'></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleReClick}>Reverse</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear</button>
        </div>
        <div className={`container my-3 text-${props.mode ==='dark'?'light':'dark'}`}>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
