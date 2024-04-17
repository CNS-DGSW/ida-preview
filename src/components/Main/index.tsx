import Footer from "../common/Footer";
import Chapter1 from "./chapter/Chapter1";
import Chapter2 from "./chapter/Chapter2";
import Chapter3 from "./chapter/Chapter3";
import * as S from "./style";

const Main = () => {
  return (
    <>
      <S.MainLayout>
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Footer />
      </S.MainLayout>
    </>
  );
};

export default Main;
