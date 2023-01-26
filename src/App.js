import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, settoDo] = useState('');
  let [filters, setFilter] = useState('');
  function handleDeleteClick(id) {
    console.log('hello');
    const removeItem = toDos.filter((todo) => {
      return todo.id !== id;
    });
    setToDos([...removeItem]);
  }
 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e) => settoDo(e.target.value)} placeholder="🖊️ Add item..."/>
        <i onClick={() => {
            if(toDo.trim() === ""){
              alert("Please enter a task.");
            }else{
              setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
            }
          }} className="fas fa-plus add"></i>
      </div>
      <div className='filter'>
        <div onClick={() => { setFilter('all') }} className='box-3'>
          <div className='btn btn-three'>
            <span>All</span>
          </div>
        </div>
        <div onClick={() => { setFilter('completed') }} className='box-3'>
          <div className='btn btn-three'>
            <span>Completed</span>
          </div>
        </div>
        <div onClick={() => {
          setFilter('uncompleted');
          console.log(filters);
        }} className='box-3'>
          <div className='btn btn-three'>
            <span>Uncompleted</span>
          </div>
        </div>
      </div>
      <div className="todos">
        {toDos.map((value, index) => {
          if (filters === '' || filters === 'all') {
            return (
              <div className="todo" key={index}>
                <div className="left">
                  <input
                    onChange={(e) => {
                      setToDos(toDos.filter(obj => {
                        if (obj.id === value.id) {
                          obj.status = e.target.checked
                        }
                        return obj
                      }))
                    }}
                    checked={value.status}
                    value={value.status}
                    type="checkbox"
                    name=""
                    id=""
                    className="che" />
                  <p>{value.status === true ? <s>{value.text}</s> : value.text}</p>
                </div>
                <div className="right">
                  <i className='far fa-trash-alt delete' onClick={() => { handleDeleteClick(value.id) }}></i>
                </div>
              </div>)
          } else if (filters === 'completed' || filters === 'uncompleted') {
            const con = filters === 'completed' ? true : false;
            if (value.status === con) {
              return (
                <div className="todo" key={value.id}>
                  <div className="left">
                    <input
                      onChange={(e) => {
                        setToDos(toDos.filter(obj => {
                          if (obj.id === value.id) {
                            obj.status = e.target.checked
                          }
                          return obj
                        }))
                      }}
                      checked={value.status}
                      value={value.status}
                      type="checkbox"
                      name=""
                      id=""
                      className="che" />
                    <p>{value.status === true ? <s>{value.text}</s> : value.text}</p>
                  </div>
                  <div className="right">
                    <i className='far fa-trash-alt delete' onClick={() => { handleDeleteClick(value.id) }}></i>
                  </div>
                </div>)
            }
          }
          return null;
        })
        }
      </div>
    </div>
  );
}

export default App;
