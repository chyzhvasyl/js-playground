// Given the root of a binary tree, check whether
// it is a mirror of itself (i.e., symmetric around its center).

import { TreeNode } from '../../../../shared';

export const symmetricTree = new TreeNode(1);

symmetricTree.left = new TreeNode(2);
symmetricTree.right = new TreeNode(2);

symmetricTree.left.left = new TreeNode(3);
symmetricTree.left.right = new TreeNode(4);

symmetricTree.right.left = new TreeNode(3);
symmetricTree.right.right = new TreeNode(4);

export const isSymmetric = (root: TreeNode): boolean => {
  let result = true;

  const extract = (...node: (TreeNode | null)[]): void => {
    const treeValues: (number | null)[] = [];
    const newSubLevelSubtree: (TreeNode | null)[] = [];

    for (const n of node) {
      treeValues.push(n?.val ?? null);

      newSubLevelSubtree.push(n?.left ?? null);
      newSubLevelSubtree.push(n?.right ?? null);
    }

    const left = treeValues.slice(0, treeValues.length / 2);
    const right = treeValues.slice(treeValues.length / 2);

    for (let i = 0; i < left.length; i++) {
      if (left[i] !== right[right.length - i - 1]) {
        result = false;

        return;
      }
    }

    if (newSubLevelSubtree.some((_) => _ !== null) && result) {
      extract(...newSubLevelSubtree);
    }
  };

  extract(root?.right, root?.left);

  return result;
};

// Accepted
