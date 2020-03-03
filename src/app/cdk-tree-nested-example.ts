import { ArrayDataSource } from "@angular/cdk/collections";
import { Component } from "@angular/core";
import { NestedTreeControl } from "@angular/cdk/tree";

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

interface Options{ 
  dataSource?: FoodNode[] | FoodNode;
  node?: FoodNode;
  searchTerms?: string
}

const TREE_DATA: FoodNode[] = [
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Vegetables",
    level: 0,
    index: 1,
    children: [
      {
        name: "Green",
        children: [{ name: "Broccoli" }, { name: "Brussels sprouts" }, { name: "Broccoli" }, { name: "Brussels sprouts" }, { name: "Broccoli" }, { name: "Brussels sprouts" },{ name: "Broccoli" }, { name: "Brussels sprouts" },{ name: "Broccoli" }, { name: "Brussels sprouts" },{ name: "Broccoli" }, { name: "Brussels sprouts" },{ name: "Broccoli" }, { name: "Brussels sprouts" },{ name: "Broccoli" }, { name: "Brussels sprouts" },{ name: "Broccoli" }, { name: "Brussels sprouts" },{ name: "Broccoli" }, { name: "Brussels sprouts" },{ name: "Broccoli" }, { name: "Brussels sprouts" }]
      },
      {
        name: "Orange",
        children: [{ name: "Pumpkins" }, { name: "Carrots" }]
      }
    ]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Fruit",
    level: 0,
    index: 0,
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
  // dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: FoodNode) =>{
    node.isVisible = true
    return !!node.children && node.children.length > 0
  };

  isParentNode: boolean = false;
  parentNode: FoodNode[];
  selectedNode: FoodNode;
  selectedNodeIndex: number | undefined = 0;

  onParent(node: FoodNode) {
    this.selectedNode = node;

    if (node.level === 0) {
      this.selectedNodeIndex = node.index;
      
      const isExpanded = this.treeControl.isExpanded(node);
      if(!isExpanded){
        this.treeControl.collapseAll();
        this.treeControl.expand(node);
        this.isParentNode = true;
      }else{
        this.treeControl.collapse(node);
        this.isParentNode = false;
      }
      return;
    }
    let dataSource: FoodNode[] | FoodNode = this.dataSource;
    if(this.selectedNodeIndex){
      dataSource = this.dataSource[this.selectedNodeIndex]
    }
    this.findNode({'dataSource': dataSource,'node': node});
  }

  findNode(options: Options = { 'dataSource': this.dataSource, 'node': this.selectedNode }) {
    const ds = (typeof options.dataSource === 'object')? options.dataSource.children: options.dataSource;
    
    if (ds) {
      ds.forEach((nodeItem: FoodNode) => {
        if(nodeItem === options.node){
          // this.collapseSiblings( ds, options.node);
          this.collapseSiblings( options.dataSource, options.node);
        } else{
          if(nodeItem.children && nodeItem.children.length > 0 && this.selectedNodeIndex){
            this.findNode({ 'dataSource': nodeItem.children, 'node': options.node});
          }
        }
      });
    }

  }

  collapseSiblings(parentNode: FoodNode | FoodNode[], node: FoodNode) {
    let parentNodes = (typeof parentNode === 'object')? parentNode.children: parentNode;
    if (parentNodes) {
      parentNodes.forEach((nodeItem: FoodNode) => {
        if (nodeItem !== node) {
          this.treeControl.collapse(nodeItem);
        }else{
          const isExpanded = this.treeControl.isExpanded(node);
          if(!isExpanded){
            this.treeControl.expand(node);
          }else{
            this.selectedNode = parentNode;
            this.treeControl.collapse(node);
          }
        }
      });
    }
  }

  // filter(searchTerms?: string) {
  //   this.filterNode(this.parentNode, searchTerms);
  // }

  filter(searchTerms: string) {
    console.log(this.isParentNode);
    let parentNode = (this.isParentNode)? this.selectedNode.children: this.dataSource;
    console.log('Parent Node: ', this.parentNode);

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
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
