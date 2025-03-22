import { useMemo } from "react";
import "./loading.scss"
import { COLOR_PRIMARY } from "../../../global-variables";

function Loading({color = COLOR_PRIMARY, size = 20}: {color?: string, size?:number}) {

  const getSize = useMemo(() => {
    if(size > 25) return 5
    return size / 5
  }, [size])

  return (
    <span className="loading">
      <span style={{
        border: `${getSize}px solid ${color}`,
        borderLeft: `${getSize}px solid transparent`,
        width: size,
        height: size
      }} className="loading__spinner"></span>
    </span>
  );
}

export default Loading