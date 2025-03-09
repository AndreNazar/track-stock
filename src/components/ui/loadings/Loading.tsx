import { useMemo } from "react";
import "./loading.scss"

function Loading({color = "#56CCF2", size = 20}: {color?: string, size?:number}) {

  const getSize = useMemo(() => {
    if(size > 25) return 5
    return size / 5
  }, [size])

  return (
    <div className="loading">
      <div style={{
        border: `${getSize}px solid ${color}`,
        borderLeft: `${getSize}px solid transparent`,
        width: size,
        height: size
      }} className="loading__spinner"></div>
    </div>
  );
}

export default Loading