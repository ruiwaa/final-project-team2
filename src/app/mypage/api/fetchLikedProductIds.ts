import { createClient } from '@/utils/supabase/client'

export const fetchLikedProductIds = async (): Promise<string[]> => {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return []

  const { data, error } = await supabase
    .from('product_likes')
    .select('product_id')
    .eq('user_id', user.id)

  if (error) throw error
  return data.map((row) => row.product_id)
}
