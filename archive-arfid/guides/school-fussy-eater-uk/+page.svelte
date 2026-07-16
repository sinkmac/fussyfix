<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'School and Nursery — Making the System Work for a Fussy Eater';
  const description = 'UK school and nursery guidance for fussy eating and ARFID: lunches, adjustments, SEND and a template letter.';
  const path = '/guides/school-fussy-eater-uk';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
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
<SchemaScript {schema} />

<section class="article-shell">
  <article class="article-card">
    <div class="eyebrow">Guide</div>
    <h1>School and Nursery — Making the System Work for a Fussy Eater</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 23 May 2026</span>
      <span>Last updated: 23 May 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> If you're concerned about your child's eating, speak to your GP. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>School food can turn a private worry into a public one. The aim is not special treatment for the sake of it. The aim is that your child can get through the day fed, safe and not ashamed.</p>
      <h2>Universal Infant Free School Meals</h2>
      <p>State-funded schools in England provide free school meals for infant pupils. Schools must meet school food standards, but individual children may still need adjustments. A reasonable adjustment might be a quieter place to eat, permission to bring safe packed items, a predictable menu, or staff avoiding comments that increase anxiety.</p>
      <h2>Packed lunch policies</h2>
      <p>Schools can have packed lunch policies, but a blanket rule should not ignore a child’s health, disability or welfare needs. If your child has diagnosed ARFID, suspected ARFID under assessment, sensory needs, anxiety, or another relevant condition, ask for a conversation rather than accepting a front-desk no.</p>
      <h2>How to talk about food anxiety</h2>
      <p>Use concrete language. “My child is anxious around food” may be dismissed. “My child currently eats eight foods, has gagged at school, and comes home without eating when pressured” is harder to wave away.</p>
      <h2>Reasonable adjustments</h2>
      <p>Under equality law, children with disabilities may be entitled to reasonable adjustments. Not every fussy eater will meet that threshold. Some children with ARFID, autism, anxiety or other needs may. Adjustments can include safe packed foods, reduced sensory pressure, a known adult, flexible seating, or an agreed script staff use around food.</p>
      <h2>SEND and EHCPs</h2>
      <p>If eating affects attendance, health, learning, social participation or emotional wellbeing, it may belong in SEND discussions. IPSEA has parent-facing information on education, health and care plans. You do not need to know all the law before asking for help.</p>
      <h2>Template letter</h2>
      <p><strong>Subject:</strong> Request for meeting about eating support at school</p>
      <p>Dear [name], I’m writing because [child] is experiencing significant difficulty with eating at school. Their current safe foods are [list]. When pressured or presented with unfamiliar foods, they [describe distress, gagging, refusal, not eating, anxiety]. I would like to meet to agree a low-pressure plan so they can eat enough during the school day. Possible adjustments include [packed safe foods / quiet eating space / predictable menu / no comments about quantity eaten / named adult]. We are also speaking to [GP/dietitian/health visitor if relevant]. Please can we arrange a meeting this week or next? Thank you.</p>
    </div>
    <section class="source-list" aria-label="Sources">
      <h2>Sources</h2>
      <ul>
        <li><a href={commonSources.dfeSchoolFood.url}>{commonSources.dfeSchoolFood.label}</a></li>
        <li><a href={commonSources.equalityAct.url}>{commonSources.equalityAct.label}</a></li>
        <li><a href={commonSources.ipseaEhcp.url}>{commonSources.ipseaEhcp.label}</a></li>
      </ul>
    </section>
    <section class="related-links" aria-label="Related pages">
      <a href="/guides/fussy-eating-or-arfid">Fussy eating or ARFID</a>
      <a href="/guides/mealtime-survival-scripts">Mealtime scripts</a>
      <a href="/medical-disclaimer">Medical disclaimer</a>
      <a class="primary-button" href="/">{toolCta}</a>
    </section>
  </article>
</section>
