export function renderPortableText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';

  return blocks.map(block => {
    if (block._type !== 'block') return '';

    const childrenHtml = block.children.map((child: any) => {
      let text = child.text;
      if (child.marks) {
        child.marks.forEach((mark: string) => {
          const linkDef = block.markDefs?.find((def: any) => def._key === mark);
          if (linkDef && linkDef._type === 'link') {
            text = `<a href="${linkDef.href}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">${text}</a>`;
          } else if (mark === 'strong') {
            text = `<strong>${text}</strong>`;
          } else if (mark === 'em') {
            text = `<em>${text}</em>`;
          } else if (mark === 'code') {
            text = `<code class="bg-bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">${text}</code>`;
          }
        });
      }
      return text;
    }).join('');

    switch (block.style) {
      case 'h1':
        return `<h1 class="text-3xl font-bold font-heading mt-8 mb-4 text-text-primary">${childrenHtml}</h1>`;
      case 'h2':
        return `<h2 class="text-2xl font-bold font-heading mt-8 mb-4 text-text-primary">${childrenHtml}</h2>`;
      case 'h3':
        return `<h3 class="text-xl font-bold font-heading mt-6 mb-3 text-text-primary">${childrenHtml}</h3>`;
      case 'blockquote':
        return `<blockquote class="border-l-4 border-primary pl-4 italic my-6 text-text-secondary">${childrenHtml}</blockquote>`;
      default:
        return `<p class="leading-relaxed mb-6 font-body text-[1.05rem] text-text-secondary">${childrenHtml}</p>`;
    }
  }).join('');
}
