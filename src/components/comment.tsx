'use client';
import Script from 'next/script';
import { useId, Fragment, useEffect } from 'react';

declare global {
  interface Window {
    DISQUS: any;
  }
}

export default function Commment({ id }: { id: string }) {
  const DISQUS_SCRIPT_ID = 'disqus_thread_script';

  useEffect(() => {
    const sd = document.getElementById(DISQUS_SCRIPT_ID);
    if (sd) {
      window.DISQUS?.reset({
        reload: true,
        config: function () {
          this.page.identifier = id;
        },
      });
    }
  }, [id]);

  return (
    <Fragment key={useId()}>
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
    </Fragment>
  );
}
