# Portfolio revision - 5 November 2026

Prepared on `update/research-portfolio-2026-11-05`. No deployment or merge is implied.

## Changes

- New academic home, research, publications, talks, CV and contact pages.
- User-selected formal portrait, real GRACE image and ICAIR conference footage.
- Navigation remains visible while scrolling on desktop and mobile.
- Accepted and presented ICAIR status, with final proceedings link pending.
- Corrected GRACE results and scope, including self-consistency RMSE interpretation.
- Actual CV page and updated existing PDF download.
- Fictional template collection entries held from publication.
- Correct GitHub Pages project-site URL/base path and repository metadata.

## Content decisions

- No author-proof or accepted-manuscript download is published while sharing permission is unresolved.
- The ICAIR clip has captions within the supplied video. The clip is conference footage, not robot-demo footage.
- The CV PDF remains the reviewed October version, identified as such on the CV page.
- Existing real project URLs are retained.
- A research master's is the primary graduate interest; funded PhD enquiries remain welcome.

## Publication approval

Joseph approved deployment after replacing the hero image with one of three supplied portraits, then requested a header that remains visible while scrolling. The formal suit portrait was selected.

## Verification

- Production configuration built successfully with Jekyll 3.10.0.
- Fourteen pages checked in a browser at desktop and mobile widths: no recorded page errors, missing images or horizontal overflow.
- Twenty generated HTML files checked for local links and anchors: no missing internal targets.
- Captioned MP4 metadata loads: 91 seconds, 1280 x 720, no media error.
- Prior project `.html` URLs retain generated redirects to their canonical directory URLs.
- `git diff --check` passed.
- Updated portrait and sticky header checked at desktop and mobile widths.

These checks precede publication. The GitHub Pages workflow records the production deployment result.
