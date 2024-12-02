import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: {
      "en-US": ["en"],
      default: ["en"],
    },
    resources: {
      en: {
        translation: {
          SelfIntroHeader: "Hi there! I'm Ali",
          SelfIntro:
            "I'm a Full Stack Developer and consultant. I thrive on building web applications from scratch. <br /> My mission is to create seamless, efficient, and user-friendly experiences. Whether it's the frontend's aesthetics or the backend's functionality, I ensure everything works harmoniously and looks fantastic.",
          Residence: "Residence:",
          ResidenceLocation: "Japan",
          Address: "Address:",
          AddressLocation: "Tokyo",
          AvailableForWork: "Available for work:",
          WorkAvailability: "yes",
          HighestGithubCommit: "Highest Team Github Commit Bootcamp Award",
          CodingHours: "140 hours average coding per month",
          BestTagineCook: "Best Tagine Cook in Town",
          FamilyCats: "Owner of 7 family cats",
          UIEngineering: "UI Engineering",
          UIEngineeringDesc:
            "Creating responsive and interactive user interfaces.",
          ServerSide: "Server-Side",
          ServerSideDesc:
            "Building and maintaining server-side logic and databases.",
          AgilePJM: "Agile PJM",
          AgilePJMDesc:
            "Efficiently managing projects using agile methodologies.",
          Scrum: "Scrum",
          ScrumDesc:
            "Facilitating agile development and ensuring team efficiency.",
          AboutTitle: "About",
          MeTitle: "Me",
          FunTitle: "Fun",
          FactTitle: "Fact",
          MyTitle: "My",
          ExpertiseTitle: "Area of Expertise",
          RecentTitle: "Recent",
          ProjectsTitle: "Projects",
          ShoppiSheepTitle: "ShoppiSheep",
          ShoppiSheepCategory: "Rails based EC-Website",
          RailsSakeTitle: "RailsSake",
          RailsSakeCategory: "Explore Sake locations in Japan",
          GuidedEscapeTitle: "Guided Escape",
          GuidedEscapeCategory: "Rails based Airbnb Experiences clone",
          LemonadeStandTitle: "Lemonade Stand",
          LemonadeStandCategory:
            "Point-of-Sale System for Vendors in Flea/Craft Markets",
          DunjeanTogetherTitle: "Dunjean Together",
          DunjeanTogetherCategory:
            "Multiplayer Dungeon Game, TypeScript, WebGL, Vue, Mobile Support",
          ReactPortfolioTitle: "My New React Portfolio",
          LatestTitle: "Latest",
          PostsTitle: "Posts",
          MyStoryTitle: "My Story",
          MyStoryCategory: "Lifelong growth and challenges",
          ExperienceTitle: "Experience",
          CareerBreakTitle: "Career Break: Software Engineer Transition",
          LeWagonBootcampTitle: "LeWagon Web Development Bootcamp Tokyo",
          LeWagonBootcampDesc: `<p> <strong>Intensive Coding Bootcamp:</strong> Completed a rigorous program, mastering modern Full Stack Web development technologies including Ruby on Rails, HTML5, CSS, JavaScript, PostgreSQL, and React.<br /><br /> <strong>Project Engagement:</strong> Currently involved in 3 private projects and expanding my portfolio. </p>`,
          RakutenConsultantDesc: `<p>
            <strong>Stakeholder Management:</strong><br />
            Led cross-functional collaboration with HR and Tech teams in Japan and India.<br /><br />
            <strong>Project Oversight:</strong><br />
            Managed recruitment projects across 4 departments, handling 15-20 positions and over 30 headcounts.<br /><br />
            <strong>Strategic Planning:</strong><br />
            Developed and executed hiring strategies for mid-level and senior technical roles, focusing on Japanese and global markets.
          </p>`,
          SpottedRecruitDesc: `<p>
            <strong>Career Progression:</strong> Advanced from Account Executive to Senior Account Executive in December 2021, reflecting strong performance and leadership skills.<br /><br />
            <strong>Client Account Management:</strong> Directed the end-to-end management of Rakuten accounts, overseeing recruitment projects for mid-to-senior engineering roles and ensuring successful candidate placements.<br /><br />
            <strong>Team Leadership:</strong> Guided and mentored junior team members, focusing on enhancing their recruitment strategies, stakeholder management, and business development skills.
          </p>`,
          RobertWaltersDesc: `<p>
            <strong>Sector Specialization:</strong> Led talent acquisition projects focused on the insurance, InsurTech, and FinTech sectors, ensuring the alignment of candidate profiles with client needs.<br /><br />
            <strong>Full-Cycle Recruitment Management:</strong> Directed the entire recruitment lifecycle, offering tailored consultancy to both candidates and clients to achieve optimal placement outcomes.<br /><br />
            <strong>Business Development:</strong> Executed English-speaking business development initiatives within Japan’s financial industry, expanding the client base and securing new opportunities.
          </p>`,
          BerlitzDesc: `<p>
            <strong>Program Leadership:</strong> Designed and delivered cultural and language coaching programs in French, German, and Arabic for Japanese employees at major corporations.<br /><br />
            <strong>Executive Coaching:</strong> Successfully trained and coached C-level executives and senior management in Japanese and multinational companies, driving cross-cultural communication and leadership development.
          </p>`,
          LeWagonGraduateDesc: `<p>
            <strong>Intensive coding bootcamp, acquiring modern web development technologies.
          </p>`,
          WuppertalDesc: `<p>
            <strong>Statistic/ Econometrics/ Controlling/Auditing.
          </p>`,
          RakutenConsultantTitle: "Global Tech Talent Acquisition Consultant",
          RakutenConsultantSubTitle:
            "Rakuten Inc. Japan (Via Boyd & Moore Executive Search)",
          SpottedRecruitTitle: "Senior Account Executive",
          SpottedRecruitSubTitle: "Spotted Recruit",
          RobertWaltersTitle: "Technical Recruiter",
          RobertWaltersSubTitle: "Robert Walters Japan",
          BerlitzTitle: "Business Coach",
          BerlitzSubTitle: "Berlitz Business Communication Japan",
          EducationTitle: "Education",
          LeWagonGraduateTitle: "Full Stack Development Graduate",
          LeWagonGraduateSubTitle: "LeWagon Tokyo",
          WuppertalTitle: "Bachelor and Master of Science",
          WuppertalSubTitle: "University of Wuppertal",
          LanguagesTitle: "Languages",
          French: "French",
          German: "German",
          Arabic: "Arabic",
          Japanese: "Japanese",
          English: "English",
          ResumeTitle: "Resume",
          SkillsTitle: "Skills",
          About: "About",
          Projects: "Projects",
          Blog: "Blog",
          CodingMusic: "Coding Music",
          Resume: "Resume",
        },
      },
      jp: {
        translation: {
          SelfIntroHeader: "はじめまして、アリです。",
          SelfIntro:
            "フルスタックデベロッパー兼コンサルタントです。ゼロからWebアプリケーションを作ることに情熱を持っています。<br /> 私の使命は、シームレスで効率的かつユーザーフレンドリーな体験を提供することです。フロントエンドの見た目もバックエンドの機能も、すべてが調和して素晴らしく動作するようにします。",
          Residence: "居住地:",
          ResidenceLocation: "日本",
          Address: "住所:",
          AddressLocation: "東京",
          AvailableForWork: "仕事の可用性:",
          WorkAvailability: "はい",
          HighestGithubCommit: "最高のチームGithubコミットブートキャンプ賞",
          CodingHours: "1ヶ月に平均140時間のコーディング",
          BestTagineCook: "街で一番のタジン料理の名手",
          FamilyCats: "7匹の家族の猫の飼い主",
          UIEngineering: "UIエンジニアリング",
          UIEngineeringDesc:
            "レスポンシブでインタラクティブなユーザーインターフェースを作成します。",
          ServerSide: "サーバーサイド",
          ServerSideDesc:
            "サーバーサイドのロジックとデータベースを構築および維持します。",
          AgilePJM: "アジャイルプロジェクト管理",
          AgilePJMDesc:
            "アジャイル手法を使用してプロジェクトを効率的に管理します。",
          Scrum: "スクラム",
          ScrumDesc: "アジャイル開発を促進し、チームの効率を確保します。",
          AboutTitle: "私",
          MeTitle: "について",
          FunTitle: "楽しい",
          FactTitle: "事実",
          MyTitle: "私の",
          ExpertiseTitle: "専門分野",
          RecentTitle: "最近",
          ProjectsTitle: "プロジェクト",
          ShoppiSheepTitle: "ショッピーシープ",
          ShoppiSheepCategory: "RailsベースのECサイト",
          RailsSakeTitle: "Rails酒",
          RailsSakeCategory: "日本の酒の場所を探る",
          GuidedEscapeTitle: "ガイド付き脱出",
          GuidedEscapeCategory: "RailsベースのAirbnb体験クローン",
          LemonadeStandTitle: "レモネードスタンド",
          LemonadeStandCategory:
            "フリーマーケットやクラフトマーケットのベンダー向けのポイントオブセールシステム",
          DunjeanTogetherTitle: "ダンジョン トゥゲザー",
          DunjeanTogetherCategory:
            "マルチプレイヤー ダンジョン ゲーム、TypeScript、WebGL、Vue、モバイルサポート",
          ReactPortfolioTitle: "新しいReactポートフォリオ",
          ReactPortfolioCategory:
            "Reactを使用して構築し、AWSに展開された個人ポートフォリオWebサイト。HTTPSセキュリティ付き。",
          LatestTitle: "最新",
          PostsTitle: "投稿",
          MyStoryTitle: "私の物語",
          MyStoryCategory: "生涯の成長と挑戦",
          ExperienceTitle: "経験",
          CareerBreakTitle: "キャリアブレイク: ソフトウェアエンジニアへの転身",
          LeWagonBootcampTitle: "LeWagon ウェブ開発ブートキャンプ 東京",
          LeWagonBootcampDesc: `<p> <strong>• 集中コーディングブートキャンプ:</strong> Ruby on Rails、HTML5、CSS、JavaScript、PostgreSQL、Reactなど、最新のフルスタックWeb開発技術を習得しました。<br /><br /> <strong>• プロジェクト参加:</strong> 現在3つのプライベートプロジェクトに関わり、ポートフォリオを拡大しています。 </p>`,
          RakutenConsultantDesc: `<p>
          【業務内容】<br />
          • ステークホルダーマネジメント: 日本とインドの人事およびエンジニアリングマネージャーと協力し、採用目標とスケジュールの整合性を確保。<br />
          • プロジェクト管理: 4つの部門での採用プロジェクトを管理し、15～20のポジションと30名以上の採用枠を担当。<br />
          • 部門責任者と協力し、採用ニーズ、KPI、および目標を定義。<br />
          • 採用戦略、スケジュール、および予算を策定。<br /><br />
          【主な実績】<br />
          • KPIを50%以上達成し、採用効率の向上に大きく貢献。<br />
          • スクラムやプロジェクト管理手法の導入に関する新チームの一員として、プロジェクトの効率的な進行と透明性の向上に寄与。
          </p>`,

          SpottedRecruitDesc: `<p>
          【業務内容】<br />
          • 新規クライアントおよび既存クライアントの開拓と関係維持を担当し、主に中級から上級エンジニア向けの採用をサポート。<br />
          • チームメンバーのマネジメントおよびメンタリングを行い、採用戦略やステークホルダーマネジメントの強化を図る。<br /><br />
          【主な実績】<br />
          • 記録的な速さでシニアアカウントエグゼクティブに昇進し、パフォーマンスとリーダーシップの高さを証明。<br />
          • クライアントアカウントの管理において高い実績を上げ、顧客満足度向上に貢献。
          </p>`,
          RobertWaltersDesc: `<p>
        【業務内容】<br />
        •  保険、InsurTech、FinTech業界の技術系採用を担当し、クライアントおよび候補者に対して戦略的なコンサルティングを提供。<br />
        •  ステークホルダーマネジメントを重視し、クライアントと密接に連携して、ニーズに応じた採用戦略を立案および実行。<br />
        •  エンドツーエンドの採用プロセスを管理し、クライアントの期待に応える最適な候補者を確保。<br /><br />
        【主な実績】<br />
        •  四半期ごとに15M円以上の収益を創出し、クライアントに最適な候補者を提供することで、顧客満足度の向上に貢献。<br />
        •  ビジネス開発活動により新規クライアントを獲得し、既存契約の更新率を向上。<br />
        </p>`,
          BerlitzDesc: `<p>
        【業務内容】<br />
        • 日本の大手企業の従業員に対し、フランス語、ドイツ語、アラビア語での文化・言語トレーニングを実施。<br />
        • 日本および多国籍企業の役員や上級管理職向けに、異文化間コミュニケーションとリーダーシップの指導を提供。<br /><br />
        【主な実績】<br />
        • 複数の役員が、研修後に新しい言語での商談やプレゼンを行えるようになるなど、大きな成果を達成。
        </p>`,
          LeWagonGraduateDesc: `<p>
          <strong>集中コーディングブートキャンプ:</strong> モダンなWeb開発技術を習得。
          </p>`,
          WuppertalDesc: `<p>
          <strong>統計/ 計量経済学/ コントローリング/ 監査。
          </p>`,
          RakutenConsultantTitle:
            "グローバルテクノロジー人材採用コンサルタント",
          RakutenConsultantSubTitle:
            "楽天株式会社 日本（ボイド＆ムーア エグゼクティブサーチ経由）楽天株式会社（日本）に外部委託",
          SpottedRecruitTitle: "シニアアカウントエグゼクティブ",
          SpottedRecruitSubTitle: "株式会社 SPOTTED",
          RobertWaltersTitle: "テクニカルリクルーター",
          RobertWaltersSubTitle: "ロバート・ウォルターズ・ジャパン株式会社",
          BerlitzTitle: "外国語と文化の教師",
          BerlitzSubTitle:
            "ベルリッツ・ビジネスコミュニケーションジャパン株式会社",
          EducationTitle: "教育",
          LeWagonGraduateTitle: "ウェブ開発ブートキャンプ",
          LeWagonGraduateSubTitle: "LeWagon 東京",
          WuppertalTitle: "理学士・修士",
          WuppertalSubTitle: "Bergische University Wuppertal 大学院入学",

          LanguagesTitle: "言語",
          French: "フランス語",
          German: "ドイツ語",
          Arabic: "アラビア語",
          Japanese: "日本語",
          English: "英語",
          ResumeTitle: "履歴書",
          SkillsTitle: "スキル",
          About: "自己紹介",
          Projects: "プロジェクト",
          Blog: "ブログ",
          CodingMusic: "コーディングミュージック",
          Resume: "履歴書",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
