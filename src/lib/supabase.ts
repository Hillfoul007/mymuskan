import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zfmjzssssxifilqrdsav.supabase.co";
const supabaseAnonKey = "sb_publishable_yVcoRgN94rbb4iIHXL6XHw_PAqQO_bB";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
