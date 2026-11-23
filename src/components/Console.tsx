import { useState } from 'react'
import type { CSSProperties } from 'react'
import { endpoints } from '../data'
import type { Json } from '../data'

type Token = { kind: 'key' | 'str' | 'num' | 'lit' | 'punc'; text: string }
type Line = Token[]

const punc = (text: string): Token => ({ kind: 'punc', text })

function primitive(value: string | number | boolean | null): Token {
  if (typeof value === 'string') return { kind: 'str', text: JSON.stringify(value) }
  if (typeof value === 'number') return { kind: 'num', text: String(value) }
  return { kind: 'lit', text: String(value) }
}

function isPrimitive(v: Json): v is string | number | boolean | null {
  return v === null || typeof v !== 'object'
}

function toLines(value: Json, depth = 0, key: string | null = null, comma = false): Line[] {
  const lead: Line = [punc('  '.repeat(depth))]
  if (key !== null) lead.push({ kind: 'key', text: `"${key}"` }, punc(': '))
  const tail = comma ? ',' : ''

  if (isPrimitive(value)) return [[...lead, primitive(value), punc(tail)]]

  if (Array.isArray(value)) {
    if (value.length > 0 && value.every(isPrimitive)) {
      const inline: Token[] = [punc('[')]
      value.forEach((item, i) => {
        inline.push(primitive(item as string | number | boolean | null))
        if (i < value.length - 1) inline.push(punc(', '))
      })
      inline.push(punc(']' + tail))
      return [[...lead, ...inline]]
    }
    const lines: Line[] = [[...lead, punc('[')]]
    value.forEach((item, i) => lines.push(...toLines(item, depth + 1, null, i < value.length - 1)))
    lines.push([punc('  '.repeat(depth) + ']' + tail)])
    return lines
  }

  const entries = Object.entries(value)
  const lines: Line[] = [[...lead, punc('{')]]
  entries.forEach(([k, v], i) => lines.push(...toLines(v, depth + 1, k, i < entries.length - 1)))
  lines.push([punc('  '.repeat(depth) + '}' + tail)])
  return lines
}

export default function Console() {
  const [active, setActive] = useState(0)
  const endpoint = endpoints[active]
  const lines = toLines(endpoint.body)

  return (
    <figure className="console">
      <div className="console-bar">
        <div className="console-tabs" role="group" aria-label="API endpoints">
          {endpoints.map((e, i) => (
            <button
              key={e.path}
              type="button"
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              {e.path}
            </button>
          ))}
        </div>
      </div>
      <div className="console-request">
        <span className="method">GET</span>
        <span className="path">{endpoint.path}</span>
        <span className="status">
          <i aria-hidden="true" />
          200 OK
        </span>
      </div>
      <pre className="console-body" key={endpoint.path} tabIndex={0} aria-label={`Response for ${endpoint.path}`}>
        <code>
          {lines.map((line, i) => (
            <span
              className="ln"
              key={i}
              style={{ animationDelay: `${Math.min(i, 40) * 30}ms` } as CSSProperties}
            >
              {line.map((t, j) => (
                <span className={`t-${t.kind}`} key={j}>
                  {t.text}
                </span>
              ))}
              {'\n'}
            </span>
          ))}
        </code>
      </pre>
      <figcaption>Pick an endpoint. The responses are my CV, as JSON.</figcaption>
    </figure>
  )
}
