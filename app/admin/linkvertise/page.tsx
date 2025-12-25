'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Shield, CheckCircle2, AlertCircle, ExternalLink, Copy, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LinkvertiseSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [showToken, setShowToken] = useState(false);
  const [settings, setSettings] = useState({
    enabled: false,
    userId: '',
    authToken: '',
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const res = await fetch('/api/admin/linkvertise');
      const data = await res.json();
      if (data.settings) {
        setSettings(data.settings);
      }
    } catch {
      setMessage('Failed to load settings');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/admin/linkvertise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        setMessage('Settings saved successfully');
        setMessageType('success');
      } else {
        setMessage('Failed to save settings');
        setMessageType('error');
      }
    } catch {
      setMessage('Failed to save settings');
      setMessageType('error');
    } finally {
      setSaving(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setMessage('Copied to clipboard!');
    setMessageType('success');
    setTimeout(() => setMessage(''), 2000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="h-8 w-8 text-primary" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <h1 className="text-3xl font-bold gradient-text mb-2">Linkvertise Integration</h1>
          <p className="text-muted-foreground">Configure protected downloads and monetization</p>
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Alert className={`glass ${messageType === 'success' ? 'border-green-500/30' : 'border-red-500/30'}`}>
              <AlertDescription className="flex items-center gap-2">
                {messageType === 'success' ? (
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-400" />
                )}
                {message}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <div className="grid gap-6">
          <Card className="glass border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 glow-sm">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Configuration</CardTitle>
                  <CardDescription>Setup your Linkvertise account credentials</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div 
                className="flex items-center justify-between p-4 glass rounded-lg"
                whileHover={{ scale: 1.01 }}
              >
                <div className="space-y-1">
                  <Label className="text-base font-semibold">Enable Protection</Label>
                  <p className="text-sm text-muted-foreground">Activate Linkvertise for downloads</p>
                </div>
                <Switch
                  checked={settings.enabled}
                  onCheckedChange={(checked) => setSettings({ ...settings, enabled: checked })}
                  className="data-[state=checked]:bg-primary"
                />
              </motion.div>

              <div className="space-y-2">
                <Label htmlFor="userId" className="flex items-center gap-2">
                  User ID
                  <a 
                    href="https://publisher.linkvertise.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Label>
                <div className="relative">
                  <Input
                    id="userId"
                    value={settings.userId}
                    onChange={(e) => setSettings({ ...settings, userId: e.target.value })}
                    placeholder="123456"
                    className="glass pr-10"
                  />
                  {settings.userId && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-1 top-1 h-8 w-8 p-0"
                      onClick={() => copyToClipboard(settings.userId)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Find this in your Linkvertise dashboard URL
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="authToken" className="flex items-center gap-2">
                  API Auth Token
                  <a 
                    href="https://publisher.linkvertise.com/api" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Label>
                <div className="relative">
                  <Input
                    id="authToken"
                    type={showToken ? "text" : "password"}
                    value={settings.authToken}
                    onChange={(e) => setSettings({ ...settings, authToken: e.target.value })}
                    placeholder="Your 64-character API token"
                    className="glass pr-20"
                  />
                  <div className="absolute right-1 top-1 flex gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      onClick={() => setShowToken(!showToken)}
                    >
                      {showToken ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    {settings.authToken && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0"
                        onClick={() => copyToClipboard(settings.authToken)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Generate this from your Linkvertise API settings
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  onClick={handleSave} 
                  disabled={saving}
                  className="w-full h-12 glass-hover glow-sm relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {saving ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                  )}
                  <span className="relative z-10 font-semibold">Save Configuration</span>
                </Button>
              </motion.div>
            </CardContent>
          </Card>

          <Card className="glass border-accent/20">
            <CardHeader>
              <CardTitle className="text-lg">Quick Setup Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { step: 1, text: 'Create account at publisher.linkvertise.com' },
                { step: 2, text: 'Copy your User ID from dashboard' },
                { step: 3, text: 'Generate API token from API settings' },
                { step: 4, text: 'Enable protection and save settings' },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  className="flex items-center gap-3 p-3 glass rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.step * 0.1 }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm glow-sm">
                    {item.step}
                  </div>
                  <p className="text-sm">{item.text}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
