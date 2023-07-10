import React from 'react'

export default function NotifBadge({ className }: { className: string }) {
  return <div className={`h-4 w-4 bg-red-500 rounded-full ${className}`}></div>
}
