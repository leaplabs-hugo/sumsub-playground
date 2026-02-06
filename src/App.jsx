import { useState } from 'react'
import SumsubWebSdk from '@sumsub/websdk-react'

function App() {
  const [accessToken, setAccessToken] = useState('')
  const [token, setToken] = useState('')

  const handleGenerate = () => {
    setToken(accessToken)
  }

  return (
    <div>
      <div style={{ width: '700px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <textarea
          rows={6}
          style={{ width: '675px', maxWidth: '675px', resize: 'none', padding: '12px' }}
          value={accessToken}
          onChange={(e) => setAccessToken(e.target.value)}
          placeholder="Paste access token"
        />
        <button onClick={handleGenerate}>Generate</button>
      {token && <SumsubWebSdk accessToken={token} expirationHandler={() => {}} />}
      </div>
    </div>
  )
}

export default App
