# Fleet Empire documentation rules

## Project

Fleet Empire is a Roblox trucking management game. This site uses Mintlify, MDX pages, and docs.json configuration. Edit through the Mintlify Admin MCP and check the current page before changing it.

## Voice and facts

- Write concise sentences in active voice. Address the player as you.
- Use the developer's first-person voice for personal FAQ answers only.
- Keep gameplay amounts, restrictions, exceptions, and code names accurate.
- Do not invent code availability, expiration dates, redemption steps, production intervals, or game pass benefits.
- Keep roadmap plans separate from released gameplay.
- Historical changelog entries must stay self-contained.

## Page design

- Use short introductions and sentence case headings.
- Keep the homepage wide and short: one Play card, four guide cards, and useful links.
- Keep game passes and code rewards on their dedicated pages.
- Use tables for prices, rewards, and requirements.
- Reserve warnings for missed rewards, financial loss, loans, and contract deadlines.
- Use the global alpha banner; avoid repeating alpha boxes inside guides.
- Keep community links where they help, rather than ending every guide with the same section.
- Use native Mintlify components and the existing light theme, blue accents, and Inter font.
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
- alpha-notice.mdx: reusable alpha wording for places that need it; the global banner handles routine disclosure.

Shared content is hidden from public navigation. Do not import changing rules into historical changelog entries.

## Links and verification

Use routes from the current navigation tree. Existing guide paths are nested under docs/. Check every internal link and snippet import before saving. Check frontmatter through node metadata tools and inspect the final diff.

## Evidence and review drafts

- Target new players: explain the purpose, then use exact observed menu labels and steps.
- Use the supplied UI recording and explicit developer confirmations as sources. A screen from an established company is not a universal starter requirement or price.
- License and bank-loan levels, costs, and terms require developer confirmation. Financing varies with company level and upgrades; explain the dependency without inventing fixed thresholds.
- Put uncertain procedures or rules in a suggested-name.drafts.mdx file under docs/review. Mark these pages hidden and noindex, and keep their group hidden. Hidden pages are not access-controlled; do not place private information in them.
- Each draft must include its recording timestamps, observations, and specific questions. Never present an uncompleted action as a tested walkthrough.
- Place useful screenshots visibly beside related instructions. Reserve expandable blocks for secondary images. Keep text descriptions complete, include meaningful alt text and captions for example values, and provide MDX comments where replacement images can be added.
- Use a soft blue-gray light background (#EEF3F9), blue accents, and the native grid decoration. Preserve readable contrast.
- Driver hiring previews with odds and the next five purchases are specific to Australia/UK; describe other regions as random rolls.
- Start beginner guides with the Cargo Van assigned to the player. Dispatch Load starts a delivery; rewards arrive when it is delivered. Do not require a fixed RNG load as a tutorial example.
- Truck financing requires at least 500 credit score; additional availability depends on company level and upgrades.
- Use a subtle native grid background. Preserve readable space, blue accents, Inter, and the current logo sizing.
- Keep public navigation grouped by player task: Getting Started, Your company, Fleet and deliveries, Staff, Corporations, Development.
