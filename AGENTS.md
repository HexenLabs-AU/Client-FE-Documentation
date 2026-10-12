# Fleet Empire documentation rules

## Project

Fleet Empire is a Roblox trucking management game. This site uses Mintlify, MDX pages, and docs.json configuration. Edit through the Mintlify Admin MCP and check the current page before changing it.

## Voice and facts

- Write concise sentences in active voice. Address the player as you.
- Use the developer's first-person voice for personal FAQ answers only.
- Keep gameplay amounts, restrictions, exceptions, and code names accurate.
- The developer's scope is practical beginner help. Do not request detailed formulas, hiring odds, upgrade tiers, or internal algorithms just to fill a draft. Direct players to current live values. Keep only essential unresolved gameplay questions in review drafts; mark resolved records clearly.
- Do not invent code availability, expiration dates, redemption steps, production intervals, or game pass benefits.
- Keep roadmap plans separate from released gameplay.
- Historical changelog entries must stay self-contained.

## Page design

- Use short introductions and sentence case headings.
- Keep the homepage short: a brief introduction, plain Play and reward links, four starter guide cards, and a compact current-event section. Keep current events near the top of navigation.
- Event pages use the same article layout as other guides, with a seasonal sidebar icon and real UI screenshots. Do not add large decorative panels. Publish only confirmed event details; omit unconfirmed post-event behavior.
- Keep game passes and code rewards on their dedicated pages.
- Use tables for prices, rewards, and requirements.
- Reserve warnings for missed rewards, financial loss, loans, and contract deadlines.
- Show the shared alpha notice on Overview. Do not use a persistent alpha banner or repeat alpha boxes inside guides.
- Keep community links where they help, rather than ending every guide with the same section.
- Use native Mintlify components, blue accents, Inter, and neutral backgrounds: light #F7F8FA and dark #111113. Preserve the user's theme choice.
- Preserve the navbar logo sizing unless the user requests another change.

## Formatting

- Bold UI names and important requirements.
- Format cash with separators, such as \$25,000; escape dollar signs in MDX where needed.
- Show toll prices with two decimal places and label them per axle.
- Label game pass prices as Robux.
- Use EXP, Autopilot, Federal Contract, Legendary, and Mythic consistently.
- Use code formatting for file names, paths, commands, and reward codes.

## Shared snippets

The snippets folder lives beside docs.json. Import snippets using absolute paths, such as /snippets/corporation-offline.mdx. Keep the surrounding Warning or Accordion in the page.

- corporation-offline.mdx: current corporation contract offline rule.
- launch-codes.mdx: RELEASE and ALPHA rewards.
- community-links.mdx: Discord and update-log links.
- alpha-notice.mdx: alpha wording shown on Overview.

Shared content is hidden from public navigation. Do not import changing rules into historical changelog entries.

## Links and verification

Use routes from the current navigation tree. Existing guide paths are nested under docs/. Check every internal link and snippet import before saving. Check frontmatter through node metadata tools and inspect the final diff.

## Evidence and review drafts

- Target new players: explain the purpose, then use exact observed menu labels and steps.
- Use the supplied UI recording and explicit developer confirmations as sources. A screen from an established company is not a universal starter requirement or price.
- License and bank-loan levels, costs, and terms require developer confirmation. Financing varies with company level and upgrades; explain the dependency without inventing fixed thresholds.
- Put uncertain procedures or rules in a suggested-name.drafts.mdx file under docs/review. The developer has requested all review drafts in sidebar rotation: keep the Drafts for review group visible and collapsed, label pages Review (or Deferred), and retain noindex. Clearly separate confirmed facts from open questions; visible drafts do not make uncertain rules confirmed. Do not place private information in review pages.
- Each draft must include its recording timestamps, observations, and specific questions. Never present an uncompleted action as a tested walkthrough.
- Place useful screenshots visibly beside related instructions. Reserve expandable blocks for secondary images. Keep text descriptions complete, include meaningful alt text and captions for example values, and provide MDX comments where replacement images can be added.
- Use calm, plain backgrounds without grid decoration. Keep the header compact and support in the navbar.
- Driver hiring previews with odds and the next five purchases are specific to Australia/UK; describe other regions as random rolls.
- Start beginner guides with the Cargo Van assigned to the player. Dispatch Load starts a delivery; rewards arrive when it is delivered. Do not require a fixed RNG load as a tutorial example.
- Publish only the minimum credit score of 500 required for financing. Do not list score bands, score-based terms, or rating-change rules. Direct players to the current in-game offer.
- Financing starts with three slots and caps at eight. Both company levels and Expanded Credit upgrades add slots.
- Use short introductions, clear actions, nearby screenshots, and important rules. Put optional reference material and secondary images in accordions. Keep requirements, financial risks, and deadlines visible. Avoid repeated screenshot disclaimers or references to the recording/developer in player-facing prose.
- Keep Getting Started first, then current events. Nest Your company, Fleet and deliveries, Staff, and Corporations as collapsed groups under Guides. Use short sidebar labels and preserve existing URLs. Development stays separate.
