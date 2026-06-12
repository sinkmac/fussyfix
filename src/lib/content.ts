export const siteMeta = {
  name: 'FussyFix',
  title: 'FussyFix | Free meal ideas for fussy eaters',
  description:
    'FussyFix is a free meal idea generator for parents of fussy eaters. Add safe foods, choose an age group, and get five warm, practical meal ideas.',
  ogDescription:
    'Start with foods your child already accepts and generate low-pressure meal ideas. Not medical advice or ARFID diagnosis.',
  url: 'https://fussyfix.co.uk'
} as const;

export const affiliateLinks = {
  iceland: {
    label: 'Shop the ingredients at Iceland',
    url: null,
    status: 'pending',
    network: 'Awin',
    merchantId: '7868'
  },
  gousto: {
    label: 'Get ingredients delivered as a recipe box',
    url: null,
    status: 'pending',
    network: 'Awin',
    merchantId: null
  }
} as const;

export const generatorCopy = {
  eyebrow: 'Free meal ideas for fussy eaters',
  title: 'Turn the foods they already trust into five fresh meal ideas.',
  description:
    'FussyFix helps parents start from safe foods, not battles. Add the foods your child already feels okay with, pick their age group, and get five warm, practical meal ideas, each with one small nutrition idea woven in.',
  points: [
    'Safe-food first suggestions',
    'Age-aware meal ideas',
    'Encouraging, judgement-free tone'
  ],
  resultsTitle: 'Meal ideas that stay inside the safe-food zone',
  resultsEmpty:
    'Enter the foods your child already feels safe with, then FussyFix will turn them into five practical ideas.',
  affiliatePanelTitle: 'Helpful next step',
  affiliatePanelBody:
    'If you want to make these meals without the supermarket run, grocery delivery can be useful for stocking up on ingredients your child already trusts.',
  affiliateDisclosure:
    'When affiliate links are live, FussyFix may earn a commission if you buy through them. No placeholder shopping links are shown.'
} as const;

export const editorialPages = [
  {
    slug: 'why-is-my-child-a-fussy-eater',
    title: 'Why is my child such a fussy eater?',
    body: [
      'If mealtimes feel like a daily battle, you are not alone and you are not doing anything wrong.',
      'Fussy eating is one of the most common concerns parents raise, and it peaks between the ages of two and six. For most children it is a normal part of development, not a sign of a problem with your parenting or your cooking.',
      'Understanding why it happens can make it feel less personal.',
      'It is partly developmental',
      'Young children are naturally cautious about new things — including food. This instinct, called food neophobia, is thought to have evolved as a protective mechanism. A toddler who refuses anything unfamiliar is, in a very old-fashioned biological sense, being careful. It does not feel that way at the dinner table, but it helps to know it is hardwired rather than deliberate.',
      'It is partly sensory',
      'Food is a complex sensory experience. Texture, temperature, colour, smell, and appearance all matter — sometimes more than taste. A child who accepts smooth mashed potato but refuses the same potato with lumps in it is not being awkward. They are genuinely experiencing something different.',
      'It is partly about control',
      'Between two and five, children are working out where their boundaries are and what they can influence. Food is one of the few areas where they have real power. Refusing to eat is not defiance for its own sake — it is often a child asserting the one thing they feel certain control over.',
      'What tends to help',
      'The approaches that work best focus on reducing pressure rather than increasing it. Repeated low-stakes exposure to new foods — offered alongside safe foods, with no expectation of eating — is more effective over time than insisting or bribing.',
      'FussyFix is built around this principle. Start from what your child already accepts and build outward from there, slowly and without drama.'
    ]
  },
  {
    slug: 'foods-fussy-eaters-accept',
    title: 'Foods most fussy eaters will accept',
    body: [
      'Every fussy eater is different, but certain foods appear reliably on the safe list for a large number of children. If you are trying to build a workable repertoire, these are good places to start.',
      'Starchy foods',
      'Plain pasta, white rice, bread, toast, crackers, and plain potatoes appear on almost every fussy eater\'s safe list. They are mild in flavour, familiar in texture, and easy to eat. They also provide a useful base for introducing other ingredients in very small quantities.',
      'Mild proteins',
      'Chicken — especially in simple, soft forms like shredded or baked — is widely accepted. Fish fingers, eggs in familiar forms (scrambled or as an omelette), and mild cheese are also common safe proteins.',
      'Sweet vegetables',
      'Sweetcorn, peas, and carrots are among the vegetables most likely to be accepted, possibly because their sweetness makes them less threatening. Offering them frozen and lightly cooked rather than soft and mushy often helps with texture sensitivity.',
      'Fruit',
      'Most fussy eaters accept at least some fruit. Mild options like banana, apple, and strawberry are reliable starting points. Fruit is useful nutritionally but also as a gateway — the sweetness makes it less likely to be rejected outright.',
      'Dairy',
      'Milk, mild cheese, and yoghurt are accepted by many fussy eaters, which helps with calcium intake even when vegetable eating is limited.',
      'Using safe foods as a starting point',
      'FussyFix takes the foods your child already accepts and uses them to generate practical meal ideas that stay within the safe zone while weaving in small nutrition ideas. Enter your child\'s safe foods and see what comes back.'
    ]
  },
  {
    slug: 'how-to-get-fussy-eater-to-try-new-foods',
    title: 'How to get a fussy eater to try new foods',
    body: [
      'The most common mistake parents make with fussy eaters is also the most understandable one: pushing too hard.',
      'When a child refuses a food, the instinct is to encourage, bargain, or insist. These approaches feel logical but they often make things worse, because they increase the pressure around mealtimes and make food refusal feel like a high-stakes event.',
      'What works better is slower, lower-stakes, and counterintuitive.',
      'Repeated exposure without pressure',
      'Research consistently shows that children often need to see a new food many times before they will try it — and many more times before they will eat it willingly. Simply having the food present on the plate, without any expectation of eating it, is a legitimate step. Tasting it is another step. Eating it is further down the line.',
      'The goal is to make new foods familiar, not to force consumption.',
      'Offer new foods alongside safe foods',
      'Never offer a new food in isolation. When a new food appears alongside something the child reliably accepts, the meal remains safe even if the new thing is rejected. The pressure drops, and the new food gets a neutral association rather than a stressful one.',
      'Let them touch and play with food',
      'For many children, especially those with texture sensitivity, touching food is a step towards eating it. Allowing children to handle food, poke it, smell it, or even just move it around the plate is legitimate progress — not misbehaviour to be corrected.',
      'Eat together and eat the same things',
      'Children learn to eat by watching. If the adults and older children at the table eat the same food without drama, it normalises it faster than any direct encouragement.',
      'Keep portions tiny',
      'A single pea. A thumbnail-sized piece of new food beside a full plate of accepted food. The smaller the new portion, the less threatening it is, and the more likely it gets tried.',
      'Remove the emotional charge',
      'The less mealtimes feel like a test, the better. Calm, consistent, and low-expectation is more effective than cheerful pressure.',
      'FussyFix helps by starting from what your child already accepts. Building outward from a safe foundation is more effective than trying to introduce entirely unfamiliar foods from scratch.'
    ]
  },
  {
    slug: 'meal-planning-fussy-eaters',
    title: 'Meal planning for fussy eaters — a practical guide',
    body: [
      'Meal planning with a fussy eater in the house requires a different approach than standard meal planning. The goal is not variety for its own sake. The goal is reliable meals that get eaten, with small expansions built in over time.',
      'Start with the safe list',
      'Write down every food your child reliably eats. Be specific — not just “pasta” but which shapes, which sauces, which temperatures. The safe list is your foundation. Every planned meal should include at least one item from it.',
      'Build meals around the safe food, not around the new food',
      'A meal where pasta is the main event and a small amount of something new appears alongside it is more likely to be eaten than a meal where the new food is the main event. The safe food provides security; the new food gets low-stakes exposure.',
      'Plan for the week, not the meal',
      'If Tuesday\'s dinner is rejected, Wednesday\'s safe meal compensates. Thinking across the week reduces the pressure of any single meal being a success or failure.',
      'Keep a rotation of reliable meals',
      'Most families with fussy eaters end up with a rotation of eight to twelve meals that reliably work. This is fine. Variety within the safe zone is more useful than forced novelty.',
      'Introduce one new thing at a time',
      'Trying to expand the safe list works better when you focus on one new food at a time, offered repeatedly over weeks rather than once and abandoned. Small, consistent steps beat ambitious variety.',
      'Use FussyFix for the repetitive meals',
      'When you need ideas that stay within the safe zone — especially on tired evenings — FussyFix generates meal ideas from the foods your child already accepts. Enter the safe list and get five practical ideas that work with what you have.'
    ]
  },
  {
    slug: 'nutrition-for-fussy-eaters',
    title: 'Hidden nutrition wins for fussy eaters',
    body: [
      'When a child\'s safe food list is short, parents naturally worry about nutrition. The good news is that there are practical ways to improve the nutritional value of accepted foods without triggering refusal.',
      'This is not the same as hiding vegetables',
      'There is a difference between deception — pureeing vegetables into food without a child\'s knowledge — and thoughtfully building nutrition into accepted foods. The latter is sustainable; the former tends to create trust problems when children eventually notice. What follows are approaches that are genuinely transparent and sustainable.',
      'Build on what pasta already does',
      'Plain pasta is nutritionally modest on its own, but it is an excellent vehicle. A mild cheese sauce adds protein and calcium. Butter and a small amount of soft-cooked carrot adds vitamin A. Egg pasta adds protein directly. These are not hidden additions — they are normal cooking, presented without drama.',
      'Use eggs creatively',
      'Eggs are nutritionally dense and accepted by many fussy eaters in certain forms. Scrambled eggs, simple omelettes, and egg-based pasta dishes are all practical options. An egg added to fried rice or stirred into pasta while it is still hot adds protein without changing the meal significantly.',
      'Mild cheese does a lot',
      'Grated mild cheddar or cream cheese adds calcium, fat, and protein to a wide range of accepted foods — pasta, toast, scrambled eggs, baked potato. It is one of the most nutritionally efficient additions for fussy eaters because it is so widely accepted.',
      'Fruit alongside, not instead of',
      'Rather than trying to get vegetables into meals where they are not welcome, adding fruit alongside accepted foods is a low-conflict way to improve nutritional intake. A handful of strawberries or sliced banana beside pasta is not a strange combination to a young child — and it contributes meaningfully to their intake.',
      'Small nutrition ideas',
      'FussyFix includes a small nutrition idea with every meal idea — a simple note on what the meal contributes, framed positively. It is not about tricking children. It is about helping parents understand what accepted meals may already offer.'
    ]
  }
] as const;
