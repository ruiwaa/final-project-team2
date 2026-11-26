import { fetchLikedProductIds } from '@/app/mypage/api/fetchLikedProductIds'
import { useQuery } from '@tanstack/react-query'

// 컴포넌트 밖에 두어 참조를 고정 → 렌더링마다 Set을 다시 만들지 않음
const toSet = (ids: string[]) => new Set(ids)

export const useLikedIdsQuery = (enabled: boolean) =>
  useQuery({
    queryKey: ['likes', 'ids'],
    queryFn: fetchLikedProductIds,
    select: toSet,
    enabled, // 비로그인이면 요청하지 않음
    staleTime: 1000 * 60 * 5,
  })
