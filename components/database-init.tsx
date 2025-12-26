"use client";

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/server';

/**
 * Database initialization component
 * This component initializes the Supabase client and ensures proper connection
 */
export default function DatabaseInit() {
  useEffect(() => {
    const initDatabase = async () => {
      try {
        const supabase = await createClient();
        
        // Test the connection
        const { error } = await supabase.from('profiles').select('id').limit(1);
        
        if (error) {
          console.error('Database connection error:', error);
        } else {
          console.log('Database connection successful');
        }
      } catch (err) {
        console.error('Error initializing database:', err);
      }
    };

    initDatabase();
  }, []);

  return null; // This component doesn't render anything
}
