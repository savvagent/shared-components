
const exec = (commandName, value = null, showDefaultUi = false) => {
  let result;
  try {
    result = document.execCommand(commandName, showDefaultUi, value);
  } catch (err) {
    result = err;
  }
  return result;
};

export default class Actions {
  constructor(ctx) {
    this.ctx = ctx;
  }

  bold() {
    exec('bold');
  }

  completeLink(url) {
    this.ctx.sm.restoreSelection(this.savedSelection);
    exec('insertHTML', `<a href="${url}" target="_blank">${this.savedSelection}</a>`);
  }

  copy() {
    this.ctx.copy();
  }

  copyFromEnglish() {
    document.dispatchEvent(new CustomEvent('EVENT:html-editor:start-copy-from-english', {
      detail: {
        type: this.ctx.type,
        fieldId: this.ctx.fieldId
      }
    }));
  }

  heading1() {
    exec('formatBlock', '<H1>');
  }

  heading2() {
    exec('formatBlock', '<H2>');
  }

  heading3() {
    exec('formatBlock', '<H3>');
  }

  italic() {
    exec('italic');
  }

  startLink() {
    return Promise.resolve((this.savedSelection = this.ctx.sm.saveSelection()));
  }

  olist() {
    exec('insertOrderedList');
  }
  paragraph() {
    exec('formatBlock', '<P>');
  }

  paste() {
    this.ctx.paste();
  }

  replace() {
    this.ctx.replace();
  }

  ulist() {
    exec('insertUnorderedList');
  }

  underline() {
    exec('underline');
  }
}
