import { useEffect, useRef } from 'react'

const useFocus = (initialVal) => {
    const ref = useRef(initialVal)

    useEffect(() => {
        ref.current.focus()
    })

    return ref
}

export default useFocus