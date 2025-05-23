import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{ id: Date.now(), name: '', age: '' }])

  function addField(){
    setFields([...fields, { id: Date.now() + Math.random(), name: "", age: "" }])
  }

  function handleChange(e, index){
    const updatedFields = [...fields]
    updatedFields[index][e.target.name] = e.target.value
    setFields(updatedFields)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(fields)
  }

  function removeField(index){
    if(fields.length === 1) return; // prevent removing last field
    const updatedFields = fields.filter((_, i) => i !== index)
    setFields(updatedFields)
  }

  return (
    <div className="form-container">
        {/* Do not remove the main div */}
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="fields-container">
                <input 
                  type="text" 
                  placeholder="name" 
                  name="name" 
                  value={field.name}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
                <input 
                  type="number" 
                  placeholder="age" 
                  name="age" 
                  value={field.age} 
                  onChange={(e) => handleChange(e, index)}
                  required
                  min="0"
                />
                {fields.length > 1 && (
                  <button type="button" onClick={() => removeField(index)}>Remove</button>
                )}
              </div>
            )
          })}
          <div className="buttons-container">
            <button type="button" onClick={addField}>Add More..</button>
            <button type="submit">Submit</button>
          </div>
        </form>
    </div>
  )
}

export default App
