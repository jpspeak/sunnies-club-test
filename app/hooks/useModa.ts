import { useState } from 'react'

const useModal = () => {
  const [isShowingModal, setIsShowingModal] = useState(false)

  function toggleModal() {
    setIsShowingModal(!isShowingModal)
  }

  return { isShowingModal, toggleModal }
}

export default useModal
