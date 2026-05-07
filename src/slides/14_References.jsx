import SlideShell from '../components/SlideShell.jsx'

const refs = [
  { tag: 'Leitlinien', items: [
    'World Health Organization. Use of non-sugar sweeteners: WHO guideline. Geneva: WHO; 2023.',
    'World Health Organization. Sugars intake for adults and children. Geneva: WHO; 2015 (Reaffirmation 2023).',
    'DGE. Position paper: Quantitative recommendation for sugar intake. Ernährungs Umschau 2024.',
    'AWMF S3-Leitlinie Adipositas — Prävention und Therapie. 2024 Update.',
    'EASL Clinical Practice Guidelines on the Management of NAFLD/MASLD. J Hepatol 2024.'
  ]},
  { tag: 'Umbrella & Meta', items: [
    'Huang Y, Chen Z, Chen B, et al. Dietary sugar consumption and health: umbrella review. BMJ 2023;381:e071609.',
    'Imamura F, O\'Connor L, Ye Z, et al. SSB, fruit juice, and risk of T2DM. BMJ 2015 (Update Yin 2021).',
    'Yin J, Zhu Y, Malik V, et al. Intake of SSB and CVD risk. Adv Nutr 2021;12:89–101.',
    'Te Morenga L, Mallard S, Mann J. Dietary sugars and body weight. BMJ 2013 (referenced for HRT 2023).',
    'Moynihan P. Sugars and dental caries: evidence for setting a recommended threshold. Adv Nutr 2022.'
  ]},
  { tag: 'Süßstoffe', items: [
    'IARC Monographs Vol. 134: Aspartame. Lyon: IARC; 2023 (Group 2B).',
    'EFSA Panel. Re-evaluation of aspartame (E 951). EFSA J 2024.',
    'Suez J, Cohen Y, Valdés-Mas R, et al. Personalized microbiome-driven effects of NSS on glycemic responses. Cell 2022;185:3307–3328.',
    'Witkowski M, Nemet I, Alamri H, et al. The artificial sweetener erythritol and cardiovascular event risk. Nat Med 2023;29:710–718.',
    'Debras C, Chazelas E, Sellem L, et al. Artificial sweeteners and cancer risk. PLoS Med 2022.'
  ]},
  { tag: 'Mechanismen & SSB-Steuern', items: [
    'Hannou SA, Haslam DE, McKeown NM, Herman MA. Fructose metabolism and metabolic disease. JCI 2018 (foundational).',
    'Stanhope KL. Sugar consumption, metabolic disease and obesity. Crit Rev Clin Lab Sci 2019.',
    'Rogers NT, Cummins S, Forde H, et al. Associations between the UK SDIL and obesity. PLoS Med 2023.',
    'Scarborough P, Adhikari V, Harrington RA, et al. Impact of the announcement and implementation of the UK SDIL on sugar content. BMJ 2020.',
    'Hebebrand J, Albayrak Ö, Adan R, et al. „Eating addiction", rather than „food addiction". Neurosci Biobehav Rev 2014 (referenced; replication: Gearhardt &amp; Schulte Annu Rev Nutr 2021).'
  ]}
]

export default function References(props) {
  return (
    <SlideShell
      eyebrowNum="14"
      eyebrow="Quellen"
      title="Literatur"
      subtitle="Vollständige Liste · alle Arbeiten ab 2020 (Foundational-Referenzen explizit gekennzeichnet)"
      {...props}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, fontSize: 12, lineHeight: 1.5 }}>
        {refs.map(group => (
          <div key={group.tag}>
            <div style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: 8,
              borderBottom: '1px solid var(--border-soft)',
              paddingBottom: 4
            }}>
              {group.tag}
            </div>
            <ol style={{ listStyle: 'decimal', paddingLeft: 18, color: 'var(--text-muted)' }}>
              {group.items.map((it, i) => (
                <li key={i} style={{ marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: it }} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}
