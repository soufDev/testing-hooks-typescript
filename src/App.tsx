import React, { Component, FormEvent, useState, SyntheticEvent, useEffect } from 'react';
import './App.css';
import { string } from 'prop-types';

function Form() {
  const [obj, setObj] = useState<{name: string, lastname: string}>({name: '', lastname: ''});
  const [value, setValue] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  function handleChange(e: FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  }

  function handleSubmit(e: SyntheticEvent) {
    if (value !== '') {
      list.push(value);
      setList(list);
      setValue('');
    }
  }
  return (
    <>
      <h1>Testing hooks with CRA Typescript</h1>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>submit</button>
      <br/>
      <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
