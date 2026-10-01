// ===== NAVBAR =====
function renderNavbar() {
    const logo = localStorage.getItem('dragontuc_logo') || 'images/logo.jpg';
    const nav = document.getElementById('navbar');
    if (!nav) return;
    nav.innerHTML = `
        <a href="index.html" class="logo">
            <img src="${logo}" alt="Dragon TUC" class="logo-img" onerror="this.src='images/logo.jpg'">
            <span class="logo-text">𝐃𝐑𝐀𝐆𝐎𝐍 𝐓𝐔𝐂</span>
        </a>
        <div class="nav-links">
            <a href="packs.html">💎 𝐏𝐚𝐜𝐤𝐬</a>
            <a href="counters.html">📊 𝐂𝐨𝐮𝐧𝐭𝐞𝐫𝐬</a>
        </div>
    `;
}

// ===== BOTTOM NAV =====
function renderBottomNav() {
    const nav = document.getElementById('bottomNav');
    if (!nav) return;
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const items = [
        { href: 'index.html', icon: '🏠', label: '𝐇𝐨𝐦𝐞' },
        { href: 'packs.html', icon: '💎', label: '𝐏𝐚𝐜𝐤𝐬' },
        { href: 'counters.html', icon: '📊', label: '𝐂𝐨𝐮𝐧𝐭𝐞𝐫𝐬' },
        { href: 'order.html', icon: '🛒', label: '𝐎𝐫𝐝𝐞𝐫' }
    ];
    nav.innerHTML = items.map(item => `
        <a href="${item.href}" class="nav-item ${page === item.href ? 'active' : ''}">
            <span class="nav-icon">${item.icon}</span>
            <span class="nav-label">${item.label}</span>
        </a>
    `).join('');
}

// ===== FOOTER =====
function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;
    footer.innerHTML = `
        <div class="bottom-footer">
            <p class="powered-by">© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʀᴀɢᴏɴ ᴛᴜᴄ</p>
            <p class="server-status">🟢 ꜱᴇʀᴠᴇʀ ɪꜱ ᴏɴʟɪɴᴇ</p>
            <div class="owner-box">
                <p>Owner name : <span>Damidu Ohasha</span></p>
                <p>Age : <span>19 years</span></p>
                <p>Contact : <span>+94705215116</span></p>
            </div>
            <p class="axsuz-credit">©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀxꜱᴜᴢ-ᴏꜰᴄ : ᴘʀᴀᴍᴏᴅ ᴀᴅɪᴛʜʏᴀ</p>
        </div>
    `;
}

// ===== MUSIC =====
function initMusic() {
    const musicBar = document.getElementById('musicBar');
    if (!musicBar) return;
    const audio = document.createElement('audio');
    audio.id = 'bgMusic';
    audio.loop = true;
    audio.src = 'music/bg.mp3';
    document.body.appendChild(audio);
    
    const playBtn = document.getElementById('musicPlayBtn');
    const stopBtn = document.getElementById('musicStopBtn');
    const title = document.getElementById('musicTitle');
    const progress = document.querySelector('.music-progress');
    
    const wasPlaying = sessionStorage.getItem('dragontuc_music_playing');
    const savedTime = sessionStorage.getItem('dragontuc_music_time');
    if (savedTime) audio.currentTime = parseFloat(savedTime);
    
    if (wasPlaying === 'true') {
        audio.play().then(() => {
            playBtn.innerHTML = '❚❚';
            playBtn.classList.add('playing');
            progress.classList.add('playing');
            title.textContent = '🎵 𝐏𝐥𝐚𝐲𝐢𝐧𝐠';
        }).catch(() => {});
    }
    
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => {
                playBtn.innerHTML = '❚❚';
                playBtn.classList.add('playing');
                progress.classList.add('playing');
                title.textContent = '🎵 𝐏𝐥𝐚𝐲𝐢𝐧𝐠';
                sessionStorage.setItem('dragontuc_music_playing', 'true');
            }).catch(() => alert('Music file not found! Add music/bg.mp3'));
        } else {
            audio.pause();
            playBtn.innerHTML = '▶';
            playBtn.classList.remove('playing');
            progress.classList.remove('playing');
            title.textContent = '⏸ 𝐏𝐚𝐮𝐬𝐞𝐝';
            sessionStorage.setItem('dragontuc_music_playing', 'false');
        }
    });
    
    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playBtn.innerHTML = '▶';
        playBtn.classList.remove('playing');
        progress.classList.remove('playing');
        title.textContent = '⏹ 𝐒𝐭𝐨𝐩𝐩𝐞𝐝';
        sessionStorage.setItem('dragontuc_music_playing', 'false');
    });
    
    setInterval(() => {
        if (!audio.paused) sessionStorage.setItem('dragontuc_music_time', audio.currentTime);
    }, 1000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderBottomNav();
    renderFooter();
    initMusic();
});