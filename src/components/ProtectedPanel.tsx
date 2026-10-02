type ProtectedPanelProps = {
  isLoggedIn: boolean
  userName: string
}

export function ProtectedPanel({ isLoggedIn, userName }: ProtectedPanelProps) {
  if (!isLoggedIn) {
    return (
      <div className="protected-panel locked">
        <h3>Protected dashboard</h3>
        <p>Bu bo'lim faqat login qilingan foydalanuvchilar uchun ochiq.</p>
        <div className="lock-box">🔒 Secure area</div>
      </div>
    )
  }

  return (
    <div className="protected-panel open">
      <div className="protected-header">
        <div>
          <span className="label">Secure workspace</span>
          <h3>Welcome, {userName}</h3>
        </div>
        <span className="protected-badge">Active</span>
      </div>

      <div className="protected-grid">
        <div className="mini-card">
          <span>Role</span>
          <strong>Admin</strong>
        </div>
        <div className="mini-card">
          <span>Session</span>
          <strong>Verified</strong>
        </div>
        <div className="mini-card">
          <span>Last login</span>
          <strong>Today</strong>
        </div>
      </div>
    </div>
  )
}
