import { ArrayDataSource } from "@angular/cdk/collections";
import { Component } from "@angular/core";
import { NestedTreeControl } from "@angular/cdk/tree";
import { ScrollingModule } from "@angular/cdk/scrolling";

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name?: string;
  level?: number;
  index?: number;
  isVisible?: boolean;
  children?: FoodNode[];
}

interface FoodNodeObject {
  name?: string;
  level?: number;
  index?: number;
  isVisible?: boolean;
  children?: FoodNodeObject;
}

interface Options {
  dataSource?: FoodNode;
  node?: FoodNode;
  searchTerms?: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [
      { name: "Apple", level: 1 },
      { name: "Banana", level: 1 },
      { name: "Fruit loops", level: 1 }
    ]
  },
  {
    name: "Vegetables",
    level: 0,
    index: 1,
    children: [
      {
        name: "Green",
        level: 1,
        children: [
          {
            name: "Broccoli Children",
            level: 2,
            children: [
              {
                name: "Fruit1",
                level: 3,
                children: [
                  { name: "Apple", level: 4 },
                  { name: "Banana", level: 4 },
                  { name: "Fruit loops", level: 4 }
                ]
              },
              {
                name: "Fruit2",
                level: 3,
                children: [
                  { name: "Apple2", level: 4 },
                  { name: "Banana2", level: 4 },
                  { name: "Fruit loops2", level: 4 }
                ]
              }
            ]
          },
          { name: "Brussels sprouts" },
          { name: "Broccoli" },
          { name: "Brussels sprouts" },
          { name: "Broccoli" },
          { name: "Brussels sprouts" },
          { name: "Broccoli" },
          { name: "Brussels sprouts" },
          { name: "Broccoli" },
          { name: "Brussels sprouts" },
          { name: "Broccoli" },
          { name: "Brussels sprouts" },
          { name: "Broccoli" },
          { name: "Brussels sprouts" },
          { name: "Broccoli" },
          { name: "Brussels sprouts" },
          { name: "Broccoli" },
          { name: "Brussels sprouts" },
          { name: "Broccoli" },
          { name: "Brussels sprouts" },
          { name: "Broccoli" },
          { name: "Brussels sprouts" }
        ]
      },
      {
        name: "Orange",
        children: [{ name: "Pumpkins" }, { name: "Carrots" }]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit",
        children: [
          { name: "Apple" },
          { name: "Banana" },
          { name: "Fruit loops" }
        ]
      }
    ]
  },
  {
    name: "Fruit",
    level: 0,
    index: 2,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 3,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 4,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 5,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 6,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 7,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 8,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 9,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 10,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 11,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 12,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 13,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 14,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 15,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 16,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 17,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 18,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 19,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 20,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  }
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: "cdk-tree-nested-example",
  templateUrl: "cdk-tree-nested-example.html",
  styleUrls: ["cdk-tree-nested-example.css"]
})
export class CdkTreeNestedExample {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource: FoodNode[] = TREE_DATA;

  hasChild = (_: number, node: FoodNode) => {
    node.isVisible = true;
    return !!node.children && node.children.length > 0;
  };

  searchTermsText: string;
  isParentNode: boolean = false;
  selectedNode: FoodNode;
  selectedNodeIndex: number | undefined = 0;
  bredcrumbs: Array<T> = [];

  creatingBreadCrumbs(node: FoodNode | null) {
    if(!node){
      this.bredcrumbs = [];
      console.log("Checking undefined: ", this.bredcrumbs);
      return;
    }
    this.bredcrumbs.slice(0, node.level);
    this.bredcrumbs[node.level] = node.name;
    console.log("Checking: ", this.bredcrumbs);
  }

  onParent(node: FoodNode) {
    this.selectedNode = node;
    
    if (node.level === 0) {
      this.selectedNodeIndex = node.index;
      
      const isExpanded = this.treeControl.isExpanded(node);
      if (!isExpanded) {
        this.treeControl.collapseAll();
        this.treeControl.expand(node);
        this.isParentNode = true;
        this.creatingBreadCrumbs(node);
      } else {
        this.treeControl.collapse(node);
        this.isParentNode = false;
        if (!this.searchTermsText) {
          this.filter("");
        }
        this.creatingBreadCrumbs(null);
      }
      return;
    }
    
    if (this.selectedNodeIndex) {
      let dataSource: FoodNode = this.dataSource[this.selectedNodeIndex];
      this.findNode({ dataSource: dataSource, node: node });
    }
  }

  findNode(options: Options) {
    const ds = options.dataSource;

    if (ds && ds.children) {
      ds.children.forEach((nodeItem: FoodNode) => {
        if (nodeItem === options.node) {
          this.collapseSiblings(ds, options.node);
        } else {
          if (
            nodeItem.children &&
            nodeItem.children.length > 0 &&
            this.selectedNodeIndex
          ) {
            this.findNode({
              dataSource: nodeItem,
              node: options.node
            });
          }
        }
      });
    }
  }

  collapseSiblings(parentNode: FoodNode, node: FoodNode) {
    let parentNodes = parentNode.children;
    if (parentNodes) {
      parentNodes.forEach((nodeItem: FoodNode) => {
        if (nodeItem !== node) {
          this.treeControl.collapseDescendants(nodeItem);
        } else {
          const isExpanded = this.treeControl.isExpanded(node);
          if (!isExpanded) {
            this.treeControl.expand(node);
            // this.creatingBreadCrumbs(node, true);
          } else {
            this.selectedNode = parentNode;
            this.treeControl.collapseDescendants(node);
            if (!this.searchTermsText) {
              this.filter("");
            }
          }
        }
      });
    }
  }

  filter(searchTerms: string) {
    this.searchTermsText = searchTerms;
    let parentNode = this.isParentNode
      ? this.selectedNode.children
      : this.dataSource;

    if (parentNode) {
      parentNode.forEach((nodeItem: FoodNode) => {
        nodeItem.isVisible = true;
        const isFind =
          nodeItem.name
            .toLocaleLowerCase()
            .indexOf(searchTerms.toLocaleLowerCase()) > -1;

        if (!isFind && searchTerms.length > 0) {
          nodeItem.isVisible = false;
        }
      });
    }
  }

  // testRadio(radio){
  //   console.log(radio);
  // }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
