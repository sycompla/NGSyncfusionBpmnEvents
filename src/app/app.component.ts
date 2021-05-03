import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, BpmnDiagrams, NodeModel, BpmnShapeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: "app-root",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=150 [shape]='shape'></e-node>
          <e-node id='node2' [offsetX]=200 [offsetY]=150 [shape]='shape1'></e-node>
          <e-node id='node3' [offsetX]=300 [offsetY]=150 [shape]='shape2'></e-node>
          <e-node id='node4' [offsetX]=400 [offsetY]=150 [shape]='shape3'></e-node>
          <e-node id='node5' [offsetX]=500 [offsetY]=150 [shape]='shape4'></e-node>
          <e-node id='node6' [offsetX]=600 [offsetY]=150 [shape]='shape5'></e-node>
          <e-node id='node7' [offsetX]=100 [offsetY]=350 [shape]='shape7'></e-node>
          <e-node id='node8' [offsetX]=200 [offsetY]=350 [shape]='shape8'></e-node>
          <e-node id='node9' [offsetX]=300 [offsetY]=350 [shape]='shape9'></e-node>
          <e-node id='node10' [offsetX]=400 [offsetY]=350 [shape]='shape10'></e-node>
          <e-node id='node11' [offsetX]=500 [offsetY]=350 [shape]='shape11'></e-node>
          <e-node id='node12' [offsetX]=600 [offsetY]=350 [shape]='shape12'></e-node>
        </e-nodes>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram: DiagramComponent;
  public shape: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'Start'
    }
  };
  public shape1: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'NonInterruptingStart'
    }
  };
  public shape2: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'Intermediate'
    }
  };
  public shape3: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'NonInterruptingIntermediate'
    }
  };
  public shape4: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'ThrowingIntermediate'
    }
  };
  public shape5: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'End'
    }
  };
  public shape6: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'End'
    }
  };
  public shape7: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'Start',
      trigger: "Message"
    }
  };
  public shape8: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'NonInterruptingStart'
      , trigger: 'Timer'
    }
  };
  public shape9: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'Intermediate',
      trigger: "Conditional"
    }
  };
  public shape10: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'NonInterruptingIntermediate',
      trigger: 'Signal'
    }
  };
  public shape11: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'ThrowingIntermediate',
      trigger: 'Link'
    }
  };
  public shape12: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'End',
      trigger: 'Cancel'
    }
  };
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  }
}
