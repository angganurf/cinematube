import React, { useEffect, useRef } from 'react';

const Banner200300: React.FC = () => {
  const banner = useRef<HTMLDivElement>();

  const atOptions = {
    key: '67727dec3252b6bedabf856bce9eef04',
    format: 'iframe',
    height: 50,
    width: 320,
    params: {},
  };
  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `//largeharass.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);

  return (
    <div
      className="mx-2 my-5 items-center justify-center border border-gray-200 text-center text-white"
      ref={banner}
    ></div>
  );
};

export default Banner200300;
