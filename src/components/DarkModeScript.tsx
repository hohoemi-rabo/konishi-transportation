export default function DarkModeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var stored = localStorage.getItem('dark-mode-storage');
              if (stored) {
                var parsed = JSON.parse(stored);
                if (parsed.state && parsed.state.isDark) {
                  document.documentElement.classList.add('dark');
                }
              } else {
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                  document.documentElement.classList.add('dark');
                }
              }
            } catch (e) {
              console.error('Failed to initialize dark mode', e);
            }
          })();
        `,
      }}
    />
  );
}
