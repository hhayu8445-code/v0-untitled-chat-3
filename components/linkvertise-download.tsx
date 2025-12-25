'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Download, Loader2, Lock, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LinkvertiseDownloadProps {
  assetId: string;
  linkvertiseUrl: string;
  fileName: string;
}

export function LinkvertiseDownload({ assetId, linkvertiseUrl, fileName }: LinkvertiseDownloadProps) {
  const [hash, setHash] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hashParam = params.get('hash');
    if (hashParam) {
      setHash(hashParam);
      verifyHash(hashParam);
    }
  }, []);

  const verifyHash = async (hashValue: string) => {
    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => setProgress(p => Math.min(p + 10, 90)), 100);
    
    try {
      const res = await fetch('/api/linkvertise/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hash: hashValue }),
      });
      const data = await res.json();
      setProgress(100);
      setVerified(data.verified);
      if (!data.verified) {
        setError(data.message || 'Invalid or expired verification. Please use the Linkvertise link.');
      }
    } catch {
      setError('Verification failed');
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (verified && hash) {
      window.location.href = `/api/linkvertise/download/${assetId}?hash=${hash}`;
    } else {
      window.open(linkvertiseUrl, '_blank');
    }
  };

  return (
    <div className="space-y-4">
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Alert variant="destructive" className="glass border-red-500/30">
              <AlertDescription className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                {error}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      {loading && (
        <motion.div 
          className="glass rounded-lg p-4 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Verifying...</span>
            <span className="text-primary font-medium">{progress}%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-accent to-primary glow-sm"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {verified ? (
          <Button 
            onClick={handleDownload} 
            className="w-full h-14 glass-hover glow-sm relative overflow-hidden group"
            disabled={loading}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CheckCircle2 className="mr-2 h-5 w-5 text-green-400" />
            <span className="relative z-10 font-semibold">Download {fileName}</span>
            <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
          </Button>
        ) : (
          <Button 
            onClick={handleDownload} 
            className="w-full h-14 glass-hover relative overflow-hidden group"
            disabled={loading}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-shimmer" />
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Shield className="mr-2 h-5 w-5" />
            )}
            <span className="relative z-10 font-semibold">Continue to Download</span>
          </Button>
        )}
      </motion.div>

      <motion.div 
        className="glass rounded-lg p-4 space-y-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 glow-sm">
            <Shield className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="text-sm font-semibold">Protected Download</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This file is protected by Linkvertise. Complete a quick verification to support the creator and unlock your download.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
