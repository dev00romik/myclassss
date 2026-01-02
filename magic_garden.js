/* Волшебный сад любви - Стили */
:root {
    /* Цветовая палитра сада */
    --spring-primary: #ff6b9d;
    --spring-secondary: #ffd166;
    --spring-accent: #06d6a0;
    --spring-bg: #f8f9fa;
    
    --summer-primary: #ff9e6d;
    --summer-secondary: #ffd93d;
    --summer-accent: #6bcf7f;
    --summer-bg: #fff9f0;
    
    --autumn-primary: #e76f51;
    --autumn-secondary: #f4a261;
    --autumn-accent: #2a9d8f;
    --autumn-bg: #fefae0;
    
    --winter-primary: #a8dadc;
    --winter-secondary: #457b9d;
    --winter-accent: #1d3557;
    --winter-bg: #f1faee;
    
    /* Текущий сезон (по умолчанию весна) */
    --primary: var(--spring-primary);
    --secondary: var(--spring-secondary);
    --accent: var(--spring-accent);
    --bg-color: var(--spring-bg);
    
    /* Дополнительные цвета */
    --dark-green: #1a4f2d;
    --light-green: #8fbc8f;
    --gold: #ffd700;
    --silver: #c0c0c0;
    --text-dark: #2d3748;
    --text-light: #f7fafc;
    
    /* Тени и эффекты */
    --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.1);
    --shadow-hard: 0 8px 30px rgba(0, 0, 0, 0.2);
    --glow-primary: 0 0 20px var(--primary);
    --glow-secondary: 0 0 20px var(--secondary);
    
    /* Шрифты */
    --font-title: 'Dancing Script', cursive;
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Cormorant Garamond', serif;
    
    /* Анимации */
    --animation-bloom: bloom 2s ease-in-out;
    --animation-float: float 6s ease-in-out infinite;
    --animation-sparkle: sparkle 3s infinite;
}

/* Базовые стили */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    background: var(--bg-color);
    color: var(--text-dark);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    transition: background 0.8s ease;
}

/* Анимации */
@keyframes flower-bloom {
    0%, 100% {
        transform: scale(0.8) rotate(0deg);
    }
    50% {
        transform: scale(1.1) rotate(180deg);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

@keyframes sparkle {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.1);
    }
}

@keyframes bloom {
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes water-flow {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 40px 40px;
    }
}

@keyframes droplet-fall {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateY(200px);
        opacity: 0;
    }
}

@keyframes leaf-fall {
    0% {
        transform: translateY(-100px) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

@keyframes firefly {
    0%, 100% {
        transform: translate(0, 0);
        opacity: 0;
    }
    10%, 90% {
        opacity: 1;
    }
    50% {
        transform: translate(100px, -50px);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Загрузочный экран */
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--dark-green) 0%, #2d5a3d 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 1s ease;
}

.loading-flower {
    width: 80px;
    height: 80px;
    position: relative;
    animation: flower-bloom 2s infinite;
}

.petal {
    position: absolute;
    width: 40px;
    height: 60px;
    background: var(--spring-primary);
    border-radius: 50%;
    transform-origin: bottom center;
}

.petal:nth-child(1) { transform: rotate(0deg); }
.petal:nth-child(2) { transform: rotate(60deg); }
.petal:nth-child(3) { transform: rotate(120deg); }
.petal:nth-child(4) { transform: rotate(180deg); }
.petal:nth-child(5) { transform: rotate(240deg); }
.petal:nth-child(6) { transform: rotate(300deg); }

.loading-text {
    position: absolute;
    bottom: 30%;
    color: var(--gold);
    font-family: var(--font-title);
    font-size: 1.8rem;
    opacity: 0.8;
    animation: sparkle 2s infinite;
}

/* Волшебный фон */
.magic-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.stars {
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(2px 2px at 20px 30px, var(--silver), transparent),
        radial-gradient(2px 2px at 40px 70px, var(--gold), transparent),
        radial-gradient(3px 3px at 90px 40px, #fff, transparent),
        radial-gradient(1px 1px at 150px 90px, var(--silver), transparent);
    animation: sparkle 4s infinite;
}

.fireflies {
    position: absolute;
    width: 100%;
    height: 100%;
}

.firefly {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--gold);
    border-radius: 50%;
    filter: blur(1px);
    animation: firefly 15s infinite linear;
}

.floating-particles {
    position: absolute;
    width: 100%;
    height: 100%;
}

.particle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: float 20s infinite linear;
}

.garden-floor {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top, var(--dark-green), #2d5a3d);
    border-top-left-radius: 50% 20px;
    border-top-right-radius: 50% 20px;
}

/* Основной контейнер */
.garden-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    z-index: 1;
}

/* Магический заголовок */
.magic-header {
    text-align: center;
    padding: 30px 20px;
    margin-bottom: 40px;
    position: relative;
}

.enchanted-title h1 {
    font-family: var(--font-title);
    font-size: 3.5rem;
    color: var(--primary);
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.enchanted-title h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--text-dark);
    font-weight: 400;
}

.enchanted-title h2 span {
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
    padding: 0 10px;
    cursor: text;
    transition: all 0.3s;
}

.enchanted-title h2 span:focus {
    outline: none;
    background: rgba(255, 107, 157, 0.1);
    border-radius: 5px;
}

.magic-sparkle {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: var(--gold);
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: sparkle 2s infinite;
}

/* Селектор сезонов */
.season-selector {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.season-btn {
    padding: 12px 25px;
    border: 2px solid var(--primary);
    background: white;
    border-radius: 50px;
    font-family: var(--font-body);
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.season-btn:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-soft);
}

.season-btn.active {
    background: var(--primary);
    color: white;
}

/* Интерактивный сад */
.enchanted-garden {
    position: relative;
    min-height: 500px;
    margin: 40px 0;
}

/* Цветочная клумба */
.flower-bed {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
    justify-items: center;
    margin-bottom: 60px;
}

.magic-flower {
    position: relative;
    cursor: pointer;
    transition: transform 0.3s;
}

.magic-flower:hover {
    transform: scale(1.1);
}

.flower-head {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;
}

.petals {
    position: absolute;
    width: 100%;
    height: 100%;
}

.petals .petal {
    position: absolute;
    width: 40px;
    height: 40px;
    background: var(--primary);
    border-radius: 50%;
    transform-origin: center center;
    opacity: 0.9;
}

.petals .petal:nth-child(1) { transform: rotate(0deg) translateX(30px); }
.petals .petal:nth-child(2) { transform: rotate(72deg) translateX(30px); }
.petals .petal:nth-child(3) { transform: rotate(144deg) translateX(30px); }
.petals .petal:nth-child(4) { transform: rotate(216deg) translateX(30px); }
.petals .petal:nth-child(5) { transform: rotate(288deg) translateX(30px); }

.flower-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
    background: var(--secondary);
    border-radius: 50%;
    z-index: 2;
}

.flower-stem {
    width: 6px;
    height: 120px;
    background: linear-gradient(to bottom, #2d5a3d, #4a7c59);
    margin: 0 auto;
    border-radius: 3px;
}

.flower-leaf {
    position: absolute;
    width: 40px;
    height: 25px;
    background: #4a7c59;
    border-radius: 50%;
    top: 60px;
    left: 20px;
    transform: rotate(-45deg);
}

.flower-label {
    text-align: center;
    margin-top: 10px;
    font-family: var(--font-heading);
    color: var(--text-dark);
    font-size: 1.1rem;
    opacity: 0.8;
}

/* Специальные цветы */
.confession-flower .petals { background: none; }
.confession-flower .petal { background: var(--spring-primary); }

.memories-flower .petal { background: var(--spring-accent); }
.memories-flower .flower-center { background: var(--gold); }

.promises-flower .petal { background: var(--spring-secondary); }
.promises-flower .flower-center { background: #ff6b9d; }

.music-flower .petal { background: #9d4edd; }
.music-flower .flower-center { background: #ff9e00; }

.secrets-flower .petal { background: #7209b7; }
.secrets-flower .flower-center { background: #f72585; }

/* Фонтан любви */
.love-fountain {
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
    width: 200px;
    height: 300px;
    z-index: 2;
}

.fountain-base {
    position: absolute;
    bottom: 0;
    width: 150px;
    height: 40px;
    background: linear-gradient(to top, #c0c0c0, #e8e8e8);
    border-radius: 50% 50% 0 0;
    left: 50%;
    transform: translateX(-50%);
}

.water-flow {
    position: absolute;
    bottom: 40px;
    width: 120px;
    height: 150px;
    background: linear-gradient(45deg, #a8dadc 25%, transparent 25%, transparent 50%, #a8dadc 50%, #a8dadc 75%, transparent 75%, transparent);
    background-size: 40px 40px;
    animation: water-flow 2s linear infinite;
    border-radius: 50% 50% 40% 40%;
    left: 50%;
    transform: translateX(-50%);
}

.water-spray {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.droplet {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #4cc9f0;
    border-radius: 50%;
    filter: blur(2px);
    animation: droplet-fall 3s infinite linear;
}

.droplet:nth-child(1) { left: 20%; animation-delay: 0s; }
.droplet:nth-child(2) { left: 40%; animation-delay: 0.5s; }
.droplet:nth-child(3) { left: 60%; animation-delay: 1s; }
.droplet:nth-child(4) { left: 80%; animation-delay: 1.5s; }
.droplet:nth-child(5) { left: 50%; animation-delay: 2s; }

.fountain-title {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-family: var(--font-heading);
    color: var(--text-dark);
    font-size: 1.2rem;
}

.wish-btn {
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 25px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: white;
    border: none;
    border-radius: 50px;
    font-family: var(--font-body);
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s;
    box-shadow: var(--shadow-soft);
}

.wish-btn:hover {
    transform: translateX(-50%) translateY(-3px);
    box-shadow: var(--shadow-hard);
}

/* Волшебное дерево */
.magic-tree {
    position: absolute;
    right: 100px;
    top: 150px;
    width: 200px;
    height: 300px;
}

.trunk {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 200px;
    background: linear-gradient(to right, #8b4513, #a0522d, #8b4513);
    border-radius: 20px;
}

.bark {
    position: absolute;
    width: 100%;
    height: 20px;
    background: #5d2906;
    border-radius: 10px;
}

.bark:nth-child(1) { top: 30px; }
.bark:nth-child(2) { top: 80px; }
.bark:nth-child(3) { top: 130px; }

.branches {
    position: absolute;
    top: 50px;
    width: 100%;
    height: 150px;
}

.branch {
    position: absolute;
    background: #8b4513;
    border-radius: 10px;
}

.branch:nth-child(1) {
    width: 120px;
    height: 15px;
    top: 0;
    left: -50px;
    transform: rotate(-30deg);
}

.branch:nth-child(2) {
    width: 100px;
    height: 15px;
    top: 40px;
    right: -40px;
    transform: rotate(40deg);
}

.branch:nth-child(3) {
    width: 80px;
    height: 12px;
    top: 80px;
    left: -30px;
    transform: rotate(-20deg);
}

.branch:nth-child(4) {
    width: 60px;
    height: 10px;
    top: 120px;
    right: -20px;
    transform: rotate(25deg);
}

.leaves {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.leaf {
    position: absolute;
    width: 30px;
    height: 40px;
    background: #4a7c59;
    border-radius: 50% 0;
    transform-origin: bottom center;
}

.leaf:nth-child(1) { top: 20px; left: 30px; transform: rotate(45deg); }
.leaf:nth-child(2) { top: 50px; right: 40px; transform: rotate(-45deg); }
.leaf:nth-child(3) { top: 90px; left: 20px; transform: rotate(60deg); }
.leaf:nth-child(4) { top: 120px; right: 30px; transform: rotate(-60deg); }
.leaf:nth-child(5) { top: 150px; left: 40px; transform: rotate(30deg); }
.leaf:nth-child(6) { top: 180px; right: 20px; transform: rotate(-30deg); }

.tree-hearts {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
}

.heart-fruit {
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--primary);
    transform: rotate(45deg);
}

.heart-fruit::before,
.heart-fruit::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--primary);
    border-radius: 50%;
}

.heart-fruit::before {
    top: -10px;
    left: 0;
}

.heart-fruit::after {
    top: 0;
    left: -10px;
}

.heart-fruit:nth-child(1) { top: 0; left: -30px; }
.heart-fruit:nth-child(2) { top: 40px; left: 0; }
.heart-fruit:nth-child(3) { top: 80px; left: -20px; }

.tree-label {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-family: var(--font-heading);
    color: var(--text-dark);
    font-size: 1.2rem;
}

/* Панель контента */
.content-panel {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 30px;
    margin: 40px 0;
    box-shadow: var(--shadow-hard);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    max-height: 500px;
    overflow-y: auto;
}

.panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--primary);
}

.panel-title {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 10px;
}

.close-panel {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--text-dark);
    cursor: pointer;
    transition: color 0.3s;
}

.close-panel:hover {
    color: var(--primary);
}

.panel-content {
    min-height: 300px;
}

.default-message {
    text-align: center;
    padding: 60px 20px;
    color: var(--text-dark);
    opacity: 0.7;
}

.default-message i {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 20px;
    display: block;
}

.default-message p {
    font-size: 1.3rem;
    font-family: var(--font-heading);
}

/* Секции контента */
.content-section {
    animation: bloom 0.5s ease;
}

.content-section h4 {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    color: var(--primary);
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 10px;
}

/* Признания */
.love-letter {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 245, 245, 0.9));
    padding: 30px;
    border-radius: 15px;
    border-left: 5px solid var(--primary);
    margin-bottom: 30px;
    box-shadow: var(--shadow-soft);
}

.letter-date {
    text-align: right;
    font-style: italic;
    color: var(--text-dark);
    opacity: 0.7;
    margin-bottom: 20px;
}

.love-letter p {
    margin-bottom: 15px;
    font-size: 1.1rem;
    line-height: 1.6;
}

.letter-signature {
    text-align: right;
    font-family: var(--font-title);
    font-size: 1.8rem;
    color: var(--primary);
    margin-top: 30px;
}

.confession-actions {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.action-btn {
    padding: 12px 25px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: white;
    border: none;
    border-radius: 50px;
    font-family: var(--font-body);
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s;
}

.action-btn:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-soft);
}

/* Воспоминания */
.memories-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.memory-item {
    background: linear-gradient(135deg, var(--bg-color), white);
    padding: 20px;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid transparent;
    text-align: center;
}

.memory-item:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: var(--shadow-soft);
}

.memory-preview {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    color: var(--primary);
    margin-bottom: 10px;
}

.memory-date {
    color: var(--text-dark);
    opacity: 0.7;
    font-size: 0.9rem;
}

.add-memory {
    display: flex;
    gap: 15px;
    align-items: center;
}

.memory-input {
    flex: 1;
    padding: 15px;
    border: 2px solid var(--primary);
    border-radius: 10px;
    font-family: var(--font-body);
    font-size: 1rem;
    transition: all 0.3s;
}

.memory-input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.3);
}

.add-btn {
    padding: 15px 25px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 10px;
    font-family: var(--font-body);
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s;
}

.add-btn:hover {
    background: var(--accent);
    transform: translateY(-3px);
}

/* Обещания */
.promises-list {
    margin-bottom: 30px;
}

.promise-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(240, 240, 240, 0.8));
    border-radius: 10px;
    margin-bottom: 10px;
    transition: all 0.3s;
}

.promise-item:hover {
    transform: translateX(10px);
    box-shadow: var(--shadow-soft);
}

.promise-item input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: var(--primary);
    cursor: pointer;
}

.promise-item label {
    font-size: 1.1rem;
    color: var(--text-dark);
    cursor: pointer;
    flex: 1;
}

.add-promise-btn {
    width: 100%;
    padding: 15px;
    background: transparent;
    border: 2px dashed var(--primary);
    border-radius: 10px;
    color: var(--primary);
    font-family: var(--font-body);
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s;
}

.add-promise-btn:hover {
    background: rgba(255, 107, 157, 0.1);
    border-style: solid;
}

/* Музыкальный плеер */
.music-player {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 30px;
    margin-bottom: 30px;
    align-items: center;
}

.album-art {
    width: 150px;
    height: 150px;
    position: relative;
}

.vinyl-disc {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #222, #000);
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    animation: rotate 20s linear infinite paused;
}

.vinyl-disc.playing {
    animation-play-state: running;
}

.vinyl-ring {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 2px dashed #444;
    border-radius: 50%;
}

.vinyl-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: var(--primary);
    border-radius: 50%;
}

.player-controls {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.song-info .song-title {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 5px;
}

.song-info .song-artist {
    color: var(--text-dark);
    opacity: 0.7;
    font-size: 1.1rem;
}

.controls {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.control-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid var(--primary);
    background: white;
    color: var(--primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s;
}

.control-btn:hover {
    background: var(--primary);
    color: white;
    transform: scale(1.1);
}

.play-btn {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
}

.progress-bar {
    height: 6px;
    background: #e0e0e0;
    border-radius: 3px;
    margin: 10px 0;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: var(--primary);
    width: 45%;
    border-radius: 3px;
    transition: width 0.3s;
}

.volume-control {
    display: flex;
    align-items: center;
    gap: 15px;
}

.volume-control i {
    color: var(--primary);
    font-size: 1.2rem;
}

.volume-control input[type="range"] {
    flex: 1;
    height: 6px;
    -webkit-appearance: none;
    background: #e0e0e0;
    border-radius: 3px;
    outline: none;
}

.volume-control input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: var(--primary);
    border-radius: 50%;
    cursor: pointer;
}

.playlist {
    margin-top: 30px;
}

.playlist-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(240, 240, 240, 0.8));
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s;
}

.playlist-item:hover {
    transform: translateX(10px);
    background: rgba(255, 107, 157, 0.1);
}

.playlist-item.active {
    background: rgba(255, 107, 157, 0.2);
    border-left: 4px solid var(--primary);
}

.playlist-item .song-name {
    font-family: var(--font-heading);
    color: var(--text-dark);
}

.playlist-item .song-duration {
    color: var(--text-dark);
    opacity: 0.7;
}

/* Секреты */
.secrets-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.secret-note {
    background: linear-gradient(135deg, #fffacd, #fff8dc);
    padding: 25px;
    border-radius: 15px;
    border: 1px solid #ffd700;
    box-shadow: var(--shadow-soft);
    position: relative;
}

.secret-note::before {
    content: '';
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffd700'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E");
}

.note-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 215, 0, 0.3);
}

.note-title {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    color: var(--primary);
}

.note-date {
    font-size: 0.9rem;
    color: var(--text-dark);
    opacity: 0.7;
}

.note-content p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-dark);
}

.secret-reveal {
    text-align: center;
}

.reveal-btn {
    padding: 15px 30px;
    background: linear-gradient(135deg, #7209b7, #f72585);
    color: white;
    border: none;
    border-radius: 50px;
    font-family: var(--font-body);
    font-size: 1.1rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s;
    margin-bottom: 20px;
}

.reveal-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(114, 9, 183, 0.3);
}

.secret-output {
    min-height: 60px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    border: 1px solid var(--primary);
    font-size: 1.1rem;
    color: var(--text-dark);
    animation: bloom 0.5s ease;
}

/* Лунный календарь */
.moon-calendar {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 15px;
    box-shadow: var(--shadow-soft);
    backdrop-filter: blur(10px);
    z-index: 100;
    width: 250px;
}

.moon-phase {
    text-align: center;
    margin-bottom: 20px;
}

.moon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #f0f0f0, #d0d0d0);
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    box-shadow: inset -10px -10px 20px rgba(0,0,0,0.1);
}

.moon::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #e0e0e0, #c0c0c0);
    border-radius: 50%;
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1);
}

.calendar-info {
    text-align: center;
}

.day-count {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    color: var(--primary);
    margin-bottom: 15px;
}

.love-meter {
    margin-top: 15px;
}

.meter-label {
    font-size: 0.9rem;
    color: var(--text-dark);
    opacity: 0.7;
    margin-bottom: 5px;
}

.meter-bar {
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
}

.meter-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 4px;
    transition: width 1s ease;
}

/* Магические заклинания */
.spell-book {
    position: fixed;
    bottom: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 100;
}

.spell-btn {
    padding: 12px 20px;
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid var(--primary);
    border-radius: 50px;
    color: var(--primary);
    font-family: var(--font-body);
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
}

.spell-btn:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-3px);
    box-shadow: var(--shadow-soft);
}

/* Футер */
.garden-footer {
    text-align: center;
    padding: 40px 20px;
    margin-top: 60px;
    border-top: 2px solid rgba(255, 107, 157, 0.2);
}

.footer-heart {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 20px;
    animation: sparkle 2s infinite;
}

.footer-text {
    font-family: var(--font-title);
    font-size: 1.8rem;
    color: var(--text-dark);
    margin-bottom: 20px;
    line-height: 1.4;
}

.magic-signature {
    color: var(--text-dark);
    opacity: 0.7;
    font-size: 1.1rem;
}

/* Модальное окно */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
}

.modal-content {
    background: white;
    border-radius: 20px;
    padding: 30px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: var(--shadow-hard);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--primary);
}

.modal-header h3 {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 10px;
}

.close-modal {
    background: none;
    border: none;
    font-size: 1.8rem;
    color: var(--text-dark);
    cursor: pointer;
    transition: color 0.3s;
}

.close-modal:hover {
    color: var(--primary);
}

.modal-body textarea {
    width: 100%;
    min-height: 200px;
    padding: 20px;
    border: 2px solid var(--primary);
    border-radius: 10px;
    font-family: var(--font-body);
    font-size: 1.1rem;
    resize: vertical;
    margin-bottom: 20px;
    transition: all 0.3s;
}

.modal-body textarea:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.3);
}

.modal-actions {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
}

.modal-btn {
    padding: 12px 30px;
    border: none;
    border-radius: 50px;
    font-family: var(--font-body);
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
}

.save-btn {
    background: var(--primary);
    color: white;
}

.save-btn:hover {
    background: var(--accent);
    transform: translateY(-3px);
}

.cancel-btn {
    background: #e0e0e0;
    color: var(--text-dark);
}

.cancel-btn:hover {
    background: #d0d0d0;
    transform: translateY(-3px);
}

/* Утилиты */
.hidden {
    display: none !important;
}

/* Адаптивность */
@media (max-width: 1024px) {
    .magic-tree {
        position: static;
        margin: 40px auto;
    }
    
    .love-fountain {
        position: static;
        transform: none;
        margin: 40px auto;
    }
    
    .enchanted-garden {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
}

@media (max-width: 768px) {
    .flower-bed {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .music-player {
        grid-template-columns: 1fr;
        justify-items: center;
    }
    
    .spell-book {
        position: static;
        flex-direction: row;
        justify-content: center;
        margin: 20px 0;
    }
    
    .moon-calendar {
        position: static;
        margin: 20px auto;
    }
}

@media (max-width: 480px) {
    .enchanted-title h1 {
        font-size: 2.5rem;
    }
    
    .enchanted-title h2 {
        font-size: 1.5rem;
    }
    
    .flower-bed {
        grid-template-columns: 1fr;
    }
    
    .season-selector {
        flex-direction: column;
        align-items: center;
    }
    
    .season-btn {
        width: 200px;
    }
}

/* Специальные эффекты */
.night-mode {
    background: linear-gradient(135deg, #0a1929 0%, #1a365d 100%);
    color: #f7fafc;
}

.night-mode .content-panel {
    background: rgba(26, 32, 44, 0.95);
    color: #f7fafc;
}

.night-mode .memory-input,
.night-mode .modal-content {
    background: #2d3748;
    color: #f7fafc;
    border-color: var(--winter-primary);
}

/* Анимации для листьев */
.falling-leaf {
    position: fixed;
    width: 30px;
    height: 30px;
    background: #4a7c59;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation: leaf-fall 10s linear infinite;
    z-index: 0;
}

/* Анимации для метеоритов */
.shooting-star {
    position: fixed;
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, white, transparent);
    animation: shooting-star 3s linear infinite;
    z-index: 0;
}

@keyframes shooting-star {
    0% {
        transform: translateX(-100px) translateY(-100px) rotate(45deg);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    100% {
        transform: translateX(100vw) translateY(100vh) rotate(45deg);
        opacity: 0;
    }
}

/* Волшебные эффекты при взаимодействии */
.magic-flower:hover .petal {
    animation: sparkle 0.5s infinite;
}

.confession-flower:hover .petal {
    background: #ff85b3;
}

.memories-flower:hover .petal {
    background: #39d9a9;
}

.promises-flower:hover .petal {
    background: #ffe066;
}

.music-flower:hover .petal {
    background: #b47bff;
}

.secrets-flower:hover .petal {
    background: #9d4edd;
}

/* Анимации для сезонов */
.spring-theme {
    --primary: var(--spring-primary);
    --secondary: var(--spring-secondary);
    --accent: var(--spring-accent);
    --bg-color: var(--spring-bg);
}

.summer-theme {
    --primary: var(--summer-primary);
    --secondary: var(--summer-secondary);
    --accent: var(--summer-accent);
    --bg-color: var(--summer-bg);
}

.autumn-theme {
    --primary: var(--autumn-primary);
    --secondary: var(--autumn-secondary);
    --accent: var(--autumn-accent);
    --bg-color: var(--autumn-bg);
}

.winter-theme {
    --primary: var(--winter-primary);
    --secondary: var(--winter-secondary);
    --accent: var(--winter-accent);
    --bg-color: var(--winter-bg);
}