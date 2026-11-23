import { useState } from 'react'

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      const input = document.createElement('input')
      input.value = email
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button type="button" className="copy-email" onClick={copy} aria-live="polite">
      {copied ? 'Copied!' : 'Copy email'}
    </button>
  )
}
