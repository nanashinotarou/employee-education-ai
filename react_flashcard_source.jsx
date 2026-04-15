import React, { useState, useEffect, useCallback } from 'react';

// 全100問のデータ
const flashcardsData = [
  { id: 1, category: "Webサイト制作の基本技術と運用", question: "Webサイトの骨組みを記述するための言語は何ですか？", answer: "HTMLです。" },
  { id: 2, category: "Webサイト制作の基本技術と運用", question: "HTMLを意味のある構造で書くことで、情報が正しく伝わりやすくなる相手（システム）は何ですか？", answer: "検索エンジンです。" },
  { id: 3, category: "Webサイト制作の基本技術と運用", question: "検索エンジンに見つけてもらいやすくする工夫をアルファベット3文字で何と言いますか？", answer: "SEOです。" },
  { id: 4, category: "Webサイト制作の基本技術と運用", question: "視覚や操作に制限のある人にも情報を正しく届けるための配慮を何と言いますか？", answer: "アクセシビリティです。" },
  { id: 5, category: "Webサイト制作の基本技術と運用", question: "音声読み上げツールなどで意味が伝わるようにしておくべき要素の例は何ですか？", answer: "見出しやリンクなどです。" },
  { id: 6, category: "Webサイト制作の基本技術と運用", question: "Webサイトの見た目（文字の大きさ、色、背景色など）を整えるための言語は何ですか？", answer: "CSSです。" },
  { id: 7, category: "Webサイト制作の基本技術と運用", question: "スマホやパソコンの画面サイズに合わせてレイアウトや表示を調整するデザイン手法を何と言いますか？", answer: "レスポンシブデザインです。" },
  { id: 8, category: "Webサイト制作の基本技術と運用", question: "Webサイトに動きや反応（ボタンを押すとメニューが開くなど）を加えるための言語は何ですか？", answer: "JavaScriptです。" },
  { id: 9, category: "Webサイト制作の基本技術と運用", question: "入力ミスをその場でユーザーに知らせる機能は、主にどの技術が活躍する場面ですか？", answer: "JavaScriptです。" },
  { id: 10, category: "Webサイト制作の基本技術と運用", question: "Webサイトを構成する3つの基本技術とは何ですか？", answer: "HTML、CSS、JavaScriptです。" },
  { id: 11, category: "Webサイト制作の基本技術と運用", question: "コードを書かずにWebサイトの内容（お知らせや画像など）を管理・更新できる仕組みを何と言いますか？", answer: "CMS（コンテンツ管理システム）です。" },
  { id: 12, category: "Webサイト制作の基本技術と運用", question: "CMSを利用する際に専用のソフトは必要ですか？", answer: "不要です（ブラウザからアクセスして使えます）。" },
  { id: 13, category: "Webサイト制作の基本技術と運用", question: "CMSを導入することで、エンジニアに毎回依頼しなくても誰が更新を担当できるようになりますか？", answer: "企画職などの、コードが書けないメンバー自身です。" },
  { id: 14, category: "Webサイト制作の基本技術と運用", question: "CMSを本当に使いやすいものにするために、設計段階で大切なことは何ですか？", answer: "誰がどれくらいの頻度でどこを更新するのかを見据えて設計しておくことです。" },
  { id: 15, category: "Webサイト制作の基本技術と運用", question: "よく変える場所とあまり変えない場所に対する、CMS設計の工夫の例は何ですか？", answer: "よく変える場所は簡単に編集できるようにし、あえて変えない場所は管理画面から触れないようにしておくことです。" },
  { id: 16, category: "Webサイト制作の基本技術と運用", question: "ブラウザや端末によってHTMLやCSSの一部が正しく動作しない時、誰が違いを調整する配慮が必要ですか？", answer: "Webサイトを作る側です。" },
  { id: 17, category: "Webサイト制作の基本技術と運用", question: "CMSの管理画面は、どのようなソフトの感覚で使うことができますか？", answer: "入力フォームや文書作成ソフトのような感覚です。" },
  { id: 18, category: "Webサイト制作の基本技術と運用", question: "CSSを使えば、同じHTMLでも何を変えることができますか？", answer: "見た目（デザイン）を違うものに変えることができます。" },
  { id: 19, category: "Webサイト制作の基本技術と運用", question: "HTMLを作成する際、見出しやリンクは何が伝わるように書くことが大切ですか？", answer: "どんな意味を持った情報かが伝わるように書くことです。" },
  { id: 20, category: "Webサイト制作の基本技術と運用", question: "JavaScriptを使って「入力した文字数をその場でカウントする」機能は実装できますか？", answer: "できます。" },
  { id: 21, category: "Webの仕組みとサーバー環境", question: "ユーザーがWebサイトを閲覧するまでの一連の流れにおいて、中心となる「3つの視点」とはユーザー、開発者とあと一つは何ですか？", answer: "Googleなどの検索エンジン側です。" },
  { id: 22, category: "Webの仕組みとサーバー環境", question: "Webサイトを表示するためのファイル（HTMLやCSSなど）が入っている場所を何と呼びますか？", answer: "Webサーバーです。" },
  { id: 23, category: "Webの仕組みとサーバー環境", question: "WebサーバーからファイルをダウンロードしてWebサイトを閲覧するためのソフト（ChromeやSafariなど）を何と呼びますか？", answer: "ブラウザです。" },
  { id: 24, category: "Webの仕組みとサーバー環境", question: "Webサイトがどこのサーバーにあるかを教えてくれる仕組みを何と呼びますか？", answer: "DNSです。" },
  { id: 25, category: "Webの仕組みとサーバー環境", question: "インターネット上の「住所」に該当するものは何ですか？", answer: "IPアドレスです。" },
  { id: 26, category: "Webの仕組みとサーバー環境", question: "IPアドレスと紐づいており、DNSの中に登録されているURLの一部は何ですか？", answer: "ドメインです。" },
  { id: 27, category: "Webの仕組みとサーバー環境", question: "ブラウザがダウンロードしたHTMLやJavaScriptを解析して画面に表示する処理を何と呼びますか？", answer: "レンダリングです。" },
  { id: 28, category: "Webの仕組みとサーバー環境", question: "ブラウザ側で動くHTML、CSS、JavaScriptなどの言語を総称して何サイドの言語と呼びますか？", answer: "クライアントサイドの言語です。" },
  { id: 29, category: "Webの仕組みとサーバー環境", question: "サーバー側で動くPHPなどの言語を総称して何サイドの言語と呼びますか？", answer: "サーバーサイドの言語です。" },
  { id: 30, category: "Webの仕組みとサーバー環境", question: "ユーザーが画面をスクロールしたり画像をクリックしたりするブラウザ上での「操作」を感知して処理を行うのはどの言語ですか？", answer: "JavaScriptです。" },
  { id: 31, category: "Webの仕組みとサーバー環境", question: "ブログ内のフリーワード検索など、ブラウザにファイルが渡る前に処理を行うのはどちらのサイドの言語ですか？", answer: "サーバーサイドの言語です。" },
  { id: 32, category: "Webの仕組みとサーバー環境", question: "サーバーサイドのプログラムは、色々な処理を行った上で最終的にどのような形式のファイルを生成してブラウザに表示させますか？", answer: "HTMLファイルです。" },
  { id: 33, category: "Webの仕組みとサーバー環境", question: "ブラウザ側で既にダウンロードされたHTMLファイルを、その後さらに書き換えることは可能ですか？", answer: "それ以上変えることはできません。" },
  { id: 34, category: "Webの仕組みとサーバー環境", question: "JavaScriptを学ぶ上で、できることとできないことを理解するために必須の概念は何ですか？", answer: "クライアントサイドとサーバーサイドの違いを理解しておくことです。" },
  { id: 35, category: "Webの仕組みとサーバー環境", question: "開発者がコーディングやプログラミングを行うためにパソコンにインストールするソフトを何と呼びますか？", answer: "エディターです。" },
  { id: 36, category: "Webの仕組みとサーバー環境", question: "人気があり、検索すると情報も多く出てくる便利なエディターの例として何が挙げられていますか？", answer: "Visual Studio Codeです。" },
  { id: 37, category: "Webの仕組みとサーバー環境", question: "WordPressを使った開発で、自分のPC（ローカル環境）でPHPやデータベースを扱えるようにするアプリの例は何ですか？", answer: "Local by FlywheelやMAMPです。" },
  { id: 38, category: "Webの仕組みとサーバー環境", question: "様々なデータ（ブログの記事、タイトル、カテゴリー、日付など）が蓄積された箱のようなものを何と呼びますか？", answer: "データベースです。" },
  { id: 39, category: "Webの仕組みとサーバー環境", question: "特定のカテゴリーのブログ一覧を表示する際、Webサーバーはどこにデータをリクエストして取得しますか？", answer: "データベースです。" },
  { id: 40, category: "Webの仕組みとサーバー環境", question: "HTML、CSS、JavaScriptだけで書かれているWebサイトの場合、データベースは必要ですか？", answer: "必要ありません。" },
  { id: 41, category: "Webの仕組みとサーバー環境", question: "Webサイトを作るために初心者がデータベースを完璧に構築できるようになる必要がありますか？", answer: "ありません（概念的なところを抑えておけば大丈夫です）。" },
  { id: 42, category: "Webの仕組みとサーバー環境", question: "ホームページを作る際、一般的に契約しておくべき2つのものは何ですか？", answer: "ドメインとレンタルサーバーです。" },
  { id: 43, category: "Webの仕組みとサーバー環境", question: "自分のローカル環境（PC）とサーバーをつなぎ、ファイルをアップロードするためのソフトを何と呼びますか？", answer: "FTPソフトです。" },
  { id: 44, category: "Webの仕組みとサーバー環境", question: "WordPressを使用している場合、FTPソフトの代わりにローカルからサーバーへ移行できる手段は何ですか？", answer: "移行プラグインです。" },
  { id: 45, category: "Webの仕組みとサーバー環境", question: "独自ドメインでメールアドレスを使う場合、サーバー上で忘れずに行うべき設定は何ですか？", answer: "メールサーバーでのメールの設定です。" },
  { id: 46, category: "Webの仕組みとサーバー環境", question: "メールソフトから送受信を行うためには、メールソフト側からどこに接続する設定が必要ですか？", answer: "サーバー側です。" },
  { id: 47, category: "Webの仕組みとサーバー環境", question: "複数のWebサーバーの中から特定のサーバーを指定するためには、何という情報（住所）が必要ですか？", answer: "IPアドレスです。" },
  { id: 48, category: "Webの仕組みとサーバー環境", question: "URLに含まれる「.com」や「.co.jp」などは何の一部ですか？", answer: "ドメインです。" },
  { id: 49, category: "Webの仕組みとサーバー環境", question: "サーバーサイドの言語で作られているWordPressなどが動く時、サーバー側でHTMLファイルを何と呼び出して作成しますか？", answer: "データベースにリクエストして生成します。" },
  { id: 50, category: "Webの仕組みとサーバー環境", question: "Web制作を俯瞰して理解することは、学習においてどのような効果がありますか？", answer: "相関関係がわかり、学びが深くなります。" },
  { id: 51, category: "検索エンジンとSEO", question: "Googleなどの検索エンジンでキーワード検索をした際、リクエストはどこへ飛びますか？", answer: "Googleのデータベースです。" },
  { id: 52, category: "検索エンジンとSEO", question: "世の中のあらゆるWebサイトの情報を収集して回っているロボットを何と呼びますか？", answer: "クローラーです。" },
  { id: 53, category: "検索エンジンとSEO", question: "Webサイトを公開した際、クローラーに「新しいサイトができた」とお知らせする作業を何と呼びますか？", answer: "インデックスリクエストです。" },
  { id: 54, category: "検索エンジンとSEO", question: "クローラーはリクエストされたURLだけでなく、さらに何をたどって情報を収集していきますか？", answer: "ページ内のリンクです。" },
  { id: 55, category: "検索エンジンとSEO", question: "検索結果の表示順位を決めるためのGoogleの仕組みを何と呼びますか？", answer: "アルゴリズムです。" },
  { id: 56, category: "検索エンジンとSEO", question: "検索された時に自分のWebサイトを上位に表示させるための対策を何と呼びますか？", answer: "SEO対策です。" },
  { id: 57, category: "検索エンジンとSEO", question: "SEO対策として重要視される項目には、サイト構造やHTML構造のほかに何がありますか？", answer: "コンテンツの中身などがあります。" },
  { id: 58, category: "検索エンジンとSEO", question: "Webサイト開発者が公開作業をした時に、クローラーに送る「来て」というリクエストは何ですか？", answer: "インデックスリクエストです。" },
  { id: 59, category: "Webデザイン・マーケティングの専門用語", question: "専門用語を理解していないと、誰と話す際に困るケースが出てきますか？", answer: "クライアント（お客様）や同業の方（エンジニアなど）です。" },
  { id: 60, category: "Webデザイン・マーケティングの専門用語", question: "分からない専門用語が出てきた時に一番まずい対応は何ですか？", answer: "分からないまま放置しておくことです。" },
  { id: 61, category: "Webデザイン・マーケティングの専門用語", question: "ホームページを開いた際に、一番最初に見える画面の部分を何と呼びますか？", answer: "ファーストビューです。" },
  { id: 62, category: "Webデザイン・マーケティングの専門用語", question: "ホームページの第一印象を決める「顔」となる部分はどこですか？", answer: "ファーストビューです。" },
  { id: 63, category: "Webデザイン・マーケティングの専門用語", question: "デザインする前の設計書のようなもので、画像や文章の配置をまとめたものを何と呼びますか？", answer: "ワイヤーフレームです。" },
  { id: 64, category: "Webデザイン・マーケティングの専門用語", question: "ワイヤーフレームの次に作る、最終的なイメージの確認をするためのものを何と呼びますか？", answer: "デザインカンプ（カンプ）です。" },
  { id: 65, category: "Webデザイン・マーケティングの専門用語", question: "どのデバイスでも最適なデザインが表示されるようにする設計手法を何と呼びますか？", answer: "レスポンシブデザインです。" },
  { id: 66, category: "Webデザイン・マーケティングの専門用語", question: "サイトの閲覧者の大半がスマホである場合、まずスマホ版のデザインから整えていく手法を何と呼びますか？", answer: "モバイルファーストです。" },
  { id: 67, category: "Webデザイン・マーケティングの専門用語", question: "デザイン全体の一貫性や方向性のことを略して何と呼びますか？", answer: "トンマナ（トーン＆マナー）です。" },
  { id: 68, category: "Webデザイン・マーケティングの専門用語", question: "ホームページに訪れた方の「最終的な目標行動（お問い合わせなど）」を何と呼びますか？", answer: "CV（コンバージョン）です。" },
  { id: 69, category: "Webデザイン・マーケティングの専門用語", question: "ホームページへのアクセスのうち、どれくらいCVに至ったかを表す指標を何と呼びますか？", answer: "CVR（コンバージョンレート）です。" },
  { id: 70, category: "Webデザイン・マーケティングの専門用語", question: "資料請求ボタンなど、ユーザーに行動を促す要素のことをアルファベット3文字で何と呼びますか？", answer: "CTR（動画内では「コールtoアクションの略」として紹介されています）です。" },
  { id: 71, category: "Webデザイン・マーケティングの専門用語", question: "「CTR」の「C」は何の略として紹介されていますか？", answer: "コール (Call) です。" },
  { id: 72, category: "Webデザイン・マーケティングの専門用語", question: "「CTR」の「T」と「R」は何の略として紹介されていますか？", answer: "to アクション (to Action) の略として紹介されています。" },
  { id: 73, category: "Webデザイン・マーケティングの専門用語", question: "ホームページにアクセスした、重複しない訪問者の数をアルファベット2文字で何と呼びますか？", answer: "UU（ユニークユーザー）です。" },
  { id: 74, category: "Webデザイン・マーケティングの専門用語", question: "閲覧されたページの合計数をアルファベット2文字で何と呼びますか？", answer: "PV（ページビュー）です。" },
  { id: 75, category: "Webデザイン・マーケティングの専門用語", question: "同じ人が同じサイトに5回アクセスした場合、UU（ユニークユーザー）はいくつになりますか？", answer: "1になります。" },
  { id: 76, category: "Webデザイン・マーケティングの専門用語", question: "同じ人が同じサイトに5回アクセスした場合、PV（ページビュー）はいくつになりますか？", answer: "5になります。" },
  { id: 77, category: "Webデザイン・マーケティングの専門用語", question: "ホームページにおける「住所」のような役割を果たすものを何と呼びますか？", answer: "ドメインです。" },
  { id: 78, category: "Webデザイン・マーケティングの専門用語", question: "インターネット上で電源をつけっぱなしのパソコンのようなもので、ホームページのデータを格納する場所を何と呼びますか？", answer: "サーバーです。" },
  { id: 79, category: "Webデザイン・マーケティングの専門用語", question: "ホームページを表示するには、サーバーと何を紐づける必要がありますか？", answer: "ドメインです。" },
  { id: 80, category: "Webデザイン・マーケティングの専門用語", question: "ドメインを「住所」とするなら、サーバーはインターネット上の何に例えられますか？", answer: "家です。" },
  { id: 81, category: "Webデザイン・マーケティングの専門用語", question: "作成したファイルをサーバーに転送するためのルールや通信プロトコルをアルファベット3文字で何と呼びますか？", answer: "FTPです。" },
  { id: 82, category: "Webデザイン・マーケティングの専門用語", question: "FTPの「F」である「ファイル」とは、例えるとどのようなものですか？", answer: "画像や文章の塊のようなイメージです。" },
  { id: 83, category: "Webデザイン・マーケティングの専門用語", question: "FTPの「T」である「Transfer（トランスファー）」にはどのような意味がありますか？", answer: "移動すること、転送することです。" },
  { id: 84, category: "Webデザイン・マーケティングの専門用語", question: "FTPの「P」である「Protocol（プロトコル）」にはどのような意味がありますか？", answer: "ルール、決まり事です。" },
  { id: 85, category: "Webデザイン・マーケティングの専門用語", question: "サーバーにログインしなくてもファイルをアップロードできるようにする無料のソフトを何と呼びますか？", answer: "FTPソフトです。" },
  { id: 86, category: "Webデザイン・マーケティングの専門用語", question: "どんな人が、どのページを、何回閲覧したかという行動のデータを分析できる、Googleが提供するアクセス解析ツールは何ですか？", answer: "Googleアナリティクスです。" },
  { id: 87, category: "Webデザイン・マーケティングの専門用語", question: "Googleアナリティクスは、実際のお店に例えるとどのような役割のツールですか？", answer: "店内の監視カメラでお客さんを観察しているような役割です。" },
  { id: 88, category: "Webデザイン・マーケティングの専門用語", question: "検索エンジン（Google）側から見て、ホームページがどんなキーワードでクリックされたかなどを確認できるツールは何ですか？", answer: "サーチコンソールです。" },
  { id: 89, category: "Webデザイン・マーケティングの専門用語", question: "サーチコンソールは略して何と呼ばれることがありますか？", answer: "サチコです。" },
  { id: 90, category: "Webデザイン・マーケティングの専門用語", question: "サーチコンソールは、実際のお店に例えるとどのようなツールですか？", answer: "地図アプリにどう載っていて、何人が看板を見て入店したかを確認するツールです。" },
  { id: 91, category: "Webデザイン・マーケティングの専門用語", question: "アナリティクスとサーチコンソールの両方を使うことで、どのようなメリットがありますか？", answer: "お客さんがどこから来て、中でどんな動きをしていたかがまるっと分かるようになります。" },
  { id: 92, category: "Webデザイン・マーケティングの専門用語", question: "お客さんやエンジニアとのやり取りにおいて、基礎用語をしっかり理解しておくことは何につながりますか？", answer: "相手からの信頼につながります。" },
  { id: 93, Webデザイン・マーケティングの専門用語: "専門用語を調べてさらに分からない言葉が出てきた場合はどうするべきですか？", answer: "その言葉もしっかり調べて覚えていくべきです。" },
  { id: 94, category: "Webデザイン・マーケティングの専門用語", question: "トンマナで「スタイリッシュで信頼感のあるサイト」を作りたい場合、何を適切に選定する必要がありますか？", answer: "色やフォント、写真などです。" },
  { id: 95, category: "Webデザイン・マーケティングの専門用語", question: "「無料相談してみる」といったボタンで、ユーザーに次のアクションを促すものを指す用語として紹介されているものは何ですか？", answer: "CTR（コールtoアクション）です。" },
  { id: 96, category: "Webデザイン・マーケティングの専門用語", question: "デザインカンプは、ホームページ作成においてどのような役割を持ちますか？", answer: "最終的なイメージの確認を行い、それをもとにホームページを作っていく役割です。" },
  { id: 97, category: "Webデザイン・マーケティングの専門用語", question: "Webデザインで「ボタンが押しづらい」等の状態を防ぐために重要な考え方は何ですか？", answer: "レスポンシブデザインやモバイルファーストなど、各デバイスに最適な表示にすることです。" },
  { id: 98, category: "Webデザイン・マーケティングの専門用語", question: "「今すぐクリック」などのボタン配置を検討する際、Webマーケティング用語で何と呼びますか？", answer: "CTR（コールtoアクション）をどのようにするか、と呼びます。" },
  { id: 99, category: "Webデザイン・マーケティングの専門用語", question: "FTPソフトでファイルをアップロードする先（インターネット上の家）は何ですか？", answer: "サーバーです。" },
  { id: 100, category: "Webデザイン・マーケティングの専門用語", question: "Webデザインや仕組みの学習で1回で理解できない場合はどうすると良いと動画で勧めていますか？", answer: "何回も見て全体像を理解していくことです。" }
];

// 重複を排除したすべての答えのリスト（ダミー選択肢生成用）
const allAnswersList = Array.from(new Set(flashcardsData.map(c => c.answer)));

export default function App() {
  // アプリの状態: 'home' = ダッシュボード, 'quiz' = クイズ画面
  const [view, setView] = useState('home');
  // マスター（正解して省いた）問題のIDを記録するオブジェクト
  const [masteredCards, setMasteredCards] = useState({});
  
  // 仕様トグルの開閉状態
  const [isSpecOpen, setIsSpecOpen] = useState(false);
  
  // クイズ画面用の状態
  const [activeCategory, setActiveCategory] = useState(null);
  const [quizQueue, setQuizQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  // カテゴリ一覧
  const categories = Array.from(new Set(flashcardsData.map(c => c.category).filter(Boolean)));

  // 進捗を計算する関数
  const getProgress = (category) => {
    const totalCards = category === 'すべて' 
      ? flashcardsData 
      : flashcardsData.filter(c => c.category === category);
    
    const total = totalCards.length;
    const mastered = totalCards.filter(c => masteredCards[c.id]).length;
    const percent = total === 0 ? 0 : Math.round((mastered / total) * 100);
    
    return { total, mastered, percent };
  };

  // 4択の選択肢を生成する関数
  const generateOptions = useCallback((correctAnswer) => {
    // 正解以外の答えを抽出
    const incorrectAnswers = allAnswersList.filter(a => a !== correctAnswer);
    // ランダムに並び替えて3つ取得
    const shuffledIncorrect = incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
    // 正解と混ぜて再度シャッフル
    const finalOptions = [correctAnswer, ...shuffledIncorrect].sort(() => 0.5 - Math.random());
    return finalOptions;
  }, []);

  // クイズを開始する
  const startQuiz = (category, isRandom = true) => {
    setActiveCategory(category);
    
    // 対象カテゴリの問題のうち、まだマスターしていないものを抽出
    const targetCards = category === 'すべて'
      ? flashcardsData
      : flashcardsData.filter(c => c.category === category);
    
    const unmasteredCards = targetCards.filter(c => !masteredCards[c.id]);
    
    if (unmasteredCards.length === 0) {
      alert('このカテゴリはすべての問題をマスター済みです！');
      return;
    }

    // シャッフルまたは順番通りにキューにセット
    const queue = isRandom 
      ? unmasteredCards.sort(() => 0.5 - Math.random())
      : [...unmasteredCards];

    setQuizQueue(queue);
    setCurrentIndex(0);
    setSelectedOption(null);
    setOptions(generateOptions(queue[0].answer));
    setView('quiz');
  };

  // 選択肢をクリックしたとき
  const handleSelect = (option) => {
    if (selectedOption) return; // すでに選択済みの場合は無視
    setSelectedOption(option);
  };

  // 次の問題へ（または省く）
  const handleNext = (shouldMaster) => {
    const currentCard = quizQueue[currentIndex];

    if (shouldMaster && selectedOption === currentCard.answer) {
      // マスター済みに登録
      setMasteredCards(prev => ({ ...prev, [currentCard.id]: true }));
    }

    // 次の問題へ
    if (currentIndex + 1 < quizQueue.length) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedOption(null);
      setOptions(generateOptions(quizQueue[nextIndex].answer));
    } else {
      // 終了したらホームに戻る
      setView('home');
    }
  };

  // リセット機能（デバッグや最初からやり直したい時用）
  const resetProgress = () => {
    if (window.confirm('学習の進捗をすべてリセットしますか？')) {
      setMasteredCards({});
    }
  };

  // キーボードショートカット
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (view !== 'quiz') return;

      if (!selectedOption) {
        // 選択肢を選ぶ (1〜4キー)
        if (['1', '2', '3', '4'].includes(e.key)) {
          const index = parseInt(e.key) - 1;
          if (options[index]) {
            handleSelect(options[index]);
          }
        }
      } else {
        // 判定後
        const isCorrect = selectedOption === quizQueue[currentIndex].answer;
        
        if (e.key === 'Enter') {
          handleNext(false); // 次へ
        } else if ((e.key === ' ' || e.key === 'Spacebar') && isCorrect) {
          e.preventDefault(); // スクロール防止
          handleNext(true); // 省く
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view, selectedOption, options, currentIndex, quizQueue]);

  // ホーム画面（ダッシュボード）
  if (view === 'home') {
    const allProgress = getProgress('すべて');

    return (
      <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-800">
        <div className="max-w-4xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-3xl font-bold text-slate-700 tracking-tight">Web制作 4択クイズ学習</h1>
            <button 
              onClick={resetProgress}
              className="text-sm text-slate-400 hover:text-slate-600 underline underline-offset-2 transition-colors"
            >
              進捗をリセット
            </button>
          </header>

          {/* 仕様トグルセクション */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-8 overflow-hidden">
            <button
              onClick={() => setIsSpecOpen(!isSpecOpen)}
              className="w-full px-6 py-4 flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors focus:outline-none"
            >
              <span className="font-bold text-slate-700 flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                アプリの仕様・使い方
              </span>
              <svg 
                className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isSpecOpen ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isSpecOpen && (
              <div className="p-6 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex gap-2"><span className="text-blue-500">・</span>収録問題: Web制作に関する基本技術や専門用語など全100問を収録しています。</li>
                  <li className="flex gap-2"><span className="text-blue-500">・</span>出題形式: 他の問題の答えからダミーを抽出する、自動生成の4択クイズ形式です。</li>
                  <li className="flex gap-2"><span className="text-blue-500">・</span>学習モード: 全問題の通しプレイ（順・ランダム）と、カテゴリごとの学習が選べます。</li>
                  <li className="flex gap-2"><span className="text-blue-500">・</span>進捗とマスター機能: 正解した問題を「省く」ことで進捗バーが伸び、次回以降は出題されなくなります。</li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">・</span>
                    <div>
                      キーボード操作 (HHKB推奨ショートカット):
                      <ul className="mt-2 ml-1 space-y-1.5 text-slate-500">
                        <li><kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded-md text-xs font-mono">1</kbd> 〜 <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded-md text-xs font-mono">4</kbd> : 選択肢を選ぶ</li>
                        <li><kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded-md text-xs font-mono">Enter</kbd> : 判定後、そのまま次の問題へ</li>
                        <li><kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded-md text-xs font-mono">Space</kbd> : 判定後（正解時のみ）、リストから省いて次へ</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* 全体の進捗 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-lg font-bold text-slate-700">総合学習進捗</h2>
              <div className="text-slate-500 font-medium">
                <span className="text-2xl text-blue-600 font-bold">{allProgress.mastered}</span> / {allProgress.total} 問
              </div>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-700 ease-out"
                style={{ width: `${allProgress.percent}%` }}
              ></div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <button 
                onClick={() => startQuiz('すべて', false)}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm transition-all focus:ring-4 focus:ring-blue-200"
              >
                最初から順に全問出題
              </button>
              <button 
                onClick={() => startQuiz('すべて', true)}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm transition-all focus:ring-4 focus:ring-blue-200"
              >
                全カテゴリからランダムに出題
              </button>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-600 mb-4 px-2">カテゴリ別の章から学習</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map(category => {
              const prog = getProgress(category);
              const isCompleted = prog.total > 0 && prog.mastered === prog.total;
              
              return (
                <div 
                  key={category} 
                  className={`bg-white rounded-2xl border p-5 transition-all ${
                    isCompleted ? 'border-green-200 bg-green-50/30' : 'border-slate-100 hover:shadow-md'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4 h-12">
                    <h4 className="font-bold text-slate-700 leading-tight">{category}</h4>
                    {isCompleted && (
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">クリア済</span>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>進捗度</span>
                      <span>{prog.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-700 ease-out ${isCompleted ? 'bg-green-500' : 'bg-blue-400'}`}
                        style={{ width: `${prog.percent}%` }}
                      ></div>
                    </div>
                  </div>

                  <button 
                    onClick={() => startQuiz(category)}
                    disabled={isCompleted}
                    className={`w-full py-3 rounded-xl font-bold transition-all text-sm ${
                      isCompleted 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                        : 'bg-slate-50 hover:bg-slate-100 text-blue-600 border border-slate-200'
                    }`}
                  >
                    {isCompleted ? '学習完了' : 'この章を学習する'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // クイズ画面
  if (view === 'quiz' && quizQueue.length > 0) {
    const currentCard = quizQueue[currentIndex];
    const isAnswered = selectedOption !== null;
    const isCorrect = selectedOption === currentCard.answer;

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col p-4 md:p-8 font-sans text-slate-800">
        <header className="w-full max-w-3xl mx-auto flex justify-between items-center mb-6">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            中断して戻る
          </button>
          <div className="text-slate-500 font-medium">
            残り <span className="text-lg font-bold text-slate-700">{quizQueue.length - currentIndex}</span> 問
          </div>
        </header>

        <main className="w-full max-w-3xl mx-auto flex-1 flex flex-col">
          {/* プログレスバー */}
          <div className="w-full h-1 bg-slate-200 rounded-full mb-8 overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${((currentIndex) / quizQueue.length) * 100}%` }}
            ></div>
          </div>

          {/* 問題エリア */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-10 mb-6">
            <div className="text-xs font-semibold px-3 py-1.5 bg-slate-100 text-slate-600 rounded-md inline-block mb-4">
              {currentCard.category}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
              <span className="text-blue-500 mr-2">Q.</span>
              {currentCard.question}
            </h2>
          </div>

          {/* 選択肢エリア */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {options.map((option, index) => {
              // 状態に応じたスタイル分け
              let btnClass = "text-left p-5 rounded-xl border-2 transition-all font-medium flex items-center gap-3 ";
              
              if (!isAnswered) {
                btnClass += "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-slate-700 shadow-sm cursor-pointer";
              } else {
                if (option === currentCard.answer) {
                  // 正解の選択肢は常に緑色でハイライト
                  btnClass += "border-green-500 bg-green-50 text-green-800 shadow-md";
                } else if (option === selectedOption) {
                  // 間違って選んだ選択肢は赤色
                  btnClass += "border-red-400 bg-red-50 text-red-700";
                } else {
                  // 選ばれなかった不正解の選択肢
                  btnClass += "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  disabled={isAnswered}
                  className={btnClass}
                >
                  <span className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold ${isAnswered ? 'bg-transparent' : 'bg-slate-100 text-slate-500'}`}>
                    {index + 1}
                  </span>
                  <span className="flex-1">{option}</span>
                </button>
              );
            })}
          </div>

          {/* 判定・アクションエリア */}
          {isAnswered && (
            <div className="mt-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className={`text-center mb-6 text-2xl font-bold flex items-center justify-center gap-2 ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                {isCorrect ? (
                  <>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    正解！
                  </>
                ) : (
                  <>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                    不正解...
                  </>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleNext(false)}
                  className="px-8 py-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  そのまま次へ <span className="text-xs text-slate-400 font-normal hidden sm:inline">(Enter)</span>
                </button>
                
                {isCorrect && (
                  <button 
                    onClick={() => handleNext(true)}
                    className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    正解したのでリストから省く <span className="text-xs text-green-200 font-normal hidden sm:inline">(Space)</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  return null;
}
