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
  itemCode?:number;
  isVisible?: boolean;
  children?: FoodNode[];
}

interface FoodNodeObject {
  name?: string;
  level?: number;
  index?: number;
  itemCode?:number;
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
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 0,
    children: [
      { itemCode: 5001, name: "Apple", level: 1 },
      { itemCode: 5001, name: "Banana", level: 1 },
      { itemCode: 5001, name: "Fruit loops", level: 1 }
    ]
  },
  {
    name: "Vegetables",
    itemCode: 5001,
    level: 0,
    index: 1,
    children: [
      {
        name: "Green",
        itemCode: 5001,
        level: 1,
        children: [
          {
            name: "Broccoli Children",
            itemCode: 5001,
            level: 2,
            children: [
              {
                name: "Fruit1",
                itemCode: 5001,
                level: 3,
                children: [
                  { itemCode: 5001, name: "Apple", level: 4 },
                  { itemCode: 5001, name: "Banana", level: 4 },
                  { itemCode: 5001, name: "Fruit loops", level: 4 }
                ]
              },
              {
                name: "Fruit2",
                itemCode: 5001,
                level: 3,
                children: [
                  { name: "Apple2", itemCode: 5001, level: 4 },
                  { name: "Banana2", itemCode: 5001, level: 4 },
                  { name: "Fruit loops2", itemCode: 5001, level: 4 }
                ]
              }
            ]
          },
          { itemCode: 5001, name: "Brussels sprouts" },
          { itemCode: 5001, name: "Broccoli" },
          { itemCode: 5001, name: "Brussels sprouts" },
          { itemCode: 5001, name: "Broccoli" },
          { itemCode: 5001, name: "Brussels sprouts" },
          { itemCode: 5001, name: "Broccoli" },
          { itemCode: 5001, name: "Brussels sprouts" },
          { itemCode: 5001, name: "Broccoli" },
          { itemCode: 5001, name: "Brussels sprouts" },
          { itemCode: 5001, name: "Broccoli" },
          { itemCode: 5001, name: "Brussels sprouts" },
          { itemCode: 5001, name: "Broccoli" },
          { itemCode: 5001, name: "Brussels sprouts" },
          { itemCode: 5001, name: "Broccoli" },
          { itemCode: 5001, name: "Brussels sprouts" },
          { itemCode: 5001, name: "Broccoli" },
          { itemCode: 5001, name: "Brussels sprouts" },
          { itemCode: 5001, name: "Broccoli" },
          { itemCode: 5001, name: "Brussels sprouts" },
          { itemCode: 5001, name: "Broccoli" },
          { itemCode: 5001, name: "Brussels sprouts" }
        ]
      },
      {
        itemCode: 5001, name: "Orange",
        children: [{ itemCode: 5001, name: "Pumpkins" }, { itemCode: 5001, name: "Carrots" }]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      },
      {
        name: "Fruit", itemCode: 5001,
        children: [
          { itemCode: 5001, name: "Apple" },
          { itemCode: 5001, name: "Banana" },
          { itemCode: 5001, name: "Fruit loops" }
        ]
      }
    ]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 2,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 3,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 4,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 5,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 6,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 7,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 8,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 9,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 10,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 11,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 12,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 13,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 14,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 15,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 16,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 17,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 18,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 19,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
  },
  {
    name: "Fruit", itemCode: 5001,
    level: 0,
    index: 20,
    children: [{ itemCode: 5001, name: "Apple" }, { itemCode: 5001, name: "Banana" }, { itemCode: 5001, name: "Fruit loops" }]
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
