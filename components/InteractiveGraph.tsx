import React, { useEffect, useState } from 'react';
import Graph from 'react-graph-vis';
import {baseCustomers, baseLinks, actions} from '../json/sampleData';
import SelectCustomerMessage from './SelectCustomerMessage';
import { log } from 'console';

interface GraphProps {
  selectedCustomer: Customer | null
}

const GraphVisualization: React.FC<GraphProps> = ({ selectedCustomer }) => {
  let graph: any = {}
  let options = {}
  let events = {}
  
  if ( selectedCustomer){
    console.log(selectedCustomer);
    
    const linkedCustomerIds:Set<string> = new Set();
    
    const links = [...baseLinks]
    
    links.filter(link => link.source === (""+ (selectedCustomer?.id)) || link.target === (""+ (selectedCustomer?.id)));

    links.forEach(link => {
      if (link.source !== link.target){
        if (link.source === (""+selectedCustomer?.id)) {
          linkedCustomerIds.add(link.target);
        } else if (link.target === ""+ (selectedCustomer?.id)) {
          linkedCustomerIds.add(link.source);
        } 
      }
    });
    console.log(linkedCustomerIds);
    let nodes = baseCustomers.filter((customer) => linkedCustomerIds.has(""+ customer.id))
    nodes.push(selectedCustomer)

    console.log(nodes);
    console.log(links);
    
    if ( graph.nodes || graph.edges ){
      graph = {}
    }
    
    graph = {
      nodes: nodes.map(node => ({ ...node, 
        label: node.name.split(" ")[0],
        color: node.id === selectedCustomer.id ? "red" : "lightblue"
      })),
      edges: links.map(link => ({ from: link.source, to: link.target, label: link.label })), // Add label to edges
    };
    options = {
      layout: {
        hierarchical: false,
      },
      edges: {
        color: '#000000',
      },
      nodes: {
        shape: 'circle', // You can customize the shape of the nodes
      },
    };
  
  
    events = {
      select: function (event: any) {
        var { nodes, edges } = event;
      },
    };
  }
  return (
    selectedCustomer && selectedCustomer.name ?
    <div className='flex'>
      <Graph key={selectedCustomer.id} graph={graph} options={options} events={events} style={{ height: '100%', width: '100%' }} />
    </div>
    : <SelectCustomerMessage />
  )
};

export default GraphVisualization;
