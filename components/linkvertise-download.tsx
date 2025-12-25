'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Download, Loader2 } from 'lucide-react';

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
    try {
      const res = await fetch('/api/linkvertise/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hash: hashValue }),
      });
      const data = await res.json();
      setVerified(data.verified);
      if (!data.verified) {
        setError(data.message || 'Invalid or expired verification. Please use the Linkvertise link.');
      }
    } catch {
      setError('Verification failed');
    } finally {
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
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {verified ? (
        <Button onClick={handleDownload} className="w-full" disabled={loading}>
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
          Download {fileName}
        </Button>
      ) : (
        <Button onClick={handleDownload} className="w-full" disabled={loading}>
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Shield className="mr-2 h-4 w-4" />}
          Continue to Download (via Linkvertise)
        </Button>
      )}
    </div>
  );
}
