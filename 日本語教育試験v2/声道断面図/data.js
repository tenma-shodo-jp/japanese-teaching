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
