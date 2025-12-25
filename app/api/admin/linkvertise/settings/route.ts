import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createClient();
  const { data } = await supabase
    .from('site_settings')
    .select('*')
    .eq('key', 'linkvertise')
    .single();

  return NextResponse.json(data?.value || { enabled: false, authToken: '', userId: '' });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const settings = await req.json();
  const supabase = createClient();

  await supabase
    .from('site_settings')
    .upsert({
      key: 'linkvertise',
      value: settings,
      updated_at: new Date().toISOString(),
    });

  return NextResponse.json({ success: true });
}
