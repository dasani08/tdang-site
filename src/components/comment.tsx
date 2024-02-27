'use client';
import Script from 'next/script';

export default function Commment() {
  return (
    <>
      <div id="disqus_thread"></div>
      <Script id="disqus_thread_script">
        {`
          (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://thanh-dang.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            })();
        `}
      </Script>
    </>
  );
}
