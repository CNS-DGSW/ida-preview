import React, { useEffect, useState } from "react";

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const useObserve = ({
  root,
  rootMargin = "0px",
  threshold = 0,
  onIntersect,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>();

  useEffect(() => {
    if (target == null) return;
    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { target, setTarget };
};

export default useObserve;
