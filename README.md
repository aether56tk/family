# Project 21 — Anniversary Mystery

A mobile-first, Malayalam-first anniversary experience for Appa and Amma to solve together from Dubai and Kerala.

## Planned experience

1. **Two separate opening letters.** Appa sees the poetic letter about Amma; Amma sees the poetic letter about Appa. Each uses the other person's birthday in DDMM format to unlock their own letter.
2. **One shared four-digit birthday key.** The next screen shows the younger sister's photo. Appa and Amma must contact each other, contribute two digits each, and enter the combined code together. Planned combination: the day from Mother's birthday followed by the day from Father's birthday (05 + 20 = `0520`). Treat this as a puzzle key, not security.
3. **Sibling photo/video memory.** Once the shared code is accepted, show a video or photo sequence of the user and younger sister.
4. **Photo-date challenge.** They compare their galleries, agree on the date the featured photo was taken, and enter it as **DDMM**.
5. **Memory letter.** Reveal a heartfelt letter below the memories, with a small family-photo strip.
6. **Personal link.** At the bottom of the letter, a link from the user opens the final message.
7. **Physical reveal.** The final message directs them to go together to the car's dickey/boot, where the framed family portrait is waiting.

## Current files

- `index.html`: responsive cream-and-gold prototype with Malayalam letters and an initial puzzle flow.
- `supabase-schema.sql`: starter schema for planning shared progress across two phones.
- `assets/README.md`: where to add private photos and video.

## IMPORTANT: starter, not launch-ready

The repository currently contains a prototype, not the finished experience. The shared birthday gate, photo/video assets, memory letter, personal link, and real cross-phone synchronisation still need implementation and testing. The current stage logic runs in the browser where it is opened. Do not send this as the final experience until shared state is built and tested on two different phones.

## Personalise

In `index.html`, update the `CONFIG` object:
- `fatherBirthday`: mother's birthday in DDMM format (key shown to Appa)
- `motherBirthday`: father's birthday in DDMM format (key shown to Amma)
- `youngerSisterBirthday`: available for a future clue if you decide to use it; it is not the shared four-digit key in the current plan
- `photoDate`: featured photo's date in **DDMM** format
- `finalWord`: CAR

Add chosen photographs/video to `assets/` and replace the placeholder areas in `index.html`.

## Required before October 21

1. Implement the combined birthday key (planned code `0520`) as a shared stage after the separate letters.
2. Build shared session progress so both parents can contribute from separate phones before the next stage unlocks.
3. Add the sibling photo/video and implement the photo-date answer in DDMM format.
4. Add the memory letter, small family photos, and the personal link to the final message.
5. Finish the final reveal directing them together to the car's dickey/boot.
6. Test the whole experience on two separate phones and networks.
7. Check the final car location is safe and accessible.

## Shared progress and security

A static GitHub Pages site cannot synchronise two parents' progress securely on its own. Use Supabase with carefully scoped Edge Functions/RLS. Never expose a service-role key in browser code. Birthday dates are guessable and should be treated as puzzle answers, not strong authentication. Avoid placing real birthdays or private family media in public source code if the repository is public.

## GitHub Pages

Repository Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)`. Once Pages finishes deploying, the likely URL is `https://aether56tk.github.io/family/`; confirm the published URL in Settings → Pages.
