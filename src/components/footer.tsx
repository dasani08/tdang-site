export default function Footer() {
  return (
    <div className="mt-24 w-full pb-2">
      <div className="flex items-center">
        <div className="text-center mx-auto inline-block">
          <p className="font-['Roboto_Light'] text-sm">Made by Coffee</p>
          <p className="font-['Roboto_Light'] text-sm">
            Hosted on{' '}
            <a
              className="text-sky-600"
              href="https://github.com/dasani08/tdang-site"
            >
              Github
            </a>{' '}
            - Running on{' '}
            <a className="text-sky-600" href="https://www.netlify.com/">
              Netlify
            </a>
          </p>
          <p className="font-['Roboto_Light'] text-sm">© 2024 - Thanh Dang</p>
        </div>
      </div>
    </div>
  );
}
