# Day 6: 統合型AIツールの基礎と活用法（NotebookLM）— 実装計画 (Rich Edition)

## 概要
Day 6 の研修ページ `vol06-1.html` の内容がスカスカにならないよう、各動画に対応する**解説・機能紹介のボックス装飾**を大幅に増量した完全版の実装計画。

> [!IMPORTANT]
> **手戻り厳禁。** このドキュメントに従い、`vol06-1.html` を修正・再構築すること。CSS・JSは `vol05-1.html` からの流用を維持しつつ、解説コンテンツのDOM構造をリッチ化する。

---

## Proposed Changes

### [MODIFY] [vol06-1.html](file:///g:/マイドライブ/研修/【202604】社員教育とAI/vol06-1.html)

#### 1 & 2. `<head>` と `<style>`
変更なし（既存の `vol06-1.html` または `vol05-1.html` と同じものを使用）。

#### 3. `<body>`

**TAB 1: 本日の目標 (`tab-goal`)**
変更なし（前回実装通りでOK）。

---

**TAB 2: 前半 (`tab-first`) のリッチ化**

##### SECTION 1: 動画1 — NotebookLM入門
(video-grid より下 `video-desc-full` 内部を以下のようにリッチ化する)

```html
<div class="video-desc-full">
    <h3 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem;"><i class="fa-solid fa-compass"></i> NotebookLMの全体像</h3>
    <div class="accordion">
        <details open>
            <summary>NotebookLMとは？できることの全体像</summary>
            <div class="acc-body">
                <p>NotebookLMはGoogleが提供するAIリサーチアシスタントです。PDF、Googleドキュメント、スプレッドシート、WebサイトのURLなど様々なソースを読み込ませることで、AIがその内容を深く理解してくれます。<br>
                ✅ <a href="https://notebooklm.google.com/" target="_blank" style="color:#2563eb; font-weight:bold;">NotebookLM を開く</a></p>
            </div>
        </details>
    </div>

    <!-- ここから情報量追加 -->
    <div class="column-box" style="background: linear-gradient(135deg, #eff6ff, #dbeafe); border-color: #bfdbfe; margin-top:2rem;">
        <div class="column-label" style="background: linear-gradient(135deg, #3b82f6, #2563eb);">主な機能の特徴</div>
        <h4 style="color: #1e40af; border-bottom: 2px dashed #93c5fd;">従来のAI（ChatGPTなど）との違い</h4>
        <ul style="line-height:2.0; font-size:1.05rem; padding-left:1.5rem;">
            <li><strong>情報のハルシネーション（嘘）が少ない：</strong> 読み込ませたソース（資料）の中からしか回答の根拠を探さないため、正確性が非常に高い。</li>
            <li><strong>引用元がすぐにわかる：</strong> AIが回答した箇所には番号が振られており、クリックすると元の資料のどの部分を見ているかがハイライトされます。</li>
            <li><strong>音声ポッドキャスト生成（Audio Overview）：</strong> 資料を元に、AIが2人組で対談するラジオ番組（英語メインですが非常に自然）を自動生成してくれます。</li>
            <li><strong>よくある質問（FAQ）の自動生成：</strong> 資料を入れた瞬間に、AIが「この資料を読む人が持ちそうな疑問と回答」を先回りして提示してくれます。</li>
        </ul>
    </div>
</div>
```

##### SECTION 2: 動画2 — スマホ活用術
(video-grid より下 `video-desc-full` 内部を以下のようにリッチ化する)

```html
<div class="video-desc-full">
    <h3 style="font-size: 1.5rem; font-weight: 900; color: #0369a1; margin-bottom: 1.5rem;"><i class="fa-solid fa-wand-magic-sparkles"></i> スマホでも使いこなす</h3>
    
    <!-- ここから情報量追加（bento-gridを利用） -->
    <p style="font-size:1.1rem; line-height:1.8; margin-bottom:1.5rem;">NotebookLMはスマホのブラウザからもアクセス可能です。PCでソースを読み込ませておけば、出先で以下のような活用が可能です。</p>
    
    <div class="bento-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">
        <div class="bento-item" style="padding:1.5rem; border-top:3px solid #0ea5e9;">
            <h4 style="color:#0ea5e9; font-size:1.1rem; margin-bottom:0.5rem;"><i class="fa-solid fa-train"></i> 1. 移動中の資料チェック</h4>
            <p style="font-size:0.95rem; margin:0;">長いPDFや会議資料を事前にアップしておき、電車の中で概要だけ教えてもらう。</p>
        </div>
        <div class="bento-item" style="padding:1.5rem; border-top:3px solid #0ea5e9;">
            <h4 style="color:#0ea5e9; font-size:1.1rem; margin-bottom:0.5rem;"><i class="fa-solid fa-microphone"></i> 2. 音声入力でメモ書き</h4>
            <p style="font-size:0.95rem; margin:0;">スマホの音声入力を使って、思いついたアイデアをNotebookLMのメモに保存する。</p>
        </div>
        <div class="bento-item" style="padding:1.5rem; border-top:3px solid #0ea5e9;">
            <h4 style="color:#0ea5e9; font-size:1.1rem; margin-bottom:0.5rem;"><i class="fa-solid fa-magnifying-glass"></i> 3. マニュアルの即時検索</h4>
            <p style="font-size:0.95rem; margin:0;">現場で社内マニュアルを確認したい時、チャットで直接質問して該当箇所を引き出す。</p>
        </div>
        <div class="bento-item" style="padding:1.5rem; border-top:3px solid #0ea5e9;">
            <h4 style="color:#0ea5e9; font-size:1.1rem; margin-bottom:0.5rem;"><i class="fa-solid fa-pen-to-square"></i> 4. 下書き作成</h4>
            <p style="font-size:0.95rem; margin:0;">出先で少し時間が空いた時に、集めた情報を元にメールの文面を作成させておく。</p>
        </div>
    </div>
</div>
```

##### SECTION 3: 実習セクション
変更なし（前回実装済みのアンケート〜プロンプトの4つのstep-boxが含まれていればOK）。

---

**TAB 3: 後半 (`tab-second`) のリッチ化**

##### SECTION 4: 動画3 — 活用事例7選
(video-grid より下 `video-desc-full` 内部を以下のようにリッチ化する)

```html
<div class="video-desc-full">
    <h3 style="font-size: 1.5rem; font-weight: 900; color: #4c1d95; margin-bottom: 1.5rem;"><i class="fa-solid fa-rocket"></i> 生産性を爆上げする7つの活用法</h3>
    <p style="font-size:1.1rem; line-height:1.8; margin-bottom:1.5rem;">動画内で紹介された7つの実践事例です。自分の業務に当てはまるものから試してみてください。</p>
    
    <!-- ここから情報量追加（resource-card風デザインでのリストアップ ※リンクのブロックは使わずdivに変更） -->
    <div class="resource-card-grid">
        <div class="resource-card" style="border-left: 4px solid #8b5cf6;">
            <h5><i class="fa-solid fa-comments" style="color:#8b5cf6;"></i> 1. 長い議事録の要約</h5>
            <p>1時間の会議の文字起こしを放り込み、「決定事項とネクストアクション」だけを抽出させる。</p>
        </div>
        <div class="resource-card" style="border-left: 4px solid #10b981;">
            <h5><i class="fa-solid fa-circle-question" style="color:#10b981;"></i> 2. マニュアルの対話型Q&A化</h5>
            <p>難解な社内規定やマニュアル群を読み込ませ、新入社員の質問に応える専属コンシェルジュにする。</p>
        </div>
        <div class="resource-card" style="border-left: 4px solid #f59e0b;">
            <h5><i class="fa-solid fa-lightbulb" style="color:#f59e0b;"></i> 3. 提案書の素案作成</h5>
            <p>顧客のWebサイトや過去の提案書を複数ソースとして入れ、新しい提案の切り口を壁打ちする。</p>
        </div>
        <div class="resource-card" style="border-left: 4px solid #ef4444;">
            <h5><i class="fa-solid fa-chart-pie" style="color:#ef4444;"></i> 4. 競合分析と傾向把握</h5>
            <p>複数の競合他社のプレスリリースやIR資料を読み込ませ、各社の戦略の違いを比較表に出力させる。</p>
        </div>
        <div class="resource-card" style="border-left: 4px solid #3b82f6;">
            <h5><i class="fa-solid fa-folder-open" style="color:#3b82f6;"></i> 5. バラバラの資料ファイルの統合整理</h5>
            <p>過去数年分の別々のプロジェクト資料を一括して読み込ませ、「一つの巨大なナレッジベース」として活用する。</p>
        </div>
        <div class="resource-card" style="border-left: 4px solid #ec4899;">
            <h5><i class="fa-solid fa-file-pen" style="color:#ec4899;"></i> 6. レポートの自動生成（ブリーフィング）</h5>
            <p>参考資料を入れるだけで、目次作成〜本文の骨子作成までをワンクリックで行う「ブリーフィングドキュメント」機能を使う。</p>
        </div>
        <div class="resource-card" style="border-left: 4px solid #6366f1;">
            <h5><i class="fa-solid fa-users" style="color:#6366f1;"></i> 7. チーム内でのナレッジ共有</h5>
            <p>作成したAIへの指示（プロンプト等）を含めた「ノートブック自体」を、Googleドライブのように社内メンバーと共有する。</p>
        </div>
    </div>
</div>
```

##### SECTION 5: 動画4 — Gemini連携
(video-grid より下 `video-desc-full` 内部を以下のようにリッチ化する)

```html
<div class="video-desc-full">
    <h3 style="font-size: 1.5rem; font-weight: 900; color: #5b21b6; margin-bottom: 1.5rem;"><i class="fa-solid fa-brain"></i> 大量情報をGeminiで解析する</h3>
    <div class="accordion">
        <details open>
            <summary>NotebookLMをGeminiの"第二の脳"として使う</summary>
            <div class="acc-body">
                <p>NotebookLMに蓄積した情報をGeminiから直接参照できる連携機能により、コピペ作業なしで根拠に基づいた回答を得られるようになります。</p>
            </div>
        </details>
    </div>

    <!-- ここから情報量追加 -->
    <div class="info-box" style="background:#f5f3ff; border-left:5px solid #8b5cf6;">
        <h4 style="color:#6d28d9;"><i class="fa-solid fa-link"></i> Gemini Advanced（Pro）との使い分け</h4>
        <p>
            NotebookLMは「用意した資料（ソース）を深く読む」ことに特化していますが、そこにGemini Advancedの「高度な推論力と外部Web検索」を組み合わせることで、最強のリサーチ環境を作れます。<br>
            <strong>例：</strong> NotebookLM内の社内データをベースにしながら、Geminiに「外部の最新トレンドをGoogle検索して、この社内データと照らし合わせて分析して」と指示する。
        </p>
    </div>
    <div class="highlight-box" style="background: linear-gradient(135deg, #fffbeb, #fef3c7); border-color:#fde68a; color:#92400e;">
        <h3 style="border-bottom-color:#fcd34d;"><i class="fa-solid fa-shield-halved" style="color:#d97706;"></i> セキュリティとプライバシーについて</h3>
        <p>業務で使う場合、機密情報が含まれる資料をアップロードして大丈夫か？という疑問が出るはずです。<br>
        2026年現在、NotebookLMにアップロードしたデータやチャットの内容が、<strong>他のユーザー向けのAIモデル学習に勝手に使われることはありません。</strong>（ただし、社内のデータ取扱ガイドラインは必ず遵守して利用してください）</p>
    </div>
</div>
```

##### SECTION 6: 後半の実習案内
変更なし（「前半と同じ課題」の highlight-box と ボタンが含まれていればOK）。

---

**TAB 4: 今日のまとめ (`tab-summary`)**
変更なし（前回実装通りでOK）。

---

## 4. セルフチェックリスト
- [ ] 各動画の下の `video-desc-full` の中に、ただのアコーディオンだけでなく、`column-box`、`bento-grid`、`resource-card-grid`、`info-box`、`highlight-box`などが追加され、情報量が増えていること
- [ ] タブ切替、ミッションチェックリスト等のJS動作は壊れていないこと
