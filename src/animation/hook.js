// utils/hooks.js
import { useInView } from "react-intersection-observer";

export const useRepeatedInView = (threshold = 0.1) => {
  return useInView({
    triggerOnce: false,
    threshold: threshold,
  });
};
