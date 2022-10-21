import { useState, useEffect, useCallback } from 'react'
import { AddForm, TaskList } from './components'
import shortid from 'shortid'

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('todos')!) !== null ?
      JSON.parse(localStorage.getItem('todos')!) : []
  )
  const [isEditing, setEditing] = useState<boolean>(false)

  const handleAddTodo = (title: string) => {
    setData((old: any) => [...old, { title: title, date: new Date().getTime(), id: shortid.generate() }])
  }

  const handleRemoveToDo = (id: string) => {
    setData((old: any) => {
      const newData = old.filter((item: any) => item.id !== id)
      return newData
    })
  }

  const handleEditLabel = useCallback((item:any, newTitle: string) => {
    if(isEditing) return;
    if(!isEditing) setEditing(true)
    setData((old: any) => {
      const newData = [...old]

      const index = old.indexOf(item)
      newData[index] = {
        ...item,
        title: newTitle
      }
      console.log(newData[index])
      setEditing(false)
      return newData
    })
  },[isEditing])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data))
    window.addEventListener('storage', () => {
      const DATA = JSON.parse(localStorage.getItem('todos')!)
      setData(DATA)
    })
  }, [data])

  return (
    <div className="App md:w-full sm:flex block">
      <header>
        <AddForm
          addToDo={(title) => handleAddTodo(title)}
        />
      </header>
      <TaskList
        editLabel={(item, newTitle) => handleEditLabel(item, newTitle)}
        removeToDo={(id) => handleRemoveToDo(id)}
        data={data.sort(
          function(a: any, b: any) { return b.date - a.date }
        )}
      />
    </div>
  )
}

export default App
