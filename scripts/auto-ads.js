/**
 * অ্যাডভান্সড অ্যাডস ম্যানেজার সিস্টেম
 * ==========================================
 * বৈশিষ্ট্যসমূহ:
 * - স্মার্ট উইন্ডো ট্র্যাকিং 
 * - ইন্টেলিজেন্ট টাইমার সিস্টেম
 * - মেমরি-অপটিমাইজড স্টেট ম্যানেজমেন্ট
 * - অটোমেটিক ক্লিনআপ মেকানিজম
 */

// স্টেট ম্যানেজমেন্ট
const AdsManagerState = {
    isCheckingEnabled: true,
    lastWindowActivity: Date.now(),
    lastAdsWindowId: null,
    checkInterval: null,
    inactivityTimer: null
};

// কনফিগারেশন সেটিংস
const AdsConfig = {
    checkDelay: 10000,        // চেক করার ইন্টারভাল (10 সেকেন্ড)
    inactivityThreshold: 60000 // অ্যাডস দেখানোর আগে অপেক্ষার সময় (1 মিনিট)
};

/**
 * অ্যাডস ম্যানেজার ক্লাস
 */
class AdvancedAdsManager {
    constructor() {
        this.setupEventListeners();
        this.startMonitoring();
    }

    /**
     * ইভেন্ট লিসেনার সেটআপ
     */
    setupEventListeners() {
        // উইন্ডো অ্যাক্টিভিটি মনিটরিং
        document.addEventListener('click', () => this.resetInactivityTimer());
        document.addEventListener('keydown', () => this.resetInactivityTimer());
        document.addEventListener('mousemove', () => this.resetInactivityTimer());
    }

    /**
     * মনিটরিং শুরু করা
     */
    startMonitoring() {
        if (AdsManagerState.checkInterval) {
            clearInterval(AdsManagerState.checkInterval);
        }

        AdsManagerState.checkInterval = setInterval(() => {
            this.checkWindowActivity();
        }, AdsConfig.checkDelay);
    }

    /**
     * ইন্যাক্টিভিটি টাইমার রিসেট
     */
    resetInactivityTimer() {
        if (AdsManagerState.inactivityTimer) {
            clearTimeout(AdsManagerState.inactivityTimer);
        }

        AdsManagerState.lastWindowActivity = Date.now();
        
        // নতুন টাইমার সেট করা
        AdsManagerState.inactivityTimer = setTimeout(() => {
            this.checkWindowActivity(true);
        }, AdsConfig.inactivityThreshold);
    }

    /**
     * উইন্ডো অ্যাক্টিভিটি চেক করা
     */
    checkWindowActivity(forceCheck = false) {
        if (!AdsManagerState.isCheckingEnabled && !forceCheck) return;

        const currentTime = Date.now();
        const activeWindows = Object.keys(windows).filter(id => !windows[id].minimized);
        const timeSinceActivity = currentTime - AdsManagerState.lastWindowActivity;

        // যদি কোন উইন্ডো না থাকে এবং নির্দিষ্ট সময় পার হয়ে যায়
        if (activeWindows.length === 0 && timeSinceActivity >= AdsConfig.inactivityThreshold) {
            this.showAdsWindow();
        }
    }

    /**
     * অ্যাডস উইন্ডো দেখানো
     */
    /**
 * দুটি অ্যাডস উইন্ডো দেখায়, একটি বামে এবং একটি ডানে।
 */
showAdsWindow() {
    // প্রথম উইন্ডোটি খোলো
    const leftWindowId = openApp('Ads.html', 'Advertisements', 'fas fa-ad');

    // দ্বিতীয় উইন্ডোটি খোলো
    const rightWindowId = openApp('Ads.html', 'More Advertisements', 'fas fa-ad');

    // এখন উইন্ডোগুলোর অবস্থান ঠিক করো
    if (windows[leftWindowId] && windows[rightWindowId]) {
        const leftWindow = windows[leftWindowId].element;
        const rightWindow = windows[rightWindowId].element;
        
        // উইন্ডোর আকার নির্ধারণ (ঐচ্ছিক, তবে দেখতে ভালো লাগবে)
        const windowWidth = 600;
        const windowHeight = 450;
        leftWindow.style.width = rightWindow.style.width = `${windowWidth}px`;
        leftWindow.style.height = rightWindow.style.height = `${windowHeight}px`;

        // অবস্থান নির্ধারণের মূল লজিক
        const screenWidth = window.innerWidth;
        const taskbarHeight = 48; // আপনার টাস্কবারের উচ্চতা
        const screenHeight = window.innerHeight - taskbarHeight;

        // বাম দিকের উইন্ডো
        leftWindow.style.left = '20px'; // বাম দিক থেকে সামান্য ফাঁকা
        leftWindow.style.top = `${(screenHeight - windowHeight) / 2}px`; // উল্লম্বভাবে মাঝখানে

        // ডান দিকের উইন্ডো
        rightWindow.style.left = `${screenWidth - windowWidth - 20}px`; // ডান দিক থেকে সামান্য ফাঁকা
        rightWindow.style.top = `${(screenHeight - windowHeight) / 2}px`; // উল্লম্বভাবে মাঝখানে

    } else {
        console.error("Could not find one or both ad windows to position.");
    }

    // ক্লোজ হ্যান্ডলার (শুধুমাত্র একটি উইন্ডোর জন্য রাখা যেতে পারে,
    // অথবা আপনার লজিক অনুযায়ী দুটিই বন্ধ করতে পারেন)
    // উদাহরণস্বরূপ, ডান দিকের উইন্ডোটি বন্ধ হলে দুটিই বন্ধ হবে
    if (windows[rightWindowId]) {
        const originalClose = windows[rightWindowId].element.querySelector('.window-close').onclick;
        windows[rightWindowId].element.querySelector('.window-close').onclick = () => {
            originalClose(); // নিজের বন্ধ হওয়ার কাজ করে
            if (windows[leftWindowId]) closeWindow(leftWindowId); // বামেরটিকেও বন্ধ করে দেয়
            this.handleAdsWindowClose();
        };
    }
}

    /**
     * অ্যাডস উইন্ডো বন্ধ হওয়ার পর
     */
    handleAdsWindowClose() {
        // স্টেট রিসেট
        AdsManagerState.lastAdsWindowId = null;
        AdsManagerState.lastWindowActivity = Date.now();
        
        // নতুন করে মনিটরিং শুরু
        this.resetInactivityTimer();
        this.startMonitoring();
    }
}

// সিস্টেম ইনিশিয়ালাইজেশন
/*document.addEventListener('DOMContentLoaded', () => {
    window.adsManager = new AdvancedAdsManager();
});
*/
