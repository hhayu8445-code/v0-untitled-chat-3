'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

export default function LinkvertiseSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
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
    } catch (error) {
      setMessage('Failed to load settings');
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
      } else {
        setMessage('Failed to save settings');
      }
    } catch {
      setMessage('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center p-8"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Linkvertise Settings</CardTitle>
          <CardDescription>Configure Linkvertise integration for protected downloads</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {message && (
            <Alert>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          <div className="flex items-center space-x-2">
            <Switch
              checked={settings.enabled}
              onCheckedChange={(checked) => setSettings({ ...settings, enabled: checked })}
            />
            <Label>Enable Linkvertise Protection</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="userId">Linkvertise User ID</Label>
            <Input
              id="userId"
              value={settings.userId}
              onChange={(e) => setSettings({ ...settings, userId: e.target.value })}
              placeholder="123456"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="authToken">API Auth Token</Label>
            <Input
              id="authToken"
              type="password"
              value={settings.authToken}
              onChange={(e) => setSettings({ ...settings, authToken: e.target.value })}
              placeholder="Your Linkvertise API token"
            />
          </div>

          <Button onClick={handleSave} disabled={saving}>
            {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
