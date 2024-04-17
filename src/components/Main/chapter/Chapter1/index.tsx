import useObserve from "@/hooks/useObserve";
import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { isDarkNavbarState } from "@/atom/navBarAtom";
import { useEffect } from "react";

const Chapter1 = () => {
  const setIsDarkNavbarState = useSetRecoilState(isDarkNavbarState);

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    setIsDarkNavbarState(isIntersecting);
  };

  useEffect(() => {
    return () => {
      setIsDarkNavbarState(false);
    };
  }, []);

  const { setTarget } = useObserve({ onIntersect });
  return (
    <S.Chapter1Layout ref={setTarget}>
      <S.Chapter1CenterBox>
        <S.Chapter1Phrases>
          세상을 이롭게 하는 소프트웨어 개발자가 되고 싶나요?
        </S.Chapter1Phrases>
        <S.Chapter1LinkButton href={"/aply"}>
          원서 접수하러 가기
        </S.Chapter1LinkButton>
        <S.Chapter1ArrowIcon />
      </S.Chapter1CenterBox>
    </S.Chapter1Layout>
  );
};

export default Chapter1;
