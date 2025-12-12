-- Create thread_images table for multiple images per thread
CREATE TABLE IF NOT EXISTS public.thread_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  thread_id UUID NOT NULL REFERENCES public.forum_threads(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  alt_text TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_thread_images_thread_id ON public.thread_images(thread_id);

-- Enable RLS
ALTER TABLE public.thread_images ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can view thread images
CREATE POLICY "Public can view thread images" ON public.thread_images
  FOR SELECT USING (true);

-- Policy: Service role has full access
CREATE POLICY "Service role full access thread_images" ON public.thread_images
  FOR ALL USING (true) WITH CHECK (true);

-- Add images array column to forum_threads for backward compatibility  
ALTER TABLE public.forum_threads ADD COLUMN IF NOT EXISTS images TEXT[] DEFAULT '{}';
