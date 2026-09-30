/* =====================================================================
   声道断面図 ドラッグ&ドロップ練習 ― データ定義
   ---------------------------------------------------------------------
   「勉強メモ/調音一覧.md」の調音点×調音法マトリクスに合わせています。
   img は同じフォルダ内の PNG ファイル名（断面図が無い音は null）。
   ここだけ直せば表もカードも自動で変わります。
   ===================================================================== */

/* 調音点（表の横軸・前→後ろ） */
const PLACES = [
  { id: 'bilabial',       name: '両唇' },
  { id: 'alveolar',       name: '歯茎' },
  { id: 'alveolopalatal', name: '歯茎硬口蓋' },
  { id: 'palatal',        name: '硬口蓋' },
  { id: 'velar',          name: '軟口蓋' },
  { id: 'uvular',         name: '口蓋垂' },
  { id: 'glottal',        name: '声門' },
];

/* 調音法（表の縦軸） */
const MANNERS = [
  { id: 'plosive',     name: '破裂音' },
  { id: 'fricative',   name: '摩擦音' },
  { id: 'affricate',   name: '破擦音' },
  { id: 'nasal',       name: '鼻音' },
  { id: 'tap',         name: '弾き音' },
  { id: 'approximant', name: '接近音' },
];

/* 音
   ipa    : 音声記号
   kana   : 仮名の例
   img    : 声道断面図のファイル名（無ければ null）
   place  : 調音点 id
   manner : 調音法 id
   voiced : 有声なら true（表示はしないが並び順に使う）
   alt    : 別の説でも正解にするセル ['調音点id|調音法id', ...]（任意） */
const SOUNDS = [
  /* ---- 両唇 ---- */
  { ipa: 'p',  kana: 'パ行',              img: 'pb.png',    place: 'bilabial',       manner: 'plosive',     voiced: false },
  { ipa: 'b',  kana: 'バ行',              img: 'pb.png',    place: 'bilabial',       manner: 'plosive',     voiced: true  },
  { ipa: 'ɸ',  kana: 'フ',                img: 'Φ.png',     place: 'bilabial',       manner: 'fricative',   voiced: false },
  { ipa: 'm',  kana: 'マ行',              img: 'm.png',     place: 'bilabial',       manner: 'nasal',       voiced: true  },

  /* ---- 歯茎 ---- */
  { ipa: 't',  kana: 'タ・テ・ト',        img: 'tdtsdz.png', place: 'alveolar',      manner: 'plosive',     voiced: false },
  { ipa: 'd',  kana: 'ダ・デ・ド',        img: 'tdtsdz.png', place: 'alveolar',      manner: 'plosive',     voiced: true  },
  { ipa: 's',  kana: 'サ・ス・セ・ソ',    img: 'sz.png',    place: 'alveolar',       manner: 'fricative',   voiced: false },
  { ipa: 'z',  kana: 'ザ・ズ・ゼ・ゾ（語中）', img: 'sz.png', place: 'alveolar',     manner: 'fricative',   voiced: true  },
  { ipa: 'ts', kana: 'ツ',                img: 'tdtsdz.png', place: 'alveolar',      manner: 'affricate',   voiced: false },
  { ipa: 'dz', kana: 'ヅ・語頭のズ',      img: 'tdtsdz.png', place: 'alveolar',      manner: 'affricate',   voiced: true  },
  { ipa: 'n',  kana: 'ナ・ヌ・ネ・ノ',    img: 'n.png',     place: 'alveolar',       manner: 'nasal',       voiced: true  },
  { ipa: 'ɾ',  kana: 'ラ行',              img: 'l.png',     place: 'alveolar',       manner: 'tap',         voiced: true  },

  /* ---- 歯茎硬口蓋 ---- */
  { ipa: 'ɕ',  kana: 'シ',                img: 'tθdzθ.png', place: 'alveolopalatal', manner: 'fricative',   voiced: false },
  { ipa: 'ʑ',  kana: 'ジ（語中）',        img: 'tθdzθ.png', place: 'alveolopalatal', manner: 'fricative',   voiced: true  },
  { ipa: 'tɕ', kana: 'チ',                img: 'tθdzθ.png', place: 'alveolopalatal', manner: 'affricate',   voiced: false },
  { ipa: 'dʑ', kana: 'ジ（語頭）・ヂ',    img: 'tθdzθ.png', place: 'alveolopalatal', manner: 'affricate',   voiced: true  },
  { ipa: 'ɲ',  kana: 'ニ',                img: 'jn.png',    place: 'alveolopalatal', manner: 'nasal',       voiced: true  },

  /* ---- 硬口蓋 ---- */
  { ipa: 'ç',  kana: 'ヒ',                img: 'c.png',     place: 'palatal',        manner: 'fricative',   voiced: false },
  { ipa: 'j',  kana: 'ヤ行',              img: 'j.png',     place: 'palatal',        manner: 'approximant', voiced: true  },

  /* ---- 軟口蓋 ---- */
  { ipa: 'k',  kana: 'カ行',              img: 'kg.png',    place: 'velar',          manner: 'plosive',     voiced: false },
  { ipa: 'g',  kana: 'ガ行',              img: 'kg.png',    place: 'velar',          manner: 'plosive',     voiced: true  },
  { ipa: 'ŋ',  kana: 'ン（カ行・ガ行の前）', img: 'nj.png',  place: 'velar',          manner: 'nasal',       voiced: true  },
  { ipa: 'ɰ',  kana: 'ワ',                img: 'w.png',     place: 'velar',          manner: 'approximant', voiced: true  },

  /* ---- 口蓋垂（断面図なし） ---- */
  { ipa: 'ɴ',  kana: 'ン（語末・母音の前）', img: null,      place: 'uvular',         manner: 'nasal',       voiced: true  },

  /* ---- 声門 ---- */
  { ipa: 'h',  kana: 'ハ・ヘ・ホ',        img: 'h.png',     place: 'glottal',        manner: 'fricative',   voiced: false },
];

/* よくある発音ミス
   wrong / correct : 学習者の発音例と目標語
   wrongIpa / correctIpa : SOUNDS の ipa（比較する断面図の取得に使用）
   choices / answer : 原因を選ぶ四択と正解位置（0始まり） */
const PRONUNCIATION_ERRORS = [
  {
    id: 'sabusa-samusa',
    wrong: 'さぶさ',
    correct: 'さむさ',
    wrongIpa: 'b',
    correctIpa: 'm',
    choices: [
      '調音法の誤り（鼻音を破裂音にしている）',
      '調音点の誤り（両唇音を歯茎音にしている）',
      '有声・無声の誤り',
      '拍の長さの誤り'
    ],
    answer: 0,
    explanation: '「む」の子音[m]と誤った「ぶ」の子音[b]は、どちらも有声両唇音です。ただし[m]は鼻音、[b]は破裂音なので、主な原因は調音法の誤りです。'
  },
  {
    id: 'shichuke-shitsuke',
    wrong: 'しちゅけ',
    correct: 'しつけ',
    wrongIpa: 'tɕ',
    correctIpa: 'ts',
    choices: [
      '調音点の誤り（「つ」を口蓋化している）',
      '調音法の誤り（破擦音を鼻音にしている）',
      '有声・無声の誤り',
      '促音「っ」の脱落'
    ],
    answer: 0,
    explanation: '正しい「つ」の子音[ts]は無声歯茎破擦音ですが、誤った「ちゅ」の子音[tɕ]は無声歯茎硬口蓋破擦音です。調音法と無声性は同じで、舌の位置が硬口蓋側へ寄る口蓋化が中心です。'
  },
  {
    id: 'jakyuu-yakyuu',
    wrong: 'じゃきゅう',
    correct: 'やきゅう',
    wrongIpa: 'dʑ',
    correctIpa: 'j',
    choices: [
      '調音点と調音法の誤り（接近音を破擦音にしている）',
      '有声・無声だけの誤り',
      '長音「う」の脱落',
      '鼻音化の誤り'
    ],
    answer: 0,
    explanation: '正しい「や」の子音[j]は有声硬口蓋接近音ですが、誤った「じゃ」の子音[dʑ]は有声歯茎硬口蓋破擦音です。有声性は同じで、調音点と調音法の両方が異なります。'
  },
  {
    id: 'shakana-sakana',
    wrong: 'しゃかな',
    correct: 'さかな',
    wrongIpa: 'ɕ',
    correctIpa: 's',
    choices: [
      '調音点の誤り（「さ」を口蓋化している）',
      '調音法の誤り（摩擦音を破裂音にしている）',
      '有声・無声の誤り',
      '長音の誤り'
    ],
    answer: 0,
    explanation: '正しい「さ」の子音[s]は無声歯茎摩擦音ですが、誤った「しゃ」の子音[ɕ]は無声歯茎硬口蓋摩擦音です。調音法と無声性は同じで、舌の位置が硬口蓋側へ寄っています。'
  },
  {
    id: 'suki-tsuki',
    wrong: 'すき',
    correct: 'つき',
    wrongIpa: 's',
    correctIpa: 'ts',
    choices: [
      '調音法の誤り（破擦音を摩擦音にしている）',
      '調音点の誤り（歯茎音を両唇音にしている）',
      '有声・無声の誤り',
      '鼻音化の誤り'
    ],
    answer: 0,
    explanation: '正しい「つ」の子音[ts]は無声歯茎破擦音ですが、誤った「す」の子音[s]は無声歯茎摩擦音です。調音点と無声性は同じで、閉鎖を伴う破擦音を摩擦音にしています。'
  },
  {
    id: 'dajio-rajio',
    wrong: 'だじお',
    correct: 'らじお',
    wrongIpa: 'd',
    correctIpa: 'ɾ',
    choices: [
      '調音法の誤り（弾き音を破裂音にしている）',
      '調音点の誤り（歯茎音を軟口蓋音にしている）',
      '有声・無声の誤り',
      '母音の無声化'
    ],
    answer: 0,
    explanation: '正しい「ら」の子音[ɾ]は有声歯茎弾き音ですが、誤った「だ」の子音[d]は有声歯茎破裂音です。調音点と有声性は同じで、舌を一度だけ軽く弾く動きが完全な閉鎖になっています。'
  },
  {
    id: 'hune-hune-h',
    wrong: 'ふね（[hɯne]）',
    correct: 'ふね（[ɸɯne]）',
    wrongIpa: 'h',
    correctIpa: 'ɸ',
    choices: [
      '調音点の誤り（両唇音を声門音にしている）',
      '調音法の誤り（摩擦音を鼻音にしている）',
      '有声・無声の誤り',
      '拍数の誤り'
    ],
    answer: 0,
    explanation: '正しい「ふ」の子音[ɸ]は無声両唇摩擦音ですが、誤った[h]は無声声門摩擦音です。調音法と無声性は同じですが、[ɸ]で必要な両唇の狭めが作られていません。'
  },
  {
    id: 'meko-neko',
    wrong: 'めこ',
    correct: 'ねこ',
    wrongIpa: 'm',
    correctIpa: 'n',
    choices: [
      '調音点の誤り（歯茎鼻音を両唇鼻音にしている）',
      '調音法の誤り（鼻音を破裂音にしている）',
      '有声・無声の誤り',
      '促音の脱落'
    ],
    answer: 0,
    explanation: '正しい「ね」の子音[n]は有声歯茎鼻音ですが、誤った「め」の子音[m]は有声両唇鼻音です。調音法と有声性は同じで、舌先ではなく上下の唇で閉鎖を作っています。'
  },
  {
    id: 'kapan-kaban',
    wrong: 'かぱん',
    correct: 'かばん',
    wrongIpa: 'p',
    correctIpa: 'b',
    choices: [
      '有声・無声の誤り（有声音を無声音にしている）',
      '調音点の誤り（両唇音を歯茎音にしている）',
      '調音法の誤り（破裂音を鼻音にしている）',
      '長音の誤り'
    ],
    answer: 0,
    explanation: '正しい「ば」の子音[b]は有声両唇破裂音ですが、誤った「ぱ」の子音[p]は無声両唇破裂音です。調音点と調音法は同じで、声帯振動の有無だけが異なります。'
  },
  {
    id: 'kakkou-gakkou',
    wrong: 'かっこう',
    correct: 'がっこう',
    wrongIpa: 'k',
    correctIpa: 'g',
    choices: [
      '有声・無声の誤り（有声音を無声音にしている）',
      '調音点の誤り（軟口蓋音を歯茎音にしている）',
      '調音法の誤り（破裂音を摩擦音にしている）',
      '促音「っ」の脱落'
    ],
    answer: 0,
    explanation: '正しい「が」の子音[g]は有声軟口蓋破裂音ですが、誤った「か」の子音[k]は無声軟口蓋破裂音です。調音点と調音法は同じで、声帯振動の有無だけが異なります。'
  },
  {
    id: 'hito-hito-sh',
    wrong: 'ひと（[ɕito]）',
    correct: 'ひと（[çito]）',
    wrongIpa: 'ɕ',
    correctIpa: 'ç',
    choices: [
      '調音点の誤り（硬口蓋音を歯茎硬口蓋音にしている）',
      '調音法の誤り（摩擦音を破擦音にしている）',
      '有声・無声の誤り',
      '撥音「ん」の誤り'
    ],
    answer: 0,
    explanation: '正しい「ひ」の子音[ç]は無声硬口蓋摩擦音ですが、誤った[ɕ]は無声歯茎硬口蓋摩擦音です。調音法と無声性は同じで、狭めを作る位置が前寄りになっています。'
  },
  {
    id: 'ratashi-watashi',
    wrong: 'らたし',
    correct: 'わたし',
    wrongIpa: 'ɾ',
    correctIpa: 'ɰ',
    choices: [
      '調音点と調音法の誤り（接近音を弾き音にしている）',
      '有声・無声だけの誤り',
      '母音の無声化',
      '長音の短縮'
    ],
    answer: 0,
    explanation: '正しい「わ」の子音[ɰ]は有声軟口蓋接近音ですが、誤った「ら」の子音[ɾ]は有声歯茎弾き音です。有声性は同じで、調音点と調音法の両方が異なります。'
  },
  {
    id: 'shijai-shizai',
    wrong: 'しじゃい',
    correct: 'しざい',
    wrongIpa: 'dʑ',
    correctIpa: 'z',
    choices: [
      '調音点と調音法の誤り（摩擦音を口蓋化した破擦音にしている）',
      '有声・無声だけの誤り',
      '長音の誤り',
      '鼻音化の誤り'
    ],
    answer: 0,
    explanation: '正しい「ざ」の子音[z]は有声歯茎摩擦音ですが、誤った「じゃ」の子音[dʑ]は有声歯茎硬口蓋破擦音です。有声性は同じで、調音点と調音法の両方が異なります。'
  },
  {
    id: 'shimbai-shimpai',
    wrong: 'しんばい',
    correct: 'しんぱい',
    wrongIpa: 'b',
    correctIpa: 'p',
    choices: [
      '有声・無声の誤り（無声音を有声音にしている）',
      '調音点の誤り（両唇音を歯茎音にしている）',
      '調音法の誤り（破裂音を鼻音にしている）',
      '撥音「ん」の脱落'
    ],
    answer: 0,
    explanation: '正しい「ぱ」の子音[p]は無声両唇破裂音ですが、誤った「ば」の子音[b]は有声両唇破裂音です。調音点と調音法は同じで、声帯を振動させてしまう有声・無声の誤りです。'
  },
  {
    id: 'suika-tsuika',
    wrong: 'すいか',
    correct: 'ついか',
    wrongIpa: 's',
    correctIpa: 'ts',
    choices: [
      '調音法の誤り（破擦音を摩擦音にしている）',
      '調音点の誤り（歯茎音を軟口蓋音にしている）',
      '有声・無声の誤り',
      '母音の長さの誤り'
    ],
    answer: 0,
    explanation: '正しい「つ」の子音[ts]は無声歯茎破擦音ですが、誤った「す」の子音[s]は無声歯茎摩擦音です。調音点と無声性は同じで、最初の閉鎖がなくなり摩擦音だけになっています。'
  },
  {
    id: 'watasi-watashi',
    wrong: 'わたすぃ',
    correct: 'わたし',
    wrongIpa: 's',
    correctIpa: 'ɕ',
    choices: [
      '調音点の誤り（「し」に必要な口蓋化ができていない）',
      '調音法の誤り（摩擦音を破裂音にしている）',
      '有声・無声の誤り',
      '促音の脱落'
    ],
    answer: 0,
    explanation: '正しい「し」の子音[ɕ]は無声歯茎硬口蓋摩擦音ですが、誤った「すぃ」の子音[s]は無声歯茎摩擦音です。調音法と無声性は同じで、舌を硬口蓋側へ寄せる口蓋化が不足しています。'
  },
  {
    id: 'chikan-jikan',
    wrong: 'ちかん',
    correct: 'じかん',
    wrongIpa: 'tɕ',
    correctIpa: 'dʑ',
    choices: [
      '有声・無声の誤り（有声音を無声音にしている）',
      '調音点の誤り（歯茎硬口蓋音を両唇音にしている）',
      '調音法の誤り（破擦音を鼻音にしている）',
      '撥音「ん」の誤り'
    ],
    answer: 0,
    explanation: '正しい「じ」の子音[dʑ]は有声歯茎硬口蓋破擦音ですが、誤った「ち」の子音[tɕ]は無声歯茎硬口蓋破擦音です。調音点と調音法は同じで、声帯振動の有無だけが異なります。'
  },
  {
    id: 'oshitashi-ohitashi',
    wrong: 'おしたし',
    correct: 'おひたし',
    wrongIpa: 'ɕ',
    correctIpa: 'ç',
    choices: [
      '調音点の誤り（硬口蓋音を歯茎硬口蓋音にしている）',
      '調音法の誤り（摩擦音を破擦音にしている）',
      '有声・無声の誤り',
      '長音の短縮'
    ],
    answer: 0,
    explanation: '正しい「ひ」の子音[ç]は無声硬口蓋摩擦音ですが、誤った「し」の子音[ɕ]は無声歯茎硬口蓋摩擦音です。調音法と無声性は同じで、狭めを作る位置が前寄りになっています。'
  },
  {
    id: 'shinanai-shiranai',
    wrong: 'しなない',
    correct: 'しらない',
    wrongIpa: 'n',
    correctIpa: 'ɾ',
    choices: [
      '調音法の誤り（弾き音を鼻音にしている）',
      '調音点の誤り（歯茎音を両唇音にしている）',
      '有声・無声の誤り',
      '母音の無声化'
    ],
    answer: 0,
    explanation: '正しい「ら」の子音[ɾ]は有声歯茎弾き音ですが、誤った「な」の子音[n]は有声歯茎鼻音です。調音点と有声性は同じで、舌先を一度だけ弾く音が鼻音になっています。'
  },
  {
    id: 'niku-n-palatal',
    wrong: 'にく（[nikɯ]）',
    correct: 'にく（[ɲikɯ]）',
    wrongIpa: 'n',
    correctIpa: 'ɲ',
    choices: [
      '調音点の誤り（「に」に必要な口蓋化ができていない）',
      '調音法の誤り（鼻音を破裂音にしている）',
      '有声・無声の誤り',
      '長音の短縮'
    ],
    answer: 0,
    explanation: '正しい「に」の子音[ɲ]は有声歯茎硬口蓋鼻音ですが、誤った[n]は有声歯茎鼻音です。調音法と有声性は同じで、舌を硬口蓋側へ寄せる口蓋化が不足しています。'
  },
  {
    id: 'tsuki-t-ts',
    wrong: 'つき（[tɯki]）',
    correct: 'つき（[tsɯki]）',
    wrongIpa: 't',
    correctIpa: 'ts',
    choices: [
      '調音法の誤り（破擦音を破裂音にしている）',
      '調音点の誤り（歯茎音を硬口蓋音にしている）',
      '有声・無声の誤り',
      '撥音の脱落'
    ],
    answer: 0,
    explanation: '正しい「つ」の子音[ts]は無声歯茎破擦音ですが、誤った[t]は無声歯茎破裂音です。調音点と無声性は同じで、閉鎖を開放した後の摩擦が不足しています。'
  },
  {
    id: 'chizu-t-tch',
    wrong: 'ちず（[tizɯ]）',
    correct: 'ちず（[tɕizɯ]）',
    wrongIpa: 't',
    correctIpa: 'tɕ',
    choices: [
      '調音点と調音法の誤り（口蓋化した破擦音を破裂音にしている）',
      '有声・無声だけの誤り',
      '長音の誤り',
      '鼻音化の誤り'
    ],
    answer: 0,
    explanation: '正しい「ち」の子音[tɕ]は無声歯茎硬口蓋破擦音ですが、誤った[t]は無声歯茎破裂音です。無声性は同じですが、調音点と調音法が異なります。'
  },
  {
    id: 'jikan-z-dj',
    wrong: 'じかん（[zikan]）',
    correct: 'じかん（[dʑikan]）',
    wrongIpa: 'z',
    correctIpa: 'dʑ',
    choices: [
      '調音点と調音法の誤り（口蓋化と破擦が不足している）',
      '有声・無声だけの誤り',
      '促音の脱落',
      '母音の無声化'
    ],
    answer: 0,
    explanation: '語頭の「じ」の子音[dʑ]は有声歯茎硬口蓋破擦音です。誤った[z]は有声歯茎摩擦音なので、有声性は同じですが、調音点と調音法が異なります。'
  },
  {
    id: 'shinbun-n-m',
    wrong: 'しんぶん（最初の「ん」を[n]）',
    correct: 'しんぶん（最初の「ん」を[m]）',
    wrongIpa: 'n',
    correctIpa: 'm',
    choices: [
      '後続する両唇音[b]への調音点の同化ができていない',
      '鼻音を破裂音にしている',
      '有声音を無声音にしている',
      '長音を短くしている'
    ],
    answer: 0,
    explanation: '「しんぶん」の最初の「ん」は、後続する両唇音[b]に影響されて両唇鼻音[m]になります。[n]のままでは調音点が歯茎に残っており、調音点の同化ができていません。'
  },
  {
    id: 'shinkansen-n-ng',
    wrong: 'しんかんせん（最初の「ん」を[n]）',
    correct: 'しんかんせん（最初の「ん」を[ŋ]）',
    wrongIpa: 'n',
    correctIpa: 'ŋ',
    choices: [
      '後続する軟口蓋音[k]への調音点の同化ができていない',
      '鼻音を摩擦音にしている',
      '有声音を無声音にしている',
      '促音を加えている'
    ],
    answer: 0,
    explanation: '「しんかんせん」の最初の「ん」は、後続する軟口蓋音[k]に影響されて軟口蓋鼻音[ŋ]になります。[n]のままでは調音点が歯茎に残っています。'
  },
  {
    id: 'kadada-karada',
    wrong: 'かだだ',
    correct: 'からだ',
    wrongIpa: 'd',
    correctIpa: 'ɾ',
    choices: [
      '調音法の誤り（弾き音を破裂音にしている）',
      '調音点の誤り（歯茎音を軟口蓋音にしている）',
      '有声・無声の誤り',
      '撥音の誤り'
    ],
    answer: 0,
    explanation: '正しい「ら」の子音[ɾ]は有声歯茎弾き音ですが、誤った「だ」の子音[d]は有声歯茎破裂音です。調音点と有声性は同じで、舌先を軽く一度弾く動きが完全な閉鎖になっています。'
  },
  {
    id: 'kase-kaze',
    wrong: 'かせ',
    correct: 'かぜ（風）',
    wrongIpa: 's',
    correctIpa: 'z',
    choices: [
      '有声・無声の誤り（有声音を無声音にしている）',
      '調音点の誤り（歯茎音を両唇音にしている）',
      '調音法の誤り（摩擦音を鼻音にしている）',
      '長音の誤り'
    ],
    answer: 0,
    explanation: '正しい「ぜ」の子音[z]は有声歯茎摩擦音ですが、誤った「せ」の子音[s]は無声歯茎摩擦音です。調音点と調音法は同じで、声帯振動の有無だけが異なります。'
  },
  {
    id: 'tenki-denki',
    wrong: 'てんき',
    correct: 'でんき（電気）',
    wrongIpa: 't',
    correctIpa: 'd',
    choices: [
      '有声・無声の誤り（有声音を無声音にしている）',
      '調音点の誤り（歯茎音を声門音にしている）',
      '調音法の誤り（破裂音を摩擦音にしている）',
      '撥音「ん」の脱落'
    ],
    answer: 0,
    explanation: '正しい「で」の子音[d]は有声歯茎破裂音ですが、誤った「て」の子音[t]は無声歯茎破裂音です。調音点と調音法は同じで、声帯振動の有無だけが異なります。'
  },
  {
    id: 'fuji-h-phi',
    wrong: 'ふじ（[hɯdʑi]）',
    correct: 'ふじ（[ɸɯdʑi]）',
    wrongIpa: 'h',
    correctIpa: 'ɸ',
    choices: [
      '調音点の誤り（両唇音を声門音にしている）',
      '調音法の誤り（摩擦音を破裂音にしている）',
      '有声・無声の誤り',
      '拍数の誤り'
    ],
    answer: 0,
    explanation: '正しい「ふ」の子音[ɸ]は無声両唇摩擦音ですが、誤った[h]は無声声門摩擦音です。調音法と無声性は同じですが、[ɸ]で必要な両唇の狭めが作られていません。'
  }
];

/* 特殊拍・リズムの発音ミス
   wrongUnits / correctUnits : 拍の区切りを表示する文字列 */
const RHYTHM_ERRORS = [
  {
    id: 'obasan-obaasan',
    wrong: 'おばさん',
    correct: 'おばあさん',
    wrongUnits: 'お・ば・さ・ん（4拍）',
    correctUnits: 'お・ば・あ・さ・ん（5拍）',
    choices: [
      '長音「あ」を1拍として発音できず、短くしている',
      '促音「っ」を落としている',
      '撥音「ん」を加えている',
      '拗音を2拍に分けている'
    ],
    answer: 0,
    explanation: '「おばあさん」は「お・ば・あ・さ・ん」の5拍です。長音部分の「あ」も独立した1拍として長さを保つ必要があります。'
  },
  {
    id: 'kite-kitte',
    wrong: 'きて',
    correct: 'きって',
    wrongUnits: 'き・て（2拍）',
    correctUnits: 'き・っ・て（3拍）',
    choices: [
      '促音「っ」を1拍として発音できず、落としている',
      '長音を短くしている',
      '撥音「ん」を落としている',
      '拗音を直音にしている'
    ],
    answer: 0,
    explanation: '「きって」は「き・っ・て」の3拍です。促音「っ」も1拍を占め、次の子音までの閉鎖や摩擦を1拍分保ちます。'
  },
  {
    id: 'biyouin-byouin',
    wrong: 'びよういん',
    correct: 'びょういん',
    wrongUnits: 'び・よ・う・い・ん（5拍）',
    correctUnits: 'びょ・う・い・ん（4拍）',
    choices: [
      '拗音「びょ」を「び・よ」の2拍に分けている',
      '長音「う」を落としている',
      '促音「っ」を加えている',
      '撥音「ん」を無声化している'
    ],
    answer: 0,
    explanation: '小さい「ょ」を含む「びょ」は全体で1拍です。「び・よ」と2拍に分けず、「びょ・う・い・ん」の4拍で発音します。'
  },
  {
    id: 'koya-konya',
    wrong: 'こや',
    correct: 'こんや',
    wrongUnits: 'こ・や（2拍）',
    correctUnits: 'こ・ん・や（3拍）',
    choices: [
      '撥音「ん」を1拍として発音できず、落としている',
      '促音「っ」を落としている',
      '長音を短くしている',
      '拗音「にゃ」を2拍に分けている'
    ],
    answer: 0,
    explanation: '「こんや」は「こ・ん・や」の3拍です。撥音「ん」も独立した1拍なので、省略せずに1拍分の長さを保ちます。'
  }
];