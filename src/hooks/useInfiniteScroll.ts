import { useCallback, useEffect, useRef } from "react";

const options = {
  threshold: 0.5,
};

const useInfiniteScroll = (callback: (page: number) => void, page: number) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const target = entries[0];
      console.log(target);
      if (target.isIntersecting) {
        callback(page);
      }
    },
    [page, callback]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return sentinelRef;
};

export default useInfiniteScroll;
