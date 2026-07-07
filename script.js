// Tailwind Konfiguration
window.tailwind.config = {
    theme: {
        extend: {
            colors: {
                ctp: {
                    crust: '#11111b',
                    base: '#1e1e2e',
                    surface0: 'rgba(30, 30, 46, 0.25)', 
                    surface1: 'rgba(49, 50, 68, 0.4)',
                    text: '#cdd6f4',
                    subtext0: '#a6adc8',
                    lavender: '#b4befe',
                    blue: '#89b4fa',
                    sapphire: '#74c7ec',
                    green: '#a6e3a1',
                    mauve: '#cba6f7',
                }
            }
        }
    }
};

/**
 * Schaltet zwischen den "Seiten" um (SPA Logik)
 * @param {string} pageId - Die ID der anzuzeigenden Seite
 */
function showPage(pageId) {
    // 1. Alle Inhaltsbereiche (Tabs) ausblenden
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));

    // 2. Aktivierungs-Klasse von allen Nav-Buttons entfernen
    const buttons = document.querySelectorAll('.nav-pill');
    buttons.forEach(btn => btn.classList.remove('active-pill'));

    // 3. Gewählte Seite heraussuchen und einblenden
    const activePage = document.getElementById('page-' + pageId);
    if (activePage) {
        activePage.classList.add('active');
    }

    // 4. Gewählten Button visuell hervorheben
    const activeBtn = document.getElementById('btn-' + pageId);
    if (activeBtn) {
        activeBtn.classList.add('active-pill');
    }

    // 5. Automatisch sanft nach oben scrollen
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
/**
 * Spielt Audio ab oder pausiert es und aktualisiert das Icon
 * @param {string} audioId - Die ID des <audio> Elements
 * @param {HTMLElement} btn - Der Button, der geklickt wurde
 */
function toggleAudio(audioId, btn) {
    const audio = document.getElementById(audioId);
    const icon = btn.querySelector('i');
    
    // Pausiere alle anderen Audios auf der Seite (damit nicht zwei gleichzeitig laufen)
    document.querySelectorAll('audio').forEach(a => {
        if (a.id !== audioId && !a.paused) {
            a.pause();
            // Icons anderer Buttons zurück auf Play setzen
            const allPlayBtns = document.querySelectorAll('.fa-circle-pause');
            allPlayBtns.forEach(playIcon => {
                playIcon.classList.remove('fa-circle-pause');
                playIcon.classList.add('fa-circle-play');
            });
        }
    });

    // Umschalten zwischen Play und Pause
    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-circle-play');
        icon.classList.add('fa-circle-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-circle-pause');
        icon.classList.add('fa-circle-play');
    }
}