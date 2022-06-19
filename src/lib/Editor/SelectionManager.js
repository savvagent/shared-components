export const parents = (element) => {
  const _parents = [];
  let _el = element;
  while (_el && _el.tagName !== 'EDITOR') {
    _parents.unshift(_el);
    _el = _el.parentNode;
  }
  return _parents;
}

export class SelectionManager {
  constructor(container) {
    this.container = container;
  }

  captureSelectionData(element) {
    let caretOffset = 0;
    const sel = this.getSelection();
    const { focusNode } = sel;
    const _parents = parents(focusNode);
    if (sel.rangeCount > 0) {
      const range = this.getSelection().getRangeAt(0);
      const selected = range.toString().length;
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      if (selected) {
        caretOffset = preCaretRange.toString().length - selected;
      } else {
        caretOffset = preCaretRange.toString().length;
      }
    }
    // console.log("caretOffset", caretOffset);
    // console.log("focusNode", focusNode);
    // console.log("parents", _parents);
    return {
      caretOffset,
      focusNode,
      parents: _parents
    };
  }

  getAnchorNode() {
    return this.getCurrentNode();
  }

  getFocusNode() {
    return this.getSelection().focusNode;
  }

  getCurrentNode() {
    return this.getSelection().anchorNode;
  }

  getNextNode() {
    const currentNode = this.getCurrentNode();
    if (currentNode) return currentNode.nextSibling;
    return null;
  }

  getPreviousNode() {
    const currentNode = this.getCurrentNode();
    if (currentNode) return currentNode.previousSibling;
    return null;
  }

  getSelection() {
    if (typeof this.container.getSelection === 'function') {
      return this.container.getSelection();
    }
    return document.getSelection();
  }

  getSelectionParent() {
    const selection = this.getSelection();
    return selection[0] && selection[0].commonAncestorContainer ? selection[0].commonAncestorContainer.parentElement : selection.focusNode.parentElement;
  }

  getSelectionType() {
    return this.getSelection().type;
  }

  getTagName() {
    const node = this.getCurrentNode();
    const cNode = node && node.nodeType === 3 ? node.parentNode : node;
    return cNode && cNode.tagName ? cNode.tagName : null;
  }

  // eslint-disable-next-line complexity
  getLinksInSelection() {
    const selectedLinks = [];
    let range, containerEl, links, linkRange;
    const sel = this.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      linkRange = document.createRange();
      for (let r = 0; r < sel.rangeCount; ++r) {
        range = sel.getRangeAt(r);
        containerEl = range.commonAncestorContainer;
        if (containerEl.nodeType !== 1) {
          containerEl = containerEl.parentNode;
        }
        if (containerEl.nodeName.toLowerCase() === 'a') {
          selectedLinks.push(containerEl);
        } else {
          links = containerEl.getElementsByTagName('a');
          for (let i = 0; i < links.length; ++i) {
            linkRange.selectNodeContents(links[i]);
            if (linkRange.compareBoundaryPoints(range.END_TO_START, range) < 1 && linkRange.compareBoundaryPoints(range.START_TO_END, range) > -1) {
              selectedLinks.push(links[i]);
            }
          }
        }
      }
      linkRange.detach();
    }
    return selectedLinks;
  }

  // eslint-disable-next-line complexity
  pasteHtmlAtCaret(html, selectPastedContent) {
    const sel = this.getSelection();
    if (sel.rangeCount) {
      let range = sel.getRangeAt(0);
      range.deleteContents();

      const el = document.createElement('div');
      el.innerHTML = html;
      const frag = document.createDocumentFragment();
      let node, lastNode;
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      const firstNode = frag.firstChild;
      range.insertNode(frag);

      // Preserve the selection
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        if (selectPastedContent) {
          range.setStartBefore(firstNode);
        } else {
          range.collapse(true);
        }
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }

  restoreSelection(savedSelection) {
    const sel = this.getSelection();
    if (Array.isArray(savedSelection)) {
      sel.removeAllRanges();
      for (let i = 0, len = savedSelection.length; i < len; ++i) {
        sel.addRange(savedSelection[i]);
      }
    } else {
      sel.getRangeAt(0);
    }
  }

  saveSelection() {
    const sel = this.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      const ranges = [];
      for (let i = 0, len = sel.rangeCount; i < len; ++i) {
        ranges.push(sel.getRangeAt(i));
      }
      return ranges;
    }
  }

  setCurrentCursorPosition(chars) {
    if (chars >= 0) {
        const sel = this.getSelection();

        const range = createRange(document.getElementById("test").parentNode, { count: chars });

        if (range) {
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
};
}