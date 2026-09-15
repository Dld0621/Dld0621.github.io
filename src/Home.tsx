'use client';

import { useEffect, useState } from 'react';

type Translate = (en: string, cn: string) => string;

function ResearchMap({ t }: { t: Translate }) {
  return <div className="research-overview">
    <p className="research-intro">{t('Dexterous interaction. Learning to act.', '从灵巧交互，走向学习与行动。')}</p>
    <div className="research-directions">
      <article><span className="direction-status">{t('Research focus', '研究聚焦')}</span><h3>{t('Dexterous manipulation', '灵巧操作')}</h3><p>{t('Hand retargeting & bimanual teleoperation', '灵巧手重定向与双手遥操作')}</p><a href="#teleoperation">OmniHand & A2 <span aria-hidden="true">↗</span></a></article>
      <article><span className="direction-status">{t('Reproduction & evaluation', '复现与评估')}</span><h3>{t('Robot learning', '机器人学习')}</h3><p>{t('Vision-language-action models in simulation', '仿真中的视觉–语言–动作模型')}</p><a href="#vla">SmolVLA × LIBERO <span aria-hidden="true">↗</span></a></article>
      <article className="future-direction"><span className="direction-status">{t('Future interests', '未来研究兴趣')}</span><h3>{t('World models', '世界模型')}</h3><p>{t('Predictive models for dexterous manipulation', '面向灵巧操作的预测模型')}</p><span className="direction-note">{t('Research direction', '研究方向探索')}</span></article>
    </div>
  </div>;
}

function VideoSpace({ t, video = false }: { t: Translate; video?: string | boolean }) {
  if (video === true) return <div className="teleop-media-group"><VideoSpace t={t} video="omni"/><figure className="project-media a2-media"><video controls playsInline preload="metadata" poster="/media/agibot-a2-poster.jpg" aria-label={t('AGIBOT Yuan Zheng A2 archived simulation demonstration', '远征 A2 历史仿真演示')}><source src="/media/agibot-a2-demo.mp4" type="video/mp4"/>{t('Your browser does not support video playback.', '你的浏览器不支持视频播放。')}</video><figcaption>{t('AGIBOT Yuan Zheng A2 · Simulation recording · Aug 2026', '智元远征 A2 · 仿真录像 · 2026 年 8 月')}</figcaption></figure></div>;
  if (video) {
    const vla = video === 'vla';
    const src = vla ? '/media/smolvla-multitask.mp4' : '/media/omnihand-mujoco.mp4';
    const poster = vla ? '/media/smolvla-libero-poster.jpg' : '/media/omnihand-poster.jpg';
    const label = vla ? t('SmolVLA LIBERO: four spatial task variants, three successes and one failure', 'SmolVLA LIBERO：四种空间任务条件，三次成功与一次失败') : t('OmniHand bimanual MuJoCo simulation', 'OmniHand 双手 MuJoCo 仿真');
    return <figure className="project-media"><video controls playsInline preload="metadata" poster={poster} aria-label={label}><source src={src} type="video/mp4"/>{vla && <track key={t('en', 'zh')} kind="captions" src={t('/media/smolvla-multitask-en.vtt', '/media/smolvla-multitask-zh.vtt')} srcLang={t('en', 'zh')} label={t('Task and result', '任务与结果')} default/>}{t('Your browser does not support video playback.', '你的浏览器不支持视频播放。')}</video><figcaption>{vla ? t('4 spatial task variants · 28 s · Playback slowed 4×', '4 种空间任务条件 · 28 秒 · 放慢 4 倍播放') : t('OmniHand · MuJoCo · Simulation recording', 'OmniHand · MuJoCo · 仿真录像')}</figcaption>{vla && <p className="video-evidence-note">{t('Selected benchmark episodes: 3 successes, 1 failure. Unseen-task generalization has not been established.', '精选基准测试：3 次成功、1 次失败。尚未验证未见任务泛化。')}</p>}</figure>;
  }
  return <figure className="project-media"><div className="video-placeholder" role="img" aria-label={t('Project video not yet added', '项目视频尚未添加')}><svg viewBox="0 0 32 24" width="38" height="29" aria-hidden="true"><rect x="1" y="1" width="30" height="22" rx="3"/><path d="m13 8 8 4-8 4Z"/></svg><span>{t('Video forthcoming', '演示视频待补充')}</span></div></figure>;
}

export default function Home() {
  const [zh, setZh] = useState(false);
  useEffect(() => { document.documentElement.lang = zh ? 'zh-Hans' : 'en'; }, [zh]);
  const t: Translate = (en, cn) => zh ? cn : en;
  const projects = [
    { id: 'teleoperation', title: t('OmniHand & A2: Retargeting & Bimanual Teleoperation', 'OmniHand 与远征 A2：重定向与双手遥操作'), meta: t('Research internship · 2026', '科研实习 · 2026'), tags: 'Inverse kinematics / ROS 2 / MuJoCo', video: true },
    { id: 'vla', title: t('VLA Reproduction: SmolVLA × LIBERO', 'VLA 复现：SmolVLA × LIBERO'), meta: t('Independent project · 2026', '个人项目 · 2026'), tags: t('Pretrained policy / Closed-loop evaluation / Simulation', '预训练策略 / 闭环评估 / 仿真'), video: 'vla' },
  ];
  const career = [
    { company: 'Tsinghua University & Beijing Zhongguancun Academy', cn: '清华大学与北京中关村学院', logo: 'tsinghua.jpg', role: 'Research Intern', date: t('Jun 2026 – present', '2026.06 – 至今'), location: '', topic: t('Joint training in embodied AI research', '联合培养 · 具身智能科研'), url: 'https://www.tsinghua.edu.cn/' },
    { company: 'Philips Healthcare', cn: '飞利浦医疗', logo: 'philips.svg', role: t('R&D Intern', '研发实习生'), date: t('Apr – Sep 2025', '2025.04 – 2025.09'), location: t('Suzhou', '苏州'), topic: t('Diagnostic-ultrasound hardware', '诊断超声硬件'), url: 'https://www.philips.com/' },
    { company: 'NIO', cn: '蔚来', logo: 'nio.svg', role: t('Quality Intern', '质量实习生'), date: t('Feb – Apr 2025', '2025.02 – 2025.04'), location: t('Shanghai', '上海'), topic: t('Process validation & measurement-data automation', '工艺验证与计量自动化'), url: 'https://www.nio.com/' },
    { company: 'Bosch', cn: '博世', logo: 'bosch.svg', role: t('R&D Intern', '研发实习生'), date: t('Oct 2024 – Feb 2025', '2024.10 – 2025.02'), location: t('Shanghai', '上海'), topic: t('Reliability testing & design reviews', '可靠性测试与设计评审'), url: 'https://www.bosch.com/' },
  ];
  return <>
    <a className="skip-link" href="#main">{t('Skip to content', '跳至正文')}</a>
    <div className="homepage">
      <div className="topbar"><a className="monogram" href="#about" aria-label="Gangwei Li — home">Gangwei Li</a><nav aria-label={t('Page sections', '页面导航')}><a href="#research">{t('Research', '研究')}</a><a href="#projects">{t('Projects', '项目')}</a><a href="#experience">{t('Experience', '经历')}</a><a href="#education">{t('Education', '教育')}</a></nav><button className="language-link" onClick={() => setZh(!zh)} aria-label={t('Switch to Chinese', 'Switch to English')}>{zh ? 'English' : '中文'}</button></div>
      <header className="profile" id="about">
        <div className="portrait-wrap"><img className="portrait" src="/media/gangwei-li-portrait.jpeg" alt="Gangwei (Steven) Li" width="1086" height="1448" fetchPriority="high"/></div>
        <div className="profile-text"><div className="profile-heading"><h1 lang="en">Gangwei <span className="name-ending">(Steven) Li</span></h1>{zh && <p className="name-chinese" lang="zh-Hans">李钢伟</p>}</div><p className="affiliation">{t('MSc(Eng) · Mechanical Engineering', '机械工程硕士')}<br/>{t('The University of Hong Kong', '香港大学')}</p>
          <p>{t('I am an MSc(Eng) student at the University of Hong Kong and a Research Intern in a joint embodied AI research training program with Tsinghua University and Beijing Zhongguancun Academy. I received my BEng from Nantong University.', '我目前在香港大学攻读机械工程硕士，并在清华大学与北京中关村学院联合培养项目中担任具身智能科研实习生。本科毕业于南通大学。')}</p>
          <p>{t('My research experience spans OmniHand retargeting, bimanual teleoperation, and SmolVLA reproduction in LIBERO simulation. I am interested in robot learning and world models for dexterous manipulation.', '我的研究经历涵盖 OmniHand 重定向与双手遥操作，以及 SmolVLA 在 LIBERO 仿真中的复现与评估。未来希望围绕灵巧操作开展机器人学习与世界模型研究。')}</p>
          <div className="contact-links"><a href="mailto:Steven.LI@connect.hku.hk">Email ↗</a><span>/</span><a href="https://www.linkedin.com/in/gangwei-li" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><span>/</span><a href="https://github.com/Dld0621" target="_blank" rel="noopener noreferrer">GitHub ↗</a><span className="email-address">Steven.LI@connect.hku.hk</span></div>
        </div>
      </header>
      <main id="main">
        <section id="research" aria-labelledby="research-heading"><div className="section-heading"><h2 id="research-heading">{t('Research', '研究方向')}</h2><span>01</span></div><ResearchMap t={t}/></section>
        <section id="projects" aria-labelledby="projects-heading"><div className="section-heading"><h2 id="projects-heading">{t('Selected Projects', '研究项目')}</h2><span>02</span></div><div className="project-list">{projects.map((p, i) => <article className="project" id={p.id} key={p.id}><VideoSpace t={t} video={p.video}/><div className="project-text"><span className="project-index">{String(i + 1).padStart(2, '0')}</span><h3>{p.title}</h3><p className="project-meta">{p.meta}</p><p className="project-tags">{p.tags}</p>{p.video && <a className="project-link" href={p.video === 'vla' ? '/media/smolvla-multitask.mp4' : '/media/omnihand-mujoco.mp4'} target="_blank" rel="noopener noreferrer">{p.video === true ? t('OmniHand video', 'OmniHand 视频') : t('Open video', '打开视频')} ↗</a>}{p.video === true && <a className="project-link a2-link" href="/media/agibot-a2-demo.mp4" target="_blank" rel="noopener noreferrer">{t('A2 video', 'A2 视频')} ↗</a>}</div></article>)}</div></section>
        <section id="experience" aria-labelledby="experience-heading"><div className="section-heading"><h2 id="experience-heading">{t('Career Experience', '研究与职业经历')}</h2><span>03</span></div><div className="career-list">{career.map(e => <article className="career-entry" key={e.company}>{e.logo === 'tsinghua.jpg' ? <div className="company-logo joint-logo"><a href="https://www.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer" aria-label="Tsinghua University"><img className="tsinghua-seal" src="/media/logos/tsinghua.jpg" alt="Tsinghua University logo" width="1400" height="600" loading="lazy"/></a><a href="https://www.bza.edu.cn/" target="_blank" rel="noopener noreferrer" aria-label="Beijing Zhongguancun Academy"><img className="academy-logo" src="/media/logos/zhongguancun.png" alt="Beijing Zhongguancun Academy logo" width="412" height="106" loading="lazy"/></a></div> : <a className="company-logo" href={e.url} target="_blank" rel="noopener noreferrer" aria-label={e.company}><img src={'/media/logos/' + e.logo} alt={e.company + ' logo'} width="140" height="52" loading="lazy"/></a>}<div className="career-info"><h3>{zh ? e.cn : e.company}</h3><p>{e.role}{e.location && <span className="location"> · {e.location}</span>}</p><p className="entry-note">{e.topic}</p></div><span className="date">{e.date}</span></article>)}</div></section>
        <section id="education" aria-labelledby="education-heading"><div className="section-heading"><h2 id="education-heading">{t('Education', '教育背景')}</h2><span>04</span></div><div className="education-list"><article className="dated-entry"><div><h3>{t('The University of Hong Kong', '香港大学')}</h3><p>{t('MSc(Eng) in Mechanical Engineering', '机械工程硕士')}</p><p className="entry-note">{t('Expected completion: November 2027', '预计完成时间：2027 年 11 月')}</p></div><span className="date">2026 – 2027</span></article><article className="dated-entry"><div><h3>{t('Nantong University', '南通大学')}</h3><p>{t('BEng in Mechanical Design, Manufacturing and Automation', '机械设计制造及其自动化 · 工学学士')}</p><p className="entry-note">GPA 3.82/4.00 · {t('Top 1%', '专业前 1%')}</p></div><span className="date">2022 – 2026</span></article></div></section>
        <section className="skills" aria-labelledby="skills-heading"><div className="section-heading"><h2 id="skills-heading">{t('Technical Skills', '技术技能')}</h2><span>05</span></div><p><strong>{t('Robotics', '机器人')}</strong><span>ROS 2 · MuJoCo · MoveIt 2 · FK/IK</span></p><p><strong>{t('Programming', '编程')}</strong><span>Python · PyTorch · NumPy · Linux · Git</span></p></section>
      </main><footer><span>© 2026 Gangwei Li</span><a href="#about">{t('Back to top', '返回顶部')} ↑</a></footer>
    </div>
  </>;
}
