import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useMovieData = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const movieData = useMemo(() => {
    if (!location.state) return null;
    
    const { title, year, summary, poster, genres } = location.state;
    if (!(title && year && summary && poster && Array.isArray(genres))) {
      return null;
    }
    
    return location.state;
  }, [location.state]);

  const redirectToHome = () => {
    alert("올바르지 않은 접근입니다.");
    navigate("/", { replace: true });
  };

  return { movieData, redirectToHome };
};

/*

hooks/ 디렉토리에는 재사용 가능한 커스텀 훅들을 모아두어
다른 컴포넌트나 페이지에서도 쉽게 찾아 사용하기 쉽게 함.
관련 로직들이 한 곳에 모여 있어 유지보수가 쉬움.
React의 일반적인 프로젝트 구조 컨벤션을 따름.
이렇게 하면 프로젝트의 구조가 더 체계적이고 명확해짐.

*/