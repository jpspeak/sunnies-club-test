import React from 'react'

export default function NotifBadge({ className }: { className: string }) {
  return <div className={`h-1 w-1 bg-red-500 rounded-full ${className}`}></div>
}
