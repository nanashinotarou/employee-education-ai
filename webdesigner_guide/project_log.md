# How to Webデザイナー ― 作業ログ

`implementation_plan.md` の「作業完了後にすること（Cursor向け）」に基づく作業記録。

---

## 2026-04-22：Phase 1 完了（トップページ）

- `index.html` 作成（トップページ）
- 共通 CSS（:root 変数・header / page-hero / content-wrap / .wf-note / レスポンシブ等）を埋め込み
- ヒーロー：メインコピー「デザインはできる。あとはWebを知るだけ。」／CTA → `page01_what.html`
- 「このサイトで学べること」：7 枚のカードナビ（page01〜page07）
- 「このサイトの使い方」「研修コンテンツとの連携」セクションを設置
- 各セクションに `.wf-note` を配置

### レビュー反映（同日）

- `.wf-note` をすべて `<main class="content-wrap">` の内側に移動（インライン `max-width` 指定を解消）
- 「要クライアント確認」→「要確認・仮テキスト」に用語統一
- これらを踏まえた 3 ルールを `implementation_plan.md` の Phase 2 詳細に追記

---

## 2026-04-22：Phase 2 完了（内部ページ page01〜page07）

- 計画書の共通 HTML 構造・共通 CSS・ヘッダー/フッターに準拠して 7 ページを一括作成
- 作成順：`page01_what.html` → `page02_workflow.html` → `page03_design.html` → `page04_tools.html` → `page05_ai.html` → `page06_client.html` → `page07_start.html`
- 各ページの固有 UI：
  - Page 01：スキルカード（04 を強調）／働き方 3 カラム／比較表
  - Page 02：8 ステップのワークフロー図＋`<details>` アコーディオン
  - Page 03：タイポ／カラー／レイアウト／レスポンシブ／UX・UI（スウォッチ・ブレイクポイント図）
  - Page 04：4 フェーズのツールマップ＋比較表
  - Page 05：AI 用途一覧＋カテゴリ別ツール＋プロンプト例＋研修誘導 CTA
  - Page 06：出会い方／ヒアリングシート／提案／コミュニケーション／契約 warn-box
  - Page 07：ポートフォリオ／副業・独立ステップ／コミュニティ／学習ロードマップ＋締めメッセージ

### 3 ルール遵守チェック結果

- ✅ 全ページで該当ナビに `class="active"` を付与
- ✅ 全 `.wf-note` が `<main class="content-wrap">` 内に配置
- ✅ 用語を「要確認・仮テキスト」に統一（全 HTML を一括置換）
- ✅ Lint エラー 0

---

## 2026-04-22：Phase 3 完了（既存研修サイトへの連携）

- 対象：`G:/マイドライブ/研修/【202604】社員教育とAI/index.html`
- `.list-area` 内・`.curriculum-list`（vol01〜vol13）の直下に
  「📘 How to Webデザイナー ガイドを読む」ボタンブロックを追加
- リンク先：`webdesigner_guide/index.html`
- Lint エラー 0

---

## 進捗サマリー

| Phase | 内容 | 状態 |
| --- | --- | --- |
| Phase 1 | トップページ（`index.html`） | ✅ 完了 |
| Phase 2 | 内部ページ 7 枚（`page01`〜`page07`） | ✅ 完了 |
| Phase 3 | 研修サイト本体との相互導線 | ✅ 完了 |
| Phase 4 | 本番化・コンテンツ執筆（全 8 ファイル本番版＋新規セクション） | ✅ 完了 |
| Phase 5 | ワイヤーフレーム体験ガイド（`wireframe/guide.html`＋本番トップのリンク向き先変更） | ✅ 完了 |

`implementation_plan.md` の Phase 1〜3・5 完了チェックリストおよび Phase 4 詳細チェックを反映済み。Phase 5 チェックリストは `[x]` 済み（2026-04-25）。

---

## 2026-04-25：Phase 4 完了（本番化・コンテンツ執筆）

`webdesigner_guide/` 直下の `index.html` と `page01〜page07` を**本番版で上書き**。
`wireframe/` 配下のメイキング特典スナップショットは**完全保存（無変更）**。

### 全 8 ファイル共通の作業

- `<div class="page-meta">` 黒帯ブロック削除＋ `.page-meta` CSS 削除
- 全 `.wf-note` ブロック削除（計 76 箇所）＋ `.wf-note` CSS 削除
- 仮テキスト由来のリード文を、本番向け実コンテンツに差し替え
- `class="active"` 設定は Phase 2 のものを維持（page01〜07）

### Phase 4-1：`index.html` の再構築

- ヒーロー：CTA ボタン廃止 → `.scroll-hint`（バウンスアニメ）でコンテンツへ誘導
- メインコピー差し替え：「<strong>デザインを、仕事に変える。</strong>」（暫定。`<!-- CATCHCOPY: ... -->` コメント残置）
- サブコピー：「素材を作れるだけでは、仕事にならない時代がきた。」へ刷新
- **新設「このサイトについて」3ブロック**（A. こんな人のために／B. なぜ作ったか／C. 読み終えたら、あなたは）
  - 各ブロックを左ボーダーカラー違いで視覚区分（accent / accent-2 / orange）
  - B はエッセイ調の `.why-text`（マーカー風 strong）、A・C は `.about-list`（カラードット）
- 7 カードナビ後に **二次 CTA `.secondary-cta`**（コンテキストを読んだ人だけが押す）配置
- フッター上に **「制作の裏側を見る」リンク `.making-link`** 追加（→ `wireframe/index.html`）

### Phase 4-2：`page01_what.html`

- **新規セクション「Webデザイナーの守備範囲と、その外側」**を末尾に追加
  - `.scope-grid`（2 カラム）：範囲外（赤・✕）／グレーゾーン（グレー・△）
  - 範囲外 6 項目（会員機能／EC／予約／DB／セキュリティ／サーバーサイド）
  - グレーゾーン 3 項目（フォーム＝Formspree／ブログ＝WordPress・Notion API／メルマガ＝Mailchimp・SendGrid）
  - コラムボックス「『わかりません』と言える勇気が、信頼をつくる」
- 既存セクションのリード文を本番向けに調整

### Phase 4-3：`page02〜page05`

- すべて構造変更なし。`.wf-note` 削除＋リード文ブラッシュアップのみ
- `page04_tools.html`：デプロイ表に **Cloudflare Pages を最上段で追加**（site_structure.md と整合）し、本サイト自体の実例である旨を脚注で明記

### Phase 4-4：`page06_client.html`（追加 2 コラム）

`.col-card`（右上 "COLUMN" バッジ・H2 アクセント線・グラデ背景）を新設。

- **COLUMN 01：稼げる案件の選び方——「作画カロリー」を意識する**
  - 高カロリー案件 5 項目／低カロリー高単価案件 5 項目を `.compare-2col` で対置
  - コラム枠「省エネで高単価を狙う、がプロの発想」
- **COLUMN 02：月 1 万円で「止まらない開発環境」を作る発想**
  - `.ai-stack` 3 カラム：Claude Code（計画）／Cursor（実装）／Antigravity 等（運用）
  - `.ai-stack-total`（黒帯）で「合計 月 ¥10,000 前後」を強調
  - 考え方 4 項目を `.tips-list` で
  - `.biz-table`（採算目安）：LP／コーポレート／WP 構築／EC／保守／上流工程

### Phase 4-5：`page07_start.html`

- 締めメッセージを刷新：見出しを「<strong>素材屋から、プロジェクト屋へ。</strong>」へ
- 本文に "プロジェクトを動かす人" としての一歩を踏み出す転換メッセージ
- `.signature`（編集チーム署名行）を追加

### Phase 4 完了チェックリスト（全 10 項目クリア）

- ✅ `wireframe/` 未変更（git status で untracked のまま、grep でも元の wf-note カウントを保持）
- ✅ 全 8 ファイルから `.wf-note` 完全削除
- ✅ 全 8 ファイルから `.page-meta`（黒帯）完全削除
- ✅ `index.html` に「このサイトについて」3 ブロック
- ✅ `index.html` ヒーローはスクロール誘導（CTA ボタンなし）
- ✅ `index.html` に「ワイヤーフレーム版を見る」リンク
- ✅ `page01` に「カバーできない範囲」セクション
- ✅ `page06` に「作画カロリー」「AI 開発コスト」2 コラム
- ✅ `page07` 締めメッセージに「プロジェクト屋」への転換
- ✅ 全ページのナビ `.active` クラス維持
- ✅ Lint エラー 0

---

## 2026-04-25：Phase 5 完了（ワイヤーフレーム体験ガイド）

- 新規：`webdesigner_guide/wireframe/guide.html`（メイキング風トーン、`.wf-note` / `.page-meta` 解説、5 ステップの制作プロセス、本番比較 3 点、CTA → `wireframe/index.html`）
- 変更：`webdesigner_guide/index.html` の「制作の裏側を見る」リンク先を `wireframe/index.html` → `wireframe/guide.html`
- `implementation_plan.md`：最終更新日・フォルダ構成・実装フェーズに Phase 5 追記、Phase 5 完了チェックリストを `[x]`
- Lint（対象 HTML）：問題なし

---

## 2026-04-25：Phase 7 完了（Claude Code レビュー反映）

- `page06_client.html`：ヒアリングリストの `<ol>` 未閉タグを修正（`<ul>` 化＋閉じタグ追加）し、無効HTMLを解消
- `page03_design.html`：カラーサンプルの HEX を指定値に修正（Accent2/Dark/Bg）
- `page06_client.html`：AI 開発コスト表の直下に注記を追加（Claude.ai Pro 目安である旨）
- `page04_tools.html`：未解決 TODO 文（「太字にする予定」）を削除し、DEPLOY マップに `Cloudflare Pages` を追加
- `index.html`：ワイヤーフレーム（メイキング）リンクを `<main>` 内へ移動し、`</main>` 外の孤立ブロックを削除
- `page07_start.html`：署名を `― H.K` に修正、ロードマップ Step 2 を自己参照にならない内容へ差し替え
- Lint（対象 HTML）：問題なし

---

## 今後の想定タスク（本計画の範囲外・メモ）

- ヒーローのキャッチコピー確定（`index.html` の `<!-- CATCHCOPY -->` コメント箇所）
- ハンバーガーメニュー実装（Phase 6 で対応済み）
- ポートフォリオ事例・ヒアリングシート PDF など外部素材の差し替え（許諾取得後）
- ディレクター署名入り「締めメッセージ」最終版への差し替え（Page 07 `.signature`）
- Cloudflare Pages へのデプロイ実施（Page 04 で言及済み・本サイト自体を実例化）
