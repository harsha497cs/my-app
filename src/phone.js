// ...existing code...
return (
  <div style={{ display: 'flex' }}>
    <Drawer
      name="harsha p"
      active={activeSection}
      onNavigate={handleNavigate}
      footerLink="https://github.com/harsha497cs"
    />
    <div
      className="phone-frame-wrapper"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#0b1220'
      }}
    >
      <div
        className="phone-frame"
        style={{
          display: window.innerWidth <= 600 ? 'block' : 'none',
          width: 360,
          height: 740,
          border: '16px solid #222',
          borderRadius: 40,
          boxShadow: '0 0 32px #0008',
          overflow: 'hidden',
          background: '#0b1220',
          position: 'relative'
        }}
      >
        <main style={{ width: '100%', height: '100%', overflowY: 'auto', background: '#0b1220', color: 'white' }}>
          {/* ...all your main content here... */}
        </main>
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 6,
            background: '#444',
            borderRadius: 3
          }}
        />
      </div>
      <main
        style={{
          flex: 1,
          minHeight: '100vh',
          padding: 0,
          background: '#0b1220',
          color: 'white',
          display: window.innerWidth > 600 ? 'block' : 'none'
        }}
      >
        {/* ...all your main content here... */}
      </main>
    </div>
  </div>
);
// ...existing code...