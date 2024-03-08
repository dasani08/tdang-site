import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        sizes="100vw"
        width={0}
        height={0}
        style={{
          width: '100%',
          height: 'auto',
          marginTop: 0,
          marginBottom: 0,
        }}
        {...(props as ImageProps)}
      />
    ),
    strong: ({ children }) => <b>{children}</b>,
    ...components,
  };
}
