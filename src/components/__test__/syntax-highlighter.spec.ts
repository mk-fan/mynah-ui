import { SyntaxHighlighter } from '../syntax-highlighter';

describe('syntax-highlighter', () => {
  it('render', () => {
    const testSyntaxHighlighter = new SyntaxHighlighter({
      codeStringWithMarkup: 'alert("hello");\n',
      language: 'js',
      keepHighlights: true,
      block: true,
    });

    expect(testSyntaxHighlighter.render.outerHTML.replace('\n', '')).toBe(
      '<div class="mynah-syntax-highlighter"><pre class="keep-markup language-clike"><span class="token function"></span><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'
    );
  });

  it('buttons', () => {
    const testSyntaxHighlighter = new SyntaxHighlighter({
      codeStringWithMarkup: 'alert("hello");\n',
      language: 'js',
      keepHighlights: true,
      showCopyOptions: true,
      block: true,
    });

    expect(testSyntaxHighlighter.render.querySelectorAll('button')?.length).toBe(2);
    expect(testSyntaxHighlighter.render.querySelectorAll('button')?.[0]?.title).toBe('Insert at cursor');
    expect(testSyntaxHighlighter.render.querySelectorAll('button')?.[1]?.title).toBe('Copy');
  });
});
