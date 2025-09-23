import htmlImg from '../assets/techstack/html.png';
import cssImg from '../assets/techstack/css.png';
import jsImg from '../assets/techstack/js.png';
import reactImg from '../assets/techstack/react.png';
import figmaImg from '../assets/techstack/figma.png';
import gitImg from '../assets/techstack/git.png';
import githubImg from '../assets/techstack/github.png';

const skillImages = {
  'HTML 5': htmlImg,
  'CSS 3': cssImg,
  'JavaScript': jsImg,
  'React JS': reactImg,
  'React Native': reactImg,
  'Figma': figmaImg,
  'Photoshop': figmaImg, // Replace with photoshop image if available
  'Git': gitImg,
  'GitHub': githubImg
};

{/* Skills Section */}
<section id="skills" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
  <div style={{ maxWidth: 1040, margin: '0 auto' }}>
    <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Skills</h2>
    <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
    <p style={{ marginTop: 24, lineHeight: 1.8, color: '#cbd5e1' }}>
      I've developed various skills which helped my personal as well as professional career. Here are some
      skills I'm familiar with!
    </p> (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#cbd5e1', fontSize: 14 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {skillImages[skill.label] && (
                <img src={skillImages[skill.label]} alt={skill.label} style={{ width: 24, height: 24, objectFit: 'contain' }} />
              )}
              {skill.label}
            </span>
            <span>{skill.value}%</span>
          </div>
          <div style={{ height: 10, background: '#e5e7eb1a', borderRadius: 999 }}>
            <div
              style={{
                width: `${skill.value}%`,
                height: '100%',
                background: '#0ea5e9',
                borderRadius: 999
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>