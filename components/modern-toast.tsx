'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { MODERN_UI_CONFIG } from '@/lib/constants';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContainerProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const ToastIcon = ({ type }: { type: ToastType }) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="w-5 h-5 text-success" />;
    case 'error':
      return <AlertCircle className="w-5 h-5 text-destructive" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-warning" />;
    case 'info':
    default:
      return <Info className="w-5 h-5 text-primary" />;
  }
};

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: ToastType = 'info', duration = 5000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};

export const ToastContainer: React.FC<ToastContainerProps> = ({ 
  position = 'bottom-right' 
}) => {
  const { toasts, removeToast } = useToast();
  
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  return (
    <div className={`fixed z-[1000] ${positionClasses[position]} space-y-2`}>
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
};

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, toast.duration);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onRemove]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.8 }}
      className={`
        glass-effect flex items-center p-4 rounded-xl backdrop-blur-sm border
        max-w-sm shadow-xl relative overflow-hidden
      `}
      style={{
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="mr-3 z-10">
        <ToastIcon type={toast.type} />
      </div>
      <div className="flex-1 text-sm font-medium text-foreground z-10">
        {toast.message}
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="ml-3 text-muted-foreground hover:text-foreground transition-colors z-10"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default ToastContainer;