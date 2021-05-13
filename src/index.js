/**
 * @author Allen Liu
 * @desc A component of react-hook based on setInterval and clearInterval that supports multi-interval management.
 */
import { useRef, useEffect } from 'react'
export default () => {
    const ids = useRef([])
    //set interval
    function setInterval() {
        let id = window.setInterval.apply(null, arguments)
        ids.current.push(id)
        return id
    }
    //clear interval
    function clearInterval(id) {
        for (let i = 0, len = ids.current.length; i < len; i++) {
            if (ids.current[i] == id) {
                window.clearInterval(id)
                ids.current.splice(i, 1)
                break
            }
        }
    }
    useEffect(() => {
        return () => {
            //remove all
            ids.current.length > 0 && ids.current.map(window.clearInterval)
        }
    }, [])
    return {
        setInterval,
        clearInterval
    }
}
