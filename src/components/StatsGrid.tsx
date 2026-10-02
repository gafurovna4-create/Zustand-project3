type StatsGridProps = {
  total: number
  active: number
  done: number
}

export function StatsGrid({ total, active, done }: StatsGridProps) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span>Total</span>
        <strong>{total}</strong>
      </div>
      <div className="stat-card">
        <span>Active</span>
        <strong>{active}</strong>
      </div>
      <div className="stat-card">
        <span>Done</span>
        <strong>{done}</strong>
      </div>
    </div>
  )
}
