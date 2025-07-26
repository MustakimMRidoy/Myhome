import React, { useEffect } from 'react';
import Watermark from './components/Watermark';

const App: React.FC = () => {
  useEffect(() => {
    // অ্যানিমেশনটি শেষ হওয়ার জন্য একটি নির্দিষ্ট সময় অপেক্ষা করুন।
    // আপনার Watermark কম্পোনেন্টের মোট অ্যানিমেশন সময় প্রায় 12-13 সেকেন্ড।
    // আমরা 13 সেকেন্ড (13000ms) পরে ইভেন্টটি পাঠাব।
    const animationDuration = 13000; 

    const timer = setTimeout(() => {
      // একটি কাস্টম ইভেন্ট তৈরি করুন
      const event = new Event('animationFinished');
      // ইভেন্টটি dispatch করুন
      window.dispatchEvent(event);

      // React অ্যাপটিকে DOM থেকে সরিয়ে ফেলুন, কারণ এর কাজ শেষ।
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.innerHTML = '';
      }
    }, animationDuration);

    // কম্পোনেন্ট আনমাউন্ট হলে টাইমার পরিষ্কার করুন
    return () => clearTimeout(timer);
  }, []);

  return <Watermark />;
};

export default App;
