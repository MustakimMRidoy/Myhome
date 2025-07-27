// অ্যাডস উইন্ডো ম্যানেজমেন্টের জন্য গ্লোবাল ভ্যারিয়েবলস
let adsCheckInterval;
let lastWindowActivity = Date.now();
let isAdsWindowOpen = false;
let lastAdsWindowId = null;

// অ্যাডস উইন্ডো ট্র্যাকিং সিস্টেম
function setupAdsWindowTracking() {
    // প্রতি 10 সেকেন্ড পর পর চেক করা
    adsCheckInterval = setInterval(() => {
        const currentTime = Date.now();
        const activeWindows = Object.keys(windows).filter(id => !windows[id].minimized);
        
        // যদি কোন উইন্ডো 1 মিনিট ধরে ওপেন না থাকে
        if (activeWindows.length === 0 && (currentTime - lastWindowActivity) >= 60000) {
            if (!isAdsWindowOpen) {
                openAdsWindow();
            }
        }
        
        // অ্যাকটিভ উইন্ডো থাকলে টাইম আপডেট
        if (activeWindows.length > 0) {
            lastWindowActivity = currentTime;
            if (isAdsWindowOpen && lastAdsWindowId) {
                closeAdsWindowSilently();
            }
        }
    }, 10000);
}

// অ্যাডস উইন্ডো খোলার ফাংশন
function openAdsWindow() {
    if (!isAdsWindowOpen) {
        const windowId = `ads_${Date.now()}`;
        lastAdsWindowId = windowId;
        isAdsWindowOpen = true;
        
        // অ্যাডস উইন্ডো তৈরি
        openApp('Ads.html', 'Advertisements', 'fas fa-ad');
        
        // UI এফেক্ট
        showNotification('Advertisement', 'Loading new offers for you...', 3000);
    }
}

// নিঃশব্দে অ্যাডস উইন্ডো বন্ধ করার ফাংশন
function closeAdsWindowSilently() {
    if (isAdsWindowOpen && lastAdsWindowId && windows[lastAdsWindowId]) {
        const adWindow = windows[lastAdsWindowId].element;
        
        // অ্যানিমেশন সহ রিমুভ
        adWindow.style.transition = 'all 0.3s ease';
        adWindow.style.opacity = '0';
        adWindow.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            if (adWindow && adWindow.parentNode) {
                adWindow.parentNode.removeChild(adWindow);
            }
            delete windows[lastAdsWindowId];
            isAdsWindowOpen = false;
            lastAdsWindowId = null;
        }, 300);
    }
}

// উইন্ডো ক্লোজ ইভেন্ট হ্যান্ডলার অ্যাড করা
const originalCloseWindow = closeWindow;
function closeWindow(windowId) {
    if (windowId === lastAdsWindowId) {
        isAdsWindowOpen = false;
        lastAdsWindowId = null;
        lastWindowActivity = Date.now(); // রিসেট টাইমার
    }
    originalCloseWindow(windowId);
}

// সিস্টেম ইনিশিয়ালাইজেশন
document.addEventListener('DOMContentLoaded', () => {
    setupAdsWindowTracking();
});

// পেইজ আনলোড হলে ক্লিনআপ
window.addEventListener('beforeunload', () => {
    if (adsCheckInterval) {
        clearInterval(adsCheckInterval);
    }
});
