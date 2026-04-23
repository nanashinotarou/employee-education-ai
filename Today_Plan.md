# 実装計画: Day 11「AI活用によるアプリケーション開発実践①」構築

## 1. 概要
本タスクは、`Today_Research.md` および「コース情報共有」Day 11 の内容に基づき、初心者向けに最適化されたチュートリアルページ **`vol11-1.html`** を新規作成するものです。
Day 10 の「アプリ開発**基礎知識**」からテーマを「アプリ開発**実践**」に進める回であり、**「AIにコードを書かせてただの『画面』を作る段階から卒業し、API（AIの脳みそ）と通信して動く『アプリケーション』を生成・公開する」**体験を提供します。受講生が抱える「**これまでのWeb制作と何が違うのか分からない**」というモヤモヤを冒頭で徹底的に解消する構成にします。あわせて `index.html` の Day11 カードの遷移先も更新します。

## 2. ユーザーレビュー事項
> [!IMPORTANT]
> - 本計画は実装を **Cursor** など他のエディタ／AI に引き継ぐ前提。コピペ可能な本文原稿・使用クラス名・動画ID・外部リンクを明示しています。
> - リサーチメモに登場した **`.compare-table` は現プロジェクトの既定義CSSに存在しません**。本計画では既存の **`.column-box`**（vol10-1.html:319 に定義あり）で縦積み2カラム比較として実装する方針に統一しました。もし表形式を強く推したい場合は新規CSSクラス追加のご判断をください。
> - 素材フォルダに **Google AI Studio / Stitch / GenSpark / Google Cloud Run のアイコン画像は存在しません**。Font Awesome の代替（`fa-flask`, `fa-palette`, `fa-wand-magic-sparkles`, `fa-cloud`）もしくは既存 `素材/Stitchアイコン画像.png`（Stitch のみ存在）を使用します。
> - YouTube動画タイトルは `get_titles.py` で後処理取得してください。取得困難時は本計画書の仮タイトル固定でOK。

## 3. Proposed Changes（実装詳細）

---

### UI・コンポーネント設計方針
- **ベーステンプレート**: `vol10-1.html` を複製して内容差し替え。`:root` CSS変数・既存クラス（`.glass-card` / `.info-box` / `.highlight-box` / `.column-box` / `.diagram-box` / `.bento-item` / `.accordion` / `.video-grid` / `.lc-video` / `.btn` / `.btn-tier` / `.task-item` / `.mission-area` / `.wax-seal` / `.day-badge` / `.tab-btn` / `.tab-content` / `.inline-icon` / `.heading-icon`）をそのまま流用。**新規CSSの追加は原則禁止**（例外は下記のモバイル追加定義のみ）。
- **動画組み込み（Facade パターン厳守）**: `GEMINI.md` §1 に従い、全4本のYouTube動画は **Facade パターン**（`.lc-video` クラス踏襲）で実装。`<iframe>` の直書きは禁止。`data-video-id` 属性 + `maxresdefault.jpg` / `hqdefault.jpg` フォールバック背景 + Vanilla JS の `once:true` クリックハンドラで `<iframe>` に差し替え。
- **タブナビゲーション**: 既存の `switchTab('tab-xxx')` JS関数を流用。各タブの最下部に前後タブへの遷移ボタン（`.btn`）を必須配置。
- **配色**: 桜ピンク（`--accent`）をベースに維持。Day11 は「システム開発・コーディングの世界観」を強める差し色として、`--purple` と `--tier-advanced`（青系）を概念図解部分のみで使用。桜系を上書きしないこと。

### 🔴 Sticky Video（動画追従）とレスポンシブの厳守事項

vol10-1.html の末尾に追加された**最新のSticky実装**を必ず引き継ぎ、かつ **狭幅での表示崩れを防ぐ追加CSS** を本Day11で盛り込みます。Cursor は以下の3ブロックを **そのままコピペ** または **差分追記** してください。

#### ブロックA：Sticky Video の基本CSS（vol10-1.html:1701-1719 を完コピ）
`<style>` タグの末尾（レスポンシブ @media の後ろ、`</style>` の直前）に以下を配置。
```css
/* === 動画の追従（Sticky）対応 === */
.video-grid {
    position: sticky !important;
    top: 75px;
    z-index: 50;
    background: var(--bg-card, #ffffff);
    padding: 15px;
    margin-left: -15px;
    margin-right: -15px;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
}
.lc-video {
    position: sticky !important;
    top: 75px;
    z-index: 50;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
}
```

#### ブロックB：レスポンシブ基本セット（vol10-1.html:1555-1674 を完コピ）
`GEMINI.md` §2 のテンプレートと vol10-1.html の @media ブロックは内容が一致しています。**vol10-1.html:1555-1674 をそのままコピー**して `<style>` タグ末尾に配置してください（`.container` / `.hero` / `.glass-card` / `.info-box` / `.highlight-box` / `.column-box` / `.tab-btn` / `.mission-area` / `.task-item` / `.bento-item` / `.accordion` / `.fixed-header` / `.progress-container` / `.wax-seal` の狭幅調整が含まれます）。

#### ブロックC：Day11 で新規追加する狭幅対策CSS（★重要）
vol10-1.html には **`.diagram-box` / `.video-grid` / `.lc-video` のモバイル調整が未実装** です。Day11 では APIキー3ステップ図解と Sticky動画が狭幅で破綻しないよう、ブロックB の `@media (max-width: 768px) { ... }` の **閉じ `}` の直前** に以下を追記してください。

```css
            /* Day11 追加：狭幅でのAPIキー図解を縦積みに */
            .diagram-box {
                padding: 1.25rem;
                margin: 1.25rem 0;
            }
            .diagram-box .diagram-steps {
                flex-direction: column !important;
                gap: 0.75rem !important;
            }
            .diagram-box .diagram-arrow {
                transform: rotate(90deg);
            }

            /* Day11 追加：狭幅でStickyが画面を覆いすぎないよう高さ制限 */
            .video-grid,
            .lc-video {
                max-height: 45vh;
                overflow: hidden;
            }
            .video-grid {
                padding: 8px;
                margin-left: -8px;
                margin-right: -8px;
            }
```

> [!NOTE]
> `.diagram-steps` / `.diagram-arrow` は Day11 で新規に導入する内部クラス（§3 タブ2 の 2-3 で使用）。`.diagram-box` の内側で各ステップを flex 横並びにする想定なので、モバイルで縦積みへ切り替える。
>
> Sticky動画の `max-height: 45vh` は、iPhone SE（画面高 667px）基準で約 300px。`aspect-ratio 16:9` のサムネが横幅 355px × 高さ 200px 程度に収まり、下の解説テキストが充分見えるようになる。

---

### [NEW] `vol11-1.html`

**基本情報**
- `<title>`: `Day 11 | AI活用によるアプリケーション開発実践①`
- 固定ヘッダーの Day カウンタ: `Day 11 / 13`
- 構成: 4タブ（`#tab-goal` / `#tab-first` / `#tab-second` / `#tab-summary`）。

---

#### ① タブ1：本日の目標 (`#tab-goal`)

**1-1. Hero見出し**
- 研修目的: 「**AIでアプリケーションの基本構造とUIを生成する手法を体験し、開発の基礎プロセスを習得する**」を `.glass-card` 内に大書き。

**1-2. モヤモヤ解消ブロック**（`.info-box`、最上部）
- 見出し: 「💭 『前までのWeb制作と何が違うの？』への回答」
- 本文（コピペ可）:
  > 「Day10 までで作ってきたのは、情報を**"見せる"** ためのホームページ（＝ポスターやパンフレットのような静的なWeb制作）でした。Day11 から作るのは、ユーザーの入力に反応して**計算・通信・返答**する"動くシステム"（＝電卓やチャットボットのような動的なWebアプリ開発）です。今日の真のテーマは、『**ただの画面から卒業し、AI（API）と通信して動くアプリを生成・公開する**』体験を積むことです。」

**1-3. Web制作 vs アプリ開発 比較**（`.column-box` 2カラム、差し色ピンク×青）

| 左カラム `--accent`（桜ピンク） | 右カラム `--tier-advanced`（青） |
|---|---|
| 🖼️ **Web制作（Day7〜10）** | ⚙️ **アプリ開発（Day11〜）** |
| アイコン: `fa-solid fa-palette` | アイコン: `fa-solid fa-gears` |
| **性質**: 静的（固定の画面） | **性質**: 動的（動くシステム） |
| **例え**: ポスター／パンフレット | **例え**: 電卓／チャットボット |
| **主な技術**: HTML / CSS（見た目） | **主な技術**: API連携・裏側のプログラム処理 |
| **ユーザー操作**: 見る・読む・リンクをクリック | **ユーザー操作**: 入力する・操作する・結果を受け取る |

**1-4. 進行ステータス**（3カード横並び、`.glass-card` 内）
1. 前半：Google AI Studio で"**アプリを生成**"する体験（動画2本）
2. 後半：Stitch / GenSpark で"**スマホアプリ化**"まで（動画2本）
3. 実習：課題制作 → Padlet シェア（Day13 成果発表への第二稿）

**1-5. タブ下部ナビゲーション**
- 「前半タブへ進む →」ボタン（`.btn`、`switchTab('tab-first')`）

---

#### ② タブ2：前半（Google AI Studio でアプリ生成 と API理解） (`#tab-first`)

**2-1. セクション導入**（`.highlight-box`）
- 見出し: 「🧪 今日のツール：Google AI Studio」
- 本文（コピペ可）:
  > 「今日の主役は **Google AI Studio**。ただAIとチャットするだけのツールではなく、**AIの"脳みそ"をあなたのアプリに組み込める** 開発基盤です。『APIキー』という言葉がたくさん出てきますが、"AIの脳みそを借りるための鍵"と覚えておけばOK。」
- リンクボタン群（`.btn` 横並び）:
  - 「🧪 Google AI Studio を開く」→ https://aistudio.google.com/apps
  - 「☁️ Google Cloud Run を開く」→ https://cloud.google.com/run?hl=ja（注釈: 「※ 90日間有効な$300クレジットあり。クレカ登録が必要」を `.btn` 直下の小文字テキストで付記）

**2-2. 動画セクション（前半2本、Facade + Sticky 必須）** (`.video-grid`)

| # | 動画ID | 仮タイトル |
|---|---|---|
| 1 | `bmtG4BhVRq4` | 動画1：Google AI Studio が神アプデ！『アプリ開発』とAPIキーなど『裏側の仕組み』をW解説 |
| 2 | `HXIJ9OvkKkc` | 動画2：Google AI Studio の隠れ神機能「Build」超簡単アプリ作成術 |

各動画の直下に `.accordion` で「動画の見どころ」を配置（コピペ可）:

- **動画1のアコーディオン本文**:
  > 「ただAIとチャットするだけでなく、**AIの"脳みそ（API）"を自分のアプリに組み込む仕組み** を理解します。APIキーの概念を掴むことで、『なぜアプリがAIとして機能するのか』という裏側が見えてきます。」
- **動画2のアコーディオン本文**:
  > 「プロンプト（指示）を入れるだけで、すぐに動く **Webアプリを生成できる『Build』機能** の紹介。環境構築ゼロで、アプリの基本構造とUIが一瞬で立ち上がる体験を得られます。」

**2-3. 「APIキーって何？」の図解**（`.diagram-box`、動画2の直下）

- 見出し: 「🔑 APIキー＝"AIの脳みそを借りてくる鍵"」
- 図解構造（3ステップ、横並びまたは縦ステップ）:
  1. **あなたのアプリ** — ユーザーの質問を受け取る（アイコン: `fa-solid fa-mobile-screen`）
  2. **APIキー（鍵）で通信** — Google の AI 基盤へ問い合わせ（アイコン: `fa-solid fa-key` + `fa-solid fa-arrows-left-right`）
  3. **AIが答えを返す** — アプリがユーザーに結果を表示（アイコン: `fa-solid fa-brain` + `fa-solid fa-reply`）
- 補足テキスト（`.diagram-box` の下部、コピペ可）:
  > 「つまり、あなたの作ったアプリは"頭脳を持たない入れ物"で、APIキーを使って **Googleが用意してくれているAIの頭脳を借りて** 賢い返答を返している、というイメージです。鍵（APIキー）の管理だけはしっかり行ってください（人に見せない！）。」

**2-4. タブ下部ナビゲーション**
- 「← 目標タブへ戻る」（`.btn`、`switchTab('tab-goal')`）
- 「後半タブへ進む →」（`.btn`、`switchTab('tab-second')`）

---

#### ③ タブ3：後半（Stitch & GenSpark で"スマホアプリ化"まで） (`#tab-second`)

**3-1. セクション導入**（`.highlight-box`、紫系アクセント）
- 見出し: 「🚀 プログラミング知識ゼロで"スマホアプリ"まで出せる時代」
- 本文（コピペ可）:
  > 「後半は、さらに革命的な2つのツールを紹介します。**Stitch** で"UIコンポーネント"を生成し、**GenSpark** で"**話すだけでiOS/Androidアプリをリリース**" できる——という体験です。『作りたいもののイメージを言葉で伝えられればアプリが作れる時代』が、もうすでに来ています。」

**3-2. 動画セクション（後半2本、Facade + Sticky 必須）** (`.video-grid`)

| # | 動画ID | 仮タイトル |
|---|---|---|
| 3 | `rsPu_15LUSU` | 動画3：GoogleのAIデザインツール「Stitch」が神進化。アイデア出しからアプリ化まで実演解説 |
| 4 | `DLCDNCA4-iU` | 動画4：【誰でもアプリ開発者】AIに話すだけでiOS/Androidアプリをリリース！「GenSpark」AIデベロッパー2.0が革命的すぎた |

各動画の直下に `.bento-item` でツール解説カードを配置（コピペ可）:

- **Stitch カード**（動画3直下）
  - アイコン: `素材/Stitchアイコン画像.png` を `.inline-icon` で、または `fa-solid fa-palette`
  - 見出し: 「Stitch — UIをコンポーネント化して、そのままアプリに」
  - 本文:
    > 「アイデアをUIデザイン（画面部品＝コンポーネント）に落とし込み、**それをアプリとして動作する状態まで持っていける** Google の AIデザインツール。Day9 でも触れた Stitch が、Day11 では"動くアプリ"を作るための土台として再登場します。」
- **GenSpark カード**（動画4直下）
  - アイコン: `fa-solid fa-wand-magic-sparkles`（紫系）
  - 見出し: 「GenSpark — 話すだけで iOS/Android アプリをリリース」
  - 本文:
    > 「自然言語で話しかけるだけで、**スマホアプリ（iOS / Android）としてリリースできるレベルまで開発が進む** 衝撃のツール。プログラミングの知識がゼロでも、『こういうアプリが欲しい』を言葉で伝えるだけでストア公開まで辿り着ける時代の象徴です。」

**3-3. "革命的進化"まとめ**（`.highlight-box`、紫系）

- 見出し: 「🌟 知識ゼロでもアプリが世に出せる時代」
- 本文（コピペ可）:
  > 「Day10 で学んだ **Bolt.new（Webアプリ）**、Day11 前半の **AI Studio（API連携アプリ）**、そして後半の **Stitch → GenSpark（スマホアプリ）**。この3層を押さえれば、あなたが『作りたい！』と思ったもののほぼ全てが、プログラミング知識なしで形にできます。あとは**何を作るか**を決めるだけです。」

**3-4. タブ下部ナビゲーション**
- 「← 前半タブへ戻る」（`.btn`、`switchTab('tab-first')`）
- 「実習タブへ進む →」（`.btn`、`switchTab('tab-summary')`）

---

#### ④ タブ4：今日のまとめ・実習 (`#tab-summary`)

**4-1. 実習導入**（`.highlight-box`）
- 見出し: 「🎯 実習：自分の業務に役立つ"動くもの"を1つ作る」
- 本文（コピペ可）:
  > 「Day10 で学んだツール群（Manus / Bolt.new / Cursor / NotebookLM / Gemini Canvas / Antigravity / Dify）に、今日の **AI Studio / Stitch / GenSpark** を加えた中から、自分の業務に役立つ『アプリ』または『Webサイト』を作成しましょう。Day13 の成果発表に向けた**第二稿**を出すのが今日のゴール。Day10 で投稿したものをブラッシュアップするのでもOKです。」

**4-2. 必読資料：Web公開ガイドライン**（`.info-box`、大型CTAボタン）
- 見出し: 「📖 必読：Web公開ガイドライン」
- 本文:
  > 「作ったものを公開する前に、社内向け／社外向けの公開ルール・セキュリティの注意点が1枚にまとまった資料を必ず目を通してください。」
- CTAボタン（`.btn` 大型）:
  - ラベル: 「📘 Web公開ガイドラインを開く」
  - リンク: https://platinumzone.co.jp/dx-biome/web_publish_guide.html

**4-3. Padlet 課題提出ボタン**（大型CTA、画面中央寄せ）
- 見出し: 「📌 作ったものはここにシェア」
- 補足テキスト: 「【DX】社員教育とAIコース 課題シェアボード（Padlet）」
- CTAボタン（`.btn` または `.pub-card` 大型化）:
  - ラベル: 「🚀 Padlet を開いて投稿する」
  - リンク: https://padlet.com/platinumzonedx/dx-ai-2m1o5unlgm3dl2ji

**4-4. 今日のミッションリスト** (`.mission-area` > `.task-item` × 5)

チェックボックス形式。全てONで `.wax-seal` の「CLEAR」スタンプが出現（vol10-1.html のJSロジックをそのまま流用）。

1. Web制作とアプリ開発の違いを自分の言葉で説明できる
2. APIキー＝「AIの脳みそを借りる鍵」と理解した
3. AI Studio の Build 機能で、プロンプトからアプリが生成される流れを見た（動画OK）
4. Stitch / GenSpark が「UI → アプリ → スマホリリース」まで繋がる時代と認識した
5. Padlet に作品を1つ投稿した（Day13 成果発表の第二稿）

**4-5. ナビゲーション**（ページ最下部）
- 「← Day 10 に戻る」ボタン → `vol10-1.html`
- 「Day 12 へ進む →」ボタン → `vol12-1.html`
  - Day12 未実装の可能性があるため、`onclick` に `alert('Day12 は公開準備中です')` フォールバックを1行
- 「🏠 Home に戻る」ボタン → `index.html`
- 「← 後半タブへ戻る」（`.btn`、`switchTab('tab-second')`）もページ内遷移として配置

---

### [EDIT] `index.html`（差分のみ）
- Day 11 カードの遷移先（`href` または `data-target`）を `vol11-1.html` に設定。
- Day 11 カードのサブタイトル／ステータスバッジが未公開表示になっている場合は「AI活用によるアプリケーション開発実践①」に差し替え、バッジを「公開中」相当に更新。
- **他のカードやグローバルCSSには一切触れない**。

---

## 4. 検証項目（Verification Plan）

1. **タブ切り替え動作**: 4タブ全てで `switchTab()` による `active` クラスの排他制御が効いていること。各タブの下部ナビ（前へ／次へ）が正しい `tab-xxx` にジャンプすること。
2. **Facade パターン**: 全4本の動画（前半2本＋後半2本）について、サムネクリックで `<iframe>` 自動再生に切り替わり、2回目クリックで再ロードされないこと（`once:true`）。
3. **Sticky Video（デスクトップ）**: `.video-grid` / `.lc-video` の動画カードが、解説テキストのスクロール中も `top: 75px`（固定ヘッダー直下）に追従表示されること。`z-index: 50` により他要素の下に潜らないこと。
4. **Sticky Video（モバイル 375px）**: Day11 で追記した `max-height: 45vh` が効き、動画が画面の半分以下に収まり **下の解説テキストが常に見えること**。Stickyが画面全体を覆って解説が読めない状態になっていないこと。
5. **column-box**: タブ1の「Web制作 vs アプリ開発」2カラム比較が、デスクトップで横並び・モバイル（375px）で縦積みになること。
6. **diagram-box（APIキー図解）**: デスクトップで3ステップが横並び（矢印付き）、モバイル（375px）で縦積みに切り替わり、矢印が90度回転して下向きになること。paddingも適切に縮小されていること。
7. **外部リンク動作**: AI Studio / Cloud Run / Padlet / Web公開ガイドラインの4つのCTAボタンが、別タブ（`target="_blank" rel="noopener"`）で正しく開くこと。
8. **レスポンシブ総合**: iPhone SE（375px）／iPad mini（768px）で、`.container` / `.glass-card` / `.bento-item` / `.column-box` / `.mission-area` / `.diagram-box` / `.video-grid` / `.lc-video` の余白・幅が適切に縮小され、**横スクロールが発生しないこと**。
9. **タブナビの狭幅表示**: モバイル時に `.tab-btn` が `flex: 1 1 100%` で1行1ボタンになり、タップ領域が十分に確保されていること。
10. **ミッション達成演出**: 5つのチェックボックスを全てONにすると `.wax-seal.CLEAR` が出現すること（vol10-1.html と同じ挙動）。
11. **ナビゲーション整合性**:
    - `index.html` → Day11カード → `vol11-1.html` の遷移
    - `vol11-1.html` → Day10 / Day12 / Home の3ボタンがそれぞれ意図通り動くこと
    - Day12 未実装時のフォールバック alert が発火すること
12. **素材参照**: `素材/Stitchアイコン画像.png` が Stitch カードで正しく読み込まれること（404 なし）。他のアイコン（AI Studio / GenSpark / Cloud Run）は Font Awesome で代替されていること。
13. **桜テーマ維持**: 差し色として導入した青（`--tier-advanced`）・紫（`--purple`）がページ全体を侵食せず、主役が桜ピンク（`--accent`）のままであること。
14. **コピペ原稿の反映**: §3 の表および本文引用が、改変なくHTMLに流し込まれていること。
