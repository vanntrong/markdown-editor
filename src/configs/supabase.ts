import { SUPABASE_API_KEY, SUPABASE_URL } from '@/constants'
import { type Database } from '@/interfaces/database.interface'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_API_KEY)
