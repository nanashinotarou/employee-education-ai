# Today_Plan.md — Day 12 修正計画（Cursorレビュー後）

> **最終更新**: 2026-04-29 by ClaudeCode
> **状態**: 📋 修正計画確定・実装待ち
> **対象**: `vol12-1.html`（Cursor実装済み → 修正のみ）

---

## 修正の全体方針

コード構造・Facade・レスポンシブ・localStorage は合格。
**コンテンツの架空記述** と **vol11 との外観不一致** を修正する。
新規ファイルは作らない。`vol12-1.html` を直接編集する。

---

## 修正① 🔴 ヒーロー文・前半タブの内容を実態に合わせる

### ヒーロー `<p>`（L550〜552）

現状（架空）:
```
Day 11 の「API × アプリ」の感覚を土台に…「AIがコードを出してくれたけど、どうやって画面に反映するの？」…実装 → 動作確認 → 修正 の反復（デバッグループ）で解消します。
```

修正後:
```html
Day 11 で「AIにアプリを生成させる」感覚を掴みました。今日はその先へ。<br>
<strong>Antigravity でエージェントを動かし、Gemini Canvas で実際のアプリを完成させ、Google Opal で自動化まで体験する</strong>回です。<br>
コードを書けなくても「動くものを作り切る」——その達成感を今日持ち帰ってください。
```

---

### 前半タブボタン（L557）

| | 現状 | 修正後 |
|---|---|---|
| ラベル | `前半：UI実装` | `前半：Antigravity & Gemini Canvas` |
| アイコン | `fa-layer-group` | `fa-robot`（色 `#7c3aed`）|

---

### 前半タブ `card-header h2`（L601）

現状: `前半：Claudeでフロントエンド（UI）を実装する`
修正後: `前半：Antigravity & Gemini Canvas でアプリを動かす`

---

### 前半タブ リード文（L602〜604）

現状: `"大まかな指示 → 微調整" の順で、AIにUIを作らせます…`

修正後:
```html
前半の2本は、実際にエージェントを動かしてアプリを作る体験です。<br>
<strong>Antigravity</strong> でAIエージェントに作業を任せる感覚と、<strong>Gemini Canvas × GAS</strong> でコピペだけでTodoアプリを完成させる手順を確認します。
```

---

### 前半タブ 実習 `step-box` の `<ul>`（L638〜641）

現状: "AIに「画面の構成」を指示…プレビューし、崩れた箇所を…"

修正後:
```html
<li>Antigravity を起動し、プロンプト1本でアプリを自動生成してみる。</li>
<li>Gemini Canvas を開き、動画を参考に Todo アプリのコードを生成 → GAS に貼って動作確認。</li>
<li>「動いた！」体験を1つ作ることを最低ラインにする。</li>
```

---

## 修正② 🔴 動画 vc-title / vc-note を実際のタイトルに修正

### 前半 動画①（video-id: `glMsSI3JSAM`）

| 項目 | 現状 | 修正後 |
|---|---|---|
| `vc-title` | 動画①：ClaudeでUIを実装する（指示→反映の流れ） | 【初心者向け】Google Antigravityの使い方を徹底解説 |
| `vc-note` | ボタンの色・配置・ホバーなど、細部をAIに調整させるプロセス。 | AIエージェントが「考えて・動いて・作る」仕組みと、2つの画面モードの使い分けを学ぶ。 |

### 前半 動画②（video-id: `XoF3fv4XLSs`）

| 項目 | 現状 | 修正後 |
|---|---|---|
| `vc-title` | 動画②：崩れたらスクショ＆エラーで直す（デバッグ手法） | コピペで完成！Gemini Canvas×GASでTodoアプリ作成｜プログラミング知識不要 |
| `vc-note` | 表示崩れや動かない箇所は、状況をそのままAIへ投げて修正。 | Gemini Canvasでコードを生成 → GASに貼るだけ。コーディング不要でスプレッドシート連携アプリが完成。 |

### 後半 動画③（video-id: `1hprmnresn8`）

| 項目 | 現状 | 修正後 |
|---|---|---|
| `vc-title` | 動画③：直感的なアプリ生成プロセス（デザイン→コード生成） | AIをフル活用してコードを書けない非エンジニアがアプリを作成します！ |
| `vc-note` | "作る速度"を上げるための考え方・進め方を確認。 | AI×プログラミング講師が一緒に考える「要件定義→指示→確認」のサイクルを実演で体験。 |

### 後半 動画④（video-id: `vHMgM26j7jU`）

| 項目 | 現状 | 修正後 |
|---|---|---|
| `vc-title` | 動画④：OPALなど次世代ツール紹介（Day13へ向けた総集編） | 【無料】Googleの「Opal」で作れる自分専用の自動化ツールがマジですごい！ |
| `vc-note` | アイデアからUI・機能実装までを一気通貫で進める環境。 | ノーコードで業務フローを自動化できる Google Opal の概要と使い方を確認する。 |

---

## 修正③ 🟡 vol11 との外観統一（CSS）

### `.day-badge`（L126〜137）

現状: 薄ピンク背景 / Roboto / 0.85rem

修正後（vol11 準拠）:
```css
.day-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--accent-light), var(--accent));
    color: #fff;
    padding: 6px 20px;
    border-radius: 30px;
    font-family: 'Teko', sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    margin-bottom: 1rem;
    box-shadow: 0 8px 20px var(--accent-glow);
}
```

### `hero h1`（L139〜146）

現状: Teko / uppercase / 3.2rem / `color: var(--accent)`

修正後（vol11 準拠）:
```css
.hero h1 {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--text-main);
    margin: 0 0 1rem;
    letter-spacing: -1px;
}
/* font-family と text-transform: uppercase は削除 */
```

### `.wax-seal` アニメーション（L396〜421）

現状: ただの `opacity + transform transition`

修正後（vol11 準拠）— transition を削除し stampIn keyframe に差し替え:
```css
.wax-seal {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle at 30% 30%, #f48fb1, #d81b60, #880e4f);
    border-radius: 50%;
    opacity: 0;
    transform: scale(3) rotate(-30deg);
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.95);
    font-size: 4rem;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.5), 0 10px 40px rgba(216,27,96,0.5);
    border: 5px solid #880e4f;
    z-index: 10;
}
.wax-seal::after {
    content: '';
    position: absolute;
    inset: 12px;
    border: 3px dotted rgba(255,255,255,0.5);
    border-radius: 50%;
}
.mission-area.completed .wax-seal {
    animation: stampIn 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
@keyframes stampIn {
    0%   { opacity:0; transform: scale(3) translateY(-50px) rotate(-30deg); }
    60%  { opacity:1; transform: scale(0.9) translateY(0) rotate(5deg); }
    80%  { transform: scale(1.1) rotate(-2deg); }
    100% { opacity:1; transform: scale(1) rotate(0deg); }
}
```

---

## 修正ステップまとめ

```
1. ヒーロー <p> を Antigravity / Gemini Canvas / Opal 軸のリード文に差し替え
2. 前半タブボタンのラベル（「前半：Antigravity & Gemini Canvas」）・アイコン（fa-robot）を修正
3. 前半タブ card-header h2 を修正
4. 前半タブ リード文を修正
5. 前半タブ 実習 step-box <ul> を Antigravity・Gemini Canvas 内容に修正
6. 動画① vc-title / vc-note を修正（Antigravity 徹底解説）
7. 動画② vc-title / vc-note を修正（Gemini Canvas×GAS）
8. 動画③ vc-title / vc-note を修正（非エンジニアのアプリ実装実演）
9. 動画④ vc-title / vc-note を修正（Google Opal）
10. .day-badge CSS を vol11 グラデーションスタイルに差し替え
11. hero h1 CSS を vol11 スタイルに統一（uppercase / Teko 解除、color を text-main に）
12. .wax-seal を stampIn keyframe アニメーションに差し替え（transition 削除）
13. ブラウザ確認（タブ切替・動画再生・チェックリスト・モバイル幅）
```

---

## 修正しない箇所（合格・触らないこと）

- YouTube Facade JS（`{ once: true }` 含め正確）
- Sticky 動画グリッド（`position: sticky; top: 75px`）
- モバイルレスポンシブ CSS（`@media (max-width: 768px)`）
- localStorage チェックリスト状態復元
- 前後ナビ（vol11 / vol13 / index）
- タブ切替 JS・プログレスバー
