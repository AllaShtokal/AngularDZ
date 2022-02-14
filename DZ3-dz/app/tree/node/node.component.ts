import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Node } from './../../model/node';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  @Input()
  node!: Node;

  @Output()
  deleteNode: EventEmitter<Node> = new EventEmitter<Node>()

  static idCounter = 2;
  isCreating = false;
  isEditing = false;
  creatingNodeName: string = '';
  editingNodeName: string = '';

  ngOnInit() {
    this.editingNodeName = this.node.name;
  }

  modifyNode(modifyingNode: string) {
    if(modifyingNode !== ''){
      if (this.isCreating){
        this.node.children.push({
          id: NodeComponent.idCounter++,
          name: modifyingNode,
          parentId: this.node.id,
          children: []
        })
        this.isCreating = false;
      } else {
        this.node.name = modifyingNode;
        this.isEditing = false;
      }
    } else {
      alert('Node name cannot be empty');
    }
  } 

  cancelModifyNode() {
    if(this.isCreating){
      this.isCreating = false;
      this.creatingNodeName = '';
    } else {
      this.isEditing = false;
      this.editingNodeName = this.node.name;
    }
  }

  onDeleteNode() {
    this.deleteNode.emit(this.node);
  }

  deleteNodeTest(node: Node){
    if (this.node.id == node.parentId) {
      this.node.children.splice(this.node.children.indexOf(node), 1);
    } else {
      this.deleteNode.emit(this.node);
    }
    
  }

}
