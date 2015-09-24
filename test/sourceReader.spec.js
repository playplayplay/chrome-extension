import assert from 'assert';
import sourcecode from '../src/sourceReader.js';

// Is there a lib for that?
function stringifyHTMLElement(res) {
  res.forEach((item) => {
    item.lines.forEach((line) => {
      if (line.el && line.el instanceof HTMLElement) {
        line.el = line.el.outerHTML;
      }
    });
  });

  return res;
}

describe('sourceReader', () => {
  afterEach(() => {
    fixture.cleanup();
  });

  describe('soureReader.html', () => {
    beforeEach(() => {
      fixture.load('/test/fixtures/sourceReader.html');
    });

    it('gets blob from the current page', () => {
      const result = sourcecode();
      assert.equal(result.length, 1);
    });

    describe('result', () => {
      it('contains the blob type', () => {
        const result = sourcecode();

        assert.equal(result[0].type, 'foo');
      });

      it('contains the blob lines', () => {
        const result = sourcecode();
        assert.equal(result[0].lines.length, 1);
      });

      describe('line', () => {
        it('contains the text', () => {
          const result = sourcecode();

          assert.equal(result[0].lines[0].text, 'Hello from Foo');
        });

        it('contains the element', () => {
          const result = stringifyHTMLElement(sourcecode());

          assert.equal(result[0].lines[0].el, '<div class="blob-code-inner"><span><span>Hello</span> from <span>Foo</span></span></div>');
        });
      });
    });
  });
});
