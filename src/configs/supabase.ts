import { SUPABASE_API_KEY, SUPABASE_URL } from '@/constants'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)
