import type { TodoFilter, TodoItem } from '../store/useTodoStore'

type TodoListProps = {
  items: TodoItem[]
  filter: TodoFilter
  onFilterChange: (filter: TodoFilter) => void
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onClearCompleted: () => void
  total: number
  completed: number
}

export function TodoList({
  items,
  filter,
  onFilterChange,
  onToggle,
  onDelete,
  onClearCompleted,
  total,
  completed,
}: TodoListProps) {
  return (
    <>
      <div className="filters" aria-label="todo filters">
        {(['all', 'active', 'done'] as TodoFilter[]).map((item) => (
          <button
            key={item}
            type="button"
            className={filter === item ? 'active' : ''}
            onClick={() => onFilterChange(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="todo-list">
        {items.length ? (
          items.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'done' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id)}
                />
                <span>{todo.text}</span>
              </label>
              <button type="button" className="delete-btn" onClick={() => onDelete(todo.id)}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className="empty-state">Vazifa yo'q</li>
        )}
      </ul>

      <div className="footer-row">
        <span>{total} umumiy</span>
        <button
          type="button"
          className="clear-btn"
          onClick={onClearCompleted}
          disabled={!completed}
        >
          Done tasksni tozalash
        </button>
      </div>
    </>
  )
}
