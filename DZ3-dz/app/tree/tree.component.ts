import { Node } from './../model/node';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  tree: Node[] = [];
  node1: Node = {
    id: 1,
    name: "root",
    parentId: null,
    children: []
  }

  ngOnInit() {
    this.tree.push(this.node1);
  }

}
