type SecurityCardProps = {
  userName: string
  isLoggedIn: boolean
}

export function SecurityCard({ userName, isLoggedIn }: SecurityCardProps) {
  return (
    <div className="security-card">
      <div className="security-head">
        <span className="security-badge">Security</span>
        <span className={`status-pill ${isLoggedIn ? 'online' : 'offline'}`}>
          {isLoggedIn ? 'Protected' : 'Locked'}
        </span>
      </div>

      <h3>{isLoggedIn ? 'Access granted' : 'Login required'}</h3>
      <p>
        {isLoggedIn
          ? `${userName}, you have access to the secure dashboard.`
          : 'Please sign in to unlock the protected workspace.'}
      </p>
    </div>
  )
}
