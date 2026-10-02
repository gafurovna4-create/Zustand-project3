type TodoHeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function TodoHeader({ theme, onToggleTheme }: TodoHeaderProps) {
  return (
    <div className="topbar">
      <div>
        <p className="eyebrow">Zustand mini project</p>
        <h1>To-do list</h1>
      </div>
      <button type="button" className="theme-btn" onClick={onToggleTheme}>
        {theme === 'dark' ? 'Light' : 'Dark'} mode
      </button>
    </div>
  )
}
