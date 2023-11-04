import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';
import type { APIRoute } from 'astro';
import { createSBSSR } from '@/lib/server/supabase';

// export { getStaticPaths } from './[id].astro';

export const prerender = false;

const e = (tag: string, tw: string, ...children: any[]) => ({ tag, props: {children, tw}})
 
export const GET: APIRoute = async ({ request, params, cookies }) => {
  const { id } = params;
  const supabase = createSBSSR({ cookies });

  const {error, data: user} = await supabase.from("profiles").select("username, full_name, job_description").eq("ticket", id).single()

  if (error) {
    throw new Error(error.message)
  }
 
  // using custom font files
  const JBbold = fs.readFileSync(path.resolve('./src/assets/JetBrainsMono-Bold.ttf'));
  const JBregular = fs.readFileSync(
    path.resolve('./src/assets/JetBrainsMono-Regular.ttf'),
  );

  const html = e('div', 'w-full h-full flex flex-col text-5xl items-center justify-center relative bg-slate-900 text-teal-400', [
    e('div', 'absolute inset-12 border-4 flex flex-col border-teal-300 rounded-2xl bg-black p-8 mb-8', [
      e('p', 'tracking-wide uppercase text-amber-400', [
        '[',
        e('span', 'text-teal-400', 'NEOVIM'),
        e('span', 'text-teal-800', 'CONF'),
        e('span', 'text-teal-500', '.live'),
        ']'
      ]),
      e('div', 'pl-4 flex flex-col text-teal-200', [
        e('p', 'text-transparent', '-'),
        e('p', '', [
          'pass = ', e('span', 'text-amber-400 ml-4', ` "******#${id?.padStart(4, '0')}"`)
        ]),
        e('p', '', [
          'name = ', e('span', 'text-amber-400 ml-4 inline-block', ` "${user.username}"`)
        ]),
        e('p', '', [
          'job = ', e('span', 'text-amber-400 ml-4', ` "${user.job_description}"`)
        ]),
        e('p', 'text-', [ e('span', 'text-slate-600', '# aka: ' + user.full_name)]),
      ])
    ])
  ])
 
  // @ts-ignore
  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: 'JetBrains Mono Bold',
        data: JBbold.buffer,
        style: 'normal',
      },
      {
        name: 'JetBrains Mono Regular',
        data: JBregular.buffer,
        style: 'normal',
      },
    ],
  });
}
