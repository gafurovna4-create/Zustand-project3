import { create } from 'zustand'

export type TodoFilter = 'all' | 'active' | 'done'

export type TodoItem = {
  id: number
  text: string
  completed: boolean
}

type TodoStore = {
  todos: TodoItem[]
  filter: TodoFilter
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
  clearCompleted: () => void
  setFilter: (filter: TodoFilter) => void
}

const initialTodos: TodoItem[] = [
  { id: 1, text: 'Zustand bilan state boshqarishni o\'rganish', completed: false },
  { id: 2, text: 'Mini loyiha uchun UI yasash', completed: true },
  { id: 3, text: 'Projectni build qilish', completed: false },
]

export const useTodoStore = create<TodoStore>((set) => ({
  todos: initialTodos,
  filter: 'all',
  addTodo: (text) => {
    const trimmed = text.trim()

    if (!trimmed) return

    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now() + Math.random(),
          text: trimmed,
          completed: false,
        },
      ],
    }))
  },
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }))
  },
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }))
  },
  clearCompleted: () => {
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    }))
  },
  setFilter: (filter) => set({ filter }),
}))
