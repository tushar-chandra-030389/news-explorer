import { useRef, useEffect } from "react";

export default function useUpdateEffect(
  callback: () => void,
  dependency: Array<any>
) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      callback();
    }
  }, [...dependency]);
}
