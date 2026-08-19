<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Broccoli — the One That Was Just Cooked Too Long';
  const description = 'Why so many people say they hate broccoli, and why the answer is almost never the vegetable — it is the one, too-long, wet cook. How gentle heat, charring, roasting or blistering turns the same floret into something bright, sweet and crisp. The method fix.';
  const path = '/guides/broccoli-redemption';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
  const faq = faqSchema([
    {
      question: 'Why do so many people hate broccoli?',
      answer: 'Because almost nobody has been served broccoli. They have been served broccoli that was boiled or steamed too long — grey-green, mushy, faintly sulphurous, the florets collapsed into a paste and the stalk either woody or reduced to sludge. Ask why people hate broccoli and the honest answer is overcooking, not the vegetable.'
    },
    {
      question: 'What is the best method for broccoli?',
      answer: 'Short and hot, not long and wet. Steam or quick-blanch is the fastest bright-tender fix; charring, roasting and blistering build crisp, savoury browned flavour in minutes. The moment it is still bright green and just tender, it is done — the enemy is duration, not water.'
    }
  ]);
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <link rel="canonical" href={meta.canonical} />
  <meta property="og:title" content={meta.ogTitle} />
  <meta property="og:description" content={meta.ogDescription} />
  <meta property="og:url" content={meta.ogUrl} />
  <meta property="og:type" content="article" />
</svelte:head>
<SchemaScript schema={[schema, faq]} />

<section class="article-shell">
  <article class="article-card">
    <div class="eyebrow">Guide</div>
    <h1>Broccoli — the One That Was Just Cooked Too Long</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 18 Aug 2026</span>
      <span>Last updated: 18 Aug 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> This is about cooking, not child nutrition. For help with a child's overall eating, speak to your doctor or health visitor. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>There is a Reddit thread that asks a simple question: <em>"Why do so many people hate broccoli?"</em> The answers are instructive, because almost none of them blame the vegetable. One person's reason for hating it was that their dad would always steam it. Another called it <em>"overcooked"</em> — the worst thing that can happen to it. Someone else, asked what broccoli tastes like when done badly, was blunter still.</p>
      <p>Overcooked broccoli is the most common version of broccoli on the planet. And it is a completely different food from the one a floret can be. <strong>Broccoli isn't the problem. You just cook it wrong.</strong> That's the whole story, and the fix is simpler than the habit that created the problem.</p>
      <h2>What overcooking does to broccoli</h2>
      <p>Boiled or steamed too long, broccoli's cell walls collapse. The bright green fades to grey-green as the chlorophyll degrades under prolonged heat, the florets turn to mush, and the stalk either stays woody or dissolves into the water. The faint sulphurous smell — the thing people genuinely remember — is the same brassica chemistry as cabbage and cauliflower: sulphur compounds released by long, wet heat. The broccoli that came out of the pan smelling and tasting of nothing good was not a bad vegetable. It was one that was left in the heat too long.</p>
      <p>The good version of broccoli is bright, sweet, and tender-crisp — edged with quiet savour from browning, never collapsed, never grey. It takes minutes to make. <strong>The enemy was never water. It was duration.</strong></p>
      <h2>The fix — short and hot, whatever the method</h2>
      <p>Every redeemed broccoli method shares one thing: it stops the moment the florets are bright green and just tender, before the structure can collapse.</p>
      <h3>Steam or quick-blanch it — the fastest fix</h3>
      <p>Steam florets for 3–4 minutes, or blanch in well-salted boiling water for 2–3, then drain the moment they're bright and tender-crisp. Slice the stalk on the bias so it cooks at the same speed as the florets instead of staying woody. Done right it keeps its structure, its colour, and a sweetness the boiled version never had. This is the method that replaces the childhood boiled floret almost one-for-one, and it's the one to start with.</p>
      <h3>Char or blister it — colour and crisp</h3>
      <p>High heat and a little oil change broccoli completely. Blister florets in a hot pan for 4–6 minutes (wok, 3–5) until the cut edges brown; char thick pieces on a grill or in the air fryer (6–8 minutes at 200°C) until the tips catch. The browning — the Maillard reaction — adds a quiet savour and sweetness, and the high heat is over before the floret can slump into mush.</p>
      <h3>Roast it — the crisp-edged version</h3>
      <p>Toss florets in a little oil and roast at 200°C for 18–22 minutes (air fryer 12–16) until the edges crisp and brown. The cut florets caramelise where they touch the tray; the stems sweeten. It's the version that looks like food, not a science failure.</p>
      <h2>When it still goes wrong</h2>
      <p><strong>"It still smells."</strong> It was cooked wet and long. Any short, hot, dry method — steam, char, roast, blister — is over before the sulphur can build. If it smells, the heat had too long to work.</p>
      <p><strong>"The stalk is still tough."</strong> The stalk needs a head start or a bias slice. Cut it thin on the diagonal so it cooks with the florets, or drop it in 30 seconds earlier. A woody stalk is an uncooked-stalk problem, not a broccoli problem.</p>
      <p><strong>"The char went bitter."</strong> Too far. Char the edges to deeply golden, not black — the line between sweet-smoky and bitter is a fine one, and worth pulling back from.</p>
      <h2>The kid-specific angle</h2>
      <p>Broccoli's bad reputation arrives early — a child who has only ever met the grey, mushy, faintly sulphurous floret has been taught to dislike it, not shown it. A floret done well is genuinely the opposite: bright, mild, slightly sweet, easy to pick up.</p>
      <ul>
        <li><strong>Serve it crisp, not soft.</strong> A shapes a child can pick up — a floret with a bit of bite — reads as food. The collapsed grey version never does.</li>
        <li><strong>Use the browned edges.</strong> Charred or roasted florets carry a quiet sweetness most children read as friendly. Offer those first, alongside something safe.</li>
        <li><strong>Small, not a mountain.</strong> Two or three bright florets on a familiar plate is an introduction. A piled plate of boiled broccoli is a lesson in what to avoid.</li>
      </ul>
      <h2>One fix, done properly</h2>
      <p>Blister broccoli florets in a hot, oiled pan for 4–6 minutes until the cut edges brown and the green stays bright; throw in the bias-sliced stalk 30 seconds ahead so it's tender-crisp too. Finish with a squeeze of lemon and a pinch of salt. Bright, sweet, tender-crisp, over in minutes — nothing like the grey, mushy, smelly floret that made people say they hated it. Broccoli was never the problem. What you were served was broccoli that was cooked too long. <strong>That whole difference is the method.</strong></p>
    </div>

    <section class="related-links" aria-label="Related pages">
      <a href="/redeem/broccoli">The broccoli redemption card</a>
      <a href="/guides/potato-redemption">Potato chapter</a>
      <a href="/guides/cauliflower-redemption">Cauliflower chapter</a>
      <a href="/guides/carrot-redemption">Carrot chapter</a>
      <a href="/guides/peas-redemption">Peas chapter</a>
      <a href="/guides/spinach-redemption">Spinach chapter</a>
      <a href="/guides/swede-redemption">Swede chapter</a>
      <a href="/guides/tomato-redemption">Tomato chapter</a>
      <a href="/guides/broad-beans-redemption">Broad beans chapter</a>
      <a href="/guides/cucumber-redemption">Cucumber chapter</a>
      <a href="/guides/cabbage-redemption">Cabbage chapter</a>
      <a href="/guides/safe-foods-fussy-eaters">Safe foods for fussy eaters</a>
      <a class="primary-button" href="/redeem">{toolCta}</a>
    </section>

    <section class="source-list" aria-label="Sources">
      <h2>Sources</h2>
      <ul>
        <li><a href={commonSources.nhsEatwell.url}>{commonSources.nhsEatwell.label}</a></li>
        <li><a href={commonSources.nhsHealthierFamilies.url}>{commonSources.nhsHealthierFamilies.label}</a></li>
      </ul>
    </section>
  </article>
</section>