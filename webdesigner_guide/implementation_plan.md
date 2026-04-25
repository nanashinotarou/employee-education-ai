# How to Webデザイナー ― 実装計画書

最終更新：2026-04-25  
設計：Claude Code / 実装：Cursor / デプロイ：Antigravity

---

## この計画の目的

Cursor がこのファイルを読んで、ワイヤーフレームとHTMLページを順番に作成できるようにする実行計画。  
Claude Code はここまで（設計＋計画書作成）を担当。実際のHTML生成はCursorが担当する。

---

## 前提として読むべきファイル

作業開始前に、必ず以下を読んで文脈を理解すること。

1. **[site_structure.md](site_structure.md)** — ページ構成・コンテンツ定義・デザイン仕様（本作業の設計書）
2. **参考ワイヤー（別プロジェクト）**：`G:/マイドライブ/仕事/BNI岐阜チャプターサイト制作/wireframe_top.html`  
   → 注釈の書き方・ワイヤーフレームの思想はこれに準ずる

---

## フォルダ構成

すべてのファイルは `G:/マイドライブ/研修/【202604】社員教育とAI/webdesigner_guide/` 配下に作成する。

```
webdesigner_guide/
├─ site_structure.md        ← 設計書（読むだけ。変更不要）
├─ implementation_plan.md   ← 本ファイル（読むだけ。変更不要）
├─ index.html               ← 本番トップページ
├─ page01_what.html         ← 本番：Webデザイナーという仕事
├─ page02_workflow.html     ← 本番：Web制作のワークフロー
├─ page03_design.html       ← 本番：Webデザインの基礎知識
├─ page04_tools.html        ← 本番：使うツールを知る
├─ page05_ai.html           ← 本番：AIとWebデザイン
├─ page06_client.html       ← 本番：クライアントワークの実際
├─ page07_start.html        ← 本番：これから始める人へ
└─ wireframe/               ← ★ メイキング特典（Phase 2 時点のワイヤー版を保存）
   ├─ guide.html            ← ワイヤー体験の入口（Phase 5：読み方・制作プロセス解説）
   └─ *.html                ← .wf-note と .page-meta 付きの制作途中版
```

---

## 実装フェーズ

### Phase 1：トップページ（index.html） ✅ 完了（2026-04-22）
**Cursorへの指示**：まずこれだけ作る。他のページはPhase 2。

### Phase 2：内部ページ（page01〜page07） ✅ 完了（2026-04-22）
Phase 1 完了・確認後に着手。page01 から順に作成する。

### Phase 3：既存研修サイトへの連携 ✅ 完了（2026-04-22）
`G:/マイドライブ/研修/【202604】社員教育とAI/index.html` に  
`webdesigner_guide/index.html` へのリンクボタンを追加する。  
（既存ファイルの変更なので、Phase 2 完了後に実施）

### Phase 4：本番化・コンテンツ執筆 ✅ 完了（2026-04-25）

**担当**：Cursor  
**前提として読むファイル**：必ず `site_structure.md` を最初から最後まで読むこと。  
特に「サイトを貫くメッセージ」「各ページの詳細構成」を把握してから作業を開始する。

### Phase 5：ワイヤーフレーム体験ガイドページの新設 ✅ 完了（2026-04-25）

`webdesigner_guide/wireframe/guide.html` を新設。`webdesigner_guide/index.html` のワイヤーリンク先を `wireframe/guide.html` に変更。手順の詳細は下記「Phase 5：ワイヤーフレーム体験ガイドページの新設」を参照。

---

#### Phase 4 の全体方針

- `wireframe/` 配下のファイルは **絶対に変更しない**（メイキング特典として保存済み）
- `webdesigner_guide/` 直下の `index.html` と `page01〜page07` を**上書き**して本番版を作る
- 各ページのCSS・HTML構造は `wireframe/` 内の対応ファイルをベースに使う
- 削除するもの：`.wf-note` 要素の全削除、`.page-meta` 黒帯の全削除
- 追加するもの：実コンテンツ本文、新規セクション（下記参照）

---

#### Phase 4-1：index.html（トップページ）の再構築

`wireframe/index.html` をベースに、以下の変更を加えて本番版 `index.html` を作る。

**変更点 1：キャッチコピー**
ヒーローのメインコピーは現在保留中。以下のコメントを HTML に残すこと：
```html
<!-- CATCHCOPY: 現在検討中。ここを差し替える。暫定：「デザインを、仕事に変える。」-->
<h1>デザインを、仕事に変える。</h1>
```

**変更点 2：ヒーローCTAボタンの廃止**
`.hero-cta` リンクを削除し、代わりにスクロール誘導を追加：
```html
<p class="scroll-hint">↓ まずはこのサイトについて</p>
```

**変更点 3：「このサイトについて」セクションを新設**（ヒーローの直後、7カードの前に配置）

3ブロック構成：

**A. こんな人のために**
```
- グラフィック経験はあるが、Webに越境したい方
- Canva / Figmaは触れるが、Web制作の全体像が掴めていない方
- 自分でコードは書かないが、クライアント対応・ディレクションでWebに関わる方
- 「言われた作業をこなすだけ」を卒業したい方
```

**B. なぜ作ったか**
```
素材を作るだけでは、採算が取れない時代がある。
定型の作業をどれだけ積み上げても、素材を納品するだけでは単価の天井がある。

一方で、コーディング力が初歩でも「プロジェクトを動かす力」があれば仕事は変わる。
AIが実装を担う今こそ、「何を依頼するか」「成果物が妥当か」を判断できる人に価値が集まる。

このサイトは「Webの技術を教える場所」ではない。
あなたがすでに持つデザイン力に、仕事を動かす視点を掛け算するための教材だ。
```

**C. 読み終えたら、あなたは**
- クライアントと対等に要件定義ができる
- 制作者やAIに的確な指示が出せる
- 成果物のクオリティを自分で判断できる
- 案件の採算（単価・作業時間・AI コスト配分）を見極められる
- 「素材を納品する人」ではなく「プロジェクトを完遂するディレクター」として仕事を取れる

**変更点 4：7カードの後に二次CTAを追加**
```html
<div class="secondary-cta">
  <a href="page01_what.html" class="cta-btn">
    では、Page 01 から読み始めよう <i class="fa-solid fa-arrow-right"></i>
  </a>
</div>
```

**変更点 5：フッター上に「制作の裏側を見る」リンクを追加**
```html
<div class="making-link">
  <a href="wireframe/index.html">
    <i class="fa-solid fa-film"></i> このサイトの制作過程を見る（ワイヤーフレーム版）
  </a>
</div>
```

---

#### Phase 4-2：page01_what.html の更新

`wireframe/page01_what.html` をベースに `.wf-note` と `.page-meta` を削除し、  
仮テキストを実コンテンツに差し替える。

**追加セクション：「Webデザイナーがカバーできない範囲」**

既存コンテンツの後、次ページナビの前に追加する。

```
見出し：「Webデザイナーの守備範囲と、その外側」

リード：Webデザイナーとして仕事をするうえで、
「これは自分が担う範囲か、エンジニアに依頼すべきか」を
瞬時に判断できることはとても重要だ。
クライアントへの説明、見積もり、チームへの依頼——
すべてがこの線引きを正確に理解しているかどうかで変わる。

▼ Webデザイナーの範囲外（エンジニアが必要）
- 会員機能・ログイン・マイページ
- ECカート・決済処理・在庫管理
- 予約・申込システムのバックエンド
- データベース設計・APIとの接続
- セキュリティが絡む個人情報処理
- サーバーサイドのプログラミング全般

▼ グレーゾーン（ツールや外部サービスで代替できるケースも）
- フォーム送信処理 → Formspree / Google Forms で代替可
- 簡易ブログ機能 → WordPress / Notion API で代替可
- メルマガ・自動返信 → Mailchimp / SendGrid で代替可

コラムボックス：「"わかりません"と言える勇気が、信頼をつくる」
→ 範囲外を正直に伝え、適切な専門家につなぐことができるディレクターは
   クライアントから長期的に信頼される。
```

---

#### Phase 4-3：page02〜page05 の更新

`wireframe/` 対応ファイルをベースに `.wf-note` と `.page-meta` を削除し、  
仮テキストを実コンテンツに差し替える。  
セクション構成の変更はなし。`site_structure.md` の該当ページ記述を参照してコンテンツを執筆。

---

#### Phase 4-4：page06_client.html の更新（追加コンテンツあり）

`wireframe/page06_client.html` をベースに `.wf-note` と `.page-meta` を削除し、  
既存コンテンツを差し替えたうえで、以下の2コラムを末尾に追加する。

**COLUMN 1：「作画カロリー」と採算性の話**

```
見出し：稼げる案件の選び方——「作画カロリー」を意識する

リード：どれだけ丁寧に仕事をしても、最初の案件選択で採算が決まることがある。
「作画カロリー」——その案件にかかる設計・実装・調整コストの総量——を
見積もる力が、Webデザイナーの収益を左右する。

▼ 作画カロリーが高い案件（低単価で受けると危険）
- 複雑なアニメーション・インタラクション多用
- カスタムイラスト・オリジナルビジュアルが必須
- ページ数が多く、コンテンツ量も膨大
- 多言語対応・会員機能など複合要件
- 要件が曖昧なクライアント（修正が青天井になりやすい）

▼ カロリー低く・高単価を狙いやすい案件
- LP（1ページ完結・明確な目的）
- WordPressテーマのカスタマイズ
- STUDIOやwixなどノーコードCMS案件
- 定期保守・更新作業（継続課金モデル）
- 要件定義・ワイヤーフレームのみ（上流工程特化）

コラムボックス：「省エネで高単価を狙う、がプロの発想」
→ AIを使えば実装コストは下がる。でも設計・確認・コミュニケーションコストは下がらない。
   だからこそ、上流工程の価値はむしろ上がっている。
```

**COLUMN 2：AI開発環境のコスト配分と採算設計**

```
見出し：月1万円で「止まらない開発環境」を作る発想

リード：開発にかかるコストは「時間」だけではなく
「AIのトークン使用量」も含む時代になった。
どのAIツールに何を任せるか——その設計力が、採算を決める。

▼ 現実的なAI開発環境の例（月額目安）
Claude Code（Pro）：約 ¥2,500〜3,000
→ 役割：要件定義・実装計画・レビュー・仕様書作成

Cursor（Pro）：約 ¥2,000〜3,000
→ 役割：コーディング・実装の実行担当

Antigravity等（Googleエコシステム連携）：約 ¥数百〜数千
→ 役割：デプロイ・Google Workspace連携・自動化

合計：月 ¥10,000 前後で、役割分担された「止まらない開発環境」が成立する。

▼ 考え方
- MAXプランを無制限に使っても、採算割れなら意味がない
- AIのトークン消費量は、案件の複雑さ・開発難度にある程度比例する
- つまり「AIに何を頼むか」を設計できる人が、コストを制御できる
- Claude Code → 計画と判断、Cursor → 実装、Antigravity → 運用という
  役割分担が「省エネ高単価」の一形態

▼ 案件種別ごとの採算目安
| 案件種別                     | 目安単価         | 目安工数    |
|------------------------------|-----------------|------------|
| LP（シンプル）               | 3〜8万円        | 3〜10h     |
| コーポレートサイト           | 15〜50万円      | 40〜100h   |
| WordPress構築                | 10〜30万円      | 20〜60h    |
| ECサイト                     | 30〜100万円+    | 100h+      |
| 保守・更新（月額）           | 1〜5万円/月     | 数h/月     |
| 上流工程のみ（要件定義・WF） | 5〜20万円       | 10〜30h    |
```

---

#### Phase 4-5：page07_start.html の更新

`wireframe/page07_start.html` をベースに `.wf-note` と `.page-meta` を削除し、  
仮テキストを実コンテンツに差し替える。  
締めのメッセージには「素材屋→プロジェクト屋」の転換を込める：

```
締めのメッセージ（例）：
「このガイドを読み終えたあなたは、もう「ただのデザイナー」ではない。
Webの全体像を知り、クライアントと話せ、AIに指示が出せる。
プロジェクトを動かす一歩を、ここから踏み出してほしい。」
```

---

#### Phase 4 完了チェックリスト

- [x] `wireframe/` 配下のファイルが変更されていないこと
- [ ] `index.html` から `.wf-note` が完全に削除されていること ← **未完了**
- [x] page01〜page07 から `.page-meta`・`.wf-note` が削除されていること
- [ ] `index.html` に「このサイトについて」3ブロックが入っていること ← **未完了**
- [ ] `index.html` のヒーローにCTAボタンがなく、スクロール誘導になっていること ← **未完了**
- [ ] `index.html` に「ワイヤーフレーム版を見る」リンクが入っていること ← **未完了**
- [x] `page01` に「カバーできない範囲」セクションが入っていること
- [x] `page06` に「作画カロリー」「AI開発コスト」2コラムが入っていること
- [x] `page07` の締めメッセージに「プロジェクト屋」への転換が込められていること
- [x] 全ページでナビの `.active` クラスが正しく設定されていること

---

### Phase 4 修正指示（index.html のみ再作業）

**page01〜page07 は完了。`webdesigner_guide/index.html` のみ以下を修正すること。**
`wireframe/index.html` は変更しないこと。

#### 修正 1：`.wf-note` を全削除
以下5箇所をすべて削除する（行番号は現在の index.html 基準）：
- 行408-412：ヒーロー実装注釈
- 行419-424：カードグリッド実装注釈
- 行483-487：使い方セクション実装注釈
- 行505-509：研修連携実装注釈
- 行521-525：ページナビ実装注釈

#### 修正 2：ヒーローの CTA ボタンを差し替え
`.hero-cta` を削除し、スクロール誘導テキストに変更：
```html
<!-- 削除する -->
<a href="page01_what.html" class="hero-cta">
  まず "Webデザイナーという仕事" を読む <i class="fa-solid fa-arrow-right"></i>
</a>

<!-- 代わりに追加する -->
<p class="scroll-hint" style="margin-top:24px; font-size:14px; color:rgba(255,255,255,0.6); letter-spacing:0.05em;">
  ↓ まずはこのサイトについて
</p>
```

#### 修正 3：ヒーロー直後に「このサイトについて」セクションを追加
`.page-hero` の直後、`<main class="content-wrap">` の**最初の `<section>` の前**に挿入：

```html
<main class="content-wrap">

  <!-- ★ このサイトについて（新規追加）-->
  <section class="card" id="about">
    <h2 class="section-title">このサイトについて</h2>

    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:20px; margin-top:8px;">

      <!-- A. こんな人のために -->
      <div style="background:#fafbff; border:1px solid #e5e7eb; border-radius:10px; padding:20px;">
        <h3 style="font-size:15px; font-weight:700; margin-bottom:12px; color:#1a1f36;">
          <i class="fa-solid fa-user" style="color:#ff6b6b; margin-right:6px;"></i>こんな人のために
        </h3>
        <ul style="font-size:13px; color:#6b7280; line-height:2; padding-left:1em;">
          <li>グラフィック経験はあるが、Webに越境したい方</li>
          <li>Canva / Figmaは触れるが、Web制作の全体像が掴めていない方</li>
          <li>コードは書かないが、クライアント対応・ディレクションでWebに関わる方</li>
          <li>「言われた作業をこなすだけ」を卒業したい方</li>
        </ul>
      </div>

      <!-- B. なぜ作ったか -->
      <div style="background:#fafbff; border:1px solid #e5e7eb; border-radius:10px; padding:20px;">
        <h3 style="font-size:15px; font-weight:700; margin-bottom:12px; color:#1a1f36;">
          <i class="fa-solid fa-lightbulb" style="color:#ff6b6b; margin-right:6px;"></i>なぜ作ったか
        </h3>
        <p style="font-size:13px; color:#6b7280; line-height:2;">
          素材を作るだけでは、採算の天井がある。<br>
          一方で、コーディング力が初歩でも「プロジェクトを動かす力」があれば仕事は変わる。<br>
          AIが実装を担う今こそ、「何を依頼するか」「成果物が妥当か」を判断できる人に価値が集まる。<br>
          このサイトは「Webの技術を教える場所」ではない。<strong>あなたのデザイン力に、仕事を動かす視点を掛け算する</strong>ための教材だ。
        </p>
      </div>

      <!-- C. 読み終えたら -->
      <div style="background:#fafbff; border:1px solid #e5e7eb; border-radius:10px; padding:20px;">
        <h3 style="font-size:15px; font-weight:700; margin-bottom:12px; color:#1a1f36;">
          <i class="fa-solid fa-arrow-trend-up" style="color:#ff6b6b; margin-right:6px;"></i>読み終えたら、あなたは
        </h3>
        <ul style="font-size:13px; color:#6b7280; line-height:2; padding-left:1em;">
          <li>クライアントと対等に要件定義ができる</li>
          <li>制作者やAIに的確な指示が出せる</li>
          <li>成果物のクオリティを自分で判断できる</li>
          <li>案件の採算・AI コスト配分を見極められる</li>
          <li>「素材を納品する人」でなく「プロジェクトを完遂するディレクター」として仕事を取れる</li>
        </ul>
      </div>
    </div>

    <!-- レスポンシブ対応：スマホでは1カラムに -->
    <style>
      @media (max-width: 768px) {
        #about > div { grid-template-columns: 1fr !important; }
      }
    </style>
  </section>
  <!-- ★ ここまで新規追加 -->

  <!-- 以降は既存コンテンツ（このサイトで学べること 等）をそのまま続ける -->
```

#### 修正 4：7カードの後に二次CTA を追加
`.nav-cards` の閉じタグ `</div>` の直後に追加：
```html
<div style="text-align:center; margin-top:28px;">
  <a href="page01_what.html" style="
    display:inline-flex; align-items:center; gap:10px;
    padding:16px 36px; background:var(--accent); color:#fff;
    border-radius:999px; text-decoration:none; font-weight:700; font-size:15px;
    box-shadow:0 8px 24px rgba(255,107,107,0.35);
  ">
    では、Page 01 から読み始めよう <i class="fa-solid fa-arrow-right"></i>
  </a>
</div>
```

#### 修正 5：フッター直前に「制作の裏側を見る」リンクを追加
`<footer>` タグの直前に追加：
```html
<div style="text-align:center; padding:24px; border-top:1px solid #e5e7eb; margin-top:8px;">
  <a href="wireframe/index.html" style="font-size:13px; color:#6b7280; text-decoration:none;">
    <i class="fa-solid fa-film"></i> このサイトの制作過程を見る（ワイヤーフレーム版）
  </a>
</div>
```

---

## 全ページ共通ルール

### HTML構造（全ページ共通）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>【ページ名】| How to Webデザイナー</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    /* ← 後述の共通CSSをここに記述 */
  </style>
</head>
<body>
  <!-- ページ情報バー（開発用・黒帯）-->
  <div class="page-meta">
    <div style="font-size:11px; opacity:0.7;">How to Webデザイナー</div>
    <strong>【ページ名と番号】</strong>
  </div>

  <!-- ヘッダー -->
  <header>...</header>

  <!-- ページタイトルエリア -->
  <section class="page-hero">...</section>

  <!-- メインコンテンツ -->
  <main class="content-wrap">...</main>

  <!-- ページナビゲーション（前後ページ）-->
  <nav class="page-nav">...</nav>

  <!-- フッター -->
  <footer>...</footer>
</body>
</html>
```

---

### 共通CSS（全ページの `<style>` にコピーして使う）

```css
:root {
  --bg-body:   #f8f9fc;
  --bg-card:   #ffffff;
  --bg-dark:   #1a1f36;
  --text-main: #1a1f36;
  --text-sub:  #6b7280;
  --accent:    #ff6b6b;
  --accent-2:  #4ecdc4;
  --border:    #e5e7eb;
  --shadow:    0 4px 20px rgba(0,0,0,0.08);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: "Noto Sans JP", sans-serif;
  background: var(--bg-body);
  color: var(--text-main);
  font-size: 16px;
  line-height: 1.8;
}

/* ページ情報バー（開発用：本番では非表示 or 削除） */
.page-meta {
  background: #333;
  color: #fff;
  padding: 6px 20px;
  font-size: 12px;
  display: flex;
  gap: 16px;
  align-items: center;
}

/* ヘッダー */
header {
  background: var(--bg-dark);
  color: #fff;
  padding: 0 40px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.site-logo {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.02em;
}

header nav a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-size: 13px;
  margin-left: 20px;
  transition: color 0.2s;
}
header nav a:hover,
header nav a.active { color: var(--accent); }

/* ページタイトルエリア */
.page-hero {
  background: var(--bg-dark);
  color: #fff;
  padding: 48px 40px;
  text-align: center;
}
.page-hero .page-num {
  font-size: 12px;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.page-hero h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
}
.page-hero p {
  font-size: 15px;
  color: rgba(255,255,255,0.7);
  max-width: 600px;
  margin: 0 auto;
}

/* メインコンテンツ */
.content-wrap {
  max-width: 960px;
  margin: 48px auto;
  padding: 0 24px;
}

/* カード */
.card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 32px;
  box-shadow: var(--shadow);
  margin-bottom: 32px;
}

/* セクション見出し */
.section-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 3px solid var(--accent);
}

/* ページナビ */
.page-nav {
  max-width: 960px;
  margin: 0 auto 64px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
.page-nav a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--bg-dark);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.2s;
}
.page-nav a:hover { opacity: 0.85; }
.page-nav a.next { background: var(--accent); margin-left: auto; }

/* フッター */
footer {
  background: var(--bg-dark);
  color: rgba(255,255,255,0.6);
  text-align: center;
  padding: 32px 24px;
  font-size: 13px;
}
footer a { color: var(--accent-2); text-decoration: none; }

/* 注釈スタイル（ワイヤーフレーム用：本番では削除） */
.wf-note {
  background: #fff3cd;
  border-left: 4px solid #ff9500;
  padding: 10px 16px;
  margin: 12px 0;
  font-size: 13px;
  color: #7a5800;
  border-radius: 0 6px 6px 0;
}

/* レスポンシブ */
@media (max-width: 768px) {
  header { padding: 0 20px; }
  header nav { display: none; } /* ハンバーガー対応は本実装で */
  .page-hero { padding: 32px 20px; }
  .page-hero h1 { font-size: 24px; }
  .content-wrap { margin: 32px auto; }
  .card { padding: 20px; }
  .page-nav { flex-direction: column; }
  .page-nav a.next { margin-left: 0; }
}
```

---

### ヘッダー・フッターの共通HTML

**全ページで以下を統一すること（コピペして使う）**

```html
<!-- ヘッダー -->
<header>
  <a href="index.html" class="site-logo">HOW TO WEBDESIGNER</a>
  <nav>
    <a href="page01_what.html">仕事を知る</a>
    <a href="page02_workflow.html">ワークフロー</a>
    <a href="page03_design.html">デザイン基礎</a>
    <a href="page04_tools.html">ツール</a>
    <a href="page05_ai.html">AIと活用</a>
    <a href="page06_client.html">クライアントワーク</a>
    <a href="page07_start.html">始め方</a>
  </nav>
</header>

<!-- フッター -->
<footer>
  <p>How to Webデザイナー ― <a href="../index.html">← 研修サイトへ戻る</a></p>
  <p style="margin-top:8px;">© 2026 H.K</p>
</footer>
```

---

### 注釈ルール（`.wf-note`）

各セクション・各ブロックに必ず注釈を入れる。目的は「実装者がコーディング時に迷わないようにする」こと。

必ず以下を含める：
- **実装要件**（例：「アコーディオンUI → CSS `<details>`で実装可」）
- **素材の状態**（「仮テキスト」「要差し替え」「確定済み」）
- **レスポンシブ挙動**（「スマホでは1カラム」「ナビは非表示・ハンバーガー化」）

```html
<div class="wf-note">
  📌 【実装注釈】ここにコーディング上の指示を書く
</div>
```

---

## Phase 1 詳細：トップページ（index.html）

**最初に作るファイル**。他のページより先に完成させて確認を取ること。

### セクション構成

```
1. ページ情報バー（.page-meta）
2. ヘッダー
3. ヒーローエリア
   - メインコピー：「デザインはできる。あとはWebを知るだけ。」
   - サブテキスト：ターゲット説明（3行）
   - CTAボタン：「まずはここから → Page 01へ」

4. このサイトで学べること
   - 7枚のカードナビ（各ページへリンク）
   - カードには：番号・アイコン・タイトル・一言説明

5. このサイトの使い方
   - 「初めての方は順番に」「気になるテーマから読んでもOK」

6. 研修コンテンツとの連携
   - 「AIとWebデザイン（Page 5）は研修のvol*.htmlと連動しています」

7. フッター
```

### ヒーローの仮テキスト

```
メインコピー：デザインはできる。あとはWebを知るだけ。
サブコピー：CanvaやFigmaで手を動かせるあなたへ。
           Webデザイナーとして活躍するために必要な知識を
           7つのテーマで体系的にまとめました。
CTAボタン：「まず "Webデザイナーという仕事" を読む →」
```

---

## Phase 2 詳細：内部ページ（page01〜page07）

各ページの詳細コンテンツ定義は `site_structure.md` の「各ページの詳細構成」セクションを参照。

### Phase 1 レビューから引き継ぐ追加ルール（Phase 2 で必ず守る）

Phase 1 レビュー結果より、以降のページで以下 3 点を徹底する：

1. **ナビの active クラス**
   - `<header>` 内の `<a>` のうち、そのページに対応するリンクに `class="active"` を必ず付与する。
   - 例：`page01_what.html` では `<a href="page01_what.html" class="active">仕事を知る</a>`
   - index.html（トップ）は対応するナビリンクがないため付与不要。

2. **`.wf-note` の配置**
   - すべての `.wf-note` は `<main class="content-wrap">` の**内側**に配置する。
   - `max-width: 960px` をインラインで当てて外側に置く書き方はしない（Phase 1 index.html で使っていた一時対応は解消済み）。

3. **注釈コピーの用語統一**
   - 注釈内で要確認の旨を示す際は、**「要確認・仮テキスト」** に統一する。
   - 「クライアント確認」「要クライアント確認」等の表現は本プロジェクトでは使わない（本サイトはクライアント案件ではないため）。

### 作成順

1. `page01_what.html`（最もシンプル・テキスト中心）
2. `page02_workflow.html`（ステップ図が肝）
3. `page03_design.html`（視覚的なサンプル多め）
4. `page04_tools.html`（比較表・ツールマップ）
5. `page05_ai.html`（研修コンテンツと連携）
6. `page06_client.html`（実務寄り・テキスト中心）
7. `page07_start.html`（まとめ・ロードマップ）

---

## Phase 3 詳細：既存研修サイトへの連携

対象ファイル：`G:/マイドライブ/研修/【202604】社員教育とAI/index.html`

既存の右側パネル（`detail-area` または同様のエリア）の下部に以下を追加する：

```html
<!-- How to Webデザイナー リンク -->
<div style="padding: 20px; border-top: 1px solid #eee; margin-top: 16px;">
  <a href="webdesigner_guide/index.html" style="
    display: block;
    background: #1a1f36;
    color: #fff;
    text-align: center;
    padding: 14px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
  ">
    📘 How to Webデザイナー ガイドを読む
  </a>
  <p style="font-size: 12px; color: #888; text-align:center; margin-top: 8px;">
    Webデザインの基礎を体系的に学べます
  </p>
</div>
```

---

## 完了チェックリスト

### Phase 1 完了時
- [x] `index.html` がブラウザで正しく表示される
- [x] 7枚のカードリンクがすべて設置されている（リンク先はまだ404でOK）
- [x] スマホ表示（768px以下）でレイアウトが崩れない
- [x] 各セクションに `.wf-note` が入っている

### Phase 2 完了時
- [x] 7ページすべてブラウザで表示される
- [x] ヘッダーナビ・フッターが全ページで共通内容になっている
- [x] 前後ページへのナビゲーションが正しくリンクしている
- [x] 各ページの `.page-meta` にページ名・番号が正しく入っている
- [x] 各ブロックに `.wf-note` が入っている

### Phase 3 完了時
- [x] 研修サイト（`../index.html`）からリンクが張られている
- [x] リンクをクリックすると `webdesigner_guide/index.html` に飛ぶ

---

### Phase 5：ワイヤーフレーム体験ガイドページの新設

**担当**：Cursor  
**作成ファイル**：`webdesigner_guide/wireframe/guide.html`（新規）  
**変更ファイル**：`webdesigner_guide/index.html`（ワイヤーリンクの向き先変更のみ）

---

#### Phase 5 の目的

現状、本番サイトから `wireframe/index.html` に飛んでも「なんか未完成っぽいサイト」にしか見えない。
「ワイヤーフレームとは何か」「どう読むか」「制作プロセスとどう繋がるか」を解説するガイドページを設けることで、
メイキング特典として・Webデザイン制作の教材として機能させる。

---

#### 変更点 1：`webdesigner_guide/index.html` のリンク修正

フッター付近の「制作の裏側を見る」リンクの向き先を変更する：

```html
<!-- 変更前 -->
<a href="wireframe/index.html">
  <i class="fa-solid fa-film"></i> このサイトの制作過程を見る（ワイヤーフレーム版）
</a>

<!-- 変更後 -->
<a href="wireframe/guide.html">
  <i class="fa-solid fa-film"></i> このサイトの制作過程を見る（ワイヤーフレーム版）
</a>
```

---

#### 変更点 2：`wireframe/guide.html` を新規作成

CSS・フォント・Font Awesome は本番サイトと同じものを使う。
ただし全体のトーンは「ドキュメンタリー・メイキング感」を出すため、
背景を `#0f1117`（より濃いダーク）にしてアクセントカラーに `#ff9500`（オレンジ）を追加する。

```css
:root {
  --bg-body:   #0f1117;
  --bg-card:   #1a1f36;
  --bg-light:  #1e2440;
  --text-main: #e8eaf0;
  --text-sub:  #9ca3af;
  --accent:    #ff6b6b;
  --accent-making: #ff9500;   /* メイキング特典専用カラー */
  --border:    rgba(255,255,255,0.08);
  --shadow:    0 4px 20px rgba(0,0,0,0.3);
}
```

---

#### `wireframe/guide.html` のページ構成

```
[ ヘッダー：本番版へ戻るリンク常設 ]
[ ① メイキング特典ヒーロー ]
[ ② ワイヤーフレームとは？ ]
[ ③ このサイトのワイヤーフレームの読み方（注釈・開発バーの見方）]
[ ④ 制作プロセス全体図 ]
[ ⑤ 本番版との比較ポイント3選 ]
[ ⑥ ワイヤーフレームを見る（CTAボタン → wireframe/index.html）]
[ フッター ]
```

---

##### セクション① ヒーロー

```html
<!-- ヘッダー：シンプルに本番版へ戻るリンクのみ -->
<header style="background:rgba(0,0,0,0.4); padding:14px 40px; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:100; backdrop-filter:blur(8px);">
  <span style="font-family:'Roboto',sans-serif; font-weight:900; font-size:16px; color:#ff9500; letter-spacing:0.05em;">
    MAKING OF HOW TO WEBDESIGNER
  </span>
  <a href="../index.html" style="font-size:13px; color:rgba(255,255,255,0.6); text-decoration:none;">
    <i class="fa-solid fa-arrow-left"></i> 本番サイトへ戻る
  </a>
</header>

<!-- ヒーロー -->
<section style="text-align:center; padding:80px 40px 64px; background:radial-gradient(circle at 50% 30%, rgba(255,149,0,0.12), transparent 60%);">
  <p style="font-size:12px; color:#ff9500; letter-spacing:0.15em; margin-bottom:16px;">MAKING / BEHIND THE SCENES</p>
  <h1 style="font-size:36px; font-weight:700; color:#e8eaf0; line-height:1.4; margin-bottom:20px;">
    このサイトは、<br>どのように作られたのか。
  </h1>
  <p style="font-size:15px; color:#9ca3af; max-width:560px; margin:0 auto; line-height:2;">
    完成した成果物だけでは見えないことがある。<br>
    ここでは「How to Webデザイナー」の制作過程を公開する。<br>
    ワイヤーフレームとは何か、どう読むか——制作の裏側を追体験してほしい。
  </p>
</section>
```

---

##### セクション② ワイヤーフレームとは？

カード1枚でシンプルに説明する。

```
見出し：ワイヤーフレームとは？

本文：
建築に例えると、ワイヤーフレームは「間取り図」にあたる。
家を建てる前に「リビングはどこか」「扉はどちらに開くか」を決めるように、
Webサイトを作る前に「何をどこに置くか」「どんな目的を持たせるか」を設計する工程だ。

この段階では、色・写真・装飾はまだ関係ない。
大事なのは「構造」と「情報の流れ」。

ただし、このサイトのワイヤーフレームは少し特殊だ。
通常のグレーボックス型ではなく、最終的なデザイン（色・フォント）を当てた
「高品質プロトタイプ型ワイヤーフレーム」として作られている。
見た目はほぼ本番版と同じだが、「設計者から実装者へのメモ」が随所に残っている。
```

---

##### セクション③ このサイトのワイヤーフレームの読み方

2つのUI要素をビジュアルで説明する。実際のスタイルを当てた「サンプルボックス」を使うこと。

**要素1：黄色い注釈ボックス（.wf-note）**

```html
<!-- サンプル表示 -->
<div style="background:#fff3cd; border-left:4px solid #ff9500; padding:12px 16px; border-radius:0 6px 6px 0; font-size:13px; color:#7a5800; margin:16px 0;">
  📌 <strong>【実装注釈の例】</strong>
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) で自動折返し。
  PC：3〜4列 ／ タブレット：2列 ／ スマホ：1列に自動変化。各カードは &lt;a&gt; タグでリンク。
</div>

説明文：
この黄色いボックスが「.wf-note（ワイヤーフレーム注釈）」。
実装を担当するコーダーに向けた、設計者からのメモ書きだ。
「ここはアコーディオンUIにしてほしい」「スマホでは1カラムにすること」
「このテキストは仮。本番では差し替え」——
コーダーが迷わないよう、判断に必要な情報を書き込んでいる。

本番サイトではすべて削除済み。ワイヤーフレーム版でのみ見ることができる。
```

**要素2：黒帯（.page-meta）**

```html
<!-- サンプル表示 -->
<div style="background:#333; color:#fff; padding:6px 20px; font-size:12px; display:flex; gap:16px; align-items:center; border-radius:6px; margin:16px 0;">
  <div style="font-size:11px; opacity:0.7;">How to Webデザイナー</div>
  <strong>PAGE 02 / page02_workflow.html</strong>
  <span style="margin-left:auto; opacity:0.7;">Phase 2 ワイヤーフレーム</span>
</div>

説明文：
ページ最上部の黒帯が「.page-meta（開発管理バー）」。
「今どのページを見ているか」「どのフェーズの作業か」を管理するための開発用ラベルだ。
複数のファイルを並行して作るとき、混在を防ぐための目印として機能する。
こちらも本番サイトでは削除済み。
```

---

##### セクション④ 制作プロセス全体図

横並びのステップ図（フロー）で表現する。

```
STEP 1：設計（Claude Code）
  要件定義・サイト構成案・デザイン仕様・コンテンツ定義・実装計画書の作成
  → アウトプット：site_structure.md / implementation_plan.md

STEP 2：ワイヤーフレーム実装（Cursor）
  実装計画書を読み、HTML/CSSでワイヤーフレームを生成
  → アウトプット：wireframe/*.html（このフォルダ）

STEP 3：レビュー（Claude Code）
  実装の品質確認・問題点の指摘・修正指示の作成
  → アウトプット：implementation_plan.md への修正追記

STEP 4：本番化（Cursor）
  .wf-note・.page-meta の削除、実コンテンツ差し替え、新規セクション追加
  → アウトプット：webdesigner_guide/*.html（本番版）

STEP 5：デプロイ（Antigravity）
  Cloudflare Pages への公開
  → アウトプット：公開URL
```

各ステップはカード形式で横並び（PC）・縦積み（スマホ）にすること。
ステップ間は `→` または矢印アイコンで繋ぐ。

---

##### セクション⑤ 本番版との比較ポイント3選

3枚のカードで、「ワイヤーフレーム → 本番で何が変わったか」を解説する。

```
比較① ヒーローのCTAボタンが消えた
  ワイヤー版：ヒーロー直下に「Page 01を読む」ボタンがあった
  本番版：ボタンを廃止し「↓ まずはこのサイトについて」スクロール誘導に変更
  なぜ？：CTAボタンがあると真面目な人がそこで飛んでしまい、
          下部コンテンツ（このサイトについて・7カード）を読まずに終わる問題があった

比較② 「このサイトについて」セクションが後から生まれた
  ワイヤー版：このセクションは存在しない
  本番版：ヒーロー直後に「こんな人のために」「なぜ作ったか」「読み終えたら」の3ブロックを追加
  なぜ？：ターゲットと目的が最初に伝わらないと、読者が「自分向けかどうか」判断できないため

比較③ 注釈がどう実装に反映されたか
  例：「アコーディオンUI → CSS <details>で実装可」という注釈
  → 本番版で実際にどう実装されたかをワイヤー版と見比べてみよう
```

---

##### セクション⑥ ワイヤーフレームを見る（CTA）

```html
<div style="text-align:center; padding:48px 24px;">
  <p style="color:#9ca3af; font-size:14px; margin-bottom:24px;">
    では、実際のワイヤーフレームを見てみよう。<br>
    黄色い注釈と黒帯に注目しながら、本番版と見比べてほしい。
  </p>
  <a href="index.html" style="
    display:inline-flex; align-items:center; gap:10px;
    padding:18px 40px; background:#ff9500; color:#fff;
    border-radius:999px; text-decoration:none; font-weight:700; font-size:15px;
    box-shadow:0 8px 24px rgba(255,149,0,0.4);
  ">
    <i class="fa-solid fa-film"></i> ワイヤーフレーム版 index.html を開く
  </a>
  <p style="margin-top:16px; font-size:12px; color:#6b7280;">
    page01〜page07 はヘッダーナビから移動できます
  </p>
</div>
```

---

##### フッター

```html
<footer style="background:#0a0d14; color:rgba(255,255,255,0.4); text-align:center; padding:28px 24px; font-size:13px;">
  <p>Making of How to Webデザイナー ―
    <a href="../index.html" style="color:#ff9500; text-decoration:none;">本番サイトへ戻る</a>
  </p>
  <p style="margin-top:8px;">© 2026 H.K</p>
</footer>
```

---

#### Phase 5 完了チェックリスト

- [x] `wireframe/guide.html` が新規作成されている
- [x] `guide.html` の6セクション（ヒーロー・定義・読み方・プロセス・比較・CTA）がすべて入っている
- [x] 読み方セクションに `.wf-note` と `.page-meta` のサンプルボックスが実際のスタイルで表示されている
- [x] 制作プロセス図が5ステップで表示されている
- [x] 比較ポイント3選が3カードで表示されている
- [x] CTAボタンが `wireframe/index.html` へ正しくリンクしている
- [x] ヘッダー・フッターに `../index.html`（本番版）へのリンクがある
- [x] `webdesigner_guide/index.html` のワイヤーリンクが `wireframe/guide.html` に変更されている
- [x] スマホ（768px以下）でレイアウトが崩れないこと

---

### Phase 6：Antigravityレビュー反映（UX改善・コンテンツ肉付け）

**担当**：Cursor  
**目的**：Antigravity からのレビューで受け入れた3項目を反映する。

---

#### 6-1：モバイルナビのハンバーガーメニュー化（最優先）

**対象ファイル**：`webdesigner_guide/index.html` および `page01_what.html`〜`page07_start.html`（本番版8ファイル）  
※ `wireframe/` 配下は変更しない。

**現状の問題**：
```css
@media (max-width: 768px) {
  header nav { display: none; }
}
```
スマホでナビが完全に消え、各ページ間の自由な遷移ができない。

**改善方針**：JS不要・`<input type="checkbox">` トグル方式で実装する。

**追加するCSS**（全本番8ファイルの `<style>` 内）：

```css
/* ハンバーガートグル（PCでは非表示）*/
.nav-toggle { display: none; }
.nav-toggle-label { display: none; }

@media (max-width: 768px) {
  /* ハンバーガーアイコン（ヘッダー右に表示）*/
  .nav-toggle-label {
    display: block;
    cursor: pointer;
    color: #fff;
    font-size: 22px;
    padding: 8px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  .nav-toggle-label::before { content: "\2630"; } /* ☰ */

  /* ナビをドロワー化 */
  header nav {
    display: block;
    position: fixed;
    top: 64px;
    right: 0;
    width: 80%;
    max-width: 320px;
    height: calc(100vh - 64px);
    background: var(--bg-dark);
    padding: 24px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: -4px 0 20px rgba(0,0,0,0.3);
    overflow-y: auto;
  }
  header nav a {
    display: block;
    margin-left: 0;
    padding: 14px 8px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    font-size: 15px;
  }

  /* チェック時：ドロワー展開 + アイコンを × に */
  .nav-toggle:checked ~ nav {
    transform: translateX(0);
  }
  .nav-toggle:checked ~ .nav-toggle-label::before {
    content: "\00D7"; /* × */
    font-size: 28px;
  }

  /* オーバーレイ（背景クリックで閉じる）*/
  .nav-toggle:checked ~ .nav-overlay {
    display: block;
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    height: calc(100vh - 64px);
    background: rgba(0,0,0,0.5);
    z-index: 99;
  }
  .nav-overlay { display: none; }
}
```

**HTML 構造の変更**（全本番8ファイルの `<header>` 内）：

```html
<header>
  <a href="index.html" class="site-logo">HOW TO WEBDESIGNER</a>

  <!-- ハンバーガートグル（追加）-->
  <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-label="メニュー開閉">
  <label for="nav-toggle" class="nav-toggle-label" aria-hidden="true"></label>

  <nav>
    <a href="page01_what.html">仕事を知る</a>
    <a href="page02_workflow.html">ワークフロー</a>
    <!-- 以下、既存のリンクをそのまま続ける（active クラス付与は各ページ通り）-->
  </nav>

  <!-- 背景クリックで閉じるためのオーバーレイ（追加）-->
  <label for="nav-toggle" class="nav-overlay" aria-hidden="true"></label>
</header>
```

**注意事項**：
- `<input>` を `<header>` 直下に配置する必要あり（兄弟セレクタが効くため）
- `header` の `display: flex` のままでOK。`.nav-toggle` は `display: none` でフローから外れる
- `wireframe/` 配下のファイルは**変更しない**（メイキング特典として現状維持）

---

#### 6-2：Page 02〜05 のコンテンツ肉付け

**対象ファイル**：
- `page03_design.html`（最優先）
- `page04_tools.html`
- `page02_workflow.html`
- `page05_ai.html`

**作業方針**：各ページの既存セクションに、以下の本文テキストを差し込む。骨格は変えず、各セクションに 200〜400 字程度の実コンテンツを追加すること。

---

##### Page 03：Webデザインの基礎知識

**セクション 1：タイポグラフィ（Webならではの考え方）**

```
本文：
紙のデザインと違い、Webでは「読む環境」が無限にある。
スマホ・PC・解像度・年齢層──すべてが変動する中で、最低限の読みやすさを担保するのがタイポグラフィの役割だ。

▼ 押さえるべき基本
- 本文サイズ：16px がデファクト（アクセシビリティの最低ライン）
- 行間：1.6〜1.8 倍が読みやすい
- 行長：50〜75 字（max-width 制御で実現）
- 見出しの階層：h1 → h2 → h3 と論理的に下げる
- フォント選び：Webフォント（Google Fonts等）か、デバイスフォントか

▼ 失敗しがちなNG
- 本文を 14px 以下にする → スマホで読みにくい
- 行間を詰めすぎる → 視線が迷子になる
- 装飾フォントを本文に使う → 可読性が落ちる
```

**セクション 2：カラー（Web で気をつけること）**

```
本文：
グラフィックでは CMYK・印刷を意識した色設計だが、Web は RGB・モニタ表示が前提。
さらに、誰もが快適に見られるかを保証する「アクセシビリティ」の視点が加わる。

▼ Webカラーの基本
- 本文と背景のコントラスト比：4.5:1 以上（WCAG AA 基準）
- アクセントカラーは画面全体の 5〜10% に抑える（視線誘導の機能を保つため）
- 「色だけで情報を伝えない」（色覚多様性への配慮：警告は色＋アイコン）

▼ 実務でのコツ
- ブランドカラー → アクセント／補助 → ベース という3段構成
- ダークモード対応も視野に
- ツール：Adobe Color、Coolors、Contrast Checker（WebAIM）
```

**セクション 3：レイアウトとグリッド**

```
本文：
情報の整理は「余白」と「揃え」で決まる。
Web では特に、読み手の視線をどう誘導するかが大事。

▼ 基本ルール
- 12カラムグリッド：PC で広く使われる標準
- 余白の単位を揃える：4・8・16・24・32 などの倍数で統一
- 視線誘導パターン：Z型（広告・LP）/ F型（記事・ブログ）

▼ よくある失敗
- 余白がバラバラ → 全体がチグハグに見える
- 詰め込みすぎ → 何を見ればいいか分からない
- 中央揃えに頼りすぎ → 動きのない単調なレイアウトに
```

**セクション 4：レスポンシブデザイン**

```
本文：
PC とスマホで同じデザインは成立しない。
「縮める」のではなく「組み替える」発想が必要だ。

▼ 主流の考え方：モバイルファースト
- スマホ画面で必要な情報を先に決める
- そこから PC・タブレットへ「広げていく」
- 結果として情報の取捨選択が明確になる

▼ ブレークポイントの目安
- スマホ：〜 768px
- タブレット：769px 〜 1024px
- PC：1025px 〜

▼ 実装で必ず使うもの
- @media (max-width: 768px) { ... }
- flex / grid の自動折返し
- 画像の max-width: 100%
```

**セクション 5：UX（使いやすさの基礎）**

```
本文：
デザインは「きれいか」より「迷わず使えるか」が9割。
これは Webデザイナーが必ず学ぶべき視点だ。

▼ 認知負荷を下げる
- 選択肢を増やしすぎない（人は3〜5択しか覚えられない）
- 重要なボタンは1ページに1つ（CTA の原則）
- 一度に伝える情報を絞る

▼ スキャナビリティ（流し読み対応）
- 見出し・箇条書き・余白で視線を誘導する
- 重要キーワードを太字にする
- 段落を短く区切る

▼ アクセシビリティ
- alt テキストを画像に必ず付ける
- フォーカス可視化（Tab キー操作で位置がわかる）
- 文字サイズの拡大に耐えるレイアウト
```

---

##### Page 04：使うツールを知る

**セクション 1：ツール全体マップ（フェーズ別）**

```
本文：
Web 制作のフェーズごとに、使うツールは変わる。
全部覚える必要はない。「どのフェーズで何を選ぶか」の判断ができればよい。

| フェーズ | 主なツール |
|---|---|
| 設計・ワイヤー | Figma / Adobe XD / 手描きスケッチ |
| デザイン | Figma / Adobe XD / Canva |
| コーディング | VS Code / Cursor |
| CMS構築 | WordPress / STUDIO / Wix |
| コミュニケーション | Slack / Notion / Google Workspace |
| 公開・デプロイ | Cloudflare Pages / Netlify / GitHub Pages |
```

**セクション 2：デザインツールの使い分け**

```
本文：
| ツール | 特徴 | 適性 |
|---|---|---|
| Figma | 共同編集・プロトタイプに強い・現場標準 | チーム制作・クライアントワーク |
| Adobe XD | Adobe 製品との連携 | 既に Photoshop/Illustrator を使う人 |
| Canva | テンプレート豊富・初心者向け | バナー・SNS素材・社内向け資料 |

実務では Figma が事実上の標準。
個人作業や短期作業では Canva の生産性も無視できない。
```

**セクション 3：CMS（コンテンツ管理システム）**

```
本文：
クライアントが「自分でも更新したい」と言ったら CMS の出番。
コーディングなしで本文・画像を差し替えられる仕組みだ。

| ツール | 特徴 | 適性 |
|---|---|---|
| WordPress | 自由度・プラグイン豊富・国内シェア最大 | 中規模以上・ブログあり |
| STUDIO | 国産ノーコード・デザイン自由度が高い | デザイン重視のLP・コーポレート |
| Wix | ノーコード・テンプレート豊富 | 小規模・初心者クライアント |

▼ 選び方のポイント
- クライアントが日常的に更新するか？
- 機能拡張（EC・会員機能等）が将来必要か？
- 予算とスケジュール
```

**セクション 4：コミュニケーション・ドキュメント**

```
本文：
クライアントワークでは、制作物そのものより「やりとりの質」が信頼を作る。

- Slack：日常チャット・スピード重視
- Notion：要件定義・ドキュメント・タスク管理
- Google Workspace（ドライブ・ドキュメント）：共有資料・編集履歴

▼ 使い分けの実例
- 即返答が必要 → Slack
- 後で参照する文書 → Notion
- クライアントと共有する素材 → Google Drive
```

**セクション 5：公開・デプロイサービス**

```
本文：
作ったサイトをインターネットに公開するためのサービス。
無料で本番運用できる選択肢が増えている。

| サービス | 無料枠 | 特徴 |
|---|---|---|
| Cloudflare Pages | あり | CDNが世界最速・安定。本サイトもこれでデプロイ |
| Netlify | あり | 老舗・使いやすい・GitHub連携が容易 |
| GitHub Pages | あり | GitHub前提・静的サイトのみ |
| レンタルサーバー（エックスサーバー等） | なし | WordPress 等の動的サイトに必要 |

▼ 選び方の指針
- 静的サイト（HTML/CSS/JS）→ Cloudflare Pages or Netlify
- WordPress → レンタルサーバー
- ポートフォリオ等の個人サイト → GitHub Pages も十分
```

---

##### Page 02：Web制作のワークフロー

**セクション：8ステップの全体像**

```
本文：
Web 制作は「作る前」と「作った後」が肝。
全工程を俯瞰して、各段階で何を決め、何を確認するかが、ディレクターの仕事だ。

▼ 8 ステップ

1. 受注前：問い合わせ・ヒアリング
   - 何を、なぜ、誰のために作りたいのか
   - 期間と予算の感覚を共有
   - クライアントの「本当のゴール」を引き出す

2. 要件定義
   - サイトの目的・ターゲット・コンテンツの大枠
   - 必要機能（フォーム・CMS・会員機能など）
   - 文書として残す（後の認識ズレを防ぐ）

3. サイト構成・ワイヤーフレーム
   - サイトマップ：ページ構成と階層
   - 各ページの情報設計：何をどこに置くか
   - ★ ここでクライアント確認を取るのが最重要

4. デザイン
   - 色・写真・装飾を決める
   - ワイヤーで合意した内容に「装い」を載せる
   - クライアント確認（デザインカンプ）

5. コーディング・実装
   - HTML/CSS/JS でWebページに変換
   - レスポンシブ対応
   - CMS（WordPress等）への組み込み

6. テスト・確認
   - 各種ブラウザ・デバイスでの表示確認
   - リンク切れ、フォーム動作、文字化け
   - クライアント最終確認

7. 公開・納品
   - サーバーへのアップロード
   - 独自ドメイン設定、SSL証明書
   - 公開後の動作確認

8. 保守・運用
   - コンテンツ更新
   - セキュリティアップデート（CMSの場合）
   - 不具合対応

▼ ディレクターの役割
全工程を俯瞰して、各段階で何をクライアントから引き出し、誰に何を依頼するかを決める。
これは「素材作成者」にはできない仕事であり、報酬の源泉でもある。
```

---

##### Page 05：AIとWebデザイン

**セクション 1：AI活用の全体像**

```
本文：
AI は Webデザインの全工程に入り込みつつある。
「何を AI に任せ、何を人が判断するか」を決められる人が、これからの主役だ。

▼ AI が得意なこと
- 素材生成（画像・テキスト・コード）
- パターン化された作業の高速化
- 大量の選択肢からの絞り込み

▼ 人が担うべきこと
- ゴール設定（何を作るべきか）
- クライアント・ユーザーとの対話
- 採算・優先度の判断
- 成果物の最終的な品質判断
```

**セクション 2：画像生成 AI**

```
本文：
| ツール | 特徴 |
|---|---|
| Midjourney | 写実的・芸術的画像。Discord ベース |
| DALL-E（ChatGPT 連携） | 自然言語で画像生成。手軽 |
| Stable Diffusion | オープンソース・自由度高い・ローカル運用可 |

▼ Web 制作での使いどころ
- ヒーロー画像のドラフト案作成
- アイコン・装飾素材
- ペルソナのイメージ画像（社内資料用）
```

**セクション 3：デザイン生成 AI**

```
本文：
| ツール | 特徴 |
|---|---|
| Stitch（Google） | UI生成・Figmaに近い操作感 |
| Galileo AI | UI モックアップ生成 |
| Uizard | 手描きスケッチからデジタルデザインへ変換 |

▼ 注意点
AI が出力したものをそのまま納品はできない。
「叩き台」として使い、人がブランド・UX観点で仕上げるのが現実的。
```

**セクション 4：コード生成 AI**

```
本文：
| ツール | 特徴 |
|---|---|
| Cursor | エディター内蔵 AI コーディング・実装担当向け |
| Claude Code | 要件定義・実装計画も担う高度AI・ディレクター向け |
| GitHub Copilot | コーディング補助・既存エディター拡張 |

▼ このサイト自体の制作プロセス
- Claude Code：設計・計画書作成
- Cursor：実装
- Antigravity：デプロイ
役割分担で「月1万円程度」の開発環境を構築している。
```

**セクション 5：プロンプトの基本**

```
本文：
AIに「いいアウトプット」を出させる鍵は、依頼文（プロンプト）の質だ。

▼ 基本構造
1. 何を作るか（具体的な対象）
2. なぜ作るか（目的・用途）
3. どう使うか（ターゲット・配置）
4. スタイル指定（モダン/レトロ等）
5. 出力形式（画像サイズ・コード言語等）

▼ 悪い例
「いい感じのバナー作って」

▼ 良い例
「30代女性向け化粧品ECサイトのトップ用バナー（横長1200×400px）。
ナチュラル・上品な雰囲気で、白＋ベージュ基調。
キャッチコピー『あなたの肌に、やさしい一歩』を中央に配置」
```

**セクション 6：研修との連携**

```
本文：
研修サイトの Day08〜Day12 では、Cursor / Claude Code / Stitch を実際に動かす回を用意しています。
本ページの理論を、研修で実装に落とし込んでみてください。

→ 研修サイトを開く
```

---

#### 6-3：CSS共通化（任意・低優先）

**判断**：やるかやらないかは要相談。  
**メリット**：保守性UP（1箇所の変更で全ページに反映）  
**デメリット**：単一ファイル完結性が失われる（教材として読みにくくなる可能性）

**やる場合の方針**：
1. `webdesigner_guide/common.css` を新規作成
2. 全本番ページの共通CSS（`:root`、`body`、`header`、`.page-hero`、`.content-wrap`、`.card`、`.section-title`、`.page-nav`、`footer`）を common.css に移動
3. 各本番ページの `<style>` には**そのページ固有のCSSのみ残す**（例：page02 のステップ図、page06 のコラム表など）
4. 各本番ページの `<head>` に `<link rel="stylesheet" href="common.css">` を追加

**やらない場合**：現状維持。

---

#### 6-4：CATCHCOPY コメントの取り扱い

`<!-- CATCHCOPY: 現在検討中 -->` は保留中の意思表示として意図的に残置。  
キャッチコピーが確定した時点で、コメント丸ごと差し替える。  
それまでは現状維持。

---

#### Phase 6 完了チェックリスト

- [ ] 本番版8ファイルにハンバーガーメニュー用の HTML 構造（`.nav-toggle` + `.nav-toggle-label` + `.nav-overlay`）が追加されている
- [ ] 本番版8ファイルの CSS にハンバーガー用スタイルが追加されている
- [ ] スマホ（768px以下）でハンバーガーアイコンをタップすると右からドロワーが出る
- [ ] ドロワー外（オーバーレイ）をタップで閉じる
- [ ] `wireframe/` 配下のファイルが**変更されていない**こと
- [ ] page03_design.html に5セクション分の本文が入っている
- [ ] page04_tools.html に5セクション分の本文が入っている
- [ ] page02_workflow.html の8ステップに本文が入っている
- [ ] page05_ai.html に6セクション分の本文が入っている
- [ ] CSS共通化はユーザー判断（実施／見送り のいずれか）

---

### Phase 7：Claude Code レビュー反映（バグ修正・事実修正・構造改善）

**担当**：Cursor  
**目的**：Claude Code による全ページ精査で発見した、バグ・ハルシネーション・構造問題を修正する。  
**対象**：本番版のみ（`wireframe/` 配下は触らない）

---

#### 優先度の分類

| P | 内容 | 対象ファイル |
|---|---|---|
| 🔴 P1 | HTMLバグ（壊れている） | page06 |
| 🟠 P2 | 事実誤認・ハルシネーション | page03 / page06 / page07 |
| 🟡 P3 | 未解決TODO / コンテンツ不整合 | page04 |
| 🔵 P4 | 構造・UX問題 | index / page04 / page07 |

---

#### 7-1：page06 — `<ol>` 未閉タグの修正 🔴

**対象ファイル**：`page06_client.html`

**問題**：`<ol class="hearing-list">` が閉じられないまま `<div class="point-card">` が始まっており、div が ol の子要素として扱われている。無効なHTMLで、ブラウザによってはレイアウトが崩れる。

**修正箇所**（ヒアリングリストの末尾 `</li>` の直後）：

```html
<!-- 修正前（バグ） -->
        <li><strong>参考サイト</strong>好き／嫌いを 3 サイトずつ</li>
      
      <div class="point-card">

<!-- 修正後 -->
        <li><strong>参考サイト</strong>好き／嫌いを 3 サイトずつ</li>
      </ol>

      <div class="point-card">
```

また `<ol>` タグは `<ul>` に変更する（番号付き + `<strong>` ラベルで二重表示になっているため）。  
`.hearing-list` の CSS は変更不要（スタイルは `li` に当たっているので問題なし）。

```html
<!-- <ol class="hearing-list"> を以下に変更 -->
<ul class="hearing-list">
  ...
</ul>  <!-- </ol> を </ul> に変更 -->
```

---

#### 7-2：page03 — カラースウォッチのHEXコード修正 🟠

**対象ファイル**：`page03_design.html`

**問題**：「カラー」セクションのスウォッチが、このサイトの実際のCSSカラー変数と食い違っている。  
このページ自体が「このサイトのデザインシステム」を説明しているため、実値と異なるのは教材として致命的。

**修正**（`color-row` の中の4つの swatch）：

```html
<!-- 修正前 -->
<div class="color-row">
  <div class="swatch" style="background:#e07050;">Accent #e07050</div>
  <div class="swatch" style="background:#4ecdc4;">Accent2 #4ECDC4</div>
  <div class="swatch" style="background:#1a1f36;">Dark #1A1F36</div>
  <div class="swatch" style="background:#f8f9fc; color:#1a1f36;">Bg #F8F9FC</div>
</div>

<!-- 修正後（実際のCSSカラー変数に合わせる） -->
<div class="color-row">
  <div class="swatch" style="background:#e07050;">Accent #e07050</div>
  <div class="swatch" style="background:#3bb4a0;">Accent2 #3BB4A0</div>
  <div class="swatch" style="background:#3d4f6f;">Dark #3D4F6F</div>
  <div class="swatch" style="background:#faf8f5; color:#2c3440;">Bg #FAF8F5</div>
</div>
```

**確認**：上記4色はそれぞれ `--accent`, `--accent-2`, `--bg-dark`, `--bg-body` の値と完全一致している。

---

#### 7-3：page07 — 署名の修正 🟠

**対象ファイル**：`page07_start.html`

**問題**：`「How to Webデザイナー 編集チーム」` という架空の組織名が署名として記述されている。このサイトは H.K 個人の教材であり、「編集チーム」は存在しない。

**修正**：

```html
<!-- 修正前 -->
<span class="signature">― How to Webデザイナー 編集チーム</span>

<!-- 修正後 -->
<span class="signature">― H.K</span>
```

---

#### 7-4：page06 — AI開発コスト表に注記を追加 🟠

**対象ファイル**：`page06_client.html`

**問題**：`Claude Code: ¥2,500〜3,000/月` は Claude.ai Pro プランの月額を指しているが、読者が「Claude Code = 月3,000円で使い放題」と誤読するおそれがある。API使用量課金モデルとの違いを補足する。

**修正**（`.ai-stack-total` の直後に1行追加）：

```html
<!-- 修正前 -->
<div class="ai-stack-total">
  合計 <strong>月 ¥10,000</strong> 前後で、役割分担された「止まらない開発環境」が成立する。
</div>

<!-- 修正後 -->
<div class="ai-stack-total">
  合計 <strong>月 ¥10,000</strong> 前後で、役割分担された「止まらない開発環境」が成立する。
</div>
<p style="font-size:12px; color:var(--text-sub); margin-top:8px; line-height:1.7;">
  ※ Claude Code の金額は Claude.ai Pro プラン（$20/月 相当）を利用する場合の目安。案件規模・利用頻度によっては変動します。
</p>
```

---

#### 7-5：page04 — 「太字にする予定」の削除 🟡

**対象ファイル**：`page04_tools.html`

**問題**：ツール全体マップの `section-lead` に「研修内で実際に触れるものは太字にする予定。」という未解決のTODO文がそのままユーザーに見える状態になっている。

**修正**：

```html
<!-- 修正前 -->
<p class="section-lead">フェーズ別に "主要どころ" だけ並べた一覧図。研修内で実際に触れるものは太字にする予定。</p>

<!-- 修正後 -->
<p class="section-lead">フェーズ別に "主要どころ" だけ並べた一覧図。案件の性質に合わせて組み合わせる感覚を掴もう。</p>
```

---

#### 7-6：page04 — ツール全体マップに Cloudflare Pages を追加 🔵

**対象ファイル**：`page04_tools.html`

**問題**：ツール全体マップの DEPLOY カードに `Netlify / GitHub Pages / レンタルサーバー` の3つしかないが、本文の「納品・公開」詳細セクションでは `Cloudflare Pages` を最初に紹介している（「本サイトもこれを採用」と明記）。一覧マップに筆頭ツールがないのは矛盾。

**修正**（DEPLOYカードの `<ul>` の先頭に追加）：

```html
<!-- 修正前 -->
<div class="tool-phase">
  <div class="label">DEPLOY</div>
  <h5>納品・公開</h5>
  <ul><li>Netlify</li><li>GitHub Pages</li><li>レンタルサーバー</li></ul>
</div>

<!-- 修正後 -->
<div class="tool-phase">
  <div class="label">DEPLOY</div>
  <h5>納品・公開</h5>
  <ul><li>Cloudflare Pages</li><li>Netlify</li><li>GitHub Pages</li><li>レンタルサーバー</li></ul>
</div>
```

---

#### 7-7：index.html — ワイヤーフレームリンクを `<main>` 内へ移動 🔵

**対象ファイル**：`index.html`

**問題**：現状、ワイヤーフレームリンク（「このサイトの制作過程を見る」）が `</main>` の外、`<nav class="page-nav">` と `<footer>` の間に孤立している。セマンティックHTMLとして不正確。

**修正方針**：  
`<main class="content-wrap">` 内の最後のセクション（研修コンテンツとの連携カード）の直後に移動する。  
外側の孤立した `<div>` は削除する。

**削除する箇所**（`</main>` 以降にある以下のブロックを丸ごと削除）：

```html
<!-- このブロックを削除 -->
<div style="max-width:960px; margin:0 auto; padding:24px 24px 0;">
  <a href="wireframe/guide.html" style="
    display:flex; align-items:center; gap:16px;
    padding:20px 24px; background:#fafbff; border:1px solid #e8e4df;
    border-radius:10px; text-decoration:none; color:#2c3440;
    transition: border-color 0.2s, box-shadow 0.2s;
  " onmouseover="this.style.borderColor='#e07050'; this.style.boxShadow='0 4px 16px rgba(224,112,80,0.1)';"
     onmouseout="this.style.borderColor='#e8e4df'; this.style.boxShadow='none';">
    <i class="fa-solid fa-film" style="font-size:20px; color:#e07050; flex-shrink:0;"></i>
    <div>
      <div style="font-size:14px; font-weight:700;">このサイトの制作過程を見る</div>
      <div style="font-size:12px; color:#7a8494; margin-top:2px;">ワイヤーフレーム → 完成版への変遷をメイキング形式で追体験できます</div>
    </div>
    <i class="fa-solid fa-chevron-right" style="margin-left:auto; color:#e07050; font-size:14px; flex-shrink:0;"></i>
  </a>
</div>
```

**追加する箇所**（`<main>` 内の「研修コンテンツとの連携」セクションの **直後**、`</main>` の **直前** に追加）：

```html
    <!-- メイキングリンク（main内に移動） -->
    <section class="card" id="making-link" style="padding:0; background:transparent; box-shadow:none;">
      <a href="wireframe/guide.html" style="
        display:flex; align-items:center; gap:16px;
        padding:20px 24px; background:#fafbff; border:1px solid #e8e4df;
        border-radius:10px; text-decoration:none; color:#2c3440;
        transition: border-color 0.2s, box-shadow 0.2s;
      " onmouseover="this.style.borderColor='#e07050'; this.style.boxShadow='0 4px 16px rgba(224,112,80,0.1)';"
         onmouseout="this.style.borderColor='#e8e4df'; this.style.boxShadow='none';">
        <i class="fa-solid fa-film" style="font-size:20px; color:#e07050; flex-shrink:0;"></i>
        <div>
          <div style="font-size:14px; font-weight:700;">このサイトの制作過程を見る</div>
          <div style="font-size:12px; color:#7a8494; margin-top:2px;">ワイヤーフレーム → 完成版への変遷をメイキング形式で追体験できます</div>
        </div>
        <i class="fa-solid fa-chevron-right" style="margin-left:auto; color:#e07050; font-size:14px; flex-shrink:0;"></i>
      </a>
    </section>

  </main>
```

---

#### 7-8：page07 — ロードマップ Step 2 の自己参照を修正 🔵

**対象ファイル**：`page07_start.html`

**問題**：学習ロードマップの Step 2 が「本ガイドを通読する」となっているが、このページを読んでいる時点で読者はすでにガイドを読んでいる。自己参照になっており、アクションとして意味をなさない。

**修正**：

```html
<!-- 修正前 -->
<div class="roadmap-step" data-step="2">
  <h5>本ガイドを通読する</h5>
  <p>Web 制作の全体像・ワークフロー・クライアントワークを理解。</p>
</div>

<!-- 修正後 -->
<div class="roadmap-step" data-step="2">
  <h5>HTML / CSS 基礎で1ページ作ってみる（架空サイト可）</h5>
  <p>Cursor や Claude Code を使ってもOK。架空のカフェでもペットショップでも、公開まで1件やり切ることが最大の学習。</p>
</div>
```

---

#### Phase 7 完了チェックリスト

- [x] `page06_client.html`：`<ol>` → `<ul>` 変更 ＋ `</ul>` 閉じタグ追加済み
- [x] `page03_design.html`：カラースウォッチの HEX が実際の CSS 変数と一致している
  - Accent2: `#3bb4a0`、Dark: `#3d4f6f`、Bg: `#faf8f5`
- [x] `page07_start.html`：署名が `H.K` になっている
- [x] `page06_client.html`：AI コスト表の下に注記（`※ Claude Code の金額は...`）が入っている
- [x] `page04_tools.html`：`section-lead` から「太字にする予定」が消えている
- [x] `page04_tools.html`：DEPLOY カードに `Cloudflare Pages` が先頭に入っている
- [x] `index.html`：ワイヤーフレームリンクが `<main>` 内（最後の section）に移動し、`</main>` 外の孤立 div が削除されている
- [x] `page07_start.html`：ロードマップ Step 2 が「HTML / CSS 基礎で1ページ作ってみる」になっている

---

## 作業完了後にすること（Cursor向け）

1. このファイル（`implementation_plan.md`）の各Phaseの状態を更新
2. 完了チェックリストのチェックを入れる
3. 作業ログを `project_log.md` に記録（まだなければ新規作成）
