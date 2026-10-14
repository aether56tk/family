# Project 21 — Anniversary Mystery

A mobile-first, Malayalam-first anniversary experience for Appa and Amma to solve together from Dubai and Kerala.

## Current files
- `index.html`: responsive cream-and-gold website with two poetic opening letters, birthday-key screens, memory-date challenge, family drawing challenge, final CAR clue, and Malayalam gift reveal.
- `supabase-schema.sql`: starter schema for planning shared progress across two phones.
- `assets/README.md`: where to add private photos and video.

## IMPORTANT: starter, not launch-ready
This is a prototype. The real birthday dates are placeholders. Photo/video assets have not been added. Cross-phone synchronisation is **not implemented yet**; the current stage logic runs in the browser where it is opened. Do not send this as the final experience until shared state is built and tested on two different phones.

## Personalise
In `index.html`, update the `CONFIG` object:
- `fatherBirthday`: mother's birthday in DDMM format (key shown to father)
- `motherBirthday`: father's birthday in DDMM format (key shown to mother)
- `youngerSisterBirthday`: reserved for the shared birthday clue
- `photoDate`: selected photo date in DDMMYYYY
- `finalWord`: CAR

Add chosen photographs/video to `assets/` and replace the placeholder areas in `index.html`.

## Required before the anniversary
1. Implement a shared session across both parent links.
2. Make each shared stage require one submission from each parent before unlocking.
3. Implement the younger sister's birthday as a real shared key stage.
4. Replace the example drawing answer `FAMILY` with the intended clue solution.
5. Replace placeholder image/video blocks with your real media.
6. Test on two separate phones and networks.
7. Check the final car location is safe and accessible.

## Shared progress and security
A static GitHub Pages site cannot synchronise two parents' progress securely on its own. Use Supabase with carefully scoped Edge Functions/RLS. Never expose a service-role key in browser code. Birthday dates are guessable and should be treated as puzzle answers, not strong authentication. Avoid placing real birthdays in public source code if the repository is public.

## GitHub Pages
Repository Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)`. Once Pages finishes deploying, the likely URL is `https://aether56tk.github.io/family/`; confirm the published URL in Settings → Pages.
