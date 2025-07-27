// Enhanced App Database
        const apps = [
	    { id: 'Market', name: 'Market', icon: 'fas fa-shopping-basket', color: '#FF4100', page: 'https://mustakimridoymr.github.io/affiliate.html', type: 'Internet', pinned: true },
	    { id: 'MRBot', name: 'MR Bot', icon: 'fas fa-robot', color: '#00FF00', page: 'https://mustakimridoymr.github.io/MR-Bot/', type: 'System', pinned: true },
	    { id: 'browser', name: 'Browser', icon: 'fas fa-globe', color: '#ff6b35', page: 'installedApps/browser.html', type: 'Internet', pinned: true },
	    { id: 'documents', name: 'File Explorer', icon: 'fas fa-folder', color: '#ffb900', page: 'systemApps/documents.html', type: 'System', pinned: true },
	    { id: 'ridoysPortifolio', name: 'Ridoy,s Portifolio', icon: 'fab fa-github', color: '#000050', page: 'https://mustakimridoymr.github.io', type: 'System', pinned: true },
		
            { id: 'settings', name: 'Settings', icon: 'fas fa-cog', color: '#0078d4', page: 'systemApps/settings.html(pending)', type: 'System', pinned: false },
            { id: 'security', name: 'Security', icon: 'fas fa-shield-alt', color: '#d4006f', page: 'systemApps/security.html(pending)', type: 'System', pinned: false },
            { id: 'calculator', name: 'Calculator', icon: 'fas fa-calculator', color: '#5c2d91', page: 'systemApps/calculator.html', type: 'System', pinned: false },
            { id: 'notes', name: 'Notepad', icon: 'fas fa-sticky-note', color: '#00bcf2', page: 'systemApps/note.html', type: 'System', pinned: false },
            { id: 'networkStatus', name: 'Network Status', icon: 'fas fa-network-wired', color: '#0078d4', page: 'systemApps/networkStatus.html', type: 'System', pinned: false },
            { id: 'blasterGame', name: 'Blaster Game', icon: 'fas fa-gamepad', color: '#107c10', page: 'installedApps/blasterGame.html', type: 'Game', pinned: false },
            { id: 'puzzle', name: 'Puzzle Game', icon: 'fas fa-puzzle-piece', color: '#ff4b4b', page: 'installedApps/puzzle.html', type: 'Game', pinned: false },
            { id: 'tools', name: 'System Tools', icon: 'fas fa-tools', color: '#795548', page: 'installedApps/tools.html', type: 'Utility', pinned: false },
	    { id: 'ColorMaster', name: 'Color Master', icon: 'fas fa-eye-dropper', color: '#26E974', page: 'https://mustakimridoymr.github.io/ColorMaster.html', type: 'Utility', pinned: false },
	    { id: 'adminPanel', name: 'Admin Panel', icon: 'fas fa-tachometer-alt', color: '#5779A4', page: 'https://mustakimridoymr.github.io/Admin/index.html', type: 'Utility', pinned: false },
            { id: 'imageEditor', name: 'Paint', icon: 'fas fa-paint-brush', color: '#e3008c', page: 'installedApps/imageEditor.html', type: 'Creative', pinned: false },
	    { id: 'CoinEarnerPro', name: 'Coin Earner Pro', icon: 'fas fa-coins', color: '#FF8F00', page: 'https://dailyearningmony.netlify.app', type: 'Creative', pinned: false },
	    { id: 'jobSearch', name: 'Job Search portal', icon: 'fas fa-briefcase', color: '#A40C99', page: 'https://mustakimridoymr.github.io/Jobs.html', type: 'Internet', pinned: false },
	    { id: 'news', name: 'Global News Hub Pro', icon: 'fas fa-rss', color: '#0056FF', page: 'https://mustakimridoymr.github.io/newsApp.html', type: 'Internet', pinned: false },
	    { id: 'AmazonAppstoreCollection', name: 'Amazon Appstore Collection', icon: 'fab fa-amazon', color: '#000000', page: 'https://amzn.to/3NOG3er', type: 'Internet', pinned: false },
	    { id: 'APKPureMarketplace', name: 'APKPure Marketplace', icon: 'fas fa-mobile-alt', color: '#008E3E', page: 'https://apkpure.com/developer?id=23399507', type: 'Internet', pinned: false },
	    { id: 'ModApk', name: 'Android Mod Apk', icon: 'fab fa-android', color: '#3ddc84', page: 'https://mustakimridoymr.github.io/AndroidAppsUnlocked.html', type: 'Internet', pinned: false },
	    { id: 'Ads', name: 'Ads', icon: 'fas fa-ad', color: '#5D5CDE', page: 'Ads.html', type: 'Internet', pinned: false }
        ];
       
        let shortcuts = ['documents', 'notes', 'jobSearch', 'AmazonAppstoreCollection','blasterGame', 'ModApk', 'imageEditor', 'news', 'Ads'];
        // Background Images
        const backgrounds = [
            'https://picsum.photos/seed/windows1/1920/1080',
            'https://picsum.photos/seed/windows2/1920/1080',
            'https://picsum.photos/seed/windows3/1920/1080',
            'https://picsum.photos/seed/windows4/1920/1080',
            'https://picsum.photos/seed/windows5/1920/1080',
            'https://picsum.photos/seed/windows6/1920/1080'
        ];

          const ad = [
          `<a href="https://beta.publishers.adsterra.com/referral/QdnQT7GTLa" rel="nofollow"><img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/png/300%20x%20250%20px.png" /></a>`,
          `<a href="https://beta.publishers.adsterra.com/referral/QdnQT7GTLa" rel="nofollow"><img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/png/600%20x%20250%20px.png" /></a>`,
          `<a href="https://beta.publishers.adsterra.com/referral/QdnQT7GTLa" rel="nofollow"><img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/png/300%20x%20425.png" /></a>`,
          `<script type="text/javascript">
	atOptions = {
		'key' : '0ac4fbd843cf0e8de1726ccc4e310cab',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/0ac4fbd843cf0e8de1726ccc4e310cab/invoke.js"></script>`,
 `<script type="text/javascript">
	atOptions = {
		'key' : 'f52ec01056cf3a29e5a53b2316b7e034',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/f52ec01056cf3a29e5a53b2316b7e034/invoke.js"></script>`,
  `<script type="text/javascript">
	atOptions = {
		'key' : '376d745de946193113b16464bb2bc352',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/376d745de946193113b16464bb2bc352/invoke.js"></script>`,
 `<script type="text/javascript">
	atOptions = {
		'key' : '8b44820f94d6f5607f8bd8636c2198c5',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/8b44820f94d6f5607f8bd8636c2198c5/invoke.js"></script>`,
 `<script type="text/javascript">
	atOptions = {
		'key' : '8b3b9b425d5ab6befdf35f0e9d6603d6',
		'format' : 'iframe',
		'height' : 600,
		'width' : 160,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/8b3b9b425d5ab6befdf35f0e9d6603d6/invoke.js"></script>`,
 `<script type="text/javascript">
	atOptions = {
		'key' : '75fced16ed8059f6b7e4ef61f0db1139',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/75fced16ed8059f6b7e4ef61f0db1139/invoke.js"></script>`,
 `<div id="container-86f295a00166ddfdf3c7bdb7c13ce400"></div>`,
                  `<iframe src="https://mustakimridoymr.github.io/DirectLink/link.html"
        sandbox="allow-scripts allow-forms allow-popups allow-modals allow-downloads"
        loading="lazy"
        referrerpolicy="no-referrer"
        width="300"
        height="400"
        style="border: none; overflow: hidden;"
        scrolling="no"
></iframe>`,
 //`   `,
                  //`   `,
 //`   `,
                  //`   `,
 //`   `,
                  //`   `,
 //`   `,
                  //`   `,
 //`   `,
                  //`   `,
 //`   `,
                  //`   `,
 //`   `,
                  //`   `,
 //`   `,
                  //`   `,
 //`   `,
  // ... আরো ad HTML যোগ করুন: `   `,
           ];
        // System State
        let currentBgIndex = 0;
        let windows = {};
        let windowCounter = 0;
        let activeWindowId = null;
        let zIndexCounter = 100;
        let pinnedApps = apps.filter(app => app.pinned).map(app => app.id);
        let isDragging = false;
        let dragWindow = null;
        let isResizing = false;
        let dragStartX = 0, dragStartY = 0, dragStartLeft = 0, dragStartTop = 0;
        let currentTheme = 'dark';
        let selectedIcon = null;
        let longPressTimer = null;
        let isLongPress = false;
        // DOM Elements
        const body = document.body;
        const startMenu = document.getElementById('startMenu');
        const startButton = document.getElementById('startButton');
        const taskbarItems = document.getElementById('taskbarItems');
        const windowContainer = document.getElementById('windowContainer');
        const desktopIcons = document.getElementById('desktopIcons');
        const contextMenu = document.getElementById('contextMenu');
        const iconContextMenu = document.getElementById('iconContextMenu');
        const notificationContainer = document.getElementById('notificationContainer');
        const notificationPanel = document.getElementById('notificationPanel');
        const volumeControl = document.getElementById('volumeControl');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const clockElement = document.getElementById('clock');
        const dateElement = document.getElementById('date');
        const panelClock = document.getElementById('panelClock');
        const panelDate = document.getElementById('panelDate');
        const desktopBackground = document.getElementById('desktopBackground');
        const searchResults = document.getElementById('searchResults');
        const globalSearchInput = document.getElementById('globalSearchInput');
        // Initialize System
        function initializeSystem() {
            setupTheme();
            createDesktopIcons();
            createTaskbarItems();
            populateStartMenu();
            setupEventListeners();
            updateDateTime();
            setInterval(updateDateTime, 1000);
            startBackgroundRotation();
            showRandomAd();
            
            // Set initial background
            shuffleArray(backgrounds);
            desktopBackground.style.backgroundImage = `url('${backgrounds[0]}')`;
            
            // Show welcome notification
            setTimeout(() => {
                showNotification('System Ready', 'Windows 11 Desktop Environment loaded successfully');
            }, 1000);
        }
        // Theme Management
        function setupTheme() {
            body.setAttribute('data-theme', 'dark');
            currentTheme = 'dark';
        }
        function toggleTheme() {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', currentTheme);
            showNotification('Theme Changed', `Switched to ${currentTheme} mode`);
        }
        // Background Management
        function startBackgroundRotation() {
            setInterval(() => {
                currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
                desktopBackground.style.backgroundImage = `url('${backgrounds[currentBgIndex]}')`;
            }, 60000); // Change every minute
        }
        // Desktop Icons Management
        function createDesktopIcons() {
            desktopIcons.innerHTML = '';
            shortcuts.forEach(appId => {
                const app = apps.find(a => a.id === appId);
                if (app) {
                    const icon = createDesktopIcon(app);
                    desktopIcons.appendChild(icon);
                }
            });
        }
        function createDesktopIcon(app) {
            const icon = document.createElement('div');
            icon.className = 'desktop-icon';
            icon.setAttribute('data-app-id', app.id);
            
            icon.onclick = (e) => {
                e.stopPropagation();
                if (!isLongPress) {
                    clearSelection();
                    selectIcon(icon, app);
                }
            };
            icon.ondblclick = (e) => {
                e.stopPropagation();
                openApp(app.page, app.name, app.icon);
            };
            icon.oncontextmenu = (e) => {
                e.preventDefault();
                e.stopPropagation();
                selectIcon(icon, app);
                showIconContextMenu(e.clientX, e.clientY);
            };
            icon.onmousedown = (e) => {
                if (e.button === 0) startLongPress(e, icon, app);
            };
            icon.onmouseup = (e) => endLongPress(e, app);
            icon.addEventListener('touchstart', (e) => startLongPress(e, icon, app));
            icon.addEventListener('touchend', (e) => endLongPress(e, app));
            
            icon.innerHTML = `
                <i class="${app.icon}" style="color: ${app.color || '#fff'}"></i>
                <span>${app.name}</span>
            `;
            
            return icon;
        }
        function startLongPress(e, icon, app) {
            isLongPress = false;
            longPressTimer = setTimeout(() => {
                isLongPress = true;
                selectIcon(icon, app);
                showIconContextMenu(e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY);
            }, 800);
        }
        function endLongPress(e, app) {
            clearTimeout(longPressTimer);
            setTimeout(() => { isLongPress = false; }, 200);
        }
        function selectIcon(icon, app) {
            clearSelection();
            icon.classList.add('selected');
            selectedIcon = app;
        }
        function clearSelection() {
            document.querySelectorAll('.desktop-icon.selected').forEach(icon => {
                icon.classList.remove('selected');
            });
            selectedIcon = null;
        }

        function clearNotificationsBadge() {
         notificationCount = 0;
         updateBadge();
          }

        function addShortcut() {
            const availableApps = apps.filter(app => !shortcuts.includes(app.id));
            if (availableApps.length === 0) {
                showNotification('No More Apps', 'All apps are already on desktop');
                return;
            }
            let appList = '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">';
            availableApps.forEach(app => {
                appList += `
                    <div onclick="addAppShortcut('${app.id}')" style="padding: 12px; border: 1px solid var(--glass-border); border-radius: 6px; cursor: pointer; text-align: center; transition: all 0.2s ease;" 
                         onmouseover="this.style.background='var(--glass-hover)'" onmouseout="this.style.background='transparent'">
                        <i class="${app.icon}" style="color: ${app.color}; font-size: 24px; margin-bottom: 8px; display: block;"></i>
                        <div style="font-size: 12px;">${app.name}</div>
                    </div>
                `;
            });
            appList += '</div>';
            showModal('Add Desktop Shortcut', appList);
            contextMenu.style.display = 'none';
        }
        function addAppShortcut(appId) {
            if (!shortcuts.includes(appId)) {
                shortcuts.push(appId);
                createDesktopIcons();
                showNotification('Shortcut Added', `${apps.find(a => a.id === appId).name} added to desktop`);
            }
            closeModal();
        }
        function removeShortcut() {
            if (selectedIcon) {
                shortcuts = shortcuts.filter(id => id !== selectedIcon.id);
                createDesktopIcons();
                showNotification('Shortcut Removed', `${selectedIcon.name} removed from desktop`);
                iconContextMenu.style.display = 'none';
            }
        }
        function showIconContextMenu(x, y) {
            iconContextMenu.style.display = 'block';
            iconContextMenu.style.left = `${Math.min(x, window.innerWidth - iconContextMenu.offsetWidth)}px`;
            iconContextMenu.style.top = `${Math.min(y, window.innerHeight - iconContextMenu.offsetHeight)}px`;
        }
        // Taskbar Management
        function createTaskbarItems() {
            taskbarItems.innerHTML = '';
            pinnedApps.forEach(appId => {
                const app = apps.find(a => a.id === appId);
                if (app) {
                    const item = createTaskbarItem(app);
                    taskbarItems.appendChild(item);
                }
            });
        }
        function createTaskbarItem(app, isWindow = false, windowId = null) {
            const item = document.createElement('div');
            item.className = 'taskbar-item';
            item.title = app.name;
            
            if (isWindow && windowId) {
                item.setAttribute('data-window-id', windowId);
                //item.onclick = () => focusWindow(windowId);
                item.onclick = () => {
      focusWindow(windowId);
      // মাঝখানে আনতে:
      const winEl = windows[windowId].element;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const ww = winEl.offsetWidth;
      const wh = winEl.offsetHeight;
      winEl.style.left = `${(vw - ww) / 2}px`;
      winEl.style.top  = `${(vh - wh - 48) / 2}px`; // 48px taskbar বাদ
    };
            } else {
                item.onclick = () => openApp(app.page, app.name, app.icon);
            }
            
            item.innerHTML = `<i class="${app.icon}"></i><span>${app.name}</span>`;
            
            return item;
        }
        function addWindowToTaskbar(windowId, app) {
            const existingItem = document.querySelector(`[data-window-id="${windowId}"]`);
            if (existingItem) return;
            const item = createTaskbarItem(app, true, windowId);
            item.classList.add('active');
            taskbarItems.appendChild(item);
        }
        function removeWindowFromTaskbar(windowId) {
            const item = document.querySelector(`[data-window-id="${windowId}"]`);
            if (item) item.remove();
        }
        function updateTaskbarItemState(windowId, state) {
            const item = document.querySelector(`[data-window-id="${windowId}"]`);
            if (item) {
                item.classList.remove('active', 'minimized');
                if (state === 'active') {
                    item.classList.add('active');
                } else if (state === 'minimized') {
                    item.classList.add('minimized');
                }
            }
        }
        // Start Menu
        function populateStartMenu() {
            const pinnedGrid = document.getElementById('pinnedAppsGrid');
            const allAppsGrid = document.getElementById('allAppsGrid');
            pinnedGrid.innerHTML = '';
            allAppsGrid.innerHTML = '';
            apps.filter(app => app.pinned).forEach(app => pinnedGrid.appendChild(createAppTile(app)));
            apps.forEach(app => allAppsGrid.appendChild(createAppTile(app)));
        }
        function createAppTile(app) {
            const tile = document.createElement('div');
            tile.className = 'app-tile';
            tile.onclick = () => {
                openApp(app.page, app.name, app.icon);
                toggleStartMenu();
            };
            tile.innerHTML = `
                <div class="app-icon" style="background: ${app.color}">
                    <i class="${app.icon}"></i>
                </div>
                <div class="app-name">${app.name}</div>
            `;
            return tile;
        }
        function toggleStartMenu() {
  const isOpen = startMenu.style.display === 'flex';
  if (!isOpen) {
    history.pushState({ panel: 'start' }, '');
    startMenu.style.display = 'flex';
    startButton.classList.add('active');
  } else {
    history.pushState({ panel: null }, '');
    startMenu.style.display = 'none';
    startButton.classList.remove('active');
  }
}

        // Window Management
        function openApp(page, title, icon) {
            const existingWindowId = Object.keys(windows).find(id => windows[id].app.page === page);
            if (existingWindowId) {
                focusWindow(existingWindowId);
                return;
            }
            windowCounter++;
            const windowId = `window_${windowCounter}`;
            
            // উন্নত createWindow ফাংশনকে কল করা হবে
            const windowEl = createWindow(windowId, title, icon, page);
            windowContainer.appendChild(windowEl);
            
            const app = apps.find(a => a.page === page) || { name: title, icon: icon, color: '#0078d4', page: page };
            
            windows[windowId] = {
                id: windowId,
                element: windowEl,
                title: title,
                app: app,
                minimized: false,
                maximized: false,
                originalStyle: {},
                zIndex: zIndexCounter++
            };
            
            addWindowToTaskbar(windowId, app);
            focusWindow(windowId);
            positionWindow(windowEl);
        }
/*
        function createWindow(windowId, title, icon, page) {
            const windowEl = document.createElement('div');
            windowEl.className = 'window animate-slide-up';
            windowEl.id = windowId;
            windowEl.innerHTML = `
                <div class="window-titlebar">
                    <div class="window-title"><i class="${icon}"></i>${title}</div>
                    <div class="window-controls">
                        <div class="window-control window-minimize" onclick="minimizeWindow('${windowId}')"><i class="fas fa-window-minimize"></i></div>
                        <div class="window-control window-maximize" onclick="maximizeWindow('${windowId}')"><i class="far fa-square"></i></div>
                        <div class="window-control window-close" onclick="closeWindow('${windowId}')"><i class="fas fa-times"></i></div>
                    </div>
                </div>
                <div class="window-content">
                    <iframe src="${page}" sandbox="allow-scripts allow-forms" scrolling="yes" loading="lazy" onload="handleIframeLoad(this, '${windowId}', '${title}')" onerror="handleIframeError(this, '${windowId}', '${title}')" style="width:100%; height:100%; border:none;"></iframe>
                </div>
                <div class="window-resize-handle"></div>
            `;
            const titlebar = windowEl.querySelector('.window-titlebar');
            titlebar.ondblclick = () => maximizeWindow(windowId);
            titlebar.onmousedown = (e) => startDrag(e, windowId);
            windowEl.querySelector('.window-resize-handle').onmousedown = (e) => startResize(e, windowId);
            return windowEl;
        }

        <!--    <iframe 
                        src="${page}" 
                        scrolling="yes" 
                        loading="lazy" 
                        onload="handleIframeLoad(this, '${windowId}', '${title}')" 
                        onerror="handleIframeError(this, '${windowId}', '${title}')" 
                        style="width:100%; height:100%; border:none;" 
                        sandbox="allow-scripts allow-forms allow-popups allow-modals"
                        allow="clipboard-write"
                        referrerpolicy="strict-origin-when-cross-origin">
                    </iframe> -->
*/
         function createWindow(windowId, title, icon, page) {
            const windowEl = document.createElement('div');
            windowEl.className = 'window animate-slide-up';
            windowEl.id = windowId;

 const isExternal = (url) => {
    try {
        return url.startsWith("https://"); 
    } catch (e) {
        return false;
    }
};
		 const shortcutExists = (url) => {
                // 'apps' অ্যারেতে চেক করা হচ্ছে এই পেজটি আছে কিনা এবং সেটি 'shortcuts' অ্যারেতেও আছে কিনা
                const appExists = apps.find(app => app.page === url);
                if (!appExists) return false;
                return shortcuts.includes(appExists.id);
            };
		 
		 let externalLinkButtonHTML = '';
            // যদি পেজটি এক্সটার্নাল হয়, তাহলে নতুন বাটন তৈরি করো
            if (isExternal(page)) {
                externalLinkButtonHTML = `
                    <div class="window-control" title="Open in new tab" onclick="window.open('${page}', '_blank', 'noopener,noreferrer')">
                        <i class="fas fa-external-link-alt"></i>
                    </div>
                `;
            }
		 let addShortcutButtonHTML = '';
            // যদি পেজটি এক্সটার্নাল হয় এবং শর্টকাট আগে থেকে না থাকে
            if (isExternal(page) && !shortcutExists(page)) {
                addShortcutButtonHTML = `
                    <div class="window-control" 
                         id="add-shortcut-btn-${windowId}" 
                         title="Add shortcut to desktop" 
                         onclick="addExternalShortcut('${windowId}', '${page}', '${title}')">
                        <i class="fas fa-plus-square"></i>
                    </div>
                `;
            }
            // sandbox অ্যাট্রিবিউট iframe-এর ক্ষমতা সীমাবদ্ধ করে নিরাপত্তা নিশ্চিত করে।
            // allow-fullscreen ছাড়া অন্য কোনো fullscreen অ্যাট্রিবিউট নেই, তাই এটি ব্রাউজার fullscreen API কল করতে পারবে না।
            const sandboxRules = "allow-scripts allow-forms allow-popups allow-modals allow-downloads";
	    let isAdsWindow = windowId.includes('Ads') || page.toLowerCase().includes('ads.html') || page.toLowerCase().includes('404.html');
if (isAdsWindow) {
	    windowEl.innerHTML = `
            <div class="window-titlebar">
                <div class="window-title"><i class="${icon}"></i> <span>${title}</span></div>
                <div class="window-controls">
		     <div class="window-control" title="Open in new tab" onclick="window.open('${page}', '_blank', 'noopener,noreferrer')">
                        <i class="fas fa-external-link-alt"></i>
                    </div>
		    <div class="window-control" 
                         id="add-shortcut-btn-${windowId}" 
                         title="Add shortcut to desktop" 
                         onclick="addExternalShortcut('${windowId}', '${page}', '${title}')">
                        <i class="fas fa-plus-square"></i>
                    </div>
                    <div class="window-control window-minimize" onclick="minimizeWindow('${windowId}')"><i class="fas fa-window-minimize"></i></div>
                    <div class="window-control window-maximize" onclick="maximizeWindow('${windowId}')"><i class="far fa-square"></i></div>
                    <div class="window-control window-close" onclick="closeWindow('${windowId}')"><i class="fas fa-times"></i></div>
                </div>
            </div>
            <div class="window-content">
                    <div style="width: 100%; height: 100%; overflow: hidden;">
  <iframe
    src="${page}"
    scrolling="yes"
    loading="lazy"
    onload="handleIframeLoad(this, '${windowId}', '${title}')"
    onerror="handleIframeError(this, '${windowId}', '${title}')"
    style="width:100%; height:100%; border:none;"
    sandbox="allow-same-origin"
    referrerpolicy="strict-origin-when-cross-origin">
  </iframe>
</div>

            </div>
            <div class="window-resize-handle"></div>
        `;
} else {
            windowEl.innerHTML = `
                <div class="window-titlebar">
                    <div class="window-title"><i class="${icon}"></i> <span>${title}</span></div>
                    <div class="window-controls">
		    ${addShortcutButtonHTML}    <!-- নতুন শর্টকাট বাটন -->
		    ${externalLinkButtonHTML}  <!-- নতুন বাটনটি এখানে যুক্ত হবে -->
                        <div class="window-control window-minimize" onclick="minimizeWindow('${windowId}')"><i class="fas fa-window-minimize"></i></div>
                        <div class="window-control window-maximize" onclick="maximizeWindow('${windowId}')"><i class="far fa-square"></i></div>
                        <div class="window-control window-close" onclick="closeWindow('${windowId}')"><i class="fas fa-times"></i></div>
                    </div>
                </div>
                <div class="window-content">
		    <div id="bannerAd" class="ad-container"></div>
                    <iframe src="${page}"
                            sandbox="${sandboxRules}"
                            loading="lazy"
                            referrerpolicy="no-referrer"
                            onload="handleIframeLoad(this, '${windowId}', '${title}')"
                            onerror="handleIframeError(this, '${windowId}')">
                    </iframe>
                </div>
                <div class="window-resize-handle"></div>
            `;
}
            // উইন্ডো ড্র্যাগ ও রিসাইজ করার ইভেন্ট যুক্ত করা
            const titlebar = windowEl.querySelector('.window-titlebar');
            titlebar.ondblclick = () => maximizeWindow(windowId);
            titlebar.onmousedown = (e) => startDrag(e, windowId);
            windowEl.querySelector('.window-resize-handle').onmousedown = (e) => startResize(e, windowId);

            return windowEl;
        }

        function executeScriptsInWindow(wrapper, windowId) {
    wrapper.querySelectorAll('script').forEach(old => {
      const nw = document.createElement('script');
      Array.from(old.attributes).forEach(a => nw.setAttribute(a.name, a.value));
      if (old.textContent) nw.textContent = wrapScriptForWindow(old.textContent, windowId);
      old.replaceWith(nw);
    });
  }

    function handleIframeLoad(iframe, windowId, defaultTitle) {
            try {
                // iframe-এর টাইটেল অনুযায়ী উইন্ডোর টাইটেল আপডেট করার চেষ্টা
                const newTitle = iframe.contentDocument.title;
                if (newTitle && windows[windowId]) {
                    windows[windowId].element.querySelector('.window-title span').textContent = newTitle;
                }
            } catch (e) {
                 // Cross-origin iframe-এর ক্ষেত্রে contentDocument অ্যাক্সেস করা যায় না, যা একটি স্বাভাবিক নিরাপত্তা ব্যবস্থা।
                console.warn("Could not access iframe title due to cross-origin policy.");
            }
        }

          function handleIframeError(iframe, windowId) {
            const contentArea = iframe.parentNode;
            if(contentArea) {
                contentArea.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--text-primary); padding: 20px; text-align: center;">
                    <i class="fas fa-shield-alt" style="font-size: 3rem; color: #e74c3c; margin-bottom: 1rem;"></i>
                    <h4>Content Blocked</h4>
                    <p style="font-size: 0.8rem; max-width: 80%;">
                        এই কনটেন্টটি লোড করা যায়নি। অনেক ওয়েবসাইট (যেমন Google, Facebook) নিরাপত্তার কারণে নিজেদেরকে অন্য সাইটে এমবেড করার অনুমতি দেয় না।
                    </p>
                </div>`;
            }
        }

        function positionWindow(windowEl) {
            const width = 800;
            const height = 600;
            const offsetX = (Object.keys(windows).length - 1) * 20;
            const offsetY = (Object.keys(windows).length - 1) * 20;
            const maxLeft = window.innerWidth - width;
            const maxTop = window.innerHeight - height - 48; // 48px for taskbar
            windowEl.style.width = `${width}px`;
            windowEl.style.height = `${height}px`;
            windowEl.style.left = `${Math.min(Math.max(50 + offsetX, 0), maxLeft)}px`;
            windowEl.style.top = `${Math.min(Math.max(50 + offsetY, 0), maxTop)}px`;
        }
        function minimizeWindow(windowId) {
            if (!windows[windowId]) return;
            const win = windows[windowId];
            win.minimized = true;
            win.element.classList.add('minimized');
            updateTaskbarItemState(windowId, 'minimized');
            if (activeWindowId === windowId) activeWindowId = null;
            showNotification('Window Minimized', win.title);
        }
        function maximizeWindow(windowId) {
            if (!windows[windowId]) return;
            const win = windows[windowId];
            const winEl = win.element;
            const icon = winEl.querySelector('.window-maximize i');
            
            if (!win.maximized) {
                if(!winEl.classList.contains('maximized')) {
                     win.originalStyle = { left: winEl.style.left, top: winEl.style.top, width: winEl.style.width, height: winEl.style.height };
                }
                winEl.classList.add('maximized');
                icon.className = 'fas fa-window-restore';
                win.maximized = true;
            } else {
                winEl.classList.remove('maximized');
                Object.assign(winEl.style, win.originalStyle);
                icon.className = 'far fa-square';
                win.maximized = false;
            }
        }
        function closeWindow(windowId) {
            if (!windows[windowId]) return;
	
            const windowTitle = windows[windowId].title;
            windows[windowId].element.remove();
            removeWindowFromTaskbar(windowId);
            delete windows[windowId];
            if (activeWindowId === windowId) activeWindowId = null;
            showNotification('Window Closed', windowTitle);
        }
        function focusWindow(windowId) {
            if (!windows[windowId]) return;
            const targetWindow = windows[windowId];
            if (targetWindow.minimized) {
                targetWindow.minimized = false;
                targetWindow.element.classList.remove('minimized');
            }
            activeWindowId = windowId;
            targetWindow.element.style.zIndex = ++zIndexCounter;
            Object.keys(windows).forEach(id => {
                updateTaskbarItemState(id, id === windowId ? 'active' : (windows[id].minimized ? 'minimized' : ''));
            });
        }
        // Robust Window Dragging & Resizing
        function startDrag(event, windowId) {
            if (event.button !== 0 || windows[windowId].maximized) return;
            event.preventDefault();
            focusWindow(windowId);
            isDragging = true;
            dragWindow = windows[windowId];
            const windowEl = dragWindow.element;
            dragStartX = event.clientX;
            dragStartY = event.clientY;
            dragStartLeft = windowEl.offsetLeft;
            dragStartTop = windowEl.offsetTop;
            windowEl.style.transition = 'none';
            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('mouseup', stopDrag);
        }
        function handleDrag(event) {
            if (!isDragging || !dragWindow) return;
            event.preventDefault();
            const newLeft = dragStartLeft + (event.clientX - dragStartX);
            const newTop = dragStartTop + (event.clientY - dragStartY);
            dragWindow.element.style.left = `${newLeft}px`;
            dragWindow.element.style.top = `${newTop}px`;
        }
        function stopDrag() {
            if (!isDragging) return;
            dragWindow.element.style.transition = '';
            isDragging = false;
            dragWindow = null;
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', stopDrag);
        }
        function startResize(event, windowId) {
            event.preventDefault();
            event.stopPropagation();
            if (windows[windowId].maximized) return;
            focusWindow(windowId);
            isResizing = true;
            const windowEl = windows[windowId].element;
            const rect = windowEl.getBoundingClientRect();
            const startWidth = rect.width, startHeight = rect.height, startX = event.clientX, startY = event.clientY;
            windowEl.style.transition = 'none';
            const resizeHandler = (e) => {
                if (!isResizing) return;
                windowEl.style.width = `${Math.max(320, startWidth + (e.clientX - startX))}px`;
                windowEl.style.height = `${Math.max(240, startHeight + (e.clientY - startY))}px`;
            };
            const stopResize = () => {
                isResizing = false;
                windowEl.style.transition = '';
                document.removeEventListener('mousemove', resizeHandler);
                document.removeEventListener('mouseup', stopResize);
            };
            document.addEventListener('mousemove', resizeHandler);
            document.addEventListener('mouseup', stopResize);
        }
        // Search Functions
        function handleStartSearch(query) {
            const pinnedGrid = document.getElementById('pinnedAppsGrid');
            const allAppsGrid = document.getElementById('allAppsGrid');
            const searchTerms = query.toLowerCase();
            if (searchTerms.length > 0) {
                const results = apps.filter(app => app.name.toLowerCase().includes(searchTerms) || app.type.toLowerCase().includes(searchTerms));
                pinnedGrid.innerHTML = '';
                allAppsGrid.innerHTML = '';
                results.forEach(app => allAppsGrid.appendChild(createAppTile(app)));
            } else {
                populateStartMenu();
            }
        }
        function handleGlobalSearch(query) {
            const searchTerms = query.toLowerCase().trim();
            if (searchTerms.length === 0) {
                searchResults.style.display = 'none';
                return;
            }
            searchResults.innerHTML = '';
            const results = apps.filter(app => app.name.toLowerCase().includes(searchTerms));
            if (results.length > 0) {
                results.slice(0, 4).forEach(app => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.onclick = () => {
                        openApp(app.page, app.name, app.icon);
                        globalSearchInput.value = '';
                        searchResults.style.display = 'none';
                    };
                    item.innerHTML = `
                        <div class="search-result-icon" style="background: ${app.color}"><i class="${app.icon}"></i></div>
                        <div><div style="font-weight: 500;">${app.name}</div><div style="font-size: 12px; color: var(--text-muted);">${app.type}</div></div>`;
                    searchResults.appendChild(item);
                });
            } else {
                const noResultItem = document.createElement('div');
                noResultItem.className = 'search-result-item';
                noResultItem.style.cursor = 'default';
                noResultItem.innerHTML = `
                    <div class="search-result-icon" style="background: transparent"><i class="fas fa-search"></i></div>
                    <div><div style="font-weight: 500;">No apps found</div><div style="font-size: 12px; color: var(--text-muted);">Try searching the web</div></div>`;
                searchResults.appendChild(noResultItem);
            }
            const browserItem = document.createElement('div');
            browserItem.className = 'search-result-item';
            browserItem.onclick = () => {
                openApp('installedApps/browser.html', `Browser Search`, 'fas fa-globe');
                globalSearchInput.value = '';
                searchResults.style.display = 'none';
            };
            browserItem.innerHTML = `
                <div class="search-result-icon" style="background: #ff6b35"><i class="fas fa-globe"></i></div>
                <div><div style="font-weight: 500;">Search web for "${query}"</div><div style="font-size: 12px; color: var(--text-muted);">Open Browser</div></div>`;
            if (results.length > 0) searchResults.appendChild(document.createElement('div')).className = 'context-divider';
            searchResults.appendChild(browserItem);
            searchResults.style.display = 'block';
        }
        // System Tray Functions
        function toggleNotificationPanel() {
          const isOpen = notificationPanel.classList.contains('open');
  if (!isOpen) {
    notificationPanel.classList.add('open');
    updateDateTime();
    clearNotificationsBadge();
    history.pushState({ panel: 'quick' }, '');
  } else {
    notificationPanel.classList.remove('open');
    history.back();
  }
          //  notificationPanel.classList.toggle('open');
            if (notificationPanel.classList.contains('open')) updateDateTime();
        }
        function toggleVolumeControl() {
            volumeControl.style.display = volumeControl.style.display === 'block' ? 'none' : 'block';
        }
        function updateVolume(value) {
            document.getElementById('volumePercent').textContent = `${value}%`;
            const volumeIcon = document.querySelector('.system-tray-item[title="Volume"] i');
            if (value == 0) volumeIcon.className = 'fas fa-volume-mute';
            else if (value < 50) volumeIcon.className = 'fas fa-volume-down';
            else volumeIcon.className = 'fas fa-volume-up';
        }
        function openNetworkStatus() {
            openApp('systemApps/networkStatus.html', 'Network Status', 'fas fa-network-wired');
        }
        
        const notifAudio = document.getElementById('notifSound');
        let notificationCount = 0;
        // Notification System
        function showNotification(title, htmlContent, duration = 5000) {
  const notification = document.createElement('div');
  notification.className = 'notification';

  if (title === "ads") {
    // container to hold HTML and scripts
    const wrapper = document.createElement('div');
    wrapper.className = 'notification-content';

    // parse the HTML string
    wrapper.innerHTML = htmlContent;

    // extract any <script> tags
    const scripts = wrapper.querySelectorAll('script');
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');
      // copy attributes
      Array.from(oldScript.attributes).forEach(attr =>
        newScript.setAttribute(attr.name, attr.value)
      );
      // inline script content
      newScript.text = oldScript.text;
      // replace old with new so browser will execute it
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });

    notification.appendChild(wrapper);
  } else {
    notification.innerHTML = `
      <div class="notification-title">${title}</div>
      <div class="notification-text">${htmlContent}</div>
    `;
  }

notifAudio.currentTime = 0; // যাতে প্রতি বার শুরু থেকে বাজে
notifAudio.play().catch(e => {
  console.warn("Notification sound play blocked:", e);
});
		notificationCount++;
    updateBadge();

  notificationContainer.appendChild(notification);
  setTimeout(() => notification.classList.add('show'), 100);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 400);
  }, duration);

  // ২) Panel list view এ জমা
  const list = document.getElementById('notificationList');
  const item = document.createElement('div');
  item.className = 'notification-list-item';

  // small icon
  const icon = document.createElement('i');
  icon.className = title === 'ads' ? 'fas fa-ad notification-icon' : 'fas fa-bell notification-icon';
  item.appendChild(icon);

  // content wrapper
  const content = document.createElement('div');
  content.className = 'notification-content';
  if (title === 'ads') {
    content.innerHTML = htmlContent;  // raw HTML banner or script
  } else {
    content.innerHTML = `<strong>${title}</strong><br>${htmlContent}`;
  }
  item.appendChild(content);

  // optionally click to close item
  item.onclick = () => item.remove();

  list.prepend(item);  // newest on top

  // keep panel open/update scrolling
  if (!notificationPanel.classList.contains('open')) {
    // আপনি চাইলে এখানে panel খুলে দিতে পারেন:
    // notificationPanel.classList.add('open');
  }
}

function updateBadge() {
    const badge = document.getElementById('notifBadge');
    if (notificationCount >= 20) {
        badge.textContent = notificationCount;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

 function scheduleAdNotification() {
  // একটা random banner pick
  const randomHTML = ad[Math.floor(Math.random() * ad.length)];
  
  // show as notification
  showNotification("ads", randomHTML);
  
  // পরেরবার 1 সেকেন্ড থেকে 5 মিনিটের মধ্যে
  const min = 1 * 1000;
  const max = 5 * 60 * 1000;
  const timeout = Math.random() * (max - min) + min;
  setTimeout(scheduleAdNotification, timeout);
}
        // DateTime Update
        function updateDateTime() {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            dateElement.textContent = now.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
            panelClock.textContent = clockElement.textContent;
            panelDate.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }
        // Event Listeners
        function setupEventListeners() {
            document.addEventListener('click', (event) => {
                if (!startMenu.contains(event.target) && !startButton.contains(event.target)) {
                    startMenu.style.display = 'none';
                    startButton.classList.remove('active');
                }
                if (!contextMenu.contains(event.target)) contextMenu.style.display = 'none';
                if (!iconContextMenu.contains(event.target)) iconContextMenu.style.display = 'none';
                if (!notificationPanel.contains(event.target) && !event.target.closest('.datetime-container')) notificationPanel.classList.remove('open');
                if (!volumeControl.contains(event.target) && !event.target.closest('.system-tray-item[title="Volume"]')) volumeControl.style.display = 'none';
                if (!searchResults.contains(event.target) && !globalSearchInput.contains(event.target)) searchResults.style.display = 'none';
                if (event.target.closest('.desktop') && !event.target.closest('.desktop-icon') && !event.target.closest('.window')) clearSelection();
            });
            document.addEventListener('contextmenu', (event) => {
                if (event.target.closest('.desktop') && !event.target.closest('.desktop-icon') && !event.target.closest('.window')) {
                    event.preventDefault();
                    showContextMenu(event.clientX, event.clientY);
                }
            });
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    startMenu.style.display = 'none';
                    startButton.classList.remove('active');
                    contextMenu.style.display = 'none';
                    iconContextMenu.style.display = 'none';
                    closeModal();
                    clearSelection();
                }
                if (event.altKey && event.key === 'F4' && activeWindowId) {
                    event.preventDefault();
                    closeWindow(activeWindowId);
                }
            });
            windowContainer.addEventListener('mousedown', (event) => {
                const windowEl = event.target.closest('.window');
                if (windowEl) focusWindow(windowEl.id);
            });
        }
        // Context Menu
        function showContextMenu(x, y) {
            contextMenu.style.display = 'block';
            contextMenu.style.left = `${Math.min(x, window.innerWidth - contextMenu.offsetWidth)}px`;
            contextMenu.style.top = `${Math.min(y, window.innerHeight - contextMenu.offsetHeight)}px`;
        }
        // Utility Functions
        function refreshDesktop() {
            createDesktopIcons();
            showNotification('Desktop Refreshed', 'Desktop icons have been refreshed');
        }
        function openSettings() { openApp('systemApps/settings.html', 'Settings', 'fas fa-cog'); }
        function openDisplay() { openApp('systemApps/settings.html', 'Display Settings', 'fas fa-desktop'); }
        function openPersonalization() { openApp('systemApps/settings.html', 'Personalization', 'fas fa-paint-brush'); }
        function showPowerMenu() {
            showModal('Power Options', `
                <div style="display: flex; flex-direction: column; gap: 16px; padding: 20px; text-align: center;">
                    <button onclick="systemRestart()" style="padding: 12px 24px; background: var(--accent-color); color: white; border: none; border-radius: 6px; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.background='var(--accent-hover)'" onmouseout="this.style.background='var(--accent-color)'"><i class="fas fa-sync" style="margin-right: 8px;"></i>Restart</button>
                    <button onclick="systemShutdown()" style="padding: 12px 24px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.background='#c0392b'" onmouseout="this.style.background='#e74c3c'"><i class="fas fa-power-off" style="margin-right: 8px;"></i>Shut down</button>
                </div>`);
        }
        function systemRestart() {
            showNotification('System', 'Restarting system...');
            closeModal();
            setTimeout(() => location.reload(), 2000);
        }
        function systemShutdown() {
            showNotification('System', 'Shutting down...');
            closeModal();
            setTimeout(() => {
                body.style.background = '#000';
                body.innerHTML = '<h1 style="color:white; text-align:center; padding-top: 40vh; font-family: Segoe UI, sans-serif;">It is now safe to turn off your computer.</h1>';
            }, 2000);
        }
        function showHiddenIcons() {
            showNotification('System Tray', 'More system icons would be shown here.');
        }
        // Modal System
        function showModal(title, content) {
            modalTitle.textContent = title;
            modalBody.innerHTML = content;
            modalOverlay.style.display = 'flex';
            modalOverlay.classList.add('animate-fade-in');
        }
        function closeModal() {
            modalOverlay.style.display = 'none';
        }
        // Iframe Handlers
        function handleIframeLoad(iframe, windowId, title) {
            console.log(`${title} loaded successfully`);
		// Ensure iframe content is properly isolated
            try {
                // Additional security measures can be added here
                iframe.contentWindow.parent = null;
            } catch (e) {
                // Cross-origin restriction - this is good for isolation
            }
        }

        function handleIframeError(iframe, windowId, title) {
            const errorMessage = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: var(--bg-primary); color: var(--text-primary); padding: 40px; text-align: center; font-family: 'Segoe UI', sans-serif;">
                    <i class="fas fa-exclamation-circle" style="font-size: 48px; color: #e74c3c; margin-bottom: 24px;"></i>
                    <p style="margin-bottom: 24px; font-size: 16px;">this <strong>${title}</strong> app is not installed</p>
                    <a href="https://mustakimridoymr.github.io" 
                       target="_blank" 
                       style="background: var(--accent-color); color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500; transition: all 0.2s ease;"
                       onmouseover="this.style.background='var(--accent-hover)'" onmouseout="this.style.background='var(--accent-color)'">
                        install now
                    </a>
                </div>
            `;
            const contentArea = iframe.parentNode;
            if(contentArea) {
                contentArea.innerHTML = errorMessage;
            }
        }

// Popstate হ্যান্ডলার
window.addEventListener('popstate', (event) => {
  // ১. যদি Start Menu খোলা থাকে—বন্ধ কর
  if (startMenu.style.display === 'flex') {
    startMenu.style.display = 'none';
    startButton.classList.remove('active');
  }
  // ২. অন্যথায় যদি Notification Panel খোলা থাকে—বন্ধ কর
  else if (notificationPanel.classList.contains('open')) {
    notificationPanel.classList.remove('open');
  }
  // ৩. অন্যথায় যদি Power Modal খোলা থাকে—বন্ধ কর
  else if (modalOverlay.style.display === 'flex') {
    closeModal();
  }
  // ৪. আর কিছুই খোলা না থাকলে—Power Options দেখাও
  else {
    showPowerMenu();
  }

  history.pushState({ panel: null }, '');
});
//-----------------------------------
        function initializeWindowControls(window) {
    let isDragging = false;
    let isResizing = false;
    let currentX;
    let currentY;
    let initialWidth;
    let initialHeight;
    
    // Touch events for mobile
    window.addEventListener('touchstart', startDragging);
    window.addEventListener('touchmove', drag);
    window.addEventListener('touchend', stopDragging);
    
    // Mouse events for desktop 
    window.addEventListener('mousedown', startDragging);
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', stopDragging);
    
    // Resize handle events
    const resizeHandle = window.querySelector('.window-resize-handle');
    resizeHandle.addEventListener('touchstart', startResizing);
    resizeHandle.addEventListener('mousedown', startResizing);
    
    function startDragging(e) {
        if (e.target.classList.contains('window-resize-handle')) return;
        
        isDragging = true;
        const touch = e.touches ? e.touches[0] : e;
        currentX = touch.clientX - window.offsetLeft;
        currentY = touch.clientY - window.offsetTop;
        
        window.style.cursor = 'move';
    }
    
    function startResizing(e) {
        e.stopPropagation();
        isResizing = true;
        
        const touch = e.touches ? e.touches[0] : e;
        currentX = touch.clientX;
        currentY = touch.clientY;
        initialWidth = window.offsetWidth;
        initialHeight = window.offsetHeight;
        
        window.style.cursor = 'se-resize';
    }
    
    function drag(e) {
        if (!isDragging && !isResizing) return;
        e.preventDefault();
        
        const touch = e.touches ? e.touches[0] : e;
        
        if (isDragging) {
            // Handle dragging
            const newX = touch.clientX - currentX;
            const newY = touch.clientY - currentY;
            
            // Check boundaries
            const maxX = document.documentElement.clientWidth - window.offsetWidth;
            const maxY = document.documentElement.clientHeight - window.offsetHeight;
            
            window.style.left = `${Math.min(Math.max(0, newX), maxX)}px`;
            window.style.top = `${Math.min(Math.max(0, newY), maxY)}px`;
            
        } else if (isResizing) {
            // Handle resizing
            const deltaX = touch.clientX - currentX;
            const deltaY = touch.clientY - currentY;
            
            const newWidth = Math.max(320, initialWidth + deltaX);  // Min width
            const newHeight = Math.max(240, initialHeight + deltaY); // Min height
            
            window.style.width = `${newWidth}px`;
            window.style.height = `${newHeight}px`;
        }
    }
    
    function stopDragging() {
        isDragging = false;
        isResizing = false;
        window.style.cursor = '';
    }
}

// Initialize for all windows
document.querySelectorAll('.window').forEach(initializeWindowControls);
        //-----------------------------------------------

// Device detection function
function isMobileDevice() {
    return (window.innerWidth <= 768) || 
           (navigator.maxTouchPoints > 0 && navigator.maxTouchPoints !== 256) ||
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Update window creation logic
function isMobileDeviceWindow() {
    // Existing windows check and maximize if mobile
    if (isMobileDevice()) {
        document.querySelectorAll('.window').forEach(window => {
            window.classList.add('maximized');
        });
    }
    
    // Observer for new windows
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.classList && node.classList.contains('window') && isMobileDevice()) {
                    node.classList.add('maximized');
                }
            });
        });
    });
    
    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}
        // Fisher–Yates shuffle
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
//------------------------

const adContainer = document.getElementById('adContainer');

function showRandomAd() {
  const randomIndex = Math.floor(Math.random() * ad.length);
  const html = ad[randomIndex];

  adContainer.innerHTML = `
    <div id="adInner" style="position: relative;">
      <button class="close-btn" onclick="closeAd()">×</button>
      <div id="adContent"></div>
    </div>
  `;

  const contentDiv = document.getElementById('adContent');

  // HTML string টা parse করার জন্য temporary div
  const temp = document.createElement('div');
  temp.innerHTML = html;

  // প্রথমে non-script elements যোগ করো
  Array.from(temp.childNodes).forEach(node => {
    if (node.tagName !== 'SCRIPT') {
      contentDiv.appendChild(node.cloneNode(true));
    }
  });

  // তারপর script tags আলাদা করে execute করো
  Array.from(temp.querySelectorAll('script')).forEach(oldScript => {
    const newScript = document.createElement('script');
    // inline script
    if (oldScript.textContent) {
      newScript.textContent = oldScript.textContent;
    }
    // external src হলে
    if (oldScript.src) {
      newScript.src = oldScript.src;
      newScript.async = true;
    }
    document.getElementById('adInner').appendChild(newScript);
  });

  scheduleNextAd();
}

function closeAd() {
  adContainer.innerHTML = '';
}

function scheduleNextAd() {
  const min = 3 * 60 * 1000;
  const max = 10 * 60 * 1000;
  const timeout = Math.random() * (max - min) + min;
  setTimeout(showRandomAd, timeout);
}

//------------------------------------
// Function to enter fullscreen
function enterFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  }
}

// Function to exit fullscreen
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  }
}

// Function to check if the page is in fullscreen mode
function isFullscreen() {
  return !!(document.fullscreenElement || 
    document.webkitFullscreenElement || 
    document.msFullscreenElement || 
    document.mozFullScreenElement);
}
// Function to toggle fullscreen
function toggleFullscreen() {
  if (isFullscreen()) {
    exitFullscreen();
  } else {
    enterFullscreen();
  }
}

document.addEventListener('fullscreenchange', () => {
  const option = document.getElementById('fullscreenOption');
  if (option) {
    const icon = option.querySelector('i');
    const text = option.querySelector('span');
    
    if (isFullscreen()) {
      icon.className = 'fas fa-compress';
      text.textContent = 'Exit Fullscreen';
    } else {
      icon.className = 'fas fa-expand';
      text.textContent = 'Enter Fullscreen'; 
    }
  }
});

function addExternalShortcut(windowId, url, title) {
            // ১. চেক করা হচ্ছে এই URL এর অ্যাপ আগে থেকেই আছে কিনা
            let existingApp = apps.find(app => app.page === url);

            if (existingApp && shortcuts.includes(existingApp.id)) {
                showNotification('Already Exists', 'This shortcut is already on your desktop.');
                return;
            }

            let newAppId;

            // ২. যদি অ্যাপ না থাকে, তাহলে নতুন একটি অ্যাপ অবজেক্ট তৈরি করা হচ্ছে
            if (!existingApp) {
                // URL থেকে একটি ইউনিক আইডি তৈরি করা হচ্ছে
                newAppId = 'shortcut_' + url.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);

                const newApp = {
                    id: newAppId,
                    name: title || 'Web Shortcut',
                    icon: 'fas fa-link', // একটি সাধারণ আইকন
                    color: '#3498db',    // একটি সাধারণ রঙ
                    page: url,
                    type: 'Web Shortcut',
                    pinned: false
                };
                apps.push(newApp); // মূল অ্যাপ লিস্টে যোগ করা
            } else {
                newAppId = existingApp.id;
            }

            // ৩. ডেস্কটপ শর্টকাট লিস্টে যোগ করা
            if (!shortcuts.includes(newAppId)) {
                shortcuts.push(newAppId);
            }

            // ৪. ডেস্কটপ আইকন রিফ্রেশ করা
            createDesktopIcons();
            showNotification('Shortcut Added', `'${title}' has been added to your desktop.`);

            // ৫. বাটনটি লুকিয়ে ফেলা, কারণ শর্টকাট এখন তৈরি হয়ে গেছে
            const button = document.getElementById(`add-shortcut-btn-${windowId}`);
            if (button) {
                button.style.display = 'none';
            }
        }

  //-----------------------
function recapcha() {
 const overlay = document.getElementById('robotOverlay');
 const capcha = document.getElementById('robotBox');
 const wa = document.getElementById('watermarkAnim');

  const lastPass = localStorage.getItem('captchaPassedDate');
  if (lastPass === getToday()) {
    overlay.style.display = 'none';
  } else {
    overlay.style.display = 'flex';
    capcha.style.display = 'flex';
    wa.style.display = 'none';
  }
}
 // আজকের তারিখ নেওয়ার হেল্পার
function getToday() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// যখন checkbox সফলভাবে চেক হবে, এই ফাংশন ট্রিগার হবে
function onCaptchaSuccess(token) {
  // 1) localStorage-এ আজকের তারিখ সেভ
  const today = getToday();
  localStorage.setItem('captchaPassedDate', today);

  // 2) overlay hide
  document.getElementById('robotOverlay').style.display = 'none';

  // 3) optional notification
  showNotification('Verified', 'You are human now! 😘');
}

// যদি token expire হয়, আবার চেকবক্স দেখাবে
function onCaptchaExpired() {
  grecaptcha.reset(); // checkbox রিসেট
}
//-----------------
// ডেস্কটপ শুরু করার ফাংশন
function startDesktop() {
  initializeSystem();
  isMobileDeviceWindow();
  setupSelectionSystem();
  const startFullscreen = () => {
    enterFullscreen();
    history.pushState({ panel: null }, '');
    document.removeEventListener('click', startFullscreen);
  };
  document.addEventListener('click', startFullscreen);
	
    setTimeout(() => {
      scheduleAdNotification();
	    recapcha();
    }, 4000);
}

window.addEventListener('DOMContentLoaded', () => {
setTimeout(() => {
startDesktop();
    }, 15000);
});

//----------------------------------------------------------

// ১. প্রথমে আমরা গ্লোবাল ভ্যারিয়েবল ডিক্লেয়ার করব
let isSelecting = false;
let selectionBox = null;
let startX = 0;
let startY = 0;

// ২. সিলেকশন বক্স তৈরির ফাংশন 
function createSelectionBox() {
  if (!selectionBox) {
    selectionBox = document.createElement('div');
    selectionBox.style.cssText = `
      position: fixed;
      border: 2px solid rgba(0, 120, 215, 0.8);
      background: rgba(0, 120, 215, 0.1);
      pointer-events: none;
      z-index: 99;
      display: none;
    `;
    document.body.appendChild(selectionBox);
  }
  return selectionBox;
}

// ৩. মাউস ইভেন্ট হ্যান্ডলার
function handleSelectionStart(e) {
  // শুধুমাত্র ডেস্কটপে ক্লিক করলেই সিলেকশন শুরু হবে
  if (!e.target.closest('.desktop-icon') && !e.target.closest('.window') && e.button === 0) {
    isSelecting = true;
    startX = e.clientX;
    startY = e.clientY;
    
    const box = createSelectionBox();
    box.style.left = startX + 'px';
    box.style.top = startY + 'px';
    box.style.width = '0px';
    box.style.height = '0px';
    box.style.display = 'block';
  }
}

function handleSelectionMove(e) {
  if (!isSelecting) return;

  const currentX = e.clientX;
  const currentY = e.clientY;
  
  // বক্সের সাইজ ক্যালকুলেট
  const width = Math.abs(currentX - startX);
  const height = Math.abs(currentY - startY);
  
  // বক্সের পজিশন ক্যালকুলেট
  const left = currentX > startX ? startX : currentX;
  const top = currentY > startY ? startY : currentY;
  
  // বক্স আপডেট
  selectionBox.style.width = width + 'px';
  selectionBox.style.height = height + 'px';
  selectionBox.style.left = left + 'px';
  selectionBox.style.top = top + 'px';
  
  // আইকন সিলেকশন চেক
  checkIconSelection(left, top, width, height);
}

function handleSelectionEnd() {
  if (isSelecting) {
    isSelecting = false;
    if (selectionBox) {
      selectionBox.style.display = 'none';
    }
  }
}

// ৪. আইকন সিলেকশন চেক
function checkIconSelection(left, top, width, height) {
  const icons = document.querySelectorAll('.desktop-icon');
  const selectionRect = {
    left: left,
    top: top,
    right: left + width,
    bottom: top + height
  };

  icons.forEach(icon => {
    const rect = icon.getBoundingClientRect();
    const isIntersecting = !(
      rect.right < selectionRect.left ||
      rect.left > selectionRect.right ||
      rect.bottom < selectionRect.top ||
      rect.top > selectionRect.bottom
    );
    
    if (isIntersecting) {
      icon.classList.add('selected');
    } else if (!isIntersecting && !icon.contains(document.activeElement)) {
      icon.classList.remove('selected');
    }
  });
}

// ৫. ইভেন্ট লিসেনার সেটআপ
function setupSelectionSystem() {
  const desktop = document.querySelector('.desktop');
  
  desktop.addEventListener('mousedown', handleSelectionStart);
  document.addEventListener('mousemove', handleSelectionMove);
  document.addEventListener('mouseup', handleSelectionEnd);
  
  // টাচ ডিভাইসের জন্য
  desktop.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    handleSelectionStart({ 
      clientX: touch.clientX,
      clientY: touch.clientY,
      target: touch.target,
      button: 0
    });
  });
  
  document.addEventListener('touchmove', e => {
    const touch = e.touches[0];
    handleSelectionMove({
      clientX: touch.clientX,
      clientY: touch.clientY
    });
  });
  
  document.addEventListener('touchend', handleSelectionEnd);
}

//--------------------------
// অ্যাডস ম্যানেজার ইনিশিয়ালাইজ
if (typeof window.adsManager === 'undefined') {
    window.adsManager = new AdvancedAdsManager();
}
