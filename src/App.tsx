import {
  ArrowRight,
  BookOpenText,
  Bot,
  ChevronRight,
  CircleCheck,
  ClipboardList,
  FileStack,
  Fingerprint,
  Flame,
  MessageCircleMore,
  SearchCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import type { AnchorHTMLAttributes } from 'react';
import profileAvatar from '../tianyi.jpg';
import './styles.css';

const circleAssistantUrl = 'http://139.155.156.42/chatbot/ob13wH9GJQcFEG7P';
const knowledgeBaseUrl = 'http://139.155.156.42/datasets';

const difyLinks = {
  circle: import.meta.env.VITE_DIFY_CIRCLE_ASSISTANT_URL || circleAssistantUrl,
  redbook: import.meta.env.VITE_DIFY_REDBOOK_ANALYZER_URL || '#agent-redbook',
  repurpose: import.meta.env.VITE_DIFY_REPURPOSE_ASSISTANT_URL || '#agent-repurpose',
  knowledge: import.meta.env.VITE_DIFY_KNOWLEDGE_BASE_URL || knowledgeBaseUrl,
};

const getExternalLinkProps = (
  href: string,
): Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'> =>
  /^https?:\/\//.test(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

const imageUrl = (prompt: string, imageSize: string) =>
  `https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${imageSize}`;

const profileAvatarUrl =
  import.meta.env.VITE_PROFILE_AVATAR_URL ||
  profileAvatar;

const agents = [
  {
    id: 'agent-circle',
    name: '朋友圈助手',
    tag: '私域表达',
    desc: '把日常素材改成有人味、有成交线索的朋友圈内容，适合成交型 IP 每天稳定输出。',
    points: ['选题拆解', '口吻改写', '成交钩子'],
    icon: MessageCircleMore,
    href: difyLinks.circle,
  },
  {
    id: 'agent-redbook',
    name: '小红书对标账号分析',
    tag: '账号诊断',
    desc: '输入对标账号和目标赛道，拆内容结构、爆文规律、商业定位和可复制动作。',
    points: ['爆款共性', '人设定位', '选题库'],
    icon: SearchCheck,
    href: difyLinks.redbook,
  },
  {
    id: 'agent-repurpose',
    name: '一鱼多吃内容助手',
    tag: '内容复用',
    desc: '把一段观点、一场直播或一篇长文改造成多平台素材，减少重复创作成本。',
    points: ['长文切片', '多平台改写', '发布节奏'],
    icon: FileStack,
    href: difyLinks.repurpose,
  },
];

const playbooks = [
  '个人 IP 定位与标签设计',
  '朋友圈成交内容 SOP',
  '小红书账号诊断清单',
  '直播复盘与内容二创模板',
];

function App() {
  return (
    <main>
      <section className="hero-shell">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="天意 AI 陪跑首页">
            <span className="brand-mark">天</span>
            <span>
              <strong>天意 AI 陪跑</strong>
              <small>IP Growth Agents</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="主导航">
            <a href="#agents">智能体</a>
            <a href="#knowledge">知识库</a>
            <a href="#method">陪跑方法</a>
          </nav>
          <a className="header-action" href={difyLinks.circle} {...getExternalLinkProps(difyLinks.circle)}>
            开始体验
            <ArrowRight size={16} />
          </a>
        </header>

        <div className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={17} />
              给个人 IP 一套可直接开干的 AI 大脑
            </div>
            <h1>把你的内容、私域和成交动作装进智能体。</h1>
            <p>
              这里是天意的 IP 智能体体验平台。AI 对话、知识库和自动化工作流由 Dify 承载，首页只负责让用户快速理解、选择并进入对应智能体。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#agents">
                选择智能体
                <ChevronRight size={18} />
              </a>
              <a className="secondary-button" href={difyLinks.knowledge} {...getExternalLinkProps(difyLinks.knowledge)}>
                <BookOpenText size={18} />
                查看知识库
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="IP 智能体工作台">
            <img
              src={profileAvatarUrl}
              alt="天意个人头像"
            />
            <div className="floating-panel status-panel">
              <Bot size={20} />
              <span>Dify 智能体已就绪</span>
            </div>
            <div className="floating-panel metric-panel">
              <strong>3+</strong>
              <span>核心 IP 工作流</span>
            </div>
          </div>
        </div>
      </section>

      <section className="agent-stage" id="agents">
        <div className="section-heading">
          <span className="section-kicker">Agent Console</span>
          <h2>先进智能体，再进入工作流。</h2>
          <p>每个入口都可以替换成 Dify 应用链接。当前页面先完成营销承接与体验分流。</p>
        </div>

        <div className="agent-grid">
          {agents.map((agent) => {
            const Icon = agent.icon;
            return (
              <a
                className="agent-card"
                href={agent.href}
                id={agent.id}
                key={agent.id}
                {...getExternalLinkProps(agent.href)}
              >
                <div className="agent-icon">
                  <Icon size={26} />
                </div>
                <div className="agent-card-head">
                  <span>{agent.tag}</span>
                  <h3>{agent.name}</h3>
                </div>
                <p>{agent.desc}</p>
                <div className="agent-points">
                  {agent.points.map((point) => (
                    <span key={point}>
                      <CircleCheck size={14} />
                      {point}
                    </span>
                  ))}
                </div>
                <span className="agent-link">
                  进入体验
                  <ArrowRight size={16} />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="method-band" id="method">
        <div className="method-copy">
          <span className="section-kicker">Operating System</span>
          <h2>不是给你一堆提示词，是把 IP 经营动作产品化。</h2>
          <p>
            首页负责讲清楚价值和路径；Dify 负责承载对话、知识检索、工作流编排和后续迭代。这样你的前端可以稳定获客，后端可以快速扩展新智能体。
          </p>
        </div>
        <div className="method-steps">
          <div>
            <Fingerprint size={24} />
            <h3>定位</h3>
            <p>明确人设、场景、目标客户和表达边界。</p>
          </div>
          <div>
            <ClipboardList size={24} />
            <h3>拆解</h3>
            <p>把账号、素材和业务动作拆成可复用模板。</p>
          </div>
          <div>
            <TrendingUp size={24} />
            <h3>放大</h3>
            <p>通过多平台改写和私域跟进形成内容飞轮。</p>
          </div>
        </div>
      </section>

      <section className="knowledge-section" id="knowledge">
        <div className="knowledge-visual">
          <img
            src={imageUrl(
              'realistic workspace screen showing Chinese content strategy knowledge base, organized folders, AI assistant chat panel, warm daylight, professional SaaS product photography',
              'landscape_4_3',
            )}
            alt="个人 IP 知识库与内容工作流"
          />
        </div>
        <div className="knowledge-copy">
          <span className="section-kicker">Knowledge Base</span>
          <h2>把你的经验、案例和 SOP 沉淀成可调用资产。</h2>
          <p>
            用户不需要理解 Dify 的复杂度，只需要从首页选择场景。后端知识库可以持续补充你的课程、案例、复盘和模板。
          </p>
          <div className="playbook-list">
            {playbooks.map((item) => (
              <span key={item}>
                <BookOpenText size={16} />
                {item}
              </span>
            ))}
          </div>
          <a className="primary-button slim" href={difyLinks.knowledge} {...getExternalLinkProps(difyLinks.knowledge)}>
            进入知识库
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="proof-strip" aria-label="平台能力">
        <div>
          <Flame size={22} />
          <strong>内容生产</strong>
          <span>从选题到多平台改写</span>
        </div>
        <div>
          <UsersRound size={22} />
          <strong>私域经营</strong>
          <span>朋友圈、社群、成交话术</span>
        </div>
        <div>
          <Bot size={22} />
          <strong>Dify 承载</strong>
          <span>对话、知识库、工作流独立迭代</span>
        </div>
      </section>

      <section className="final-cta">
        <span className="section-kicker">Start Here</span>
        <h2>先让用户进来体验，再用智能体完成交付。</h2>
        <p>替换 Dify 链接后，这个首页就可以作为你的个人 IP AI 工具入口。</p>
        <a className="primary-button" href={difyLinks.circle} {...getExternalLinkProps(difyLinks.circle)}>
          体验朋友圈助手
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}

export default App;
