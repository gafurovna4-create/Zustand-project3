import { useMemo, useState, type FormEvent } from 'react'
import './App.css'
import { ProfileCard } from './components/ProfileCard'
import { ProtectedPanel } from './components/ProtectedPanel'
import { SecurityCard } from './components/SecurityCard'
import { StatsGrid } from './components/StatsGrid'
import { TodoHeader } from './components/TodoHeader'
import { TodoList } from './components/TodoList'
import { useAuthStore } from './store/useAuthStore'
import { useThemeStore } from './store/useThemeStore'
import { useTodoStore } from './store/useTodoStore'

function App() {
  const [text, setText] = useState('')
  const [username, setUsername] = useState('')

  const todos = useTodoStore((state) => state.todos)
  const filter = useTodoStore((state) => state.filter)
  const addTodo = useTodoStore((state) => state.addTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)
  const clearCompleted = useTodoStore((state) => state.clearCompleted)
  const setFilter = useTodoStore((state) => state.setFilter)

  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  const user = useAuthStore((state) => state.user)
  const login = useAuthStore((state) => state.login)
  const logout = useAuthStore((state) => state.logout)

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((todo) => !todo.completed)
    if (filter === 'done') return todos.filter((todo) => todo.completed)
    return todos
  }, [filter, todos])

  const remaining = todos.filter((todo) => !todo.completed).length
  const completed = todos.length - remaining

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!text.trim()) return

    addTodo(text)
    setText('')
  }

  const handleLogin = () => {
    login(username)
    setUsername('')
  }

  return (
    <main className={`app-shell ${theme}`}>
      <section className="todo-card">
        <TodoHeader theme={theme} onToggleTheme={toggleTheme} />

        <ProfileCard
          user={user}
          username={username}
          setUsername={setUsername}
          onLogin={handleLogin}
          onLogout={logout}
        />

        <StatsGrid total={todos.length} active={remaining} done={completed} />

        <div className="panel-stack">
          <SecurityCard userName={user.isLoggedIn ? user.name : 'Guest'} isLoggedIn={user.isLoggedIn} />
          <ProtectedPanel isLoggedIn={user.isLoggedIn} userName={user.isLoggedIn ? user.name : 'Guest'} />
        </div>

        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Yangi vazifa yozing..."
            aria-label="todo input"
          />
          <button type="submit">Add</button>
        </form>

        <TodoList
          items={filteredTodos}
          filter={filter}
          onFilterChange={setFilter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onClearCompleted={clearCompleted}
          total={todos.length}
          completed={completed}
        />
      </section>
    </main>
  )
}

export default App
