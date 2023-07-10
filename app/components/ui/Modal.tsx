import { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

export default function Modal({
  show,
  onClose,
  children
}: PropsWithChildren<{ show: boolean; onClose: () => void }>) {
  if (!show) {
    return null
  }
  return ReactDOM.createPortal(
    <div className='fixed top-0 left-0 w-full h-full px-4 overflow-auto bg-black z-[2] bg-opacity-[0.4]'>
      <div className='bg-white mt-[15%] mx-auto px-4 py-10 rounded-xl'>
        {children}
      </div>
    </div>,
    document.body
  )
}
