(() => {
  "use strict";
  const CONFIG = { fatherBirthday: "0505", motherBirthday: "2010", youngerSisterBirthday: "3011", photoDate: "02032021", finalWord: "CAR", videoUrl: "" };
  let currentRole = null;
  let stageIndex = 0;
  const $ = (id) => document.getElementById(id);
  function show(id) {
    ["welcome", "letter", "stage", "final"].forEach((sectionId) => {
      const section = $(sectionId);
      if (section) section.classList.toggle("hidden", sectionId !== id);
    });
  }
  function photo(src, alt, caption) {
    return '<figure class="memory-card"><img class="memory-img" src="' + src + '" alt="' + alt + '"><figcaption class="memory-caption">' + caption + '</figcaption></figure>';
  }
  function openLetter(role) {
    currentRole = role;
    $("letterKicker").textContent = role === "father" ? "A letter for Appa" : "A letter for Amma";
    $("letterTitle").textContent = role === "father" ? "ഒരു വെളിച്ചത്തിന്റെ ഓർമ്മ" : "ഒരു തണലിന്റെ ഓർമ്മ";
    $("poem").textContent = role === "father"
      ? "ഇരുളിൽ വഴിയറിയാതെ നിന്നൊരു യാത്രയിൽ,\nപ്രഭയായ് കടന്നുവന്നവൾ…\nതളർന്നുപോയ നാളുകളിൽ പ്രതീക്ഷയായ്,\nജീവിതത്തിൽ പുതുവസന്തമായ് മാറിയവൾ…\n\nആ വെളിച്ചത്തിന്റെ ജന്മദിനമാണ്\nനിന്റെ ആദ്യത്തെ താക്കോൽ."
      : "ജീവിതമെന്ന മഴവഴികളിൽ,\nഎനിക്കൊരു കുടയായ് നിന്നവൻ…\nകാറ്റിലും കോളിലും കൈവിടാതെ,\nകുടുംബത്തിനായ് സ്വപ്നങ്ങൾ നെയ്തവൻ…\n\nആ തണലിന്റെ ജന്മദിനമാണ്\nനിന്റെ ആദ്യത്തെ താക്കോൽ.";
    $("photoArea").innerHTML = '<div class="letter-flower" aria-label="A small flower" role="img"><span>' + (role === "father" ? "🌼" : "🌷") + '</span></div>';
    $("birthday").value = "";
    $("letterError").textContent = "";
    show("letter");
  }
  function checkBirthday() {
    const value = $("birthday").value.replace(/\D/g, "");
    if (!currentRole) { $("letterError").textContent = "Please choose a letter first."; return; }
    const expected = currentRole === "father" ? CONFIG.fatherBirthday : CONFIG.motherBirthday;
    if (value !== expected) { $("letterError").textContent = "That key did not open this letter. Check the birthday clue and try again."; return; }
    stageIndex = 0;
    renderStage();
  }
  function renderStage() {
    show("stage");
    $("stageStatus").textContent = "Discuss the clue together before submitting.";
    const content = $("stageContent");
    if (stageIndex === 0) {
      $("stageKicker").textContent = "Chapter 02 · A memory from home";
      $("stageTitle").textContent = "First, one little memory";
      content.innerHTML = '<img class="stage-photo" src="assets/step-two.jpg" alt="Childhood memory beside the yellow bicycle"><p>ഈ പഴയ ഓർമ്മ നോക്കൂ. അടുത്ത വാതിൽ തുറക്കാൻ നിങ്ങൾ രണ്ടുപേരും ചേർന്ന് കണ്ടെത്തിയ നാല് അക്കങ്ങൾ നൽകൂ.</p><label for="answer">Shared four-digit key</label><input id="answer" inputmode="numeric" maxlength="4" placeholder="Four-digit key">';
      $("stageButton").textContent = "Unlock next memory";
    } else if (stageIndex === 1) {
      $("stageKicker").textContent = "Chapter 03 · You and your sister";
      $("stageTitle").textContent = "When was this picture taken?";
      content.innerHTML = '<img class="stage-photo" src="assets/me-and-sister.jpg" alt="A photograph of siblings together"><p>ഈ ചിത്രം എടുത്ത ദിവസത്തെ ഓർമ്മയുണ്ടോ? നിങ്ങളുടെ ഫോട്ടോ ഗാലറികൾ പരിശോധിച്ച് തീയതിയും മാസവും വർഷവും കണ്ടെത്തൂ. രണ്ടുപേരും സമ്മതിച്ചശേഷം നൽകുക.</p><label for="answer">Photo date (DDMMYYYY)</label><input id="answer" inputmode="numeric" maxlength="8" placeholder="DDMMYYYY">';
      $("stageButton").textContent = "Unlock next memory";
    } else if (stageIndex === 2) {
      $("stageKicker").textContent = "Chapter 04 · A letter from your children";
      $("stageTitle").textContent = "അമ്മയ്ക്കും അച്ഛനും…";
      content.innerHTML = '<div class="memory-grid">' + photo("assets/step-two.jpg","Childhood memory beside a yellow bicycle","A memory from home") + photo("assets/me-and-sister.jpg","A photograph of siblings together","A memory with your sister") + '</div><p>പ്രിയപ്പെട്ട അമ്മയ്ക്കും അച്ഛനും,</p><p>നമ്മുടെ ജീവിതത്തിൽ ഒരുപാട് സന്തോഷങ്ങളും ചില കഷ്ടപ്പാടുകളും ഉണ്ടായിട്ടുണ്ട്. കുടുംബത്തിനായി നിങ്ങൾ ചെയ്ത ത്യാഗങ്ങളും ഞങ്ങൾക്ക് നൽകിയ സ്നേഹവും ഞാൻ ഒരിക്കലും മറക്കില്ല.</p><p>എല്ലാം എല്ലായ്പ്പോഴും പറയാറില്ലെങ്കിലും, ഞാൻ നിങ്ങളെ രണ്ടുപേരെയും ഒരുപാട് സ്നേഹിക്കുന്നു. ഇനിയും ഒരുപാട് സന്തോഷങ്ങളും നല്ല ഓർമ്മകളും നിങ്ങളോടൊപ്പം ഉണ്ടാകട്ടെ. നിങ്ങൾ രണ്ടുപേരും എന്നും സന്തോഷത്തോടെ ഇരിക്കണം.</p><p>വിവാഹവാർഷികാശംസകൾ, അമ്മേയും അച്ഛാ. ❤️</p><p><strong>സ്നേഹത്തോടെ,<br>നിങ്ങളുടെ മക്കൾ ❤️</strong></p><div class="divider"></div><a href="#" id="videoLink" style="display:block;text-align:center;padding:15px;border-radius:10px;background:var(--ink);color:#fff8eb;text-decoration:none">▶ എന്റെ വീഡിയോ കാണൂ · Watch my video</a>';
      $("videoLink").addEventListener("click", (event) => { event.preventDefault(); openPersonalVideo(); });
      $("stageButton").textContent = "Continue";
    } else if (stageIndex === 3) {
      $("stageKicker").textContent = "Chapter 05 · Final puzzle";
      $("stageTitle").textContent = "One last word";
      content.innerHTML = '<div class="memory-grid">' + photo("assets/step-two.jpg","Childhood memory beside a yellow bicycle","The journey") + photo("assets/me-and-sister.jpg","A photograph of siblings together","The people who matter") + '</div><div class="clue">The final clue is a place you know well. Share the letters and say the word together.</div><p>Appa’s letters: C · A. Amma’s letter: R.</p><label for="answer">Final word</label><input id="answer" autocomplete="off" maxlength="3" placeholder="Three letters">';
      $("stageButton").textContent = "Reveal final message";
    } else { show("final"); return; }
  }
  function submitStage() {
    if (stageIndex === 2) { stageIndex += 1; renderStage(); return; }
    const answer = $("answer");
    if (!answer) return;
    const value = answer.value.trim().replace(/\s/g, "").toUpperCase();
    const expected = stageIndex === 0 ? "0520" : stageIndex === 1 ? CONFIG.photoDate : CONFIG.finalWord;
    if (value !== expected) {
      $("stageStatus").textContent = stageIndex === 0 ? "Not quite. Combine Amma’s day (05) and Appa’s day (20), then try again." : "Not quite. Compare your clues and try again.";
      return;
    }
    stageIndex += 1;
    renderStage();
  }
  function openPersonalVideo() {
    if (!CONFIG.videoUrl) { alert("Your video link will be added here before launch. ❤️"); return; }
    window.open(CONFIG.videoUrl, "_blank", "noopener,noreferrer");
  }
  function home() { currentRole = null; stageIndex = 0; show("welcome"); }
  function showStartupError(error) {
    console.error("Project 21 startup error:", error);
    const welcome = $("welcome");
    if (welcome) { const message = document.createElement("p"); message.className = "status"; message.textContent = "Something stopped the page from starting. Refresh the page and try again."; welcome.appendChild(message); }
  }
  try {
    $("fatherButton").addEventListener("click", () => openLetter("father"));
    $("motherButton").addEventListener("click", () => openLetter("mother"));
    $("birthdayButton").addEventListener("click", checkBirthday);
    $("stageButton").addEventListener("click", submitStage);
    $("homeStageButton").addEventListener("click", home);
    $("homeLetterButton").addEventListener("click", home);
    $("birthday").addEventListener("keydown", (event) => { if (event.key === "Enter") checkBirthday(); });
    show("welcome");
  } catch (error) { showStartupError(error); }
})();