# Day 7: WEBサイト制作の基礎知識 — 実装計画（Cursor向け完全版）

## 概要

Day 7 研修ページ `vol07-1.html` を新規作成する。テーマは「非エンジニアでも分かるWeb制作の基礎教養」。
動画7本＋インラインフラッシュカードアプリ（100問）＋後半実習を、桜テーマのリッチUIで実装する。

> [!IMPORTANT]
> **手戻り厳禁。** このドキュメントに従い、`vol07-1.html` を新規に1ファイルで完結する形で作成すること。
> CSSとJSは `vol06-1.html` と完全に同じパターンを踏襲する（コピペして変更する形で良い）。

---

## ファイル構成

### [NEW] vol07-1.html

単一HTMLファイル。`<head>` 内に全CSS、`</body>` 直前に全JSを記述する。

---

## 1. `<head>` セクション

`vol06-1.html` の `<head>` をそのままコピーし、以下だけ変更する：

```html
<title>Day 7 | WEBサイト制作の基礎知識</title>
```

### 追加CSS（既存CSSの末尾に追記）

フラッシュカードアプリのために以下のCSSを `</style>` の直前に追加する：

```css
/* ======== FLASHCARD QUIZ APP ======== */
.quiz-app-container { background: var(--bg-card); border: 2px solid #fbcfe8; border-radius: var(--radius); padding: 2rem; margin: 2rem 0; }

/* ダッシュボード画面 */
.quiz-dashboard { max-width: 100%; }
.quiz-dashboard-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem; }
.quiz-dashboard-header h3 { margin: 0; font-size: 1.5rem; font-weight: 900; color: var(--text-main); }
.quiz-reset-btn { font-size: 0.85rem; color: var(--text-sub); text-decoration: underline; cursor: pointer; background: none; border: none; padding: 4px 8px; }
.quiz-reset-btn:hover { color: var(--accent); }

.quiz-progress-card { background: #fff; border: 1px solid #fbcfe8; border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; }
.quiz-progress-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 0.8rem; }
.quiz-progress-header h4 { margin: 0; font-weight: 900; color: var(--text-main); }
.quiz-progress-header span { color: var(--accent); font-weight: 900; font-size: 1.3rem; }
.quiz-progress-bar-bg { height: 8px; background: #fce4ec; border-radius: 10px; overflow: hidden; }
.quiz-progress-bar-fill { height: 100%; background: linear-gradient(90deg, #f48fb1, #d81b60); transition: width 0.5s ease; border-radius: 10px; }

.quiz-start-buttons { display: flex; flex-direction: column; gap: 0.8rem; margin-top: 1.2rem; }
.quiz-start-btn { width: 100%; padding: 1rem; background: linear-gradient(135deg, var(--accent-light), var(--accent)); color: #fff; border: none; border-radius: 14px; font-size: 1.05rem; font-weight: 900; cursor: pointer; transition: all 0.3s; box-shadow: 0 6px 16px var(--accent-glow); }
.quiz-start-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px var(--accent-glow); }

.quiz-category-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1.5rem; }
.quiz-category-card { background: #fff; border: 2px solid #fbcfe8; border-radius: 16px; padding: 1.5rem; transition: all 0.3s; }
.quiz-category-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(216,27,96,0.06); border-color: var(--accent-light); }
.quiz-category-card.completed { background: #fdf2f8; border-color: var(--accent); }
.quiz-category-card h5 { margin: 0 0 0.8rem; font-weight: 900; font-size: 1rem; color: var(--text-main); display: flex; justify-content: space-between; align-items: center; }
.quiz-category-card .clear-badge { background: var(--accent-bg); color: var(--accent); font-size: 0.75rem; padding: 3px 10px; border-radius: 20px; font-weight: 900; }
.quiz-cat-progress { margin-bottom: 1rem; }
.quiz-cat-progress-text { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-sub); margin-bottom: 4px; }
.quiz-cat-progress-bar { height: 5px; background: #fce4ec; border-radius: 6px; overflow: hidden; }
.quiz-cat-progress-fill { height: 100%; background: linear-gradient(90deg, #f48fb1, #d81b60); border-radius: 6px; transition: width 0.5s ease; }
.quiz-cat-btn { width: 100%; padding: 0.7rem; border-radius: 12px; font-weight: 900; font-size: 0.9rem; cursor: pointer; transition: all 0.3s; border: 2px solid #fbcfe8; background: #fff; color: var(--accent); }
.quiz-cat-btn:hover { background: var(--accent-bg); border-color: var(--accent-light); }
.quiz-cat-btn:disabled { background: #f5f5f5; color: #ccc; cursor: not-allowed; border-color: #e4e4e7; }

/* クイズ画面 */
.quiz-play-screen { max-width: 100%; }
.quiz-play-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
.quiz-back-btn { display: inline-flex; align-items: center; gap: 6px; background: #fff; border: 2px solid #e4e4e7; padding: 8px 16px; border-radius: 12px; font-weight: 800; font-size: 0.9rem; color: var(--text-sub); cursor: pointer; transition: all 0.2s; }
.quiz-back-btn:hover { border-color: var(--accent-light); color: var(--accent); }
.quiz-remaining { color: var(--text-sub); font-weight: 800; }
.quiz-remaining strong { color: var(--text-main); font-size: 1.2rem; }

.quiz-mini-progress { height: 4px; background: #fce4ec; border-radius: 4px; overflow: hidden; margin-bottom: 2rem; }
.quiz-mini-progress-fill { height: 100%; background: linear-gradient(90deg, #f48fb1, #d81b60); transition: width 0.3s ease; border-radius: 4px; }

.quiz-question-card { background: #fff; border: 2px solid #fbcfe8; border-radius: 16px; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 4px 15px rgba(216,27,96,0.03); }
.quiz-question-category { display: inline-block; background: var(--accent-bg); color: var(--accent); font-size: 0.8rem; font-weight: 900; padding: 4px 14px; border-radius: 20px; margin-bottom: 1rem; }
.quiz-question-text { font-size: 1.25rem; font-weight: 900; color: var(--text-main); line-height: 1.7; margin: 0; }
.quiz-question-text .q-mark { color: var(--accent); margin-right: 6px; }

.quiz-options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 1.5rem; }
@media (max-width: 600px) { .quiz-options-grid { grid-template-columns: 1fr; } }
.quiz-option-btn { text-align: left; padding: 1.2rem; border-radius: 14px; border: 2px solid #fbcfe8; background: #fff; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 10px; font-size: 0.95rem; font-weight: 600; color: var(--text-main); }
.quiz-option-btn:hover:not(:disabled) { border-color: var(--accent-light); background: var(--accent-bg); }
.quiz-option-btn .opt-num { width: 30px; height: 30px; border-radius: 10px; background: #fce4ec; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.85rem; color: var(--accent); flex-shrink: 0; }
.quiz-option-btn.correct { border-color: #10b981; background: #ecfdf5; color: #065f46; }
.quiz-option-btn.correct .opt-num { background: #10b981; color: #fff; }
.quiz-option-btn.wrong { border-color: #ef4444; background: #fef2f2; color: #991b1b; }
.quiz-option-btn.wrong .opt-num { background: #ef4444; color: #fff; }
.quiz-option-btn.dimmed { opacity: 0.4; border-color: #e4e4e7; }

.quiz-result { text-align: center; padding: 1.5rem 0; animation: fadeIn 0.3s ease; }
.quiz-result-text { font-size: 1.5rem; font-weight: 900; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 8px; }
.quiz-result-text.correct { color: #059669; }
.quiz-result-text.wrong { color: #ef4444; }
.quiz-action-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.quiz-next-btn { padding: 0.8rem 2rem; border-radius: 14px; font-weight: 900; font-size: 1rem; cursor: pointer; transition: all 0.2s; border: 2px solid #e4e4e7; background: #fff; color: var(--text-main); }
.quiz-next-btn:hover { border-color: var(--accent-light); background: var(--accent-bg); }
.quiz-master-btn { padding: 0.8rem 2rem; border-radius: 14px; font-weight: 900; font-size: 1rem; cursor: pointer; transition: all 0.2s; border: none; background: linear-gradient(135deg, #10b981, #059669); color: #fff; box-shadow: 0 6px 16px rgba(5, 150, 105, 0.3); display: flex; align-items: center; gap: 6px; }
.quiz-master-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(5, 150, 105, 0.4); }
```

---

## 2. `<body>` 構造

### 2-1. ヘッダー・ヒーロー・タブナビ

```html
<header class="fixed-header">
    <a href="index.html" class="back-link"><i class="fa-solid fa-arrow-left"></i> Course Home</a>
    <div class="progress-container">
        <div class="progress-text"><span>Day 7 Progress</span><span id="progress-percent">0%</span></div>
        <div class="progress-bar-bg"><div class="progress-bar-fill" id="progress-bar"></div></div>
    </div>
    <div style="width:100px;"></div>
</header>

<div class="container">
    <div class="hero">
        <div class="day-badge">DAY 07</div>
        <h1>WEBサイト制作の基礎知識</h1>
        <p>Webサイトの仕組みから制作技術、専門用語まで。<br>AIツールでサイトを作るための「共通言語」を身につけます。</p>
    </div>

    <div class="tab-nav">
        <button class="tab-btn active" onclick="switchTab('tab-goal')"><i class="fa-solid fa-bullseye" style="color:#d81b60;"></i> 本日の目標</button>
        <button class="tab-btn" onclick="switchTab('tab-first')"><i class="fa-solid fa-code" style="color:#2563eb;"></i> 前半：Web制作基礎</button>
        <button class="tab-btn" onclick="switchTab('tab-second')"><i class="fa-solid fa-wand-magic-sparkles" style="color:#7c3aed;"></i> 後半：AIでサイト制作</button>
        <button class="tab-btn" onclick="switchTab('tab-summary')"><i class="fa-solid fa-flag-checkered" style="color:#10b981;"></i> 今日のまとめ</button>
    </div>
```

### 2-2. TAB 1: 本日の目標 (`tab-goal`)

```html
<div id="tab-goal" class="tab-content active">
    <div class="glass-card" style="border-top: 5px solid var(--accent);">
        <div class="card-header">
            <i class="fa-solid fa-bullseye" style="color:var(--accent); background:var(--accent-bg);"></i>
            <h2>本日の研修ねらい</h2>
        </div>

        <div class="info-box">
            <h4><i class="fa-solid fa-lightbulb"></i> 「AIで作る」ための共通言語を手に入れる</h4>
            <p>
                今日の内容は「エンジニアを目指す」ためのものではありません。<br>
                AIにWebサイトを作ってもらうとき、「ここのCSSを直して」「CTAボタンを追加して」と的確に指示できるようになるための<strong>最低限の共通言語</strong>を身につけることが目標です。
            </p>
        </div>

        <div class="bento-grid" style="margin-top: 1rem;">
            <div class="bento-item" style="border-top: 4px solid #2563eb;">
                <h4 style="color:#2563eb;"><i class="fa-solid fa-code" style="color:#2563eb;"></i> 前半：Web制作の基礎</h4>
                <p>Webサイトの仕組み、HTML/CSS/JSの役割、専門用語15選を学び、フラッシュカードクイズで知識を定着させます。</p>
            </div>
            <div class="bento-item" style="border-top: 4px solid #7c3aed;">
                <h4 style="color:#7c3aed;"><i class="fa-solid fa-wand-magic-sparkles" style="color:#7c3aed;"></i> 後半：AIでサイト制作</h4>
                <p>Gemini Canvas、Readdy、Wix AIなどのノーコードツールを使い、実際にWebサイトを作ってみます。</p>
            </div>
        </div>
    </div>

    <div class="column-box">
        <div class="column-label">コース目標</div>
        <h4>AI活用によるWEBサイト制作またはアプリ開発をする</h4>
        <p style="margin:0; line-height:1.8;">研修目的：Webサイトの構造と制作手順を理解し、非エンジニアでも扱える基礎を固め、AI活用による制作準備を整える。</p>
    </div>

    <div style="text-align:center;">
        <button class="btn" onclick="switchTab('tab-first'); window.scrollTo(0,0);">
            前半：Web制作基礎へ進む <i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</div>
```

### 2-3. TAB 2: 前半 (`tab-first`)

#### SECTION 1: 動画1 — ホームページ制作の知識・スキルの全体像

```html
<div id="tab-first" class="tab-content">

    <!-- 前提知識コラム（動画の前に配置） -->
    <div class="glass-card" style="border-top: 5px solid #0ea5e9;">
        <div class="card-header">
            <i class="fa-solid fa-circle-info" style="color:#0ea5e9; background:#e0f2fe;"></i>
            <h2>まずはここから！Webサイトの超基礎知識</h2>
        </div>
        <div class="info-box" style="background:#e0f2fe; border-left-color:#0ea5e9;">
            <h4 style="color:#0369a1;"><i class="fa-solid fa-globe"></i> そもそもWebサイトはどうやって表示されているの？</h4>
            <p>あなたが毎日見ているWebサイトは、実は「インターネット上の別のコンピュータ（サーバー）」に入っているファイルです。<br>
            ブラウザ（ChromeやSafari）がそのファイルをダウンロードして、画面に表示しています。<br>
            家にたとえると、<strong>サーバー＝家（データの保管場所）</strong>、<strong>ドメイン＝住所（URLの一部）</strong>、<strong>ブラウザ＝それを見に行く人</strong>です。</p>
        </div>
        <div class="bento-grid">
            <div class="bento-item" style="border-top: 3px solid #0ea5e9;">
                <h4 style="color:#0ea5e9;"><i class="fa-solid fa-server"></i> サーバー</h4>
                <p>Webサイトのファイルを保管し、24時間いつでもアクセスできるようにするコンピュータ。レンタルサーバーを契約して借りるのが一般的。</p>
            </div>
            <div class="bento-item" style="border-top: 3px solid #3b82f6;">
                <h4 style="color:#3b82f6;"><i class="fa-solid fa-at"></i> ドメイン</h4>
                <p>「example.com」のようなインターネット上の住所。人間が読みやすいように付けたIPアドレスの別名。</p>
            </div>
            <div class="bento-item" style="border-top: 3px solid #8b5cf6;">
                <h4 style="color:#8b5cf6;"><i class="fa-brands fa-chrome"></i> ブラウザ</h4>
                <p>サーバーからファイルを受け取って、私たちが見られる形に変換（レンダリング）して画面に表示するソフト。</p>
            </div>
        </div>
    </div>

    <!-- 動画1 -->
    <div class="glass-card" style="border-top: 5px solid #2563eb;">
        <div class="card-header">
            <i class="fa-solid fa-graduation-cap" style="color:#2563eb; background:#eff6ff;"></i>
            <h2>動画1：ホームページ制作の知識・スキルの全体像</h2>
        </div>

        <div class="video-grid" style="grid-template-columns: 1fr;">
            <div class="video-wrapper">
                <div class="video-thumb" data-video-id="erWUxtH1DmY" style="max-width: 800px; margin: 0 auto;">
                    <img src="https://img.youtube.com/vi/erWUxtH1DmY/maxresdefault.jpg" onerror="this.src='https://img.youtube.com/vi/erWUxtH1DmY/hqdefault.jpg'" alt="Web制作の全体像">
                    <div class="play-overlay"><i class="fa-brands fa-youtube"></i></div>
                </div>
            </div>
        </div>

        <div class="video-desc-full">
            <h3 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem;"><i class="fa-solid fa-compass"></i> Web制作に必要なスキルの地図</h3>
            <div class="accordion">
                <details open>
                    <summary>この動画で学べること</summary>
                    <div class="acc-body">
                        <p>ホームページ制作に必要な知識とスキルの全体像を、図を使って分かりやすく解説しています。「何を」「どの順番で」学べばいいかの見通しが立ちます。<br>
                        <a href="https://drive.google.com/file/d/1IvWhKcGRm7W_AgqqXVs3swNbGU2U9ATO/view?usp=sharing" target="_blank" style="color:#2563eb; font-weight:bold;">📄 動画で使われていた全体像の図（Googleドライブ）</a></p>
                    </div>
                </details>
            </div>
            <div class="column-box" style="background: linear-gradient(135deg, #eff6ff, #dbeafe); border-color: #bfdbfe; margin-top:2rem;">
                <div class="column-label" style="background: linear-gradient(135deg, #3b82f6, #2563eb);">ポイント整理</div>
                <h4 style="color: #1e40af; border-bottom: 2px dashed #93c5fd;">今日覚えるべき3つの視点</h4>
                <ul style="line-height:2.0; font-size:1.05rem; padding-left:1.5rem;">
                    <li><strong>ユーザー（閲覧者）の視点：</strong> 使いやすい？快適？スマホでちゃんと見える？</li>
                    <li><strong>開発者（作る側）の視点：</strong> どの技術を使って作る？誰がメンテナンスする？</li>
                    <li><strong>検索エンジンの視点：</strong> Googleにちゃんと見つけてもらえる構造になっている？</li>
                </ul>
            </div>
        </div>
    </div>
```

#### SECTION 2: 動画2 — Webサイト制作の基本〜3つの技術と+1のしくみ〜

```html
    <!-- 動画2 -->
    <div class="glass-card" style="border-top: 5px solid #0d9488;">
        <div class="card-header">
            <i class="fa-solid fa-layer-group" style="color:#0d9488; background:#f0fdfa;"></i>
            <h2>動画2：3つの基本技術と+1のしくみ</h2>
        </div>

        <div class="video-grid" style="grid-template-columns: 1fr;">
            <div class="video-wrapper">
                <div class="video-thumb" data-video-id="RQKWZAKCjsE" style="max-width: 800px; margin: 0 auto;">
                    <img src="https://img.youtube.com/vi/RQKWZAKCjsE/maxresdefault.jpg" onerror="this.src='https://img.youtube.com/vi/RQKWZAKCjsE/hqdefault.jpg'" alt="3つの基本技術">
                    <div class="play-overlay"><i class="fa-brands fa-youtube"></i></div>
                </div>
            </div>
        </div>

        <div class="video-desc-full">
            <h3 style="font-size: 1.5rem; font-weight: 900; color: #115e59; margin-bottom: 1.5rem;"><i class="fa-solid fa-house-chimney"></i> 家づくりに例えて理解しよう</h3>
            <p style="font-size:1.1rem; line-height:1.8; margin-bottom:1.5rem;">Webサイトを構成する技術は、「家づくり」に例えるとスッと理解できます。</p>

            <div class="bento-grid">
                <div class="bento-item" style="border-top: 4px solid #ea580c;">
                    <h4 style="color:#ea580c;"><i class="fa-solid fa-code" style="color:#ea580c;"></i> HTML = 骨組み・柱</h4>
                    <p style="font-size:0.95rem;">「ここが見出し」「ここがリンク」「ここが画像」といった<strong>情報の構造</strong>を定義する言語。家で言えば柱や壁の骨組みにあたります。デザインは一切関係なく、とにかく「何がどこにあるか」を決めます。</p>
                </div>
                <div class="bento-item" style="border-top: 4px solid #2563eb;">
                    <h4 style="color:#2563eb;"><i class="fa-solid fa-palette" style="color:#2563eb;"></i> CSS = 壁紙・外装</h4>
                    <p style="font-size:0.95rem;">文字の色、背景色、余白、レイアウトなど<strong>見た目・デザイン</strong>を整える言語。同じHTMLでもCSSを変えるだけでまったく違う見た目のサイトになります。家のリフォーム（内装工事）のイメージ。</p>
                </div>
                <div class="bento-item" style="border-top: 4px solid #7c3aed;">
                    <h4 style="color:#7c3aed;"><i class="fa-solid fa-bolt" style="color:#7c3aed;"></i> JavaScript = 水道・電気・自動ドア</h4>
                    <p style="font-size:0.95rem;">ボタンを押したらメニューが開く、入力ミスをその場で教えてくれるなど、<strong>動きや反応</strong>を加える言語。家で言えば水道・電気・自動ドアのような「使い勝手」を担当します。</p>
                </div>
                <div class="bento-item" style="border-top: 4px solid #d81b60;">
                    <h4 style="color:#d81b60;"><i class="fa-brands fa-wordpress" style="color:#d81b60;"></i> CMS = セルフリフォームキット</h4>
                    <p style="font-size:0.95rem;">WordPress等のCMS（コンテンツ管理システム）を使えば、コードを書かなくてもブラウザ上でサイトの内容を更新できます。業者（エンジニア）を呼ばなくても自分で家具を配置替えできる仕組みです。</p>
                </div>
            </div>
        </div>
    </div>
```

#### SECTION 3: 動画3 — Webデザイナーなら知っておくべき専門用語15選

```html
    <!-- 動画3 -->
    <div class="glass-card" style="border-top: 5px solid #d81b60;">
        <div class="card-header">
            <i class="fa-solid fa-spell-check" style="color:#d81b60; background:#fce4ec;"></i>
            <h2>動画3：知っておくべき専門用語15選</h2>
        </div>

        <div class="video-grid" style="grid-template-columns: 1fr;">
            <div class="video-wrapper">
                <div class="video-thumb" data-video-id="9R86Bn8XTVg" style="max-width: 800px; margin: 0 auto;">
                    <img src="https://img.youtube.com/vi/9R86Bn8XTVg/maxresdefault.jpg" onerror="this.src='https://img.youtube.com/vi/9R86Bn8XTVg/hqdefault.jpg'" alt="専門用語15選">
                    <div class="play-overlay"><i class="fa-brands fa-youtube"></i></div>
                </div>
            </div>
        </div>

        <div class="video-desc-full">
            <h3 style="font-size: 1.5rem; font-weight: 900; color: #881337; margin-bottom: 1.5rem;"><i class="fa-solid fa-book-open"></i> 用語がわかれば会話ができる</h3>
            <p style="font-size:1.1rem; line-height:1.8; margin-bottom:1.5rem;">「分からない用語を分からないまま放置する」のが一番まずい対応です。以下の15個をざっと読むだけでも、AIへの指示やクライアントとの会話がグッとスムーズになります。</p>

            <div class="bento-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">1. ファーストビュー</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">ページを開いた時に最初に目に入る領域。サイトの「顔」。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">2. ワイヤーフレーム</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">デザイン前の設計図。画像や文章の配置を線画で整理したもの。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">3. デザインカンプ</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">最終的な見た目の完成イメージ図。これをもとにコーディングする。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">4. レスポンシブデザイン</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">PC・タブレット・スマホ、どの画面サイズでも最適に表示される設計手法。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">5. モバイルファースト</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">閲覧者の大半がスマホなら、まずスマホ版からデザインする考え方。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">6. トンマナ</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">トーン＆マナーの略。サイト全体の色・書体・雰囲気の一貫性。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">7. CV（コンバージョン）</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">問い合わせや購入など、サイトの最終目標となるユーザーの行動。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">8. CVR</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">コンバージョンレート。アクセスに対するCVの割合。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">9. CTA</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">Call To Action。「今すぐ申し込む」等、行動を促すボタンや文言。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">10. UU / PV</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">UU＝訪問した人数、PV＝見られたページ数。同じ人が5回見てもUU=1、PV=5。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">11. ドメイン</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">「example.com」のようなインターネット上の住所。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">12. サーバー</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">サイトのファイルを置く場所。24時間電源が入ったコンピュータ。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">13. FTP</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">File Transfer Protocol。PCからサーバーへファイルを転送するルール。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">14. Googleアナリティクス</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">サイト内でのユーザーの行動を分析するツール（店内の監視カメラ的な役割）。</p>
                </div>
                <div class="bento-item" style="padding:1.2rem; border-top:3px solid #d81b60;">
                    <h4 style="color:#d81b60; font-size:1rem; margin-bottom:0.3rem;">15. サーチコンソール（サチコ）</h4>
                    <p style="font-size:0.9rem; margin:0; color:var(--text-sub);">どんな検索ワードで来たかを見るツール（お店の看板がどれだけ見られたかを分析）。</p>
                </div>
            </div>
        </div>
    </div>
```

#### 復習用ツール紹介

```html
    <!-- 復習用ツール -->
    <div class="highlight-box" style="background: linear-gradient(135deg, #fffbeb, #fef3c7); border-color:#fde68a; color:#92400e;">
        <h3 style="border-bottom-color:#fcd34d;"><i class="fa-solid fa-brain" style="color:#d97706;"></i> 内容が難しかった方へ：動画おさらいパートナー</h3>
        <p>有志が作成した、Geminiの「カスタムGem」です。動画URLを送ると内容をわかりやすくまとめ、クイズ形式で復習をお手伝いしてくれます。<br>
        <a href="https://gemini.google.com/gem/1m-KipmGdP-WEu3am8eF20uaxPoFfZyrf?usp=sharing" target="_blank" style="color:#d97706; font-weight:bold;">🔗 動画おさらいパートナーを開く</a></p>
    </div>
```

#### SECTION 4: 実習 — フラッシュカードクイズ（インライン埋め込み）

```html
    <!-- 実習：フラッシュカードクイズ -->
    <div class="glass-card" style="border-top: 5px solid var(--accent);">
        <div class="card-header">
            <i class="fa-solid fa-gamepad" style="color:var(--accent); background:var(--accent-bg);"></i>
            <h2>実習：フラッシュカードクイズで腕試し！</h2>
        </div>

        <div class="info-box">
            <h4><i class="fa-solid fa-bullseye"></i> 実習の目的と流れ</h4>
            <p>前半で学んだ動画の内容を「NotebookLM → Gemini Canvas」の流れでクイズアプリにしました。<br>
            実際にこの研修サイトの中で動くアプリです。まずは遊んでみてください！</p>
        </div>

        <div class="step-box" style="border-color: var(--accent);">
            <h4>この実習の「元ネタ」（どうやって作ったか？）</h4>
            <ol style="margin:0; padding-left:1.5rem; line-height:1.8;">
                <li><strong>NotebookLM</strong> に3本の動画URLをソースとして読み込ませた</li>
                <li>「フラッシュカードのアプリを作りたいです。元になる問題と答えを100問作ってください」とプロンプトを投げた</li>
                <li><strong>Gemini Canvas</strong> で出力されたデータを貼り付けてアプリ化した</li>
                <li>完成版を「共有」→ 公開リンクを作成した → <a href="https://gemini.google.com/share/d0e5976905f0" target="_blank" style="color:var(--accent); font-weight:bold;">こちらが公開リンク</a></li>
            </ol>
        </div>

        <!-- ↓ ここにフラッシュカードアプリのVanilla JS版が埋め込まれる -->
        <div id="quiz-app-root" class="quiz-app-container">
            <!-- JSで動的にレンダリングされる -->
        </div>
    </div>

    <div class="bottom-nav">
        <button class="btn" style="background: #fff; color: var(--text-main); border: 2px solid #e4e4e7; box-shadow: none;" onclick="switchTab('tab-goal'); window.scrollTo(0,0);">
            <i class="fa-solid fa-arrow-left"></i> 目標に戻る
        </button>
        <button class="btn" onclick="switchTab('tab-second'); window.scrollTo(0,0);">
            後半：AIでサイト制作へ進む <i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</div>
```

### 2-4. TAB 3: 後半 (`tab-second`)

```html
<div id="tab-second" class="tab-content">

    <!-- 動画4: Gemini Canvas -->
    <div class="glass-card" style="border-top: 5px solid #7c3aed;">
        <div class="card-header">
            <i class="fa-solid fa-wand-magic-sparkles" style="color:#7c3aed; background:#f5f3ff;"></i>
            <h2>動画4：Gemini CanvasでWebサイトを作る</h2>
        </div>
        <div class="video-grid" style="grid-template-columns: 1fr;">
            <div class="video-wrapper">
                <div class="video-thumb" data-video-id="BGNvBUYrB_s" style="max-width: 800px; margin: 0 auto;">
                    <img src="https://img.youtube.com/vi/BGNvBUYrB_s/maxresdefault.jpg" onerror="this.src='https://img.youtube.com/vi/BGNvBUYrB_s/hqdefault.jpg'" alt="Gemini Canvas">
                    <div class="play-overlay"><i class="fa-brands fa-youtube"></i></div>
                </div>
            </div>
        </div>
        <div class="video-desc-full">
            <h3 style="font-size: 1.5rem; font-weight: 900; color: #4c1d95; margin-bottom: 1.5rem;"><i class="fa-solid fa-sparkles"></i> AIに「作って」と言うだけでWebサイトができる</h3>
            <div class="accordion">
                <details open>
                    <summary>Gemini Canvasとは？</summary>
                    <div class="acc-body">
                        <p>Geminiの「Canvas」機能を使うと、プロンプト（テキスト）を送るだけでHTMLのWebページを自動生成し、その場でプレビューすることができます。<br>
                        さらに「思考モード」をONにすると、AIがより深く考えてから出力するため、クオリティが上がります。</p>
                    </div>
                </details>
            </div>
            <div class="info-box" style="background:#f5f3ff; border-left:5px solid #8b5cf6;">
                <h4 style="color:#6d28d9;"><i class="fa-solid fa-lightbulb"></i> 「選択して質問」機能が便利！</h4>
                <p>プレビュー画面の右下にある「選択して質問」ボタンを使うと、ページの特定の部分（ヘッダーの文字、ボタンの色など）を選んで「ここだけ変えて」と直感的に修正指示が出せます。</p>
            </div>
        </div>
    </div>

    <!-- 動画5: Readdy -->
    <div class="glass-card" style="border-top: 5px solid #0ea5e9;">
        <div class="card-header">
            <i class="fa-solid fa-rocket" style="color:#0ea5e9; background:#e0f2fe;"></i>
            <h2>動画5：Readdy（AIノーコードツール）</h2>
        </div>
        <div class="video-grid" style="grid-template-columns: 1fr;">
            <div class="video-wrapper">
                <div class="video-thumb" data-video-id="ijHHHy9GtD0" style="max-width: 800px; margin: 0 auto;">
                    <img src="https://img.youtube.com/vi/ijHHHy9GtD0/maxresdefault.jpg" onerror="this.src='https://img.youtube.com/vi/ijHHHy9GtD0/hqdefault.jpg'" alt="Readdy">
                    <div class="play-overlay"><i class="fa-brands fa-youtube"></i></div>
                </div>
            </div>
        </div>
        <div class="video-desc-full">
            <h3 style="font-size: 1.5rem; font-weight: 900; color: #0369a1; margin-bottom: 1.5rem;"><i class="fa-solid fa-paintbrush"></i> プロンプトだけで本格サイトが完成</h3>
            <p style="font-size:1.1rem; line-height:1.8; margin-bottom:1rem;"><a href="https://readdy.ai/ja" target="_blank" style="color:#0ea5e9; font-weight:bold;">Readdy</a> はプロンプトを入力するだけで、プロ並みのデザインのWebサイトを自動生成するAIノーコードツールです。</p>
            <div class="column-box" style="background: linear-gradient(135deg, #e0f2fe, #bae6fd); border-color: #7dd3fc;">
                <div class="column-label" style="background: linear-gradient(135deg, #0ea5e9, #0284c7);">動画内のプロンプト例</div>
                <h4 style="color: #0c4a6e; border-bottom: 2px dashed #7dd3fc;">参考：こんな指示でサイトが出来上がります</h4>
                <div class="prompt-box" style="margin-top:1rem;">
                    <button class="copy-btn" onclick="copyPrompt('prompt-readdy-1')"><i class="fa-regular fa-copy"></i> Copy</button>
                    <pre id="prompt-readdy-1">AIアートのポートフォリオサイト、作品展示欄と仕事依頼(AIアート制作、AI映像制作、MV制作、AI音楽制作) の問い合わせが出来る ポップでゆめかわいいデザインで遊び心のあるHPを作って</pre>
                </div>
                <div class="prompt-box" style="margin-top:1rem;">
                    <button class="copy-btn" onclick="copyPrompt('prompt-readdy-2')"><i class="fa-regular fa-copy"></i> Copy</button>
                    <pre id="prompt-readdy-2">添付の画像のカラーを使用しヘッダーとフッターに統一感のある配色を設定し、ブランドイメージを強化します。デザイン教室のホームページトップページでは、ヒーローセクションにキャッチコピーとCTAボタンを配置し、ユーザー導線を明確にします。さらに、スクロールで紹介セクションへ自然に誘導できるビジュアルとテキスト配置を整えます。</pre>
                </div>
            </div>
        </div>
    </div>

    <!-- 動画6: Coolors -->
    <div class="glass-card" style="border-top: 5px solid #f59e0b;">
        <div class="card-header">
            <i class="fa-solid fa-swatchbook" style="color:#f59e0b; background:#fffbeb;"></i>
            <h2>動画6：Coolors（超高速カラーパレットジェネレーター）</h2>
        </div>
        <div class="video-grid" style="grid-template-columns: 1fr;">
            <div class="video-wrapper">
                <div class="video-thumb" data-video-id="dXMv5jhowyE" style="max-width: 800px; margin: 0 auto;">
                    <img src="https://img.youtube.com/vi/dXMv5jhowyE/maxresdefault.jpg" onerror="this.src='https://img.youtube.com/vi/dXMv5jhowyE/hqdefault.jpg'" alt="Coolors">
                    <div class="play-overlay"><i class="fa-brands fa-youtube"></i></div>
                </div>
            </div>
        </div>
        <div class="video-desc-full">
            <h3 style="font-size: 1.5rem; font-weight: 900; color: #92400e; margin-bottom: 1.5rem;"><i class="fa-solid fa-palette"></i> 配色で「素人っぽさ」が一瞬で消える</h3>
            <div class="info-box" style="background:#fffbeb; border-left:5px solid #f59e0b;">
                <h4 style="color:#b45309;"><i class="fa-solid fa-star"></i> なぜ配色が大事なのか？</h4>
                <p>プロのWebサイトと素人のサイトの最大の違いは、実は「配色の統一感」です。たった3〜5色のカラーパレットを決めて守るだけで、見た目の印象が劇的に変わります。<br>
                <a href="https://coolors.co/" target="_blank" style="color:#b45309; font-weight:bold;">🎨 Coolorsを開く</a> — スペースキーを押すだけで美しい配色候補が次々生成されます。</p>
            </div>
        </div>
    </div>

    <!-- 動画7: ワイヤーフレーム & Wix AI -->
    <div class="glass-card" style="border-top: 5px solid #10b981;">
        <div class="card-header">
            <i class="fa-solid fa-drafting-compass" style="color:#10b981; background:#ecfdf5;"></i>
            <h2>動画7：ワイヤーフレーム作成とWix AI</h2>
        </div>
        <div class="video-grid" style="grid-template-columns: 1fr;">
            <div class="video-wrapper">
                <div class="video-thumb" data-video-id="dzoZ6uSd7-c" style="max-width: 800px; margin: 0 auto;">
                    <img src="https://img.youtube.com/vi/dzoZ6uSd7-c/maxresdefault.jpg" onerror="this.src='https://img.youtube.com/vi/dzoZ6uSd7-c/hqdefault.jpg'" alt="ワイヤーフレーム">
                    <div class="play-overlay"><i class="fa-brands fa-youtube"></i></div>
                </div>
            </div>
        </div>
        <div class="video-desc-full">
            <h3 style="font-size: 1.5rem; font-weight: 900; color: #065f46; margin-bottom: 1.5rem;"><i class="fa-solid fa-pencil-ruler"></i> 設計図を描いてから作ろう</h3>
            <div class="column-box" style="background: linear-gradient(135deg, #ecfdf5, #d1fae5); border-color: #a7f3d0;">
                <div class="column-label" style="background: linear-gradient(135deg, #10b981, #059669);">ワイヤーフレームとは？</div>
                <h4 style="color: #065f46; border-bottom: 2px dashed #6ee7b7;">家で言えば「間取り図」</h4>
                <p style="line-height:1.8; font-size:1.05rem;">
                    ワイヤーフレームとは、Webサイトを作る前に「どこに何を置くか」を線画で整理した<strong>設計書</strong>です。<br>
                    家を建てる前に間取り図を描くのと同じで、いきなり色やデザインに入らず、まず「構造」を決めるのがプロの流れです。<br>
                    AIにWebサイトを作らせる時も、ワイヤーフレームを一緒に伝えると圧倒的に精度が上がります。
                </p>
            </div>
            <div class="resource-card-grid">
                <a href="https://www.wix.com/harmony" target="_blank" class="resource-card">
                    <h5><i class="fa-solid fa-wand-sparkles" style="color:#10b981;"></i> Wix AI</h5>
                    <p>AIの質問に答えるだけでプロ級のWebサイトが自動生成されるサービス。</p>
                </a>
                <a href="https://docs.google.com/document/d/1LwuSLGmCGbSBS4OONRr2TXXJQBavTlv9h16zjaJT5vM/edit?usp=sharing" target="_blank" class="resource-card">
                    <h5><i class="fa-solid fa-file-lines" style="color:#3b82f6;"></i> ワイヤーフレーム用プロンプト集</h5>
                    <p>AIにワイヤーフレームを作らせるためのプロンプトテンプレート。</p>
                </a>
            </div>
        </div>
    </div>

    <!-- 後半実習 -->
    <div class="glass-card" style="border-top: 5px solid var(--accent);">
        <div class="card-header">
            <i class="fa-solid fa-flask" style="color:var(--accent); background:var(--accent-bg);"></i>
            <h2>実習：GeminiのCanvas機能でWebサイトを作ってみよう</h2>
        </div>
        <div class="info-box">
            <h4><i class="fa-solid fa-bullseye"></i> 実習の目的</h4>
            <p>AIでWEBサイトを作る基本を覚える（<a href="https://youtu.be/BGNvBUYrB_s?si=nn-Gfuo8ghIOYe4Y&t=210" target="_blank" style="color:var(--accent); font-weight:bold;">参考動画 3:30〜</a>）</p>
        </div>

        <div class="step-box" style="border-color: #7c3aed;">
            <h4 style="color:#7c3aed;">① Geminiを開く</h4>
            <p><a href="https://gemini.google.com/" target="_blank" style="color:#7c3aed; font-weight:bold;">gemini.google.com</a> にアクセスします。</p>
        </div>
        <div class="step-box" style="border-color: #7c3aed;">
            <h4 style="color:#7c3aed;">② ツールから「Canvas」を選ぶ</h4>
            <p>左下のツール選択エリアから「Canvas」を選択します。</p>
        </div>
        <div class="step-box" style="border-color: #7c3aed;">
            <h4 style="color:#7c3aed;">③ 思考モードに設定する</h4>
            <p>より精度の高い出力を得るために、思考モードをONにします。</p>
        </div>
        <div class="step-box" style="border-color: #7c3aed;">
            <h4 style="color:#7c3aed;">④ プロンプトを送る</h4>
            <div class="prompt-box">
                <button class="copy-btn" onclick="copyPrompt('prompt-canvas-1')"><i class="fa-regular fa-copy"></i> Copy</button>
                <pre id="prompt-canvas-1">ビジネス英語が勉強できるwebサイトを作ってください</pre>
            </div>
        </div>
        <div class="step-box" style="border-color: #7c3aed;">
            <h4 style="color:#7c3aed;">⑤ プレビューで確認する</h4>
            <p>生成されたコードがリアルタイムでプレビュー表示されます。</p>
        </div>
        <div class="step-box" style="background: #fff7ed; border-color: #ea580c; color: #9a3412;">
            <h4 style="color: #ea580c;">⑥ 改良する</h4>
            <p>右下の「選択して質問」ボタンを押し、任意の場所を選んで修正してみよう。<br>
            例）ヘッダーのサイト名を選んで、「English Lesson」という名前に変えてみよう。</p>
        </div>
    </div>

    <div class="bottom-nav">
        <button class="btn" style="background: #fff; color: var(--text-main); border: 2px solid #e4e4e7; box-shadow: none;" onclick="switchTab('tab-first'); window.scrollTo(0,0);">
            <i class="fa-solid fa-arrow-left"></i> 前半に戻る
        </button>
        <button class="btn" style="background: linear-gradient(135deg, #10b981, #059669);" onclick="switchTab('tab-summary'); window.scrollTo(0,0);">
            今日のまとめ・ミッションへ進む <i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</div>
```

### 2-5. TAB 4: 今日のまとめ (`tab-summary`)

```html
<div id="tab-summary" class="tab-content">

    <div class="hero" style="margin-bottom: 2rem;">
        <h2 style="font-size:2.4rem; color:#059669; font-family:'Teko', sans-serif;"><i class="fa-solid fa-flag-checkered"></i> TODAY's MISSION</h2>
        <p>Web制作の基礎知識を身につけ、AIでサイトを作る体験をしましょう。</p>
    </div>

    <div class="mission-area" id="mission-group-7">
        <div class="wax-seal">CLEAR</div>
        <div class="mission-header">
            <h3><i class="fa-solid fa-clipboard-check"></i> 📋 実習チェックリスト</h3>
        </div>

        <ul class="task-list">
            <li class="task-item" onclick="toggleTask('t7_1', this)">
                <div class="custom-checkbox" id="check_t7_1"><i class="fa-solid fa-check"></i></div>
                <div class="task-content">
                    <h4>STEP 01: HTML/CSS/JSの役割を理解する</h4>
                    <p>3つの技術が「家づくり」のどの部分に対応しているか説明できたらチェック！</p>
                </div>
            </li>
            <li class="task-item" onclick="toggleTask('t7_2', this)">
                <div class="custom-checkbox" id="check_t7_2"><i class="fa-solid fa-check"></i></div>
                <div class="task-content">
                    <h4>STEP 02: フラッシュカードクイズに挑戦する</h4>
                    <p>前半のクイズアプリで、いずれかのカテゴリで3問以上マスターしたらチェック！</p>
                </div>
            </li>
            <li class="task-item" onclick="toggleTask('t7_3', this)">
                <div class="custom-checkbox" id="check_t7_3"><i class="fa-solid fa-check"></i></div>
                <div class="task-content">
                    <h4>STEP 03: Gemini Canvasでサイトを生成する</h4>
                    <p>プロンプトを投げてWebサイトのプレビューが表示されたらチェック！</p>
                </div>
            </li>
            <li class="task-item" onclick="toggleTask('t7_4', this)">
                <div class="custom-checkbox" id="check_t7_4"><i class="fa-solid fa-check"></i></div>
                <div class="task-content">
                    <h4>STEP 04: 生成されたサイトを「選択して質問」で改良する</h4>
                    <p>サイト名やボタンの色など、少なくとも1箇所を修正できたらチェック！</p>
                </div>
            </li>
        </ul>
    </div>

    <div style="text-align:center; padding: 4rem 0;">
        <button class="btn" style="padding: 1.2rem 4rem; font-size:1.3rem; background:linear-gradient(135deg, var(--accent-light), var(--accent)); border-radius:50px; box-shadow: 0 10px 30px var(--accent-glow);" onclick="window.location.href='index.html'">
            <i class="fa-solid fa-house"></i> 学習完了を記録してHomeへ戻る
        </button>
    </div>
</div>

</div><!-- /.container -->
```

---

## 3. `<script>` セクション（`</body>` の直前に配置）

### 3-1. YouTube Facade・タブ切替・コピー・ミッションチェック

vol06-1.html のJSをそのままコピーし、以下の箇所だけ変更する：

- `missionState` のキーを `t7_1` 〜 `t7_4` に変更
- `mission-group-6` → `mission-group-7` に変更
- `checkAllMissions` のアラートメッセージを変更

### 3-2. フラッシュカードクイズアプリ（Vanilla JS 版）

`react_flashcard_source.jsx` のロジックをVanilla JSに完全変換する。
以下のコードを `<script>` タグ内の末尾に追加する。

**重要:** id=93 のデータにバグがあります（`category` キーが欠落し、`question` キーが壊れている）。修正してください：
```js
{ id: 93, category: "Webデザイン・マーケティングの専門用語", question: "専門用語を調べてさらに分からない言葉が出てきた場合はどうするべきですか？", answer: "その言葉もしっかり調べて覚えていくべきです。" },
```

```javascript
// ===== FLASHCARD QUIZ APP (Vanilla JS) =====
(function() {
    const FC_DATA = [
        // ★ react_flashcard_source.jsx の flashcardsData 配列を
        //    そのままここにコピーして貼り付ける（全100問）。
        //    ただし id=93 のバグを上記の通り修正すること。
        // ★ Cursorへの指示: react_flashcard_source.jsx の4行目〜104行目の
        //    配列データをそのままコピーし、id:93 の行のバグを修正してここに貼り付けること。
    ];

    const ALL_ANSWERS = [...new Set(FC_DATA.map(c => c.answer))];
    const CATEGORIES = [...new Set(FC_DATA.map(c => c.category).filter(Boolean))];
    const root = document.getElementById('quiz-app-root');

    let mastered = {};
    let quizQueue = [];
    let currentIdx = 0;
    let options = [];
    let selected = null;
    let currentView = 'home'; // 'home' | 'quiz'

    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function genOptions(correctAnswer) {
        const incorrect = shuffle(ALL_ANSWERS.filter(a => a !== correctAnswer)).slice(0, 3);
        return shuffle([correctAnswer, ...incorrect]);
    }

    function getProgress(category) {
        const cards = category === 'all' ? FC_DATA : FC_DATA.filter(c => c.category === category);
        const total = cards.length;
        const done = cards.filter(c => mastered[c.id]).length;
        return { total, done, pct: total === 0 ? 0 : Math.round((done / total) * 100) };
    }

    function startQuiz(category, isRandom) {
        const target = category === 'all' ? FC_DATA : FC_DATA.filter(c => c.category === category);
        const unmastered = target.filter(c => !mastered[c.id]);
        if (!unmastered.length) { alert('このカテゴリはすべてマスター済みです！'); return; }
        quizQueue = isRandom ? shuffle(unmastered) : [...unmastered];
        currentIdx = 0;
        selected = null;
        options = genOptions(quizQueue[0].answer);
        currentView = 'quiz';
        render();
    }

    function selectOption(opt) {
        if (selected !== null) return;
        selected = opt;
        render();
    }

    function nextQuestion(shouldMaster) {
        if (shouldMaster && selected === quizQueue[currentIdx].answer) {
            mastered[quizQueue[currentIdx].id] = true;
        }
        if (currentIdx + 1 < quizQueue.length) {
            currentIdx++;
            selected = null;
            options = genOptions(quizQueue[currentIdx].answer);
            currentView = 'quiz';
        } else {
            currentView = 'home';
        }
        render();
    }

    function resetAll() {
        if (confirm('学習の進捗をすべてリセットしますか？')) {
            mastered = {};
            render();
        }
    }

    function renderHome() {
        const all = getProgress('all');
        let catCards = CATEGORIES.map(cat => {
            const p = getProgress(cat);
            const done = p.total > 0 && p.done === p.total;
            return `
                <div class="quiz-category-card ${done ? 'completed' : ''}">
                    <h5>${cat} ${done ? '<span class="clear-badge">クリア済</span>' : ''}</h5>
                    <div class="quiz-cat-progress">
                        <div class="quiz-cat-progress-text"><span>進捗度</span><span>${p.pct}%</span></div>
                        <div class="quiz-cat-progress-bar"><div class="quiz-cat-progress-fill" style="width:${p.pct}%"></div></div>
                    </div>
                    <button class="quiz-cat-btn" ${done ? 'disabled' : ''} data-cat="${cat}">${done ? '学習完了' : 'この章を学習する'}</button>
                </div>`;
        }).join('');

        root.innerHTML = `
            <div class="quiz-dashboard">
                <div class="quiz-dashboard-header">
                    <h3><i class="fa-solid fa-gamepad" style="color:var(--accent);"></i> Web制作 4択クイズ</h3>
                    <button class="quiz-reset-btn" id="quiz-reset">進捗をリセット</button>
                </div>
                <div class="quiz-progress-card">
                    <div class="quiz-progress-header"><h4>総合進捗</h4><span>${all.done} / ${all.total} 問</span></div>
                    <div class="quiz-progress-bar-bg"><div class="quiz-progress-bar-fill" style="width:${all.pct}%"></div></div>
                    <div class="quiz-start-buttons">
                        <button class="quiz-start-btn" id="quiz-all-order">最初から順に全問出題</button>
                        <button class="quiz-start-btn" id="quiz-all-random">全カテゴリからランダムに出題</button>
                    </div>
                </div>
                <h4 style="font-weight:900; color:var(--text-main); margin-bottom:1rem;">カテゴリ別の章から学習</h4>
                <div class="quiz-category-grid">${catCards}</div>
            </div>`;

        document.getElementById('quiz-reset').onclick = resetAll;
        document.getElementById('quiz-all-order').onclick = () => startQuiz('all', false);
        document.getElementById('quiz-all-random').onclick = () => startQuiz('all', true);
        root.querySelectorAll('.quiz-cat-btn:not([disabled])').forEach(btn => {
            btn.onclick = () => startQuiz(btn.dataset.cat, true);
        });
    }

    function renderQuiz() {
        const card = quizQueue[currentIdx];
        const answered = selected !== null;
        const isCorrect = selected === card.answer;
        const pct = Math.round((currentIdx / quizQueue.length) * 100);

        let optBtns = options.map((opt, i) => {
            let cls = 'quiz-option-btn';
            if (answered) {
                if (opt === card.answer) cls += ' correct';
                else if (opt === selected) cls += ' wrong';
                else cls += ' dimmed';
            }
            return `<button class="${cls}" data-opt="${i}" ${answered ? 'disabled' : ''}><span class="opt-num">${i+1}</span><span>${opt}</span></button>`;
        }).join('');

        let resultHtml = '';
        if (answered) {
            resultHtml = `
                <div class="quiz-result">
                    <div class="quiz-result-text ${isCorrect ? 'correct' : 'wrong'}">
                        <i class="fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
                        ${isCorrect ? '正解！' : '不正解...'}
                    </div>
                    <div class="quiz-action-buttons">
                        <button class="quiz-next-btn" id="quiz-next">そのまま次へ</button>
                        ${isCorrect ? '<button class="quiz-master-btn" id="quiz-master"><i class="fa-solid fa-check"></i> リストから省く</button>' : ''}
                    </div>
                </div>`;
        }

        root.innerHTML = `
            <div class="quiz-play-screen">
                <div class="quiz-play-header">
                    <button class="quiz-back-btn" id="quiz-back"><i class="fa-solid fa-arrow-left"></i> 中断して戻る</button>
                    <div class="quiz-remaining">残り <strong>${quizQueue.length - currentIdx}</strong> 問</div>
                </div>
                <div class="quiz-mini-progress"><div class="quiz-mini-progress-fill" style="width:${pct}%"></div></div>
                <div class="quiz-question-card">
                    <span class="quiz-question-category">${card.category || ''}</span>
                    <p class="quiz-question-text"><span class="q-mark">Q.</span>${card.question}</p>
                </div>
                <div class="quiz-options-grid">${optBtns}</div>
                ${resultHtml}
            </div>`;

        document.getElementById('quiz-back').onclick = () => { currentView = 'home'; render(); };
        if (!answered) {
            root.querySelectorAll('.quiz-option-btn').forEach(btn => {
                btn.onclick = () => selectOption(options[parseInt(btn.dataset.opt)]);
            });
        }
        if (answered) {
            document.getElementById('quiz-next').onclick = () => nextQuestion(false);
            const masterBtn = document.getElementById('quiz-master');
            if (masterBtn) masterBtn.onclick = () => nextQuestion(true);
        }
    }

    function render() {
        if (currentView === 'home') renderHome();
        else renderQuiz();
    }

    // キーボードショートカット
    document.addEventListener('keydown', function(e) {
        if (currentView !== 'quiz') return;
        if (selected === null) {
            if (['1','2','3','4'].includes(e.key)) {
                const i = parseInt(e.key) - 1;
                if (options[i]) selectOption(options[i]);
            }
        } else {
            const isCorrect = selected === quizQueue[currentIdx].answer;
            if (e.key === 'Enter') nextQuestion(false);
            else if ((e.key === ' ' || e.key === 'Spacebar') && isCorrect) {
                e.preventDefault();
                nextQuestion(true);
            }
        }
    });

    render(); // 初期表示
})();
```

---

## 4. セルフチェックリスト

- [ ] 4タブすべてが切り替わること
- [ ] YouTube Facadeが全7動画で動作すること
- [ ] フラッシュカードアプリがタブ2内で完全に動作すること（ダッシュボード→クイズ→戻る）
- [ ] id=93のデータバグが修正されていること
- [ ] ミッションチェックリスト（t7_1〜t7_4）のチェック→完了アラートが動くこと
- [ ] プロンプトコピーボタン（3つ：readdy×2, canvas×1）が動作すること
- [ ] bottom-nav のボタンが全タブに配置されていること
- [ ] `vol06-1.html` と同じCSS変数・クラスが使われていること（桜テーマ統一）
