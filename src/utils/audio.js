
let soundEnabled = localStorage.getItem('retro-portfolio-sound') !== 'false';
const listeners = new Set();

const notifyListeners = () => {
  listeners.forEach(listener => listener(soundEnabled));
};

export const getSoundEnabled = () => soundEnabled;

export const setSoundEnabled = (enabled) => {
  soundEnabled = enabled;
  localStorage.setItem('retro-portfolio-sound', String(enabled));
  notifyListeners();
};

export const subscribeSound = (listener) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

let audioCtx = null;

const getAudioContext = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playBlip = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine'; // retro beep
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    console.warn("Audio Context failed to start:", e);
  }
};

export const playType = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    // Randomize pitch slightly for organic mechanical typing feel
    const freq = 600 + Math.random() * 400;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.02, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    console.warn(e);
  }
};

export const playSelect = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, ctx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {
    console.warn(e);
  }
};

export const playSuccess = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // Play a quick retro arpeggio: C5 -> E5 -> G5 -> C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    const duration = 0.08;

    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square'; // retro chiptune sound
      osc.frequency.setValueAtTime(freq, now + index * duration);

      gain.gain.setValueAtTime(0.02, now + index * duration);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * duration + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + index * duration);
      osc.stop(now + index * duration + duration);
    });
  } catch (e) {
    console.warn(e);
  }
};
