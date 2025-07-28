/**
 * ডেস্কটপের ব্যাকগ্রাউন্ড সেট করে। এটি ইমেজ এবং ভিডিও উভয়ই হ্যান্ডেল করতে পারে।
 * @param {string} source - ইমেজ বা ভিডিও ফাইলের পাথ।
 */
function setBackground(source) {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp'];
    const videoExtensions = ['.webm', '.mp4', '.ogg'];

    const desktopImageBg = document.getElementById('desktopBackground');
    const desktopVideoBg = document.getElementById('desktopVideoBackground');

    const sourceLower = source.toLowerCase();

    // সোর্সটি কি একটি ভিডিও ফাইল?
    if (videoExtensions.some(ext => sourceLower.endsWith(ext))) {
        desktopVideoBg.src = source;
        desktopVideoBg.style.display = 'block'; // ভিডিও এলিমেন্ট দেখাও
        desktopImageBg.style.display = 'none';  // ইমেজ div লুকিয়ে রাখো
    } 
    // অন্যথায়, এটিকে ইমেজ হিসেবে ধরে নাও
    else {
        desktopImageBg.style.backgroundImage = `url('${source}')`;
        desktopImageBg.style.display = 'block'; // ইমেজ div দেখাও
        desktopVideoBg.style.display = 'none';  // ভিডিও এলিমেন্ট লুকিয়ে রাখো
    }
}
