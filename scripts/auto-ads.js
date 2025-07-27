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
    showAdsWindow() {
        const windowId = `ads_${Date.now()}`;
        AdsManagerState.lastAdsWindowId = windowId;
        
        openApp('Ads.html', 'Advertisements', 'fas fa-ad');
        
        // অ্যাডস উইন্ডো ক্লোজ হ্যান্ডলার
        const originalCloseWindow = windows[windowId].element.querySelector('.window-close').onclick;
        windows[windowId].element.querySelector('.window-close').onclick = () => {
            originalCloseWindow();
            this.handleAdsWindowClose();
        };
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
