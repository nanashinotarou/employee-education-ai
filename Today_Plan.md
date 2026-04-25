# Today_Plan.md — Webデザイナーガイド ビジュアル改善計画

> **最終更新**: 2026-04-25 16:35 by Antigravity
> **状態**: ✅ 実装完了（全ページに Visual Break コンポーネント追加済み）
> **対象**: `webdesigner_guide/` 配下全ページ

---

## 背景と目的

### 問題
受講生（カジュアル層・ライト層が大半）にとって、現状の Webデザイナーガイドは **テキスト壁（Wall of Text）** になっており、とっつきづらい印象がある。

### 方針
- テキスト量は減らさない（内容は正確で必要）
- **視覚的な休憩ポイント（Visual Break）** を挿入して、読みやすさ・スキャナビリティを向上させる
- 以下の4つのコンポーネントを戦略的に配置する

---

## ✅ 完了済みの作業（Antigravity 実施分）

### 1. テーマ変更: Dark → Warm Professional
- `:root` カラーパレット全面変更（全9ファイル）
- 旧ダーク色 `#1a1f36` → `#3d4f6f`（ソフトネイビー）
- アクセント `#ff6b6b` → `#e07050`（ウォームコーラル）
- ボディ `#f8f9fc` → `#faf8f5`（ウォームクリーム）
- **詳細は `GEMINI.md` §3 を参照**

### 2. 文体の軟化
- だ/である → です/ます調に統一（全ファイル）
- 体言止めの多用を廃止し、述語で結ぶ柔らかい文体に
- **トーンルールは `GEMINI.md` §3.2 を参照**

### 3. メイキング導線
- トップページのワイヤーフレームリンクをカード型に格上げ
- Page 02 の STEP 03（ワイヤーフレーム）直下にメイキング導線を追加

---

## 🔨 残りの作業: テキスト壁の解消（ビジュアル改善）

### 使用する4つの Visual Break コンポーネント

以下のCSSクラスを各ページの `<style>` 内に追加し、HTMLに適用する。

#### A. `point-card`（ポイントカード）— 重要な気づきを強調
```html
<div class="point-card">
  <div class="point-icon">💡</div>
  <div>
    <div class="point-label">ポイント</div>
    <p>ここに要点を書く。セクションの冒頭や末尾に配置する。</p>
  </div>
</div>
```
```css
.point-card {
  display: flex; gap: 16px; align-items: flex-start;
  background: linear-gradient(135deg, #fdf6f0, #faf8f5);
  border: 1px solid #e8e4df; border-left: 5px solid #e07050;
  border-radius: 10px; padding: 20px; margin: 20px 0;
}
.point-icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }
.point-label {
  font-size: 12px; font-weight: 700; color: #e07050;
  letter-spacing: 0.08em; margin-bottom: 4px;
}
.point-card p { font-size: 14px; color: #2c3440; line-height: 1.85; margin: 0; }
```

#### B. `icon-list`（アイコンリスト）— 箇条書きをビジュアル化
```html
<ul class="icon-list">
  <li><i class="fa-solid fa-check-circle"></i><span>リスト項目をアイコン付きに</span></li>
</ul>
```
```css
.icon-list { list-style: none; padding: 0; margin: 12px 0; display: flex; flex-direction: column; gap: 10px; }
.icon-list li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 14px; line-height: 1.8; color: #2c3440;
}
.icon-list li i { color: #3bb4a0; margin-top: 4px; flex-shrink: 0; }
```

#### C. `visual-divider`（視覚的セパレーター）— セクション間の呼吸
```html
<div class="visual-divider"></div>
```
```css
.visual-divider {
  height: 1px; margin: 32px 0;
  background: linear-gradient(90deg, transparent, #e8e4df 20%, #e8e4df 80%, transparent);
}
```

#### D. `mini-card-grid`（ミニカードグリッド）— 並列情報の視覚化
```html
<div class="mini-card-grid">
  <div class="mini-card">
    <i class="fa-solid fa-pencil"></i>
    <h5>カードタイトル</h5>
    <p>短い説明</p>
  </div>
</div>
```
```css
.mini-card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; margin: 16px 0; }
.mini-card {
  background: #faf8f5; border: 1px solid #e8e4df; border-radius: 10px;
  padding: 18px; text-align: center;
}
.mini-card i { font-size: 24px; color: #e07050; margin-bottom: 8px; }
.mini-card h5 { font-size: 14px; font-weight: 700; margin-bottom: 6px; }
.mini-card p { font-size: 12px; color: #7a8494; line-height: 1.7; }
```

---

### ページ別 Visual Break 挿入指示

#### index.html ✅ 実装済み
- 3カラム「このサイトについて」セクションは既にカード化されている
- 7カードナビも視覚的に問題なし

#### page01_what.html — 優先度: 🔴高
挿入箇所:
1. **比較テーブル直後**（L229付近）: `point-card` で「一番の違いは "更新し続ける" という前提です」を強調
2. **スキルセット全体直後**（L258付近）: `point-card` で「コードは書かなくて大丈夫。大切なのは "何を作りたいか" を伝える力です」
3. **守備範囲セクションの2カラム間**（L312付近）: `visual-divider` を挿入
4. **既存 `<ul>` / `<li>`** を `icon-list` に変換（守備範囲リスト2箇所）

#### page02_workflow.html — 優先度: 🔴高
挿入箇所:
1. **8ステップフロー図直後**（L190付近）: `point-card` で「デザイナーが主に関わるのは STEP 01〜04。ここが "設計" のフェーズです」
2. **各アコーディオンの中身**: 本文が1〜2行と短すぎる。各STEPの `<div class="body">` 内にアイコン付きで「誰が」「何を」「ツール例」の3点を箇条書き追加（`icon-list` 使用）
3. **ディレクターコラム直後**: `point-card` で「AI時代のキーメッセージ: "指示する側" になれることが最大の武器です」

#### page03_design.html — 優先度: 🟡中
挿入箇所:
1. 各デザイン概念（タイポグラフィ・カラー・レイアウト・レスポンシブ）の説明を `mini-card-grid` に再構成
2. 各カードにFontAwesomeアイコンを配置（✏️ タイポグラフィ → `fa-font`、🎨 カラー → `fa-droplet` 等）
3. セクション間に `visual-divider`

#### page04_tools.html — 優先度: 🟡中
挿入箇所:
1. ツール一覧を `mini-card-grid` で再構成（各ツール名 + アイコン + 一言説明）
2. フェーズ別ツールマップをステップ形式（STEP 01〜08 と対応）に

#### page05_ai.html — 優先度: 🟡中
挿入箇所:
1. AI活用の3分類（画像生成・デザイン生成・コード生成）を `mini-card-grid` 化
2. 「AIに任せていいこと / 人間がやるべきこと」を既存の `scope-grid` パターンで対比表示

#### page06_client.html — 優先度: 🟢低（既にカード・テーブル多用で視覚的に良好）
挿入箇所:
1. ヒアリング7項目リスト直後に `point-card`「最も重要なのは "目的" 。ここがブレると全工程が迷走します」
2. コラム2箇所は既にビジュアル化されているため、`visual-divider` の挿入のみ

#### page07_start.html — 優先度: 🟢低
挿入箇所:
1. ロードマップを `mini-card-grid`（3ステップ: 学ぶ → 作る → 売る）として視覚化
2. ポートフォリオ作成の重要性を `point-card` で強調

---

## 実装上の注意

1. **CSSは各ページの `<style>` 内に追加**する（共通CSSファイルは未導入のため）
2. **文体は必ず です/ます調** を維持する（`GEMINI.md` §3.2）
3. **カラーは `:root` 変数を使用**する。ハードコード値は `#e07050`（accent）、`#3bb4a0`（accent-2）、`#2c3440`（text-main）のみ許容
4. **レスポンシブ**: `@media (max-width: 768px)` 内で `.mini-card-grid` は `grid-template-columns: 1fr` に
5. **既存コンポーネントを壊さない**: `.compare-table`, `.skill-grid`, `.callout` 等は維持。追加のみ行う
