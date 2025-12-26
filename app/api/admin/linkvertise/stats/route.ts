import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = await createClient();

  const { count: totalDownloads } = await supabase
    .from('linkvertise_downloads')
    .select('*', { count: 'exact', head: true });

  const { count: verifiedDownloads } = await supabase
    .from('linkvertise_downloads')
    .select('*', { count: 'exact', head: true })
    .eq('verified', true);

  const bypassAttempts = (totalDownloads || 0) - (verifiedDownloads || 0);

  return NextResponse.json({
    totalDownloads: totalDownloads || 0,
    verifiedDownloads: verifiedDownloads || 0,
    bypassAttempts,
  });
}
