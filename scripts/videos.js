/**
 * একটি ব্যাকগ্রাউন্ড লোড ব্যর্থ হলে পরবর্তী ব্যাকগ্রাউন্ড লোড করার চেষ্টা করে।
 * @param {number} failedAttempts - কতবার চেষ্টা করা হয়েছে তার হিসাব।
 */
function tryNextBackground(failedAttempts = 0) {
    // যদি আমরা পুরো তালিকা একবার চেষ্টা করে ফেলি, তাহলে একটি ফলব্যাক রঙ সেট করে থেমে যাব।
    if (failedAttempts >= backgrounds.length) {
        console.error("All backgrounds failed to load. Setting a solid color fallback.");
        const desktopImageBg = document.getElementById('desktopBackground');
        const desktopVideoBg = document.getElementById('desktopVideoBackground');
        
        desktopImageBg.style.backgroundImage = 'none'; // আগের ইমেজ সরিয়ে ফেলুন
        desktopImageBg.style.backgroundColor = '#202020'; // আপনার থিমের একটি রঙ
        desktopImageBg.style.display = 'block';
        desktopVideoBg.style.display = 'none';
        
        // ব্যবহারকারীকে জানানোর জন্য একটি নোটিফিকেশন দেখাতে পারেন
        showNotification('Background Error', 'Could not load any desktop backgrounds.');
        return;
    }

    // পরবর্তী ইনডেক্স ঠিক করুন
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    
    // নতুন সোর্স দিয়ে আবার setBackground ফাংশনটিকে কল করুন
    setBackground(backgrounds[currentBgIndex], failedAttempts + 1);
}

/**
 * ডেস্কটপের ব্যাকগ্রাউন্ড সেট করে এবং লোডিং এরর হ্যান্ডেল করে।
 * @param {string} source - ইমেজ বা ভিডিও ফাইলের পাথ।
 * @param {number} attemptCount - কতবার চেষ্টা করা হয়েছে তার হিসাব।
 */
function setBackground(source, attemptCount = 0) {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp'];
    const videoExtensions = ['.webm', '.mp4', '.ogg'];

    const desktopImageBg = document.getElementById('desktopBackground');
    const desktopVideoBg = document.getElementById('desktopVideoBackground');

    const sourceLower = source.toLowerCase();

    // সোর্সটি কি একটি ভিডিও ফাইল?
    if (videoExtensions.some(ext => sourceLower.endsWith(ext))) {
        // ভিডিও লোড হওয়ার আগে এরর হ্যান্ডলার সেট করুন
        desktopVideoBg.onerror = () => {
            console.error(`Failed to load video: ${source}`);
            desktopVideoBg.onerror = null; // হ্যান্ডলারটি সরিয়ে ফেলুন যাতে বারবার কল না হয়
            tryNextBackground(attemptCount);
        };
        
        // ভিডিও সফলভাবে চললে এরর হ্যান্ডলারের প্রয়োজন নেই
        desktopVideoBg.oncanplay = () => {
            desktopVideoBg.onerror = null;
        };

        desktopVideoBg.src = source;
        desktopVideoBg.style.display = 'block';
        desktopImageBg.style.display = 'none';
    } 
    // অন্যথায়, এটিকে ইমেজ হিসেবে ধরে নাও
    else {
        // সরাসরি background-image সেট না করে, আমরা একটি অস্থায়ী ইমেজ অবজেক্ট তৈরি করব
        const img = new Image();

        // ইমেজ লোড সফল হলে কী করতে হবে
        img.onload = () => {
            desktopImageBg.style.backgroundImage = `url('${source}')`;
            desktopImageBg.style.display = 'block';
            desktopVideoBg.style.display = 'none';
        };
        
        // ইমেজ লোড ব্যর্থ হলে কী করতে হবে
        img.onerror = () => {
            console.error(`Failed to load image: ${source}`);
            tryNextBackground(attemptCount);
        };

        // অস্থায়ী ইমেজ অবজেক্টের সোর্স সেট করুন, যা লোডিং শুরু করবে
        img.src = source;
    }
}
