//Day 22_Algorithm

// Algorithm: Sorting, Searching, and Graph Traversal

// Sorting Algorithm: Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Searching Algorithm: Linear Search
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  // Graph Traversal: Depth-First Search (DFS)
  class Graph {
    constructor() {
      this.vertices = [];
      this.edges = {};
    }
    
    addVertex(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];
    }
    
    addEdge(source, destination) {
      this.edges[source].push(destination);
      this.edges[destination].push(source);
    }
    
    dfs(startingVertex) {
      const visited = new Set();
      const traversal = [];
      
      this._dfsHelper(startingVertex, visited, traversal);
      
      return traversal;
    }
    
    _dfsHelper(vertex, visited, traversal) {
      visited.add(vertex);
      traversal.push(vertex);
      
      const neighbors = this.edges[vertex];
      
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this._dfsHelper(neighbor, visited, traversal);
        }
      }
    }
  }
  
  // Usage example
  const numbers = [8, 3, 1, 5, 9, 2, 7, 4, 6];
  console.log('Original Array:', numbers);
  
  const sortedArray = quickSort(numbers);
  console.log('Sorted Array:', sortedArray);
  
  const target = 5;
  const targetIndex = linearSearch(sortedArray, target);
  console.log(`Index of ${target}:`, targetIndex);
  
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'E');
  
  const traversal = graph.dfs('A');
  console.log('DFS Traversal:', traversal);
  