import { ArrayDataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ExampleFlatNode } from './cdk-tree.model';
import { CdkTreeService } from './cdk-tree.service';

@Component({
  selector: 'app-cdk-tree',
  templateUrl: './cdk-tree.component.html',
  styleUrls: ['./cdk-tree.component.scss'],
})
export class CdkTreeComponent {
  static selector = 'appCdkTree';
  private treeData: ExampleFlatNode[] = this.cdkTreeService.getTreeData();
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  );

  constructor(private cdkTreeService: CdkTreeService) {}

  dataSource = new ArrayDataSource(this.treeData);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  getParentNode(node: ExampleFlatNode): ExampleFlatNode | null {
    const nodeIndex = this.treeData.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.treeData[i].level === node.level - 1) {
        return this.treeData[i];
      }
    }

    return null;
  }

  shouldRender(node: ExampleFlatNode): boolean | undefined {
    const parent = this.getParentNode(node);
    return !parent || (parent.isExpanded && this.shouldRender(parent));
  }
}
