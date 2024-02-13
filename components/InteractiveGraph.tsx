import React, { useEffect, useState } from 'react';
import Graph from 'react-graph-vis';
import {baseCustomers, baseLinks} from '../json/sampleData';

interface GraphProps {
  selectedCustomer: Customer | null
}


const GraphVisualization: React.FC<GraphProps> = ({ selectedCustomer }) => {
  const [graph, setGraph ] = useState({})
  const [options, setOptions ] = useState({})
  const [events, setEvents ] = useState({})
  
  useEffect(() => {
    if ( selectedCustomer){
      const linkedCustomerIds:string[] = [];
      const links = [...baseLinks]
  
      links.filter(link => link.source === ""+ (selectedCustomer?.id) || link.target === ""+ (selectedCustomer?.id));
      links.forEach(link => {
        if (link.source !== link.target){
          if (link.source === (""+selectedCustomer?.id)) {
            linkedCustomerIds.push(link.target);
          } else if (link.target === ""+ (selectedCustomer?.id)) {
            linkedCustomerIds.push(link.source);
          } 
        }
      });
      
      const nodes = baseCustomers.filter(customer => linkedCustomerIds.includes(""+customer.id));
      console.log(nodes);
      console.log(links);
      
      
      const graph = {
        nodes: nodes.map(node => ({ ...node, label: node.name })), // Add label to nodes
        edges: links.map(link => ({ from: link.source, to: link.target, label: link.label })), // Add label to edges
      };
      const options = {
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
    
    
      const events = {
        select: function (event: any) {
          var { nodes, edges } = event;
        },
      };
      setGraph(graph)
      setOptions(options)
      setEvents(events)
    }
    
  }, [selectedCustomer])

  
  return (
    selectedCustomer ?
    <div>
      {selectedCustomer.name}
      <Graph graph={graph} options={options} events={events} style={{ height: '100%', width: '100%' }} />
    </div>
      
      : <span>Select Customer</span>
  )
};

export default GraphVisualization;
