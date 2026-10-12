/**
 * Original documentation and design contributions by HexenLabs.
 * Copyright (c) 2026 HexenLabs — https://hexenlabs.com.au
 * Attribution requirements: see the repository root LICENSE.
 *
 * Mintlify loads this file on every page. The attribution is an HTML comment,
 * so it is visible in DevTools Elements without rendering page content.
 */
(() => {
  const attribution =
    " Original documentation and design contributions by HexenLabs. " +
    "Copyright (c) 2026 HexenLabs — https://hexenlabs.com.au. " +
    "Attribution requirements: see the source repository LICENSE. ";
  function addAttribution() {
    const target = document.body || document.documentElement;

  const exists = Array.from(target.childNodes).some(
    (node) => node.nodeType === Node.COMMENT_NODE && node.data === attribution
  );

  if (!exists) {
    target.prepend(document.createComment(attribution));
  }
  }

  addAttribution();
  window.addEventListener("mintlify:navigate", addAttribution);
})();
