/* Fleet Empire footer — original contributions by HexenLabs.
 * Copyright (c) 2026 HexenLabs — https://hexenlabs.com.au. See LICENSE.
 *
 * Keep this list in sync with the active codes guide and launch-codes snippet.
 * Choose three distinct codes once per visit; retain them across page navigation.
 */
(() => {
  const activeCodes = [
    { code: "RELEASE", reward: "$25,000 cash" },
    { code: "ALPHA", reward: "$10,000 cash and 2× delivery speed for 30 minutes" },
    { code: "ROADTRIP", reward: "$14,000 cash" },
    { code: "FLATBED", reward: "2× delivery speed for 1 hour" },
    { code: "500K", reward: "1 Legendary driver — keep a driver slot open" },
    { code: "1MVISITS", reward: "2× delivery speed for 2 hours" },
    { code: "CANDY", reward: "500 Candy" }
  ];
  const shuffled = activeCodes.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const selected = shuffled.slice(0, 3);

  function updateFooterCodes() {
    const links = Array.from(document.querySelectorAll("#footer a[href]")).filter(
      (link) => new URL(link.href, location.href).pathname === "/docs/gettingstarted/codes"
    );
    if (links.length !== 3) return;
    links.forEach((link, index) => {
      const item = selected[index];
      link.textContent = item.code;
      link.title = item.reward;
      link.setAttribute("aria-label", item.code + ": " + item.reward + ". View redemption instructions.");
      link.setAttribute("data-fe-reward-code", item.code);
    });
  }

  updateFooterCodes();
  window.addEventListener("mintlify:navigate", updateFooterCodes);
})();
