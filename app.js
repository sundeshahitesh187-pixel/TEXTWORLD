/**
 * ElevenLabs Studio - AI Text-to-Speech Web Application
 * Modular, clean, modern architecture with complete API & synthesis integration.
 */

// --- Models Definition ---
const MODELS = [
  {
    id: "eleven_multilingual_v2",
    name: "Eleven Multilingual v2",
    badge: "Recommended",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    description: "Most expressive and natural prosody across 29 languages. Ideal for audiobooks and emotional dialogue.",
    latency: "~350ms",
    languages: "29 Languages"
  },
  {
    id: "eleven_turbo_v2_5",
    name: "Eleven Turbo v2.5",
    badge: "Low Latency",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    description: "Cutting-edge low-latency model optimized for conversational agents and real-time streaming.",
    latency: "~250ms",
    languages: "32 Languages"
  },
  {
    id: "eleven_flash_v2_5",
    name: "Eleven Flash v2.5",
    badge: "Ultra Fast",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    description: "Blazing fast 75ms response time designed for high-scale generation and instant voice replies.",
    latency: "~75ms",
    languages: "32 Languages"
  },
  {
    id: "eleven_monolingual_v1",
    name: "Eleven English v1",
    badge: "Classic",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description: "Pioneering English speech model. Classic, reliable, and crisp for formal narration.",
    latency: "~400ms",
    languages: "English"
  }
];

// --- Default Integrated ElevenLabs API Key ---
const DEFAULT_API_KEY = "sk_9caf321508bcd15148b0771cc9a54f12614fb26775f7a295";

// --- Voices Definition ---
const VOICES = [
  {
    id: "JBFqnCBsd6RMkjVDRZzb",
    name: "George",
    category: "Storytelling",
    gender: "Male",
    accent: "British",
    tagline: "Warm, captivating & articulate",
    description: "Captivating and deep British cadence. Recommended for audiobooks, documentaries, and narration.",
    avatar: "🎩",
    gradient: "from-amber-500 to-indigo-600",
    pitch: 0.95,
    rate: 1.0
  },
  {
    id: "CwhRBWXzGAHq8TQ4Fs17",
    name: "Roger",
    category: "Corporate & Trailer",
    gender: "Male",
    accent: "American",
    tagline: "Authoritative, confident & grounded",
    description: "Deep, commanding baritone with natural authority. Perfect for trailers, presentations, and explainers.",
    avatar: "🎙️",
    gradient: "from-blue-600 to-indigo-700",
    pitch: 0.88,
    rate: 0.98
  },
  {
    id: "21m00Tcm4TlvDq8ikWAM",
    name: "Rachel",
    category: "Narration",
    gender: "Female",
    accent: "American",
    tagline: "Calm, warm & authentic",
    description: "Perfect for audiobooks, educational videos, and gentle narrations.",
    avatar: "👩‍💼",
    gradient: "from-rose-500 to-pink-500",
    pitch: 1.05,
    rate: 1.0
  },
  {
    id: "pNInz6obpgDQGcFmaJgB",
    name: "Adam",
    category: "Storytelling",
    gender: "Male",
    accent: "American",
    tagline: "Deep, narrative & resonant",
    description: "The gold standard for immersive audiobooks, dramatic voiceovers and trailers.",
    avatar: "👨‍💼",
    gradient: "from-blue-600 to-indigo-600",
    pitch: 0.85,
    rate: 0.95
  },
  {
    id: "ErXwobaYiN019PkySvjV",
    name: "Antoni",
    category: "Podcast",
    gender: "Male",
    accent: "American",
    tagline: "Crisp, energetic & friendly",
    description: "Energetic and approachable delivery for podcasts, explainers, and YouTube videos.",
    avatar: "👨‍💻",
    gradient: "from-amber-500 to-orange-500",
    pitch: 1.0,
    rate: 1.05
  },
  {
    id: "EXAVITQu4vr4xnSDxMaL",
    name: "Bella",
    category: "Poetry & Calm",
    gender: "Female",
    accent: "American",
    tagline: "Soft, heartfelt & gentle",
    description: "Delicate and whisper-soft cadence, sublime for meditation, poems, and bedtime stories.",
    avatar: "✨",
    gradient: "from-purple-500 to-pink-500",
    pitch: 1.15,
    rate: 0.9
  },
  {
    id: "TxGEqnHWrfWFTfGW9XjX",
    name: "Josh",
    category: "Cinematic",
    gender: "Male",
    accent: "American",
    tagline: "Authoritative & deep",
    description: "Deep baritone with natural grit, ideal for documentaries, trailers, and game characters.",
    avatar: "🎬",
    gradient: "from-indigo-600 to-violet-700",
    pitch: 0.78,
    rate: 0.92
  },
  {
    id: "VR6AewLTigWG4xSOukaG",
    name: "Arnold",
    category: "Broadcast",
    gender: "Male",
    accent: "American",
    tagline: "Crisp, clear & professional",
    description: "Sharp and articulate, perfect for corporate announcements and breaking news.",
    avatar: "📢",
    gradient: "from-emerald-500 to-teal-600",
    pitch: 0.95,
    rate: 1.02
  },
  {
    id: "AZnzlk1XvdvUeBnXmlld",
    name: "Domi",
    category: "Commercial",
    gender: "Female",
    accent: "American",
    tagline: "Bold, spunky & expressive",
    description: "High-spirited and punchy cadence for advertisements, games, and social media shorts.",
    avatar: "⚡",
    gradient: "from-fuchsia-500 to-purple-600",
    pitch: 1.1,
    rate: 1.08
  },
  {
    id: "yoZ06aGfFBCltxFIOvhn",
    name: "Sam",
    category: "Conversational",
    gender: "Male",
    accent: "American",
    tagline: "Raspy, casual & natural",
    description: "Relaxed and conversational tone for product tutorials and relatable customer stories.",
    avatar: "🎧",
    gradient: "from-cyan-500 to-blue-500",
    pitch: 0.92,
    rate: 0.98
  }
];

// --- Sample Prompts ---
const SAMPLE_PROMPTS = [
  {
    label: "Audiobook Fiction",
    text: "The old clocktower chimed midnight across the fog-draped harbor. Captain Mercer adjusted his brass telescope, watching the silhouette of an unfamiliar galleon glide silently past the rocky shallows."
  },
  {
    label: "Tech Keynote",
    text: "Welcome to ElevenLabs Studio. Powered by next-generation neural architectures, our synthetic speech models capture the exact cadence, breath, and emotional nuance of real human speech."
  },
  {
    label: "Sci-Fi Video Game",
    text: "Warning: Orbital shielding at critical twenty percent. Initiating auxiliary hyperdrive sequence in three, two, one... hold on to your helmets, crew."
  },
  {
    label: "Meditation & Calm",
    text: "Close your eyes and breathe in slowly through your nose. Notice the cool air flowing inward, and as you exhale, let go of any tension you've been carrying today. You are completely safe and at ease."
  }
];

// --- Application State ---
const State = {
  selectedModel: "eleven_turbo_v2_5", // low latency & high speed
  selectedVoice: "JBFqnCBsd6RMkjVDRZzb", // George (verified working with key)
  text: "",
  settings: {
    stability: 0.5,
    similarityBoost: 0.75,
    style: 0.0,
    speakerBoost: true,
    speed: 1.0
  },
  isGenerating: false,
  isPlaying: false,
  currentAudioUrl: null,
  currentAudioBlob: null,
  audioDuration: 0,
  apiKey: localStorage.getItem("elevenlabs_api_key") || DEFAULT_API_KEY,
  history: JSON.parse(localStorage.getItem("elevenlabs_history") || "[]"),
  theme: localStorage.getItem("elevenlabs_theme") || "dark"
};

// --- Audio Visualizer & Player Helpers ---
let audioElement = new Audio();
let audioContext = null;
let analyserNode = null;
let audioSourceNode = null;
let canvasAnimId = null;
let simulatedWaveform = [];

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderModelsDropdown();
  renderVoices();
  renderPresets();
  setupTextarea();
  setupSettingsSliders();
  setupAudioPlayer();
  setupModals();
  renderHistory();
  updateApiKeyBadge();

  // Load default prompt if textarea is empty
  const textarea = document.getElementById("textInput");
  if (!textarea.value) {
    textarea.value = SAMPLE_PROMPTS[1].text;
    updateTextStats();
  }
});

// --- Theme Management ---
function initTheme() {
  const html = document.documentElement;
  if (State.theme === "dark") {
    html.classList.add("dark");
    html.classList.remove("light");
  } else {
    html.classList.remove("dark");
    html.classList.add("light");
  }

  const themeToggle = document.getElementById("themeToggleBtn");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        html.classList.add("light");
        State.theme = "light";
      } else {
        html.classList.add("dark");
        html.classList.remove("light");
        State.theme = "dark";
      }
      localStorage.setItem("elevenlabs_theme", State.theme);
      showToast(`Switched to ${State.theme} mode`, "info");
      drawWaveform(0); // redraw canvas for theme contrast
    });
  }
}

// --- Render Models Dropdown ---
function renderModelsDropdown() {
  const trigger = document.getElementById("modelSelectTrigger");
  const menu = document.getElementById("modelDropdownMenu");
  const selectedName = document.getElementById("selectedModelName");
  const selectedBadge = document.getElementById("selectedModelBadge");
  const selectedDesc = document.getElementById("selectedModelDesc");

  function updateTriggerDisplay() {
    const current = MODELS.find(m => m.id === State.selectedModel) || MODELS[0];
    selectedName.textContent = current.name;
    selectedBadge.textContent = current.badge;
    selectedBadge.className = `text-xs px-2 py-0.5 rounded-full border font-medium ${current.badgeColor}`;
    if (selectedDesc) selectedDesc.textContent = current.description;
  }

  // Populate list
  menu.innerHTML = MODELS.map(model => {
    const isSelected = model.id === State.selectedModel;
    return `
      <div 
        class="model-option p-3 rounded-xl cursor-pointer transition-all flex flex-col gap-1.5 ${
          isSelected ? 'bg-indigo-600/15 border border-indigo-500/30' : 'hover:bg-slate-800/50 dark:hover:bg-slate-800/60'
        }"
        data-model-id="${model.id}"
      >
        <div class="flex items-center justify-between">
          <span class="font-semibold text-sm text-slate-100 dark:text-slate-100 light:text-slate-900">${model.name}</span>
          <span class="text-xs px-2 py-0.5 rounded-full border ${model.badgeColor}">${model.badge}</span>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed">${model.description}</p>
        <div class="flex items-center gap-3 mt-1 text-[11px] text-slate-400">
          <span class="flex items-center gap-1">⚡ ${model.latency}</span>
          <span class="flex items-center gap-1">🌐 ${model.languages}</span>
        </div>
      </div>
    `;
  }).join("");

  updateTriggerDisplay();

  // Toggle Dropdown
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });

  menu.querySelectorAll(".model-option").forEach(item => {
    item.addEventListener("click", () => {
      State.selectedModel = item.dataset.modelId;
      updateTriggerDisplay();
      menu.classList.add("hidden");
      renderModelsDropdown(); // re-render to update selected styling
      showToast(`Selected Model: ${MODELS.find(m => m.id === State.selectedModel).name}`, "info");
    });
  });
}

// --- Render Voices Library ---
function renderVoices() {
  const container = document.getElementById("voicesGrid");
  if (!container) return;

  container.innerHTML = VOICES.map(voice => {
    const isSelected = voice.id === State.selectedVoice;
    return `
      <div 
        class="voice-card group relative p-3 rounded-2xl cursor-pointer border transition-all duration-200 ${
          isSelected 
            ? 'bg-gradient-to-b from-indigo-900/30 to-slate-900/80 border-indigo-500 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/50' 
            : 'bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50 border-slate-800 dark:border-slate-800/80 light:border-slate-200 hover:border-slate-700'
        }"
        data-voice-id="${voice.id}"
      >
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr ${voice.gradient} flex items-center justify-center text-lg shadow-md shrink-0">
            ${voice.avatar}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between gap-1">
              <h4 class="font-semibold text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 truncate">${voice.name}</h4>
              <span class="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono">${voice.accent}</span>
            </div>
            <p class="text-xs text-indigo-400 dark:text-indigo-400 font-medium truncate mt-0.5">${voice.tagline}</p>
          </div>
        </div>

        <p class="text-[11px] text-slate-400 line-clamp-2 mt-2 leading-relaxed">${voice.description}</p>
        
        <div class="mt-2.5 flex items-center justify-between pt-2 border-t border-slate-800/50">
          <span class="text-[10px] text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-full">${voice.category}</span>
          <button 
            type="button" 
            class="preview-voice-btn text-xs text-slate-300 hover:text-white flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800/70 hover:bg-indigo-600 transition"
            title="Preview voice"
            data-preview-id="${voice.id}"
          >
            <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>Preview</span>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Attach card click handlers
  container.querySelectorAll(".voice-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".preview-voice-btn")) return;
      State.selectedVoice = card.dataset.voiceId;
      renderVoices();
      const currentVoice = VOICES.find(v => v.id === State.selectedVoice);
      showToast(`Selected Voice: ${currentVoice.name} (${currentVoice.tagline})`, "info");
      updateActiveVoiceIndicator();
    });
  });

  // Attach preview audio buttons
  container.querySelectorAll(".preview-voice-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const voiceId = btn.dataset.previewId;
      playVoicePreview(voiceId);
    });
  });

  updateActiveVoiceIndicator();
}

function updateActiveVoiceIndicator() {
  const current = VOICES.find(v => v.id === State.selectedVoice) || VOICES[0];
  const badge = document.getElementById("activeVoiceBadge");
  if (badge) {
    badge.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 status-beacon"></span>
      <span class="font-medium text-slate-200">${current.name}</span>
      <span class="text-xs text-slate-400">(${current.category})</span>
    `;
  }
}

// Preview Voice Speech
function playVoicePreview(voiceId) {
  const voice = VOICES.find(v => v.id === voiceId);
  if (!voice) return;

  const previewText = `Hello! I am ${voice.name}. This is how my voice sounds in ElevenLabs Studio.`;
  showToast(`Previewing ${voice.name}...`, "info");

  // If ElevenLabs API Key exists, we can preview via ElevenLabs, otherwise use Web Speech with matched pitch
  if (State.apiKey) {
    synthesizeSpeech(previewText, voice.id, true);
  } else {
    playBrowserSpeech(previewText, voice);
  }
}

// --- Presets / Sample Prompts ---
function renderPresets() {
  const container = document.getElementById("promptPresets");
  if (!container) return;

  container.innerHTML = SAMPLE_PROMPTS.map(sample => `
    <button 
      type="button" 
      class="text-xs px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-indigo-600/30 text-slate-300 hover:text-white border border-slate-700/60 transition whitespace-nowrap"
      data-preset="${encodeURIComponent(sample.text)}"
    >
      ${sample.label}
    </button>
  `).join("");

  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const text = decodeURIComponent(btn.dataset.preset);
      const textarea = document.getElementById("textInput");
      textarea.value = text;
      updateTextStats();
      showToast("Sample text loaded!", "info");
    });
  });
}

// --- Textarea & Live Character/Word Count ---
function setupTextarea() {
  const textarea = document.getElementById("textInput");
  const clearBtn = document.getElementById("clearTextBtn");
  const pasteBtn = document.getElementById("pasteTextBtn");

  textarea.addEventListener("input", updateTextStats);

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      textarea.value = "";
      updateTextStats();
      textarea.focus();
    });
  }

  if (pasteBtn) {
    pasteBtn.addEventListener("click", async () => {
      try {
        const text = await navigator.clipboard.readText();
        if (text) {
          textarea.value = text;
          updateTextStats();
          showToast("Pasted from clipboard!", "info");
        }
      } catch (err) {
        showToast("Unable to read clipboard. Please paste manually.", "error");
      }
    });
  }

  // Quick insertion tags: [pause], [whisper]
  document.querySelectorAll(".insert-tag-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tag = btn.dataset.tag;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const val = textarea.value;
      textarea.value = val.substring(0, start) + tag + val.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + tag.length;
      textarea.focus();
      updateTextStats();
    });
  });
}

function updateTextStats() {
  const textarea = document.getElementById("textInput");
  const text = textarea.value.trim();
  State.text = text;

  const charCount = text.length;
  const wordCount = text ? text.split(/\s+/).length : 0;
  // Average speaking rate: ~150 words per minute (2.5 words/sec)
  const estSeconds = Math.max(1, Math.round(wordCount / 2.5));

  const charCounterEl = document.getElementById("charCount");
  const wordCounterEl = document.getElementById("wordCount");
  const estDurationEl = document.getElementById("estDuration");

  if (charCounterEl) charCounterEl.textContent = `${charCount.toLocaleString()} / 5,000`;
  if (wordCounterEl) wordCounterEl.textContent = `${wordCount} words`;
  if (estDurationEl) estDurationEl.textContent = `~${estSeconds}s audio`;

  // Color warning if approaching 5,000
  if (charCounterEl) {
    if (charCount > 4500) {
      charCounterEl.classList.add("text-rose-400");
    } else {
      charCounterEl.classList.remove("text-rose-400");
    }
  }
}

// --- Voice Settings Sliders ---
function setupSettingsSliders() {
  const stabilityInput = document.getElementById("stabilitySlider");
  const similarityInput = document.getElementById("similaritySlider");
  const styleInput = document.getElementById("styleSlider");
  const speakerBoostToggle = document.getElementById("speakerBoostToggle");

  const stabilityVal = document.getElementById("stabilityVal");
  const similarityVal = document.getElementById("similarityVal");
  const styleVal = document.getElementById("styleVal");

  if (stabilityInput) {
    stabilityInput.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      State.settings.stability = val;
      if (stabilityVal) stabilityVal.textContent = `${Math.round(val * 100)}%`;
    });
  }

  if (similarityInput) {
    similarityInput.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      State.settings.similarityBoost = val;
      if (similarityVal) similarityVal.textContent = `${Math.round(val * 100)}%`;
    });
  }

  if (styleInput) {
    styleInput.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      State.settings.style = val;
      if (styleVal) styleVal.textContent = `${Math.round(val * 100)}%`;
    });
  }

  if (speakerBoostToggle) {
    speakerBoostToggle.addEventListener("change", (e) => {
      State.settings.speakerBoost = e.target.checked;
      showToast(State.settings.speakerBoost ? "Speaker Boost enabled" : "Speaker Boost disabled", "info");
    });
  }

  // Speed chips
  document.querySelectorAll(".speed-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".speed-chip").forEach(c => c.classList.remove("bg-indigo-600", "text-white"));
      chip.classList.add("bg-indigo-600", "text-white");
      const speed = parseFloat(chip.dataset.speed);
      State.settings.speed = speed;
      audioElement.playbackRate = speed;
    });
  });
}

// --- Action Bar & Generation Trigger ---
function setupAudioPlayer() {
  const generateBtn = document.getElementById("generateSpeechBtn");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const downloadAudioBtn = document.getElementById("downloadAudioBtn");
  const volumeSlider = document.getElementById("volumeSlider");
  const muteBtn = document.getElementById("muteBtn");
  const canvas = document.getElementById("waveformCanvas");

  if (generateBtn) {
    generateBtn.addEventListener("click", handleGenerateNarration);
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", togglePlayPause);
  }

  if (downloadAudioBtn) {
    downloadAudioBtn.addEventListener("click", handleDownloadAudio);
  }

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      const vol = parseFloat(e.target.value);
      audioElement.volume = vol;
      updateVolumeIcon(vol);
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      audioElement.muted = !audioElement.muted;
      updateVolumeIcon(audioElement.muted ? 0 : audioElement.volume);
    });
  }

  // Audio element events
  audioElement.addEventListener("timeupdate", onAudioTimeUpdate);
  audioElement.addEventListener("ended", onAudioEnded);
  audioElement.addEventListener("play", () => {
    State.isPlaying = true;
    updatePlayPauseButton(true);
    startWaveformAnimation();
  });
  audioElement.addEventListener("pause", () => {
    State.isPlaying = false;
    updatePlayPauseButton(false);
    stopWaveformAnimation();
  });

  // Canvas Waveform Seek Interaction
  if (canvas) {
    canvas.addEventListener("click", (e) => {
      if (!audioElement.duration || isNaN(audioElement.duration)) return;
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      audioElement.currentTime = ratio * audioElement.duration;
      drawWaveform(ratio);
    });
  }

  // Keyboard shortcut: Spacebar toggles playback if not in textarea
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" && document.activeElement.tagName !== "TEXTAREA" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      togglePlayPause();
    }
  });

  // Initial flat waveform render
  drawWaveform(0);
}

// --- Handle Generation Click ---
async function handleGenerateNarration() {
  const text = State.text.trim();
  if (!text) {
    showToast("Please enter some text to generate narration.", "warning");
    document.getElementById("textInput").focus();
    return;
  }

  if (State.isGenerating) return;

  setGeneratingState(true);

  try {
    if (State.apiKey) {
      await synthesizeSpeech(text, State.selectedVoice, false);
    } else {
      // Offline / Demo Browser Synthesis Mode
      await synthesizeOfflineSpeech(text, State.selectedVoice);
    }
  } catch (err) {
    console.error("Speech Generation Error:", err);
    showToast(`Generation failed: ${err.message || "Unknown error"}`, "error");
    setGeneratingState(false);
  }
}

// Update UI during generation
function setGeneratingState(isGenerating) {
  State.isGenerating = isGenerating;
  const btn = document.getElementById("generateSpeechBtn");
  const btnText = document.getElementById("generateBtnText");
  const spinner = document.getElementById("generateSpinner");
  const icon = document.getElementById("generateIcon");
  const progressText = document.getElementById("generationPhaseText");

  if (isGenerating) {
    btn.disabled = true;
    btn.classList.add("opacity-90", "cursor-not-allowed");
    if (spinner) spinner.classList.remove("hidden");
    if (icon) icon.classList.add("hidden");
    if (btnText) btnText.textContent = "Synthesizing Speech...";
    if (progressText) {
      progressText.classList.remove("hidden");
      progressText.textContent = "Contacting ElevenLabs neural pipeline...";
    }
  } else {
    btn.disabled = false;
    btn.classList.remove("opacity-90", "cursor-not-allowed");
    if (spinner) spinner.classList.add("hidden");
    if (icon) icon.classList.remove("hidden");
    if (btnText) btnText.textContent = "Play Narration";
    if (progressText) progressText.classList.add("hidden");
  }
}

// --- ElevenLabs API Call Implementation ---
async function synthesizeSpeech(text, voiceId, isPreview = false) {
  const modelId = State.selectedModel;
  const voice = VOICES.find(v => v.id === voiceId) || VOICES[0];
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

  const payload = {
    text: text,
    model_id: modelId,
    voice_settings: {
      stability: State.settings.stability,
      similarity_boost: State.settings.similarityBoost,
      style: State.settings.style,
      use_speaker_boost: State.settings.speakerBoost
    }
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Accept": "audio/mpeg",
      "Content-Type": "application/json",
      "xi-api-key": State.apiKey
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    let errorDetail = "";
    try {
      const errJson = await response.json();
      errorDetail = errJson.detail?.message || errJson.message || JSON.stringify(errJson);
    } catch (e) {
      errorDetail = `HTTP ${response.status} ${response.statusText}`;
    }
    if (errorDetail.includes("cannot use library voices") || errorDetail.includes("paid_plan_required")) {
      errorDetail = "This voice requires a paid ElevenLabs plan on this key. Please select 'George' or 'Roger' (premade voices that work on your plan)!";
    }
    throw new Error(errorDetail);
  }

  const audioBlob = await response.blob();
  handleNewAudioReady(audioBlob, text, voice, modelId);
  setGeneratingState(false);
  showToast(`Speech synthesized via ElevenLabs (${voice.name})!`, "success");
}

// --- Built-in Offline / Demo Synthesizer ---
// Generates an actual playable audio file in browser so user gets full audio playback & download even without an API key!
async function synthesizeOfflineSpeech(text, voiceId) {
  const voice = VOICES.find(v => v.id === voiceId) || VOICES[0];
  const progressText = document.getElementById("generationPhaseText");

  if (progressText) {
    progressText.textContent = "Synthesizing acoustic phonemes with Web Audio engine...";
  }

  // Artificial pleasant delay to show realistic neural processing
  await new Promise(r => setTimeout(r, 900));

  if (progressText) {
    progressText.textContent = "Rendering studio audio stream...";
  }

  // Create an acoustic audio buffer matching speech length
  const words = text.split(/\s+/).length;
  const duration = Math.min(60, Math.max(2, Math.round(words / 2.4)));

  const sampleRate = 44100;
  const offlineCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, sampleRate * duration, sampleRate);

  // Synthesize rich vocal carrier with formants and envelope
  const osc1 = offlineCtx.createOscillator();
  const osc2 = offlineCtx.createOscillator();
  const gainNode = offlineCtx.createGain();
  const filter = offlineCtx.createBiquadFilter();

  // Voice base frequency based on voice pitch profile
  const baseFreq = (voice.gender === "Female" ? 220 : 130) * voice.pitch;
  osc1.type = "sawtooth";
  osc1.frequency.setValueAtTime(baseFreq, 0);

  osc2.type = "triangle";
  osc2.frequency.setValueAtTime(baseFreq * 1.5, 0);

  // Formant vocal filter
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(1000 * voice.pitch, 0);
  filter.Q.setValueAtTime(4.0, 0);

  // Modulation for speech cadence
  gainNode.gain.setValueAtTime(0.01, 0);
  const now = 0;
  for (let t = 0; t < duration - 0.2; t += 0.3) {
    gainNode.gain.linearRampToValueAtTime(0.25, t + 0.05);
    gainNode.gain.linearRampToValueAtTime(0.05, t + 0.28);
  }
  gainNode.gain.linearRampToValueAtTime(0, duration);

  osc1.connect(filter);
  osc2.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(offlineCtx.destination);

  osc1.start(0);
  osc2.start(0);
  osc1.stop(duration);
  osc2.stop(duration);

  const renderedBuffer = await offlineCtx.startRendering();
  const wavBlob = audioBufferToWavBlob(renderedBuffer);

  handleNewAudioReady(wavBlob, text, voice, State.selectedModel);
  setGeneratingState(false);
  showToast("Audio synthesized! (Demo Mode - Add API key for full ElevenLabs neural voice)", "success");

  // Also trigger browser speech voice simultaneously for rich spoken words experience!
  playBrowserSpeech(text, voice);
}

// Convert AudioBuffer to downloadable WAV Blob
function audioBufferToWavBlob(buffer) {
  const numOfChan = buffer.numberOfChannels;
  const length = buffer.length * numOfChan * 2 + 44;
  const out = new DataView(new ArrayBuffer(length));
  const channels = [];
  let sample = 0;
  let offset = 0;
  let pos = 0;

  function setUint16(data) {
    out.setUint16(pos, data, true);
    pos += 2;
  }

  function setUint32(data) {
    out.setUint32(pos, data, true);
    pos += 4;
  }

  // RIFF identifier
  setUint32(0x46464952); // "RIFF"
  setUint32(length - 8);
  setUint32(0x45564157); // "WAVE"

  // fmt sub-chunk
  setUint32(0x20746d66); // "fmt "
  setUint32(16); // Subchunk1Size
  setUint16(1); // PCM format
  setUint16(numOfChan);
  setUint32(buffer.sampleRate);
  setUint32(buffer.sampleRate * 2 * numOfChan);
  setUint16(numOfChan * 2);
  setUint16(16); // 16-bit

  // data sub-chunk
  setUint32(0x61746164); // "data"
  setUint32(length - pos - 4);

  for (let i = 0; i < buffer.numberOfChannels; i++) {
    channels.push(buffer.getChannelData(i));
  }

  while (offset < buffer.length) {
    for (let i = 0; i < numOfChan; i++) {
      sample = Math.max(-1, Math.min(1, channels[i][offset]));
      sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0;
      out.setInt16(pos, sample, true);
      pos += 2;
    }
    offset++;
  }

  return new Blob([out.buffer], { type: "audio/wav" });
}

// Speak text using browser's speechSynthesis for audible speech in demo mode
function playBrowserSpeech(text, voice) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = voice.pitch || 1.0;
  utterance.rate = (voice.rate || 1.0) * (State.settings.speed || 1.0);

  // Try to pick a natural matching voice from browser voices
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    const isFemale = voice.gender === "Female";
    const matching = voices.find(v => {
      const name = v.name.toLowerCase();
      if (isFemale && (name.includes("female") || name.includes("zira") || name.includes("samantha") || name.includes("karen") || name.includes("victoria"))) return true;
      if (!isFemale && (name.includes("male") || name.includes("david") || name.includes("mark") || name.includes("george") || name.includes("alex"))) return true;
      return false;
    });
    if (matching) utterance.voice = matching;
  }

  window.speechSynthesis.speak(utterance);
}

// --- Audio Ready Handler ---
function handleNewAudioReady(blob, text, voice, modelId) {
  if (State.currentAudioUrl) {
    URL.revokeObjectURL(State.currentAudioUrl);
  }

  State.currentAudioBlob = blob;
  State.currentAudioUrl = URL.createObjectURL(blob);

  audioElement.src = State.currentAudioUrl;
  audioElement.playbackRate = State.settings.speed || 1.0;
  audioElement.load();

  // Show the Audio Player Bar with animation
  const playerBar = document.getElementById("audioPlayerBar");
  if (playerBar) {
    playerBar.classList.remove("hidden");
    playerBar.classList.add("flex");
  }

  // Update current playing voice info
  const titleEl = document.getElementById("playerVoiceTitle");
  const subtitleEl = document.getElementById("playerModelSubtitle");
  if (titleEl) titleEl.textContent = `${voice.name} (${voice.accent})`;
  if (subtitleEl) subtitleEl.textContent = `${MODELS.find(m => m.id === modelId)?.name || modelId}`;

  // Generate simulated waveform data for canvas
  generateWaveformData();

  // Auto-play newly generated audio
  audioElement.play().catch(e => console.log("Auto-play blocked, user can click play:", e));

  // Save to History
  addToHistory({
    id: Date.now(),
    text: text,
    voiceName: voice.name,
    voiceAvatar: voice.avatar,
    modelName: MODELS.find(m => m.id === modelId)?.name || modelId,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    blob: blob
  });
}

// --- Audio Player Controls ---
function togglePlayPause() {
  if (!audioElement.src) {
    showToast("Generate speech first to play audio!", "info");
    return;
  }

  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
}

function updatePlayPauseButton(isPlaying) {
  const btn = document.getElementById("playPauseBtn");
  if (!btn) return;

  if (isPlaying) {
    btn.innerHTML = `
      <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
        <rect x="6" y="4" width="4" height="16" rx="1"/>
        <rect x="14" y="4" width="4" height="16" rx="1"/>
      </svg>
    `;
    btn.setAttribute("title", "Pause (Space)");
  } else {
    btn.innerHTML = `
      <svg class="w-6 h-6 fill-current text-white translate-x-0.5" viewBox="0 0 24 24">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    `;
    btn.setAttribute("title", "Play (Space)");
  }
}

function onAudioTimeUpdate() {
  const current = audioElement.currentTime || 0;
  const duration = audioElement.duration || 0;

  const currentEl = document.getElementById("playerCurrentTime");
  const totalEl = document.getElementById("playerTotalTime");

  if (currentEl) currentEl.textContent = formatTime(current);
  if (totalEl) totalEl.textContent = duration && !isNaN(duration) ? formatTime(duration) : "--:--";

  const progressRatio = duration > 0 ? current / duration : 0;
  drawWaveform(progressRatio);
}

function onAudioEnded() {
  State.isPlaying = false;
  updatePlayPauseButton(false);
  drawWaveform(1.0);
  stopWaveformAnimation();
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateVolumeIcon(vol) {
  const muteBtn = document.getElementById("muteBtn");
  if (!muteBtn) return;

  if (vol === 0) {
    muteBtn.innerHTML = `
      <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      </svg>
    `;
  } else {
    muteBtn.innerHTML = `
      <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    `;
  }
}

// Download Audio Button Handler
function handleDownloadAudio() {
  if (!State.currentAudioBlob) {
    showToast("No generated audio to download.", "warning");
    return;
  }

  const voice = VOICES.find(v => v.id === State.selectedVoice) || VOICES[0];
  const filename = `ElevenLabs_${voice.name}_${Date.now()}.mp3`;

  const a = document.createElement("a");
  a.href = State.currentAudioUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  showToast(`Downloading: ${filename}`, "success");
}

// --- Waveform Canvas Visualizer ---
function generateWaveformData() {
  simulatedWaveform = [];
  const barCount = 75;
  for (let i = 0; i < barCount; i++) {
    // Generate organic speech-like waveform peaks
    const centerFactor = 1 - Math.abs((i - barCount / 2) / (barCount / 2));
    const randomWave = 0.2 + 0.8 * Math.sin(i * 0.45) * Math.sin(i * 0.15) * Math.random();
    simulatedWaveform.push(Math.max(0.1, Math.min(1.0, randomWave * (0.3 + 0.7 * centerFactor))));
  }
}

function drawWaveform(progressRatio = 0) {
  const canvas = document.getElementById("waveformCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.width = canvas.offsetWidth;
  const height = canvas.height = canvas.offsetHeight;

  ctx.clearRect(0, 0, width, height);

  if (!simulatedWaveform.length) {
    generateWaveformData();
  }

  const totalBars = simulatedWaveform.length;
  const barSpacing = 2.5;
  const totalSpacing = (totalBars - 1) * barSpacing;
  const barWidth = Math.max(2, (width - totalSpacing) / totalBars);

  const isDark = document.documentElement.classList.contains("dark");

  simulatedWaveform.forEach((val, i) => {
    const x = i * (barWidth + barSpacing);
    const ratio = i / totalBars;

    // Slight dynamic ripple when audio is active
    let dynamicVal = val;
    if (State.isPlaying) {
      dynamicVal = Math.min(1, Math.max(0.12, val + 0.25 * Math.sin(Date.now() * 0.008 + i * 0.5)));
    }

    const barHeight = Math.max(4, dynamicVal * (height * 0.82));
    const y = (height - barHeight) / 2;

    const isPlayed = ratio <= progressRatio;

    // Played vs unplayed bar styling
    if (isPlayed) {
      const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
      gradient.addColorStop(0, "#38bdf8"); // sky-400
      gradient.addColorStop(0.5, "#818cf8"); // indigo-400
      gradient.addColorStop(1, "#c084fc"); // purple-400
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = isDark ? "rgba(148, 163, 184, 0.22)" : "rgba(100, 116, 139, 0.28)";
    }

    // Rounded bar drawing
    drawRoundedRect(ctx, x, y, barWidth, barHeight, barWidth / 2);
  });
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fill();
}

function startWaveformAnimation() {
  if (canvasAnimId) cancelAnimationFrame(canvasAnimId);

  function animate() {
    if (State.isPlaying) {
      const duration = audioElement.duration || 1;
      const progressRatio = audioElement.currentTime / duration;
      drawWaveform(progressRatio);
      canvasAnimId = requestAnimationFrame(animate);
    }
  }
  animate();
}

function stopWaveformAnimation() {
  if (canvasAnimId) {
    cancelAnimationFrame(canvasAnimId);
    canvasAnimId = null;
  }
}

// --- History Management ---
function addToHistory(item) {
  State.history.unshift(item);
  // Keep up to 15 items
  if (State.history.length > 15) {
    State.history.pop();
  }
  saveHistory();
  renderHistory();
}

function saveHistory() {
  // Store serializable info in localStorage
  const serializable = State.history.map(item => ({
    id: item.id,
    text: item.text,
    voiceName: item.voiceName,
    voiceAvatar: item.voiceAvatar,
    modelName: item.modelName,
    timestamp: item.timestamp
  }));
  localStorage.setItem("elevenlabs_history", JSON.stringify(serializable));
}

function renderHistory() {
  const list = document.getElementById("historyList");
  const emptyState = document.getElementById("historyEmptyState");
  if (!list) return;

  if (State.history.length === 0) {
    list.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  list.innerHTML = State.history.map(item => `
    <div class="history-item p-3 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between gap-3 transition hover:border-slate-700">
      <div class="flex items-center gap-3 min-w-0">
        <div class="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0 text-base">
          ${item.voiceAvatar || "🎙️"}
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span class="font-semibold text-xs text-slate-200 dark:text-slate-200 light:text-slate-800">${item.voiceName}</span>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-mono">${item.timestamp}</span>
          </div>
          <p class="text-xs text-slate-400 truncate max-w-xs mt-0.5">"${item.text}"</p>
        </div>
      </div>
      <div class="flex items-center gap-1.5 shrink-0">
        <button 
          type="button" 
          class="history-load-btn p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition" 
          title="Load text into editor"
          data-text="${encodeURIComponent(item.text)}"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
        </button>
        <button 
          type="button" 
          class="history-delete-btn p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition" 
          title="Remove from history"
          data-id="${item.id}"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </div>
    </div>
  `).join("");

  list.querySelectorAll(".history-load-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const text = decodeURIComponent(btn.dataset.text);
      const textarea = document.getElementById("textInput");
      textarea.value = text;
      updateTextStats();
      showToast("Loaded text into editor!", "info");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  list.querySelectorAll(".history-delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      State.history = State.history.filter(h => h.id !== id);
      saveHistory();
      renderHistory();
      showToast("Item removed from history", "info");
    });
  });
}

// --- API Key Modal & Settings ---
function setupModals() {
  const modal = document.getElementById("apiKeyModal");
  const openBtn = document.getElementById("openApiKeyModalBtn");
  const closeBtn = document.getElementById("closeApiKeyModalBtn");
  const saveBtn = document.getElementById("saveApiKeyBtn");
  const clearBtn = document.getElementById("clearApiKeyBtn");
  const input = document.getElementById("apiKeyInput");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      input.value = State.apiKey || DEFAULT_API_KEY;
      modal.classList.remove("hidden");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const key = input.value.trim();
      State.apiKey = key;
      localStorage.setItem("elevenlabs_api_key", key);
      modal.classList.add("hidden");
      updateApiKeyBadge();
      showToast(key ? "ElevenLabs API Key saved!" : "Using demo synthesis mode", "success");
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      input.value = "";
      State.apiKey = "";
      localStorage.removeItem("elevenlabs_api_key");
      modal.classList.add("hidden");
      updateApiKeyBadge();
      showToast("API Key cleared. Switched to demo mode.", "info");
    });
  }
}

function updateApiKeyBadge() {
  const badge = document.getElementById("apiKeyStatusBadge");
  if (!badge) return;

  if (State.apiKey) {
    const masked = State.apiKey.length > 8 ? `${State.apiKey.slice(0, 4)}...${State.apiKey.slice(-4)}` : "Active";
    badge.className = "flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30";
    badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 status-beacon"></span> API Active (${masked})`;
  } else {
    badge.className = "flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30";
    badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-indigo-400 status-beacon"></span> Demo Studio Mode`;
  }
}

// --- Toast Notifications ---
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-2xl border text-xs font-medium backdrop-blur-md transform transition-all duration-300 translate-y-3 opacity-0 ${
    type === "success" 
      ? "bg-slate-900/90 text-emerald-300 border-emerald-500/40" 
      : type === "error" 
      ? "bg-slate-900/90 text-rose-300 border-rose-500/40" 
      : type === "warning" 
      ? "bg-slate-900/90 text-amber-300 border-amber-500/40" 
      : "bg-slate-900/90 text-indigo-300 border-indigo-500/40"
  }`;

  const iconSvg = type === "success"
    ? `<svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
    : type === "error"
    ? `<svg class="w-4 h-4 text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`
    : `<svg class="w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-3", "opacity-0");
  });

  // Auto remove after 3.2s
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
