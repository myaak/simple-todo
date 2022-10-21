import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'

interface TaskItemProps {
  title: string,
  id: string
  removeToDo: (id: string) => void,
  editLabel: (newTitle: string) => void,
  isEditing?: (id: string) => void
}

const TaskItem = ({ title, id, removeToDo, editLabel }: TaskItemProps) => {
  const [done, isDone] = useState<boolean>(false)
  const [editing, setEdit] = useState<boolean>(false)
  const [editTitle, setEditTitle] = useState<string>(title)
  return (
    <div className="flex">
      <div className="w-[200px] flex items-center relative h-auto
        border-[2px] border-slate-400 rounded-[25px] mb-[2.5px]">
        <Checkbox
          checked={done}
          onChange={() => isDone((prev) => !prev)}
        />
        {!editing &&
          <span className={`${done ? 'text-gray-400 line-through' : ''} h-auto`}
            onClick={() => setEdit(true)}
          >
            {title}
          </span>
        }
        {editing &&
          <input type="text" value={editTitle} className="w-[115px]"
            onChange={(e) => setEditTitle(e.target.value)}
          />
        }
        <div className="absolute right-[5px]">
          <IconButton onClick={() => removeToDo(id)}>
            <DeleteIcon style={{
              color: 'red'
            }} />
          </IconButton>
        </div>
      </div>
      {editing &&
        <div className="h-[48px] flex items-center">
          <Button onClick={() => {
            editLabel(editTitle)
            setEdit(false)
          }}>Save</Button>
        </div>
      }
    </div>
  )
}

export default TaskItem
