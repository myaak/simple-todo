import TaskItem from './TaskItem'

interface TaskListProps {
  data: any,
  removeToDo: (id: string) => void
  editLabel: (id: string, newTitle: string) => void
}

const TaskList = ({ data, removeToDo, editLabel }: TaskListProps) => {

  const handleEditSubject = (item:any, newTitle:string) => {
    editLabel(item,newTitle)
  }
  return (
    <div className="w-full h-full sm:w-[350px] flex items-center mt-[10px] flex-col gap-[5px]
      overflow-y-scroll">
      <span>Here's what you need to do </span>
      {data.map((item: any, index: number) =>
        <TaskItem
          editLabel={(newTitle) => handleEditSubject(item,newTitle)}
          removeToDo={(id) => removeToDo(id)}
          key={index}
          title={item.title}
          id={item.id}
        />
      )}
    </div>
  )
}

export default TaskList
