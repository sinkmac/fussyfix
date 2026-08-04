<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  const meta = pageMeta({
    title: 'Fussy Eating or ARFID — How to Tell the Difference',
    description: 'Clinical guide to help parents distinguish between typical fussy eating and ARFID (Avoidant Restrictive Food Intake Disorder). Signs, thresholds and when to see a GP.',
    path: '/guides/fussy-eating-or-arfid'
  });
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

<section class="article-shell">
  <article class="article-card">
    <div class="eyebrow">Clinical guide</div>
    <h1>Fussy Eating or ARFID? How to Tell the Difference</h1>
    <div class="article-body">

      <p class="lede">Most children go through a phase of refusing new foods. That is normal. But there is a difference between a child who will not eat their peas and a child who cannot eat them — and knowing the difference matters.</p>

      <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> If you are worried about your child's eating, speak to your GP. Only a clinician can assess for ARFID.</div>

      <h2>What typical fussy eating looks like</h2>

      <p>Developmental fussy eating usually starts between 18 months and 3 years. It is a normal stage driven by independence, neophobia (fear of new things) and a growing sense of control. Most children grow out of it with gentle exposure and time.</p>

      <p>Signs of typical fussy eating include:</p>
      <ul>
        <li>Refusing some foods but accepting others across different food groups</li>
        <li>Eating enough to maintain steady growth and energy</li>
        <li>Accepting familiar foods even if new ones are rejected</li>
        <li>Eating differently from one day to the next without it causing significant distress</li>
        <li>Being willing to touch, smell or sit with a new food even if they will not eat it</li>
      </ul>

      <p>Typical fussy eating is frustrating, but it does not stop a child from growing, thriving or participating in family meals.</p>

      <h2>What ARFID looks like</h2>

      <p>Avoidant Restrictive Food Intake Disorder (ARFID) is not picky eating taken to an extreme. It is a recognised eating disorder with a different mechanism. Unlike anorexia, ARFID is not driven by body image. It is driven by one or more of these core factors described in <a href="https://www.nice.org.uk/guidance/ng69" rel="external nofollow">NICE guidance NG69</a>:</p>

      <ul>
        <li><strong>Sensory sensitivity:</strong> the child finds certain textures, smells, colours or temperatures genuinely aversive. It is not a preference — it triggers a physical response including gagging, retching or distress.</li>
        <li><strong>Fear of consequences:</strong> the child avoids eating because they are afraid of choking, vomiting, pain or an allergic reaction — even if none of those things have happened recently.</li>
        <li><strong>Low interest in food:</strong> the child forgets to eat, does not feel hungry, or finds eating a chore they have to be prompted through every time.</li>
      </ul>

      <p>Children with ARFID typically eat a very narrow range of foods — often fewer than 20 items. They may drop foods they previously ate and refuse to add them back. Their growth may slow or stall, and mealtimes cause genuine distress for both the child and the family.</p>

      <h2>When to be concerned</h2>

      <p>These are the signs that suggest it is time to speak to a GP:</p>
      <ul>
        <li>Faltering growth or weight loss — your child is dropping below their growth centile or clothes are getting looser</li>
        <li>Consistently eating fewer than 15–20 different foods</li>
        <li>Cutting out entire food groups (all vegetables, all protein, all textures of a certain type)</li>
        <li>Anxiety that prevents the child from sitting at the table, being near food, or eating outside the home</li>
        <li>Frequent gagging, retching or vomiting when presented with non-preferred foods</li>
        <li>Reliance on oral nutritional supplements (prescribed or bought) to maintain weight</li>
        <li>Fatigue, pallor, constipation or other signs of nutritional insufficiency</li>
      </ul>

      <p><a href="https://www.arfidawarenessuk.org/" rel="external nofollow">ARFID Awareness UK</a> has parent-facing information and family support resources that can help you prepare for a GP appointment. <a href="https://www.beateatingdisorders.org.uk/" rel="external nofollow">BEAT</a> also has ARFID-specific guides and a helpline for parents who are unsure where to start.</p>

      <h2>What a GP will do</h2>

      <p>A GP cannot formally diagnose ARFID, but they can assess growth, hydration and physical health, and refer to the right service. In many parts of the UK, the referral goes to a paediatric dietitian, child and adolescent mental health service (CAMHS) or a specialist feeding clinic. Waiting lists vary. Ask about the waiting time at the point of referral so you can plan what to do in the meantime.</p>

      <p>When you speak to the GP, be specific. Say how many foods your child eats, whether they have dropped foods recently, how mealtimes feel for the family and what you have already tried. Keep a food diary for a week if you can — it helps the GP see the pattern rather than relying on memory under pressure.</p>

      <h2>What FussyFix does and does not do</h2>

      <p>FussyFix is designed for families dealing with ordinary fussy eating — the kind that responds to method changes, timing adjustments and gentle exposure. The vegetable redemption approach and the Safe Food Library tool are not clinical interventions. If your child may have ARFID, these tools will not fix it. Use them only if your clinical team agrees they are appropriate for your child's stage of treatment.</p>

      <p><a class="primary-button" href="/medical-disclaimer">Full medical disclaimer</a></p>

    </div>
  </article>
</section>