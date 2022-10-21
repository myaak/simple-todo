import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

interface AddFormProps {
  addToDo: (title: string) => void,
}

const AddForm = ({ addToDo }: AddFormProps) => {
  const [title, setTitle] = useState<string>('')

  const AddTodo = (event: any, title: string) => {
    event.preventDefault()
    if(title !== '')
      addToDo(title)
  }

  useEffect(() => {
  }, [])

  return (
    <div className="w-full">
      <form className="flex flex-col sm:ml-[15px] items-center gap-3 sm:mt-[15px] mt-[35px]"
        onSubmit={(event) => AddTodo(event, title)}>
        <TextField className="w-[175px]"
          label={'TODO'}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={'New TODO name'}
          variant='standard'
        />
        <Button type='submit' variant="contained">Add</Button>
      </form>
    </div>
  )
}

export default AddForm
