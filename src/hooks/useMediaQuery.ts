import { useEffect, useState } from "react";

const useMediaQuery: (mediaQueryList: string) => string | any = (
  mediaQueryList
) => {
  const [current, setCurrent] = useState<any>();
  const [isMatch, setIsMatch] = useState<boolean>(false);
  useEffect(() => {
    let mounted: boolean = true;
    let timeout: any = null;

    const getCurrentMedia: (mediaList: string) => string | null = (
      mediaList
    ) => {
      let result = null;
      if (window.matchMedia(mediaList).matches) {
        result = mediaList;
        setIsMatch(true);
      } else {
        setIsMatch(false);
      }
      return result;
    };

    const onResize: () => void = () => {
      if (timeout) {
        return;
      }

      const media = getCurrentMedia(mediaQueryList);
      if (current !== media) {
        setCurrent(media as any);
      }

      timeout = setTimeout(() => (timeout = null), 500);
    };

    setCurrent(getCurrentMedia(mediaQueryList));
    window.addEventListener("resize", onResize);

    return () => {
      mounted = false;
      window.removeEventListener("resize", onResize);
    };
  }, [mediaQueryList]);

  return isMatch;
};
export default useMediaQuery;
