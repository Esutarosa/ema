'use server';

import { createClient } from '@/utils/supabase/server';

export async function getDustcellImages() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('dustcell_images')
    .select('*')
    .order('id');

  if (error) {
    console.error('Error fetching data:', error);
    return [];
  }

  return data || [];
}