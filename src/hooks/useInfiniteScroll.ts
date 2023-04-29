import { useCallback, useEffect, useRef, useState } from "react";

const options = {
  threshold: 1,
};

const useInfiniteScroll = (
  callback: () => void,
  page: number,
  isVisible: boolean
) => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const target = entries[0];
      console.log(target.isIntersecting);
      if (target.isIntersecting) {
        callback();
      }
    },
    [page]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);

    if (isLoading && sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
    console.log({ "isVlslbie ": isVisible });
  }, []);

  return sentinelRef;
};

export default useInfiniteScroll;
