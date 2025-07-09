# Known Issues

Below is a list of bugs, limitations, and unresolved behaviors currently tracked for Grit Labs.

| ID | Title | Status | Date Reported | Component | Notes / Workaround |
|----|-------|--------|---------------|-----------|--------------------|
| [#104](#104) | Search results omit nested pages | Open | 2025-07-09 | Search | Use sidebar navigation to reach pages not indexed. |
| [#103](#103) | Theme fails to load offline | In Progress | 2025-07-08 | Theme | Reload once connection is restored. |
| [#102](#102) | Scroll jitter when switching tabs | Won’t Fix | 2025-07-07 | UI | Minor flicker due to library limitations. |

### #104 — Search results omit nested pages

**Status:** Open  
**Date Reported:** 2025-07-09  
**Component:** Search

Search indexing occasionally skips pages within deeply nested directories. As a result, queries may not return the expected content.

**Workaround**: Navigate through the sidebar or type the exact URL if known.

### #103 — Theme fails to load offline

**Status:** In Progress  
**Date Reported:** 2025-07-08  
**Component:** Theme

When browsing without internet connectivity, style sheets may not load, leaving the site unstyled. This occurs because certain assets are fetched from a CDN at runtime.

**Workaround**: Reconnect to the internet and refresh the page to reapply the theme.

### #102 — Scroll jitter when switching tabs

**Status:** Won’t Fix  
**Date Reported:** 2025-07-07  
**Component:** UI

Some users observe a brief scrolling jump when returning to a previously opened tab. The effect is caused by inherent limitations in the current JavaScript framework.

**Notes / Workaround**: Because the issue is minor and does not affect core functionality, no fix is planned. Accept the momentary jitter when switching tabs.
